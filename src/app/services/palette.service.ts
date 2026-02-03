import { Injectable, inject } from '@angular/core';
import { ColorService } from './color.service';

export interface PaletteColor {
  hex: string;
  rgb: string;
  hsl: string;
  locked: boolean;
}

export type PaletteSize = 3 | 5 | 7;
export type PaletteAlgorithm = 'analogous' | 'complementary' | 'triadic' | 'tetradic' | 'monochromatic' | 'random';

@Injectable({
  providedIn: 'root'
})
export class PaletteService {
  private colorService = inject(ColorService);

  /**
   * Generate a color palette based on algorithm and size
   */
  generatePalette(
    baseColor: string,
    algorithm: PaletteAlgorithm,
    size: PaletteSize
  ): PaletteColor[] {
    const rgb = this.colorService.parseColor(baseColor);
    if (!rgb) {
      return this.generateRandomPalette(size);
    }

    const hsl = this.colorService.rgbToHsl(rgb.r, rgb.g, rgb.b);

    switch (algorithm) {
      case 'analogous':
        return this.generateAnalogous(hsl, size);
      case 'complementary':
        return this.generateComplementary(hsl, size);
      case 'triadic':
        return this.generateTriadic(hsl, size);
      case 'tetradic':
        return this.generateTetradic(hsl, size);
      case 'monochromatic':
        return this.generateMonochromatic(hsl, size);
      case 'random':
        return this.generateRandomPalette(size);
      default:
        return this.generateRandomPalette(size);
    }
  }

  /**
   * Generate random color palette
   */
  generateRandomPalette(size: PaletteSize): PaletteColor[] {
    const colors: PaletteColor[] = [];
    for (let i = 0; i < size; i++) {
      const hue = Math.floor(Math.random() * 360);
      const sat = 50 + Math.floor(Math.random() * 50);
      const light = 40 + Math.floor(Math.random() * 40);
      colors.push(this.hslToColorFormat({ h: hue, s: sat, l: light }));
    }
    return colors;
  }

  /**
   * Generate analogous colors (adjacent on color wheel)
   */
  private generateAnalogous(hsl: { h: number; s: number; l: number }, size: PaletteSize): PaletteColor[] {
    const colors: PaletteColor[] = [];
    const step = 30;
    const offset = Math.floor(size / 2);

    for (let i = 0; i < size; i++) {
      const hue = (hsl.h + (i - offset) * step + 360) % 360;
      colors.push(this.hslToColorFormat({ h: hue, s: hsl.s, l: hsl.l }));
    }
    return colors;
  }

  /**
   * Generate complementary colors (opposite on color wheel)
   */
  private generateComplementary(hsl: { h: number; s: number; l: number }, size: PaletteSize): PaletteColor[] {
    const colors: PaletteColor[] = [];
    colors.push(this.hslToColorFormat(hsl));

    const complementHue = (hsl.h + 180) % 360;
    colors.push(this.hslToColorFormat({ h: complementHue, s: hsl.s, l: hsl.l }));

    // Fill remaining with variations
    while (colors.length < size) {
      const variation = colors.length % 2 === 0 ? hsl.h : complementHue;
      const lightness = 40 + (colors.length * 10);
      colors.push(this.hslToColorFormat({ h: variation, s: hsl.s, l: lightness }));
    }

    return colors;
  }

  /**
   * Generate triadic colors (120° apart on color wheel)
   */
  private generateTriadic(hsl: { h: number; s: number; l: number }, size: PaletteSize): PaletteColor[] {
    const colors: PaletteColor[] = [];
    const baseHues = [hsl.h, (hsl.h + 120) % 360, (hsl.h + 240) % 360];

    for (let i = 0; i < size; i++) {
      const hue = baseHues[i % 3];
      const lightness = hsl.l + (Math.floor(i / 3) * 10 - 10);
      colors.push(this.hslToColorFormat({ h: hue, s: hsl.s, l: Math.max(20, Math.min(80, lightness)) }));
    }

    return colors;
  }

  /**
   * Generate tetradic colors (90° apart on color wheel)
   */
  private generateTetradic(hsl: { h: number; s: number; l: number }, size: PaletteSize): PaletteColor[] {
    const colors: PaletteColor[] = [];
    const baseHues = [hsl.h, (hsl.h + 90) % 360, (hsl.h + 180) % 360, (hsl.h + 270) % 360];

    for (let i = 0; i < size; i++) {
      const hue = baseHues[i % 4];
      const lightness = hsl.l + (Math.floor(i / 4) * 10 - 5);
      colors.push(this.hslToColorFormat({ h: hue, s: hsl.s, l: Math.max(20, Math.min(80, lightness)) }));
    }

    return colors;
  }

