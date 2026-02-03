import { Injectable } from '@angular/core';

export interface ColorStop {
  color: string;
  position: number; // 0-100
  id: string;
}

export type GradientType = 'linear' | 'radial' | 'conic';

export interface GradientConfig {
  type: GradientType;
  angle: number; // For linear (0-360 degrees)
  stops: ColorStop[];
  repeating: boolean;
}

export interface GradientPreset {
  name: string;
  config: GradientConfig;
}

@Injectable({
  providedIn: 'root'
})
export class GradientService {

  generateId(): string {
    return `stop-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  createDefaultGradient(): GradientConfig {
    return {
      type: 'linear',
      angle: 90,
      stops: [
        { color: '#667eea', position: 0, id: this.generateId() },
        { color: '#764ba2', position: 100, id: this.generateId() }
      ],
      repeating: false
    };
  }

  addColorStop(gradient: GradientConfig, position: number = 50): GradientConfig {
    // Find the two stops that surround this position
    const sortedStops = [...gradient.stops].sort((a, b) => a.position - b.position);
    
    let beforeStop = sortedStops[0];
    let afterStop = sortedStops[sortedStops.length - 1];
    
    for (let i = 0; i < sortedStops.length - 1; i++) {
      if (sortedStops[i].position <= position && sortedStops[i + 1].position >= position) {
        beforeStop = sortedStops[i];
        afterStop = sortedStops[i + 1];
        break;
      }
    }

    // Interpolate color between the two stops
    const ratio = (position - beforeStop.position) / (afterStop.position - beforeStop.position);
    const interpolatedColor = this.interpolateColors(beforeStop.color, afterStop.color, ratio);

    const newStop: ColorStop = {
      color: interpolatedColor,
      position,
      id: this.generateId()
    };

    return {
      ...gradient,
      stops: [...gradient.stops, newStop].sort((a, b) => a.position - b.position)
    };
  }

  removeColorStop(gradient: GradientConfig, stopId: string): GradientConfig {
    if (gradient.stops.length <= 2) {
      // Don't allow removing if only 2 stops remain
      return gradient;
    }

    return {
      ...gradient,
      stops: gradient.stops.filter(stop => stop.id !== stopId)
    };
  }

  updateColorStop(gradient: GradientConfig, stopId: string, updates: Partial<ColorStop>): GradientConfig {
    return {
      ...gradient,
      stops: gradient.stops.map(stop =>
        stop.id === stopId ? { ...stop, ...updates } : stop
      ).sort((a, b) => a.position - b.position)
    };
  }

  generateCSS(gradient: GradientConfig): string {
    const sortedStops = [...gradient.stops].sort((a, b) => a.position - b.position);
    const stopsString = sortedStops
      .map(stop => `${stop.color} ${stop.position}%`)
      .join(', ');

    const prefix = gradient.repeating ? 'repeating-' : '';

    switch (gradient.type) {
      case 'linear':
        return `${prefix}linear-gradient(${gradient.angle}deg, ${stopsString})`;
      
      case 'radial':
        return `${prefix}radial-gradient(circle, ${stopsString})`;
      
      case 'conic':
        return `conic-gradient(from ${gradient.angle}deg, ${stopsString})`;
      
      default:
        return `linear-gradient(${gradient.angle}deg, ${stopsString})`;
    }
  }

  interpolateColors(color1: string, color2: string, ratio: number): string {
    // Convert hex to RGB
    const hex1 = color1.replace('#', '');
    const hex2 = color2.replace('#', '');

    const r1 = parseInt(hex1.substring(0, 2), 16);
    const g1 = parseInt(hex1.substring(2, 4), 16);
    const b1 = parseInt(hex1.substring(4, 6), 16);

    const r2 = parseInt(hex2.substring(0, 2), 16);
    const g2 = parseInt(hex2.substring(2, 4), 16);
    const b2 = parseInt(hex2.substring(4, 6), 16);

    // Interpolate
    const r = Math.round(r1 + (r2 - r1) * ratio);
    const g = Math.round(g1 + (g2 - g1) * ratio);
    const b = Math.round(b1 + (b2 - b1) * ratio);

    // Convert back to hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  getPresets(): GradientPreset[] {
    return [
      {
        name: 'Sunset',
        config: {
          type: 'linear',
          angle: 135,
          stops: [
            { color: '#ff6b6b', position: 0, id: this.generateId() },
            { color: '#feca57', position: 50, id: this.generateId() },
            { color: '#ee5a6f', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Ocean',
        config: {
          type: 'linear',
          angle: 180,
          stops: [
            { color: '#2E3192', position: 0, id: this.generateId() },
            { color: '#1BFFFF', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Neon',
        config: {
          type: 'linear',
          angle: 45,
          stops: [
            { color: '#fa71cd', position: 0, id: this.generateId() },
            { color: '#c471f5', position: 50, id: this.generateId() },
            { color: '#6a00ff', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Forest',
        config: {
          type: 'linear',
          angle: 120,
          stops: [
            { color: '#134e5e', position: 0, id: this.generateId() },
            { color: '#71b280', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Pastel',
        config: {
          type: 'linear',
          angle: 90,
          stops: [
            { color: '#ffecd2', position: 0, id: this.generateId() },
            { color: '#fcb69f', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Purple Bliss',
        config: {
          type: 'linear',
          angle: 135,
          stops: [
            { color: '#360033', position: 0, id: this.generateId() },
            { color: '#0b8793', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Fire',
        config: {
          type: 'radial',
          angle: 0,
          stops: [
            { color: '#ff9a56', position: 0, id: this.generateId() },
            { color: '#ff4e50', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Cool Blues',
        config: {
          type: 'linear',
          angle: 45,
          stops: [
            { color: '#2196F3', position: 0, id: this.generateId() },
            { color: '#21CBF3', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Rainbow',
        config: {
          type: 'conic',
          angle: 0,
          stops: [
            { color: '#ff0000', position: 0, id: this.generateId() },
            { color: '#ffff00', position: 17, id: this.generateId() },
            { color: '#00ff00', position: 33, id: this.generateId() },
            { color: '#00ffff', position: 50, id: this.generateId() },
            { color: '#0000ff', position: 67, id: this.generateId() },
            { color: '#ff00ff', position: 83, id: this.generateId() },
            { color: '#ff0000', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      },
      {
        name: 'Warm Flame',
        config: {
          type: 'linear',
          angle: 45,
          stops: [
            { color: '#ff9a56', position: 0, id: this.generateId() },
            { color: '#ff5e62', position: 50, id: this.generateId() },
            { color: '#ff0844', position: 100, id: this.generateId() }
          ],
          repeating: false
        }
      }
    ];
  }

  randomGradient(): GradientConfig {
    const types: GradientType[] = ['linear', 'radial', 'conic'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    const randomAngle = Math.floor(Math.random() * 360);
    const stopCount = Math.floor(Math.random() * 3) + 2; // 2-4 stops

    const stops: ColorStop[] = [];
    for (let i = 0; i < stopCount; i++) {
      const position = (100 / (stopCount - 1)) * i;
      const color = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
      stops.push({
        color,
        position: Math.round(position),
        id: this.generateId()
      });
    }

    return {
      type: randomType,
      angle: randomAngle,
      stops,
      repeating: false
    };
  }

  exportAsJSON(gradient: GradientConfig): string {
    return JSON.stringify(gradient, null, 2);
  }

  importFromJSON(json: string): GradientConfig | null {
    try {
      const parsed = JSON.parse(json);
      // Validate basic structure
      if (!parsed.type || !parsed.stops || !Array.isArray(parsed.stops)) {
        return null;
      }
      return parsed as GradientConfig;
    } catch {
      return null;
    }
  }
}
