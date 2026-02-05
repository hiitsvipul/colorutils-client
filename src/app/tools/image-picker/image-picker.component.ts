import { Component, OnInit, inject, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorService, ColorFormats } from '../../services/color.service';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-image-picker',
  standalone: true,
  imports: [CommonModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-slate-950 py-8">
      <!-- Ad Placeholder Top -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4 mb-6">
          <app-ad-placeholder size="banner" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <!-- Header Section -->
        <article class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Image Color Picker</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Upload an image and click anywhere on it to pick a color. Get precise color values from any image.
          </p>
        </article>

        <!-- Main Tool Card -->
        <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Upload & Pick</h2>

          <!-- Upload Area -->
          @if (!uploadedImage()) {
            <div class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-12 text-center hover:border-primary-500 dark:hover:border-primary-500 transition-colors">
              <input
                #fileInput
                type="file"
                accept="image/*"
                (change)="onFileSelected($event)"
                class="hidden"
              />
              <svg class="w-16 h-16 mx-auto mb-4 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <button
                (click)="fileInput.click()"
                class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Choose Image
              </button>
              <p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
                or drag and drop an image here
              </p>
            </div>
          }

          <!-- Image Display & Picker -->
          @if (uploadedImage()) {
            <div class="space-y-6 animate-slide-up">
              <!-- Controls -->
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-4">
                  <span class="text-sm text-gray-600 dark:text-gray-400">
                    Zoom: {{ zoom() }}x
                  </span>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.5"
                    [value]="zoom()"
                    (input)="onZoomChange($event)"
                    class="w-32"
                  />
                </div>
                <button
                  (click)="resetImage()"
                  class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  Upload New Image
                </button>
              </div>

              <!-- Canvas Container -->
              <div class="relative overflow-auto max-h-[600px] border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 scrollbar-thin">
                <canvas
                  #canvas
                  (click)="pickColorFromCanvas($event)"
                  (mousemove)="onCanvasMouseMove($event)"
                  class="cursor-crosshair transition-opacity duration-150"
                  style="image-rendering: pixelated;"
                ></canvas>

                <!-- Magnifier -->
                @if (showMagnifier() && mousePos()) {
                  <div
                    class="absolute pointer-events-none border-4 border-white shadow-xl rounded-full overflow-hidden"
                    [style.left.px]="mousePos()!.x + 20"
                    [style.top.px]="mousePos()!.y + 20"
                    [style.width.px]="100"
                    [style.height.px]="100"
                  >
                    <canvas #magnifierCanvas width="100" height="100"></canvas>
                  </div>
                }
              </div>

              <!-- Picked Color Display -->
              @if (pickedColor()) {
                <div>
                  <!-- Color Preview -->
                  <div class="mb-6">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Picked Color</h3>
                    <div 
                      class="w-full h-24 rounded-lg shadow-md border-4 border-gray-200 dark:border-gray-700"
                      [style.background-color]="pickedColor()!.hex"
                    ></div>
                  </div>

                  <!-- Color Values -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">HEX</span>
                        <button
                          (click)="copyToClipboard(pickedColor()!.hex, 'HEX')"
                          class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                      <code class="text-lg font-mono text-gray-900 dark:text-white">{{ pickedColor()!.hex }}</code>
                    </div>

                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">RGB</span>
                        <button
                          (click)="copyToClipboard(pickedColor()!.rgb, 'RGB')"
                          class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                      <code class="text-lg font-mono text-gray-900 dark:text-white">{{ pickedColor()!.rgb }}</code>
                    </div>

                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">HSL</span>
                        <button
                          (click)="copyToClipboard(pickedColor()!.hsl, 'HSL')"
                          class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                      <code class="text-lg font-mono text-gray-900 dark:text-white">{{ pickedColor()!.hsl }}</code>
                    </div>

                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-sm font-medium text-gray-600 dark:text-gray-400">CMYK</span>
                        <button
                          (click)="copyToClipboard(pickedColor()!.cmyk, 'CMYK')"
                          class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                        >
                          Copy
                        </button>
                      </div>
                      <code class="text-lg font-mono text-gray-900 dark:text-white">{{ pickedColor()!.cmyk }}</code>
                    </div>
                  </div>
                </div>
              }
            </div>
          }
        </section>
      </div>

      <!-- Ad Placeholder Bottom -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4">
          <app-ad-placeholder size="rectangle" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ImagePickerComponent implements OnInit {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('magnifierCanvas') magnifierCanvasRef!: ElementRef<HTMLCanvasElement>;

  private colorService = inject(ColorService);
  private toastService = inject(ToastService);
  private seoService = inject(SeoService);

  uploadedImage = signal<HTMLImageElement | null>(null);
  pickedColor = signal<ColorFormats | null>(null);
  zoom = signal(1);
  showMagnifier = signal(false);
  mousePos = signal<{ x: number; y: number } | null>(null);
  private zoomAnimationFrame: number | null = null;

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Image Color Picker - Pick Colors from Images | Color Utils',
      description: 'Upload an image and pick colors from it with precision. Get color values in HEX, RGB, HSL, and CMYK formats.',
      keywords: 'image color picker, color from image, eyedropper tool, color extractor, image color tool',
      author: 'Color Utils',
      ogUrl: 'https://colorutils.com/image-picker',
      canonical: 'https://colorutils.com/image-picker'
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.toastService.error('Please select a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        this.uploadedImage.set(img);
        this.pickedColor.set(null);
        // Use requestAnimationFrame to ensure canvas is rendered
        requestAnimationFrame(() => {
          requestAnimationFrame(() => this.drawImage());
        });
        this.toastService.success('Image uploaded successfully!');
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  drawImage(): void {
    const canvas = this.canvasRef?.nativeElement;
    const img = this.uploadedImage();
    
    if (!canvas || !img) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = this.zoom();
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;

    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }

  onZoomChange(event: Event): void {
    const value = parseFloat((event.target as HTMLInputElement).value);
    this.zoom.set(value);
    // Use requestAnimationFrame for smooth rendering
    if (this.zoomAnimationFrame) {
      cancelAnimationFrame(this.zoomAnimationFrame);
    }
    this.zoomAnimationFrame = requestAnimationFrame(() => {
      this.drawImage();
    });
  }

  pickColorFromCanvas(event: MouseEvent): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const pixel = ctx.getImageData(x, y, 1, 1).data;
    const colorFormats = this.colorService.getAllFormats(pixel[0], pixel[1], pixel[2]);
    
    this.pickedColor.set(colorFormats);
    this.toastService.success('Color picked!');
  }

  onCanvasMouseMove(event: MouseEvent): void {
    const canvas = this.canvasRef.nativeElement;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    this.mousePos.set({ x, y });
    this.showMagnifier.set(true);
    this.drawMagnifier(x, y);
  }

  drawMagnifier(x: number, y: number): void {
    const canvas = this.canvasRef?.nativeElement;
    const magnifierCanvas = this.magnifierCanvasRef?.nativeElement;
    
    if (!canvas || !magnifierCanvas) return;

    const ctx = canvas.getContext('2d');
    const magnifierCtx = magnifierCanvas.getContext('2d');
    
    if (!ctx || !magnifierCtx) return;

    const magnifierSize = 100;
    const sourceSize = 20;
    
    magnifierCtx.imageSmoothingEnabled = false;
    
    try {
      const imageData = ctx.getImageData(
        Math.max(0, x - sourceSize / 2),
        Math.max(0, y - sourceSize / 2),
        sourceSize,
        sourceSize
      );
      
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = sourceSize;
      tempCanvas.height = sourceSize;
      const tempCtx = tempCanvas.getContext('2d');
      if (tempCtx) {
        tempCtx.putImageData(imageData, 0, 0);
        magnifierCtx.drawImage(tempCanvas, 0, 0, magnifierSize, magnifierSize);
      }
    } catch (error) {
      // Ignore errors when cursor is outside canvas bounds
    }
  }

  resetImage(): void {
    this.uploadedImage.set(null);
    this.pickedColor.set(null);
    this.zoom.set(1);
    this.showMagnifier.set(false);
    this.mousePos.set(null);
  }

  async copyToClipboard(value: string, format: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      this.toastService.success(`${format} copied!`);
    } catch (error) {
      this.toastService.error('Failed to copy');
    }
  }
}
