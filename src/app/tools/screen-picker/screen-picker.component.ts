import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorService, ColorFormats } from '../../services/color.service';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-screen-picker',
  standalone: true,
  imports: [CommonModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-slate-950 py-8">
      <!-- Ad Placeholder Top -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4 mb-6">
          <app-ad-placeholder size="banner" [enableAds]="false"></app-ad-placeholder>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <!-- Header Section -->
        <article class="mb-12">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Screen Color Picker</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Pick any color from anywhere on your screen - even outside the browser! Simply resize your browser window to see other applications, then use the EyeDropper API to select colors from any application, image, or window.
          </p>
          
          <!-- Why Use Section -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Use the Screen Color Picker?</h2>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Capture Exact Colors:</strong> Use the modern EyeDropper API to pick colors with pixel-perfect accuracy from any application or screen element.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Cross-Application Selection:</strong> Pick colors from other windows, desktop applications, and web pages without limitations.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Multiple Format Support:</strong> Get colors in HEX, RGB, HSL, and CMYK formats instantly for any design tool you use.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Privacy-First:</strong> All color picking happens locally on your device - no data is sent to our servers.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Designer's Essential Tool:</strong> Perfect for UI/UX designers, web developers, and graphic designers who need to match colors from existing designs, mockups, or competitor websites.</span></li>
            </ul>
          </section>

          <!-- How It Works Section -->
          <section class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use the Screen Color Picker</h2>
            <ol class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">1.</span> <span>Click the "Pick Color from Screen" button to activate the EyeDropper.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">2.</span> <span>A color picker cursor will appear - move it to any color on your screen (inside or outside the browser).</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">3.</span> <span>Click on the color you want to capture - the tool instantly converts it to multiple formats.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">4.</span> <span>Copy any format (HEX, RGB, HSL, CMYK) to your clipboard with a single click.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">5.</span> <span>Paste the color value into your design tool, code editor, or application.</span></li>
            </ol>
          </section>
        </article>

        <!-- Main Tool Card -->
        <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pick a Color</h2>

          <!-- Picker Button -->
          <div class="flex justify-center mb-8">
            @if (isSupported()) {
              <button
                (click)="pickColor()"
                [disabled]="isPicking()"
                class="px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all disabled:cursor-not-allowed flex items-center space-x-3"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
                </svg>
                <span>{{ isPicking() ? 'Picking...' : 'Pick Color from Screen' }}</span>
              </button>
            } @else {
              <div class="text-center p-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <svg class="w-12 h-12 mx-auto mb-3 text-yellow-600 dark:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
                <h3 class="text-lg font-semibold text-yellow-800 dark:text-yellow-400 mb-2">Not Supported</h3>
                <p class="text-yellow-700 dark:text-yellow-500">
                  The EyeDropper API is not supported in your browser. Please try using Chrome, Edge, or Opera.
                </p>
              </div>
            }
          </div>

          <!-- Color Display -->
          @if (pickedColor()) {
            <div class="animate-slide-up">
              <!-- Color Preview -->
              <div class="mb-8">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Color Preview</h3>
                <div 
                  class="w-full h-32 rounded-lg shadow-md border-4 border-gray-200 dark:border-gray-700 transition-colors"
                  [style.background-color]="pickedColor()!.hex"
                ></div>
              </div>

              <!-- Color Values -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- HEX -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">HEX</span>
                    <button
                      (click)="copyToClipboard(pickedColor()!.hex, 'HEX')"
                      class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-1"
                      title="Copy HEX"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <code class="text-lg font-mono text-gray-900 dark:text-white">{{ pickedColor()!.hex }}</code>
                </div>

                <!-- RGB -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">RGB</span>
                    <button
                      (click)="copyToClipboard(pickedColor()!.rgb, 'RGB')"
                      class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-1"
                      title="Copy RGB"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <code class="text-lg font-mono text-gray-900 dark:text-white">{{ pickedColor()!.rgb }}</code>
                </div>

                <!-- HSL -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">HSL</span>
                    <button
                      (click)="copyToClipboard(pickedColor()!.hsl, 'HSL')"
                      class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-1"
                      title="Copy HSL"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <code class="text-lg font-mono text-gray-900 dark:text-white">{{ pickedColor()!.hsl }}</code>
                </div>

                <!-- CMYK -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400">CMYK</span>
                    <button
                      (click)="copyToClipboard(pickedColor()!.cmyk, 'CMYK')"
                      class="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-1"
                      title="Copy CMYK"
                    >
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      <span>Copy</span>
                    </button>
                  </div>
                  <code class="text-lg font-mono text-gray-900 dark:text-white">{{ pickedColor()!.cmyk }}</code>
                </div>
              </div>
            </div>
          }
        </section>

        <!-- Info Section -->
        <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">How to Use</h2>
          <ol class="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Click the "Pick Color from Screen" button</li>
            <li>Your cursor will change to a color picker</li>
            <li>Click anywhere on your screen to pick that color</li>
            <li>The color values will be displayed in multiple formats</li>
            <li>Click any "Copy" button to copy the color value to your clipboard</li>
          </ol>
        </section>
      </div>

      <!-- Ad Placeholder Bottom -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4">
          <app-ad-placeholder size="rectangle" [enableAds]="false"></app-ad-placeholder>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ScreenPickerComponent implements OnInit {
  private colorService = inject(ColorService);
  private toastService = inject(ToastService);
  private seoService = inject(SeoService);

  isSupported = signal(false);
  isPicking = signal(false);
  pickedColor = signal<ColorFormats | null>(null);

  ngOnInit(): void {
    // Check if EyeDropper API is supported
    this.isSupported.set('EyeDropper' in window);

    // Set SEO meta tags
    this.seoService.updateMetaTags({
      title: 'Screen Color Picker - Pick Colors from Anywhere | Color Utils',
      description: 'Pick colors from anywhere on your screen using the EyeDropper API. Get color values in HEX, RGB, HSL, and CMYK formats instantly.',
      keywords: 'color picker, eyedropper, screen color picker, color tool, hex color, rgb color, hsl color',
      author: 'Color Utils',
      ogUrl: 'https://colorutils.com/screen-picker',
      canonical: 'https://colorutils.com/screen-picker'
    });

    // Add HowTo structured data
    this.addStructuredData();
  }

  private addStructuredData(): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'How to Pick Colors from Your Screen',
      'description': 'Learn how to use the screen color picker to extract colors from anywhere on your display.',
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Open the Color Picker',
          'text': 'Click the "Pick Color from Screen" button to activate the eyedropper tool.',
          'position': 1
        },
        {
          '@type': 'HowToStep',
          'name': 'Select a Color',
          'text': 'Move your cursor over any part of your screen and click to select that color.',
          'position': 2
        },
        {
          '@type': 'HowToStep',
          'name': 'Copy Color Value',
          'text': 'Click on any color format (HEX, RGB, HSL, CMYK) to copy it to your clipboard.',
          'position': 3
        }
      ]
    });
    document.head.appendChild(script);
  }

  async pickColor(): Promise<void> {
    if (!this.isSupported()) return;

    try {
      this.isPicking.set(true);
      
      // @ts-ignore - EyeDropper API is not yet in TypeScript definitions
      const eyeDropper = new EyeDropper();
      // @ts-ignore
      const result = await eyeDropper.open();
      
      const hex = result.sRGBHex;
      const rgb = this.colorService.hexToRgb(hex);
      
      if (rgb) {
        const colorFormats = this.colorService.getAllFormats(rgb.r, rgb.g, rgb.b);
        this.pickedColor.set(colorFormats);
        this.toastService.success('Color picked successfully!');
      }
    } catch (error) {
      // User cancelled the picker
      if ((error as Error).name !== 'AbortError') {
        this.toastService.error('Failed to pick color');
      }
    } finally {
      this.isPicking.set(false);
    }
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