  /**
   * Generate monochromatic colors (same hue, different lightness)
   */
  private generateMonochromatic(hsl: { h: number; s: number; l: number }, size: PaletteSize): PaletteColor[] {
    const colors: PaletteColor[] = [];
    const lightnessStep = 60 / (size - 1);

    for (let i = 0; i < size; i++) {
      const lightness = 20 + (i * lightnessStep);
      colors.push(this.hslToColorFormat({ h: hsl.h, s: hsl.s, l: lightness }));
    }

    return colors;
  }

  /**
   * Extract colors from image using Canvas API
   */
  extractPaletteFromImage(imageData: ImageData, size: PaletteSize): PaletteColor[] {
    const pixels = imageData.data;
    const colorMap = new Map<string, number>();

    // Sample pixels (every 10th pixel for performance)
    for (let i = 0; i < pixels.length; i += 40) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];
      const key = `${r},${g},${b}`;
      colorMap.set(key, (colorMap.get(key) || 0) + 1);
    }

    // Sort by frequency and get top colors
    const sortedColors = Array.from(colorMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, size * 3);

    // Use k-means clustering to get dominant colors
    const dominantColors = this.kMeansClustering(
      sortedColors.map(([rgb]) => {
        const [r, g, b] = rgb.split(',').map(Number);
        return { r, g, b };
      }),
      size
    );

    return dominantColors.map(rgb => {
      const formats = this.colorService.getAllFormats(rgb.r, rgb.g, rgb.b);
      return {
        hex: formats.hex,
        rgb: formats.rgb,
        hsl: formats.hsl,
        locked: false
      };
    });
  }

  /**
   * K-means clustering for color quantization
   */
  private kMeansClustering(colors: { r: number; g: number; b: number }[], k: number): { r: number; g: number; b: number }[] {
    if (colors.length <= k) {
      return colors.slice(0, k);
    }

    // Initialize centroids randomly
    let centroids = colors.slice(0, k);
    let iterations = 0;
    const maxIterations = 10;

    while (iterations < maxIterations) {
      // Assign colors to nearest centroid
      const clusters: { r: number; g: number; b: number }[][] = Array(k).fill(0).map(() => []);

      colors.forEach(color => {
        let minDist = Infinity;
        let clusterIndex = 0;

        centroids.forEach((centroid, i) => {
          const dist = this.colorDistance(color, centroid);
          if (dist < minDist) {
            minDist = dist;
            clusterIndex = i;
          }
        });

        clusters[clusterIndex].push(color);
      });

      // Calculate new centroids
      const newCentroids = clusters.map(cluster => {
        if (cluster.length === 0) {
          return centroids[0];
        }

        const sum = cluster.reduce(
          (acc, color) => ({
            r: acc.r + color.r,
            g: acc.g + color.g,
            b: acc.b + color.b
          }),
          { r: 0, g: 0, b: 0 }
        );

        return {
          r: Math.round(sum.r / cluster.length),
          g: Math.round(sum.g / cluster.length),
          b: Math.round(sum.b / cluster.length)
        };
      });

      centroids = newCentroids;
      iterations++;
    }

    return centroids;
  }

  /**
   * Calculate color distance (Euclidean distance in RGB space)
   */
  private colorDistance(c1: { r: number; g: number; b: number }, c2: { r: number; g: number; b: number }): number {
    return Math.sqrt(
      Math.pow(c1.r - c2.r, 2) +
      Math.pow(c1.g - c2.g, 2) +
      Math.pow(c1.b - c2.b, 2)
    );
  }

  /**
   * Convert HSL to PaletteColor format
   */
  private hslToColorFormat(hsl: { h: number; s: number; l: number }): PaletteColor {
    const rgb = this.colorService.hslToRgb(hsl.h, hsl.s, hsl.l);
    const formats = this.colorService.getAllFormats(rgb.r, rgb.g, rgb.b);
    return {
      hex: formats.hex,
      rgb: formats.rgb,
      hsl: formats.hsl,
      locked: false
    };
  }

  /**
   * Export palette as CSS variables
   */
  exportAsCSS(palette: PaletteColor[], paletteName: string = 'palette'): string {
    let css = `:root {\n`;
    palette.forEach((color, index) => {
      css += `  --${paletteName}-${index + 1}: ${color.hex};\n`;
    });
    css += `}`;
    return css;
  }

  /**
   * Export palette as Tailwind config
   */
  exportAsTailwind(palette: PaletteColor[], paletteName: string = 'custom'): string {
    let config = `colors: {\n  ${paletteName}: {\n`;
    const shades = palette.length === 3 ? [300, 500, 700] : 
                   palette.length === 5 ? [100, 300, 500, 700, 900] :
                   [50, 100, 200, 400, 500, 600, 800, 900, 950];
    
    palette.forEach((color, index) => {
      const shade = shades[index] || (index + 1) * 100;
      config += `    ${shade}: '${color.hex}',\n`;
    });
    config += `  }\n}`;
    return config;
  }
}
