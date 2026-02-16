import { Component, OnInit, inject, signal, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaletteService, PaletteColor, PaletteSize, PaletteAlgorithm } from '../../services/palette.service';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-palette-generator',
  standalone: true,
  imports: [CommonModule, FormsModule, AdPlaceholderComponent],
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
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Color Palette Generator</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Generate beautiful color palettes using color theory algorithms or extract colors from images. Create harmonious color schemes in seconds.
          </p>
          
          <!-- Why Use Section -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Use a Palette Generator?</h2>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Professional Results:</strong> Based on color theory - no guessing or trial-and-error needed to create harmonious palettes.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Save Hours of Work:</strong> Generate complete palettes in seconds instead of spending hours manually selecting colors.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Multiple Harmony Schemes:</strong> Choose from complementary, analogous, triadic, and monochromatic schemes for different moods.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Brand Consistency:</strong> Start with your brand color and generate a complete palette that works together perfectly.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Accessibility Built-In:</strong> Generated palettes work well together and consider contrast for readability.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Export Ready:</strong> Instantly export in CSS, JSON, or other formats for your design tools or code.</span></li>
            </ul>
          </section>

          <!-- Color Harmony Schemes Section -->
          <section class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6 border border-purple-200 dark:border-purple-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Color Harmony Schemes Explained</h2>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 class="font-bold text-lg mb-2">Complementary</h3>
                <p>Colors opposite on the color wheel (180°). Creates high contrast and vibrant energy. Best for: eye-catching designs, CTAs, highlights.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Analogous</h3>
                <p>Colors next to each other on the color wheel (30° apart). Creates harmony and cohesion. Best for: calm, professional, natural designs.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Triadic</h3>
                <p>Three colors equally spaced on the color wheel (120° apart). Balanced and vibrant. Best for: playful, creative, modern brands.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Monochromatic</h3>
                <p>Different shades and tints of one color. Creates sophistication and unity. Best for: elegant, minimalist, professional designs.</p>
              </div>
            </div>
          </section>

          <!-- How It Works Section -->
          <section class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use the Palette Generator</h2>
            <ol class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">1.</span> <span>Enter a base color (your brand color or favorite color) in any format (HEX, RGB, HSL).</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">2.</span> <span>Select a harmony scheme type (Complementary, Analogous, Triadic, or Monochromatic).</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">3.</span> <span>The tool instantly generates a complete color palette based on the selected harmony.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">4.</span> <span>Preview each color in the palette and see how they work together.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">5.</span> <span>Copy individual colors or export the entire palette in your preferred format.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">6.</span> <span>Use the palette in your design tool or code - ready to go!</span></li>
            </ol>
          </section>
        </article>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Main Tool Card (2/3 width on desktop) -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Generation Methods -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Generate Palette</h2>

              <!-- Method Tabs -->
              <div class="flex flex-wrap gap-2 mb-6">
                <button
                  *ngFor="let method of generationMethods"
                  (click)="selectedMethod.set(method.id)"
                  [class.bg-primary-600]="selectedMethod() === method.id"
                  [class.text-white]="selectedMethod() === method.id"
                  [class.bg-gray-100]="selectedMethod() !== method.id"
                  [class.dark:bg-gray-800]="selectedMethod() !== method.id"
                  [class.text-gray-700]="selectedMethod() !== method.id"
                  [class.dark:text-gray-300]="selectedMethod() !== method.id"
                  class="px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
                >
                  {{ method.label }}
                </button>
              </div>

              <!-- Base Color Method -->
              @if (selectedMethod() === 'base') {
                <div class="space-y-4">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Base Color
                    </label>
                    <div class="flex gap-3">
                      <input
                        type="color"
                        [(ngModel)]="baseColor"
                        class="w-20 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                      />
                      <input
                        type="text"
                        [(ngModel)]="baseColor"
                        placeholder="#0EA5E9"
                        class="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Color Harmony
                    </label>
                    <select
                      [(ngModel)]="selectedAlgorithm"
                      class="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 outline-none"
                    >
                      <option value="analogous">Analogous (Adjacent colors)</option>
                      <option value="complementary">Complementary (Opposite colors)</option>
                      <option value="triadic">Triadic (120° apart)</option>
                      <option value="tetradic">Tetradic (Square)</option>
                      <option value="monochromatic">Monochromatic (Same hue)</option>
                    </select>
                  </div>
                </div>
              }

              <!-- Image Upload Method -->
              @if (selectedMethod() === 'image') {
                <div class="space-y-4">
                  <div class="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
                    <input
                      #fileInput
                      type="file"
                      accept="image/*"
                      (change)="onImageUpload($event)"
                      class="hidden"
                    />
                    @if (!uploadedImage()) {
                      <svg class="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <button
                        (click)="fileInput.click()"
                        class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        Upload Image
                      </button>
                      <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        We'll extract dominant colors from your image
                      </p>
                    } @else {
                      <img [src]="uploadedImage()" alt="Uploaded" class="max-h-48 mx-auto rounded-lg mb-4">
                      <button
                        (click)="resetImage()"
                        class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                      >
                        Upload Different Image
                      </button>
                    }
                  </div>
                </div>
              }

              <!-- Palette Size -->
              <div class="mt-6">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Palette Size
                </label>
                <div class="flex gap-3">
                  <button
                    *ngFor="let size of paletteSizes"
                    (click)="paletteSize.set(size)"
                    [class.bg-primary-600]="paletteSize() === size"
                    [class.text-white]="paletteSize() === size"
                    [class.bg-gray-100]="paletteSize() !== size"
                    [class.dark:bg-gray-800]="paletteSize() !== size"
                    [class.text-gray-700]="paletteSize() !== size"
                    [class.dark:text-gray-300]="paletteSize() !== size"
                    class="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                  >
                    {{ size }} Colors
                  </button>
                </div>
              </div>

              <!-- Generate Button -->
              <button
                (click)="generatePalette()"
                class="w-full mt-6 px-6 py-4 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                </svg>
                <span>{{ selectedMethod() === 'random' ? 'Generate Random Palette' : 'Generate Palette' }}</span>
              </button>
            </section>

            <!-- Generated Palette -->
            @if (palette().length > 0) {
              <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 animate-slide-up">
                <div class="flex items-center justify-between mb-6">
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Your Palette</h2>
                  <button
                    (click)="regenerateUnlocked()"
                    class="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors flex items-center space-x-2"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                    <span>Regenerate Unlocked</span>
                  </button>
                </div>

                <!-- Color Swatches -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
                  @for (color of palette(); track $index) {
                    <div class="group">
                      <div
                        class="relative aspect-square rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                        [style.background-color]="color.hex"
                        (click)="copyColor(color.hex)"
                      >
                        <!-- Lock/Unlock Button -->
                        <button
                          (click)="toggleLock($index); $event.stopPropagation()"
                          class="absolute top-2 right-2 p-2 bg-black/30 hover:bg-black/50 rounded-lg transition-colors"
                          [title]="color.locked ? 'Unlock' : 'Lock'"
                        >
                          @if (color.locked) {
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                            </svg>
                          } @else {
                            <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"></path>
                            </svg>
                          }
                        </button>
                      </div>
                      <div class="mt-2 space-y-1">
                        <p class="text-xs font-mono text-gray-900 dark:text-white">{{ color.hex }}</p>
                        <div class="flex gap-1">
                          <button
                            (click)="copyColor(color.hex)"
                            class="flex-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title="Copy HEX"
                          >
                            HEX
                          </button>
                          <button
                            (click)="copyColor(color.rgb)"
                            class="flex-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title="Copy RGB"
                          >
                            RGB
                          </button>
                          <button
                            (click)="copyColor(color.hsl)"
                            class="flex-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            title="Copy HSL"
                          >
                            HSL
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                </div>

                <!-- Export Options -->
                <div class="flex flex-wrap gap-3">
                  <button
                    (click)="exportCSS()"
                    class="flex-1 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                    <span>Copy as CSS</span>
                  </button>
                  <button
                    (click)="exportTailwind()"
                    class="flex-1 px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    <span>Copy as Tailwind</span>
                  </button>
                </div>

                <!-- Theme Preview Button -->
                <button
                  (click)="viewThemePreview()"
                  class="w-full mt-4 px-4 py-3 bg-gradient-to-r from-primary-600 to-blue-600 hover:from-primary-700 hover:to-blue-700 text-white font-semibold rounded-lg transition-all hover:scale-[1.02] flex items-center justify-center space-x-2 shadow-lg"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  <span>View Theme Preview</span>
                </button>
              </section>
            }
          </div>

          <!-- Sidebar (1/3 width on desktop) -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Ad Placeholder Sidebar -->
            <div class="hidden lg:block">
              <app-ad-placeholder size="square" [enableAds]="false"></app-ad-placeholder>
            </div>

            <!-- Tips Card -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">💡 Tips</h3>
              <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Lock colors you want to keep while regenerating others</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Try different harmonies to explore color relationships</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Upload images to extract real-world color palettes</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Export directly to CSS variables or Tailwind config</span>
                </li>
              </ul>
            </section>

            <!-- Color Theory Card -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">🎨 Color Harmonies</h3>
              <div class="space-y-3 text-sm">
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Analogous</p>
                  <p class="text-gray-600 dark:text-gray-400">Adjacent colors on the color wheel</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Complementary</p>
                  <p class="text-gray-600 dark:text-gray-400">Opposite colors create high contrast</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Triadic</p>
                  <p class="text-gray-600 dark:text-gray-400">Three colors evenly spaced</p>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 dark:text-white">Monochromatic</p>
                  <p class="text-gray-600 dark:text-gray-400">Variations of a single hue</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    <!-- Hidden canvas for image processing -->
    <canvas #imageCanvas style="display: none;"></canvas>
  `,
  styles: []
})
export class PaletteGeneratorComponent implements OnInit {
  @ViewChild('imageCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  private paletteService = inject(PaletteService);
  private toastService = inject(ToastService);
  private seoService = inject(SeoService);
  private router = inject(Router);

  selectedMethod = signal<'base' | 'random' | 'image'>('base');
  baseColor = '#0EA5E9';
  selectedAlgorithm: PaletteAlgorithm = 'analogous';
  paletteSize = signal<PaletteSize>(5);
  palette = signal<PaletteColor[]>([]);
  uploadedImage = signal<string | null>(null);

  generationMethods = [
    { id: 'base' as const, label: 'From Base Color' },
    { id: 'random' as const, label: 'Random' },
    { id: 'image' as const, label: 'From Image' }
  ];

  paletteSizes: PaletteSize[] = [3, 5, 7];

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Color Palette Generator - Create Beautiful Color Schemes | Color Utils',
      description: 'Generate stunning color palettes using color theory algorithms. Create harmonious color schemes from base colors or extract palettes from images.',
      keywords: 'color palette generator, color scheme, color harmony, analogous colors, complementary colors, color theory',
      author: 'Color Utils',
      ogUrl: 'https://colorutils.com/palette-generator',
      canonical: 'https://colorutils.com/palette-generator'
    });

    // Generate initial random palette
    this.generatePalette();
  }

  generatePalette(): void {
    if (this.selectedMethod() === 'random') {
      this.palette.set(this.paletteService.generateRandomPalette(this.paletteSize()));
    } else if (this.selectedMethod() === 'base') {
      this.palette.set(
        this.paletteService.generatePalette(
          this.baseColor,
          this.selectedAlgorithm,
          this.paletteSize()
        )
      );
    } else if (this.selectedMethod() === 'image' && this.uploadedImage()) {
      // Already generated from image
      return;
    }

    this.toastService.success('Palette generated!');
  }

  regenerateUnlocked(): void {
    const currentPalette = this.palette();
    const newPalette = this.selectedMethod() === 'random'
      ? this.paletteService.generateRandomPalette(this.paletteSize())
      : this.paletteService.generatePalette(this.baseColor, this.selectedAlgorithm, this.paletteSize());

    // Keep locked colors, replace unlocked ones
    const updatedPalette = currentPalette.map((color, index) => {
      if (color.locked) {
        return color;
      }
      return newPalette[index] || color;
    });

    this.palette.set(updatedPalette);
    this.toastService.success('Unlocked colors regenerated!');
  }

  toggleLock(index: number): void {
    const currentPalette = [...this.palette()];
    currentPalette[index].locked = !currentPalette[index].locked;
    this.palette.set(currentPalette);
  }

  onImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file || !file.type.startsWith('image/')) {
      this.toastService.error('Please select a valid image file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        this.uploadedImage.set(e.target?.result as string);
        this.extractColorsFromImage(img);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  }

  extractColorsFromImage(img: HTMLImageElement): void {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Scale image for processing
    const maxSize = 200;
    const scale = Math.min(maxSize / img.width, maxSize / img.height);
    canvas.width = img.width * scale;
    canvas.height = img.height * scale;

    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const extractedPalette = this.paletteService.extractPaletteFromImage(imageData, this.paletteSize());
    this.palette.set(extractedPalette);
    this.toastService.success('Colors extracted from image!');
  }

  resetImage(): void {
    this.uploadedImage.set(null);
  }

  async copyColor(value: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(value);
      this.toastService.success('Color copied!');
    } catch (error) {
      this.toastService.error('Failed to copy');
    }
  }

  async exportCSS(): Promise<void> {
    const css = this.paletteService.exportAsCSS(this.palette(), 'palette');
    try {
      await navigator.clipboard.writeText(css);
      this.toastService.success('CSS variables copied to clipboard!');
    } catch (error) {
      this.toastService.error('Failed to copy CSS');
    }
  }

  async exportTailwind(): Promise<void> {
    const config = this.paletteService.exportAsTailwind(this.palette(), 'custom');
    try {
      await navigator.clipboard.writeText(config);
      this.toastService.success('Tailwind config copied to clipboard!');
    } catch (error) {
      this.toastService.error('Failed to copy Tailwind config');
    }
  }

  viewThemePreview(): void {
    const colors = this.palette();
    const queryParams: any = {};

    // Map palette colors to theme colors
    if (colors.length >= 1) queryParams.primary = colors[0].hex.replace('#', '');
    if (colors.length >= 2) queryParams.secondary = colors[1].hex.replace('#', '');
    if (colors.length >= 3) queryParams.accent = colors[2].hex.replace('#', '');
    if (colors.length >= 4) queryParams.surface = colors[3].hex.replace('#', '');
    if (colors.length >= 5) queryParams.text = colors[4].hex.replace('#', '');

    // Set default background and textSecondary
    queryParams.background = 'f8fafc';
    queryParams.textSecondary = '64748b';

    this.router.navigate(['/theme-preview'], { queryParams });
    this.toastService.success('Opening theme preview with your colors!');
  }
}
