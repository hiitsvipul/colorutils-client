import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorService, ColorFormats } from '../../services/color.service';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-converter',
  standalone: true,
  imports: [CommonModule, FormsModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-slate-950 py-8">
      <!-- Ad Placeholder Top -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4 mb-6">
          <app-ad-placeholder size="banner"></app-ad-placeholder>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <!-- Header Section -->
        <article class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Color Converter</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Convert colors between different formats: HEX, RGB, and HSL. Enter any color value to see all formats.
          </p>
        </article>

        <!-- Main Tool Card -->
        <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Convert Color</h2>

          <!-- Input Section -->
          <div class="mb-8">
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Enter Color Value
            </label>
            <div class="flex gap-3">
              <input
                type="text"
                [(ngModel)]="inputValue"
                (input)="onInputChange()"
                placeholder="e.g., #FF5733, rgb(255, 87, 51), hsl(9, 100%, 60%)"
                class="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
              />
              <button
                (click)="convertColor()"
                class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Convert
              </button>
            </div>
            @if (error()) {
              <p class="mt-2 text-sm text-red-600 dark:text-red-400">{{ error() }}</p>
            }
          </div>

          <!-- Format Examples -->
          <div class="mb-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 class="text-sm font-semibold text-blue-900 dark:text-blue-400 mb-2">Supported Formats:</h3>
            <div class="space-y-1 text-sm text-blue-800 dark:text-blue-300">
              <p><strong>HEX:</strong> #FF5733 or FF5733</p>
              <p><strong>RGB:</strong> rgb(255, 87, 51) or 255, 87, 51</p>
              <p><strong>HSL:</strong> hsl(9, 100%, 60%) or 9, 100%, 60%</p>
            </div>
          </div>

          <!-- Converted Color Display -->
          @if (convertedColor()) {
            <div class="animate-slide-up">
              <!-- Color Preview -->
              <div class="mb-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Color Preview</h3>
                <div 
                  class="w-full h-32 rounded-lg shadow-md border-4 border-gray-200 dark:border-gray-700"
                  [style.background-color]="convertedColor()!.hex"
                ></div>
              </div>

              <!-- All Format Values -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- HEX -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">HEX</span>
                    <button
                      (click)="copyToClipboard(convertedColor()!.hex, 'HEX')"
                      class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-1"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <code class="text-lg font-mono text-gray-900 dark:text-white">{{ convertedColor()!.hex }}</code>
                </div>

                <!-- RGB -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">RGB</span>
                    <button
                      (click)="copyToClipboard(convertedColor()!.rgb, 'RGB')"
                      class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-1"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <code class="text-lg font-mono text-gray-900 dark:text-white">{{ convertedColor()!.rgb }}</code>
                  <div class="mt-2 flex gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span>R: {{ convertedColor()!.rgbValues.r }}</span>
                    <span>G: {{ convertedColor()!.rgbValues.g }}</span>
                    <span>B: {{ convertedColor()!.rgbValues.b }}</span>
                  </div>
                </div>

                <!-- HSL -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">HSL</span>
                    <button
                      (click)="copyToClipboard(convertedColor()!.hsl, 'HSL')"
                      class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-1"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <code class="text-lg font-mono text-gray-900 dark:text-white">{{ convertedColor()!.hsl }}</code>
                  <div class="mt-2 flex gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span>H: {{ convertedColor()!.hslValues.h }}°</span>
                    <span>S: {{ convertedColor()!.hslValues.s }}%</span>
                    <span>L: {{ convertedColor()!.hslValues.l }}%</span>
                  </div>
                </div>

                <!-- CMYK -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">CMYK</span>
                    <button
                      (click)="copyToClipboard(convertedColor()!.cmyk, 'CMYK')"
                      class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-1"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <code class="text-lg font-mono text-gray-900 dark:text-white">{{ convertedColor()!.cmyk }}</code>
                </div>
              </div>
            </div>
          }
        </section>

        <!-- Quick Presets -->
        <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Presets</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            @for (preset of colorPresets; track preset.name) {
              <button
                (click)="applyPreset(preset.value)"
                class="flex flex-col items-center p-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors group"
              >
                <div 
                  class="w-full h-16 rounded-md mb-2 shadow-sm group-hover:shadow-md transition-shadow"
                  [style.background-color]="preset.value"
                ></div>
                <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ preset.name }}</span>
              </button>
            }
          </div>
        </section>
      </div>

      <!-- Ad Placeholder Bottom -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4">
          <app-ad-placeholder size="rectangle"></app-ad-placeholder>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ConverterComponent implements OnInit {
  private colorService = inject(ColorService);
  private toastService = inject(ToastService);
  private seoService = inject(SeoService);

  inputValue = '';
  convertedColor = signal<ColorFormats | null>(null);
  error = signal<string | null>(null);

  colorPresets = [
    { name: 'Red', value: '#FF0000' },
    { name: 'Green', value: '#00FF00' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Cyan', value: '#00FFFF' },
    { name: 'Magenta', value: '#FF00FF' },
    { name: 'Orange', value: '#FF8800' },
    { name: 'Purple', value: '#8800FF' },
    { name: 'Pink', value: '#FF69B4' },
    { name: 'Lime', value: '#32CD32' },
    { name: 'Teal', value: '#008080' },
    { name: 'Navy', value: '#000080' }
  ];

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Color Converter - Convert HEX, RGB, HSL, CMYK | Color Tools',
      description: 'Convert colors between different formats with ease. Supports HEX, RGB, HSL, and CMYK color formats.',
      keywords: 'color converter, hex to rgb, rgb to hsl, color format converter, cmyk converter',
      author: 'Color Tools',
      ogUrl: 'https://colorutils.com/converter',
      canonical: 'https://colorutils.com/converter'
    });
  }

  onInputChange(): void {
    this.error.set(null);
  }

  convertColor(): void {
    const value = this.inputValue.trim();
    
    if (!value) {
      this.error.set('Please enter a color value');
      return;
    }

    const rgb = this.colorService.parseColor(value);
    
    if (!rgb) {
      this.error.set('Invalid color format. Please check the examples above.');
      return;
    }

    const colorFormats = this.colorService.getAllFormats(rgb.r, rgb.g, rgb.b);
    this.convertedColor.set(colorFormats);
    this.error.set(null);
    this.toastService.success('Color converted successfully!');
  }

  applyPreset(colorValue: string): void {
    this.inputValue = colorValue;
    this.convertColor();
  }

  async copyToClipboard(value: string, format: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      this.toastService.success(`${format} copied to clipboard!`);
    } catch (error) {
      this.toastService.error('Failed to copy to clipboard');
    }
  }
}
