import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { GradientService, GradientConfig, GradientType, ColorStop } from '../../services/gradient.service';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-gradient-generator',
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
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Gradient Generator</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Create stunning CSS gradients with real-time preview. Perfect for modern web design, backgrounds, and visual effects.
          </p>
          
          <!-- Why Use Section -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Use a Gradient Generator?</h2>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Visual Appeal:</strong> Gradients add depth, sophistication, and modern aesthetic to any web design or application.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Performance Optimized:</strong> CSS gradients are lightweight - render instantly without images, reducing page load times.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Easy Customization:</strong> Adjust angles, colors, and stops in real-time to get exactly the look you want.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Multiple Types:</strong> Create linear, radial, and conic gradients for different effects and purposes.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Copy-Ready CSS:</strong> Get production-ready CSS code that works across all modern browsers.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>No Coding Required:</strong> Visual interface makes gradient creation accessible to designers and developers alike.</span></li>
            </ul>
          </section>

          <!-- Gradient Types Section -->
          <section class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6 border border-purple-200 dark:border-purple-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Gradient Types</h2>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 class="font-bold text-lg mb-2">Linear Gradient</h3>
                <p>Colors transition in a straight line. Specify direction (top, bottom, left, right, or custom angle). Best for: backgrounds, overlays, directional effects.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Radial Gradient</h3>
                <p>Colors transition from center outward in a circular or elliptical pattern. Best for: spotlights, vignettes, focal point effects.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Conic Gradient</h3>
                <p>Colors transition around a central point, like a pie chart. Best for: color wheels, loading spinners, circular effects.</p>
              </div>
            </div>
          </section>

          <!-- How It Works Section -->
          <section class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use the Gradient Generator</h2>
            <ol class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">1.</span> <span>Select the gradient type (Linear, Radial, or Conic).</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">2.</span> <span>Choose your starting color and ending color(s).</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">3.</span> <span>Adjust the angle (for linear) or position (for radial) to customize the direction.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">4.</span> <span>Add color stops at specific positions for more complex gradients.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">5.</span> <span>See the live preview update in real-time as you make changes.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">6.</span> <span>Copy the CSS code directly into your stylesheets or HTML.</span></li>
            </ol>
          </section>
        </article>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- Main Tool Card (2/3 width on desktop) -->
          <div class="lg:col-span-2 space-y-6">
            <!-- Live Preview -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <div
                class="w-full aspect-video relative"
                [style.background]="gradientCSS()"
              >
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="bg-black/40 backdrop-blur-sm px-6 py-3 rounded-lg">
                    <p class="text-white font-semibold text-lg">Gradient Preview</p>
                  </div>
                </div>
              </div>
            </section>

            <!-- Controls -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Gradient Controls</h2>

              <!-- Gradient Type -->
              <div class="mb-6">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gradient Type
                </label>
                <div class="flex gap-3">
                  <button
                    *ngFor="let type of gradientTypes"
                    (click)="updateGradientType(type.value)"
                    [class.bg-primary-600]="gradient().type === type.value"
                    [class.text-white]="gradient().type === type.value"
                    [class.bg-gray-100]="gradient().type !== type.value"
                    [class.dark:bg-gray-800]="gradient().type !== type.value"
                    [class.text-gray-700]="gradient().type !== type.value"
                    [class.dark:text-gray-300]="gradient().type !== type.value"
                    class="flex-1 py-3 rounded-lg font-medium transition-all hover:scale-105"
                  >
                    {{ type.label }}
                  </button>
                </div>
              </div>

              <!-- Angle Control (for linear and conic) -->
              @if (gradient().type === 'linear' || gradient().type === 'conic') {
                <div class="mb-6">
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {{ gradient().type === 'linear' ? 'Direction' : 'Rotation' }} ({{ gradient().angle }}°)
                  </label>
                  <div class="flex items-center gap-4">
                    <input
                      type="range"
                      min="0"
                      max="360"
                      [ngModel]="gradient().angle"
                      (ngModelChange)="updateAngle($event)"
                      class="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                    />
                    <input
                      type="number"
                      min="0"
                      max="360"
                      [ngModel]="gradient().angle"
                      (ngModelChange)="updateAngle($event)"
                      class="w-20 px-3 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white text-center"
                    />
                  </div>
                </div>
              }

              <!-- Color Stops -->
              <div class="mb-6">
                <div class="flex items-center justify-between mb-3">
                  <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Color Stops
                  </label>
                  <button
                    (click)="addStop()"
                    class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors text-sm flex items-center space-x-1"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    <span>Add Stop</span>
                  </button>
                </div>

                <!-- Position Slider Visualization -->
                <div class="relative h-12 mb-6 rounded-lg" [style.background]="gradientCSS()">
                  @for (stop of gradient().stops; track stop.id) {
                    <div
                      class="absolute top-0 bottom-0 w-6 cursor-pointer"
                      [style.left.%]="stop.position"
                      style="transform: translateX(-50%);"
                      draggable="true"
                      (dragstart)="onDragStart($event, stop.id)"
                      (dragend)="onDragEnd($event)"
                    >
                      <div
                        class="w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"
                        [style.background-color]="stop.color"
                      ></div>
                    </div>
                  }
                </div>

                <!-- Color Stop List -->
                <div class="space-y-3">
                  @for (stop of gradient().stops; track stop.id) {
                    <div class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <input
                        type="color"
                        [ngModel]="stop.color"
                        (ngModelChange)="updateStopColor(stop.id, $event)"
                        class="w-12 h-12 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                      />
                      <div class="flex-1 space-y-2">
                        <input
                          type="text"
                          [ngModel]="stop.color"
                          (ngModelChange)="updateStopColor(stop.id, $event)"
                          class="w-full px-3 py-2 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded text-gray-900 dark:text-white text-sm font-mono"
                        />
                        <div class="flex items-center gap-2">
                          <input
                            type="range"
                            min="0"
                            max="100"
                            [ngModel]="stop.position"
                            (ngModelChange)="updateStopPosition(stop.id, $event)"
                            class="flex-1 h-1 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
                          />
                          <span class="text-sm text-gray-600 dark:text-gray-400 min-w-[3rem] text-right">
                            {{ stop.position }}%
                          </span>
                        </div>
                      </div>
                      @if (gradient().stops.length > 2) {
                        <button
                          (click)="removeStop(stop.id)"
                          class="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                          title="Remove stop"
                        >
                          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                          </svg>
                        </button>
                      }
                    </div>
                  }
                </div>
              </div>

              <!-- Repeating Gradient Toggle -->
              <div class="mb-6">
                <label class="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    [ngModel]="gradient().repeating"
                    (ngModelChange)="updateRepeating($event)"
                    class="w-5 h-5 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2"
                  />
                  <span class="ml-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                    Repeating Gradient
                  </span>
                </label>
              </div>

              <!-- Quick Actions -->
              <div class="flex gap-3">
                <button
                  (click)="randomizeGradient()"
                  class="flex-1 px-4 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                  <span>Randomize</span>
                </button>
                <button
                  (click)="reverseGradient()"
                  class="flex-1 px-4 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                  </svg>
                  <span>Reverse</span>
                </button>
              </div>
            </section>

            <!-- CSS Code -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-bold text-gray-900 dark:text-white">CSS Code</h2>
                <button
                  (click)="copyCSSCode()"
                  class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center space-x-2"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                  <span>Copy CSS</span>
                </button>
              </div>
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">background: {{ gradientCSS() }};</pre>
              
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
          </div>

          <!-- Sidebar (1/3 width on desktop) -->
          <div class="lg:col-span-1 space-y-6">
            <!-- Ad Placeholder Sidebar -->
            <div class="hidden lg:block">
              <app-ad-placeholder size="square" [enableAds]="false"></app-ad-placeholder>
            </div>

            <!-- Gradient Presets -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">🎨 Preset Gradients</h3>
              <div class="grid grid-cols-2 gap-3">
                @for (preset of presets; track preset.name) {
                  <button
                    (click)="applyPreset(preset)"
                    class="group relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-105"
                    [style.background]="getPresetCSS(preset)"
                  >
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                      <span class="text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {{ preset.name }}
                      </span>
                    </div>
                  </button>
                }
              </div>
            </section>

            <!-- Tips Card -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4">💡 Tips</h3>
              <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Drag color stops on the gradient bar to adjust positions</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Use radial gradients for spotlight effects</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Conic gradients create circular color wheels</span>
                </li>
                <li class="flex items-start">
                  <svg class="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                  </svg>
                  <span>Try preset gradients for instant inspiration</span>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class GradientGeneratorComponent implements OnInit {
  private gradientService = inject(GradientService);
  private toastService = inject(ToastService);
  private seoService = inject(SeoService);
  private router = inject(Router);

  gradient = signal<GradientConfig>(this.gradientService.createDefaultGradient());
  gradientCSS = signal<string>('');
  presets = this.gradientService.getPresets();

  gradientTypes = [
    { value: 'linear' as GradientType, label: 'Linear' },
    { value: 'radial' as GradientType, label: 'Radial' },
    { value: 'conic' as GradientType, label: 'Conic' }
  ];

  draggedStopId: string | null = null;

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'CSS Gradient Generator - Create Beautiful Gradients | Color Utils',
      description: 'Generate stunning CSS gradients with real-time preview. Create linear, radial, and conic gradients with an intuitive visual editor.',
      keywords: 'css gradient generator, linear gradient, radial gradient, conic gradient, gradient maker, css background',
      author: 'Color Utils',
      ogUrl: 'https://colorutils.com/gradient-generator',
      canonical: 'https://colorutils.com/gradient-generator'
    });

    this.updateGradientCSS();
  }

  updateGradientCSS(): void {
    this.gradientCSS.set(this.gradientService.generateCSS(this.gradient()));
  }

  updateGradientType(type: GradientType): void {
    this.gradient.set({ ...this.gradient(), type });
    this.updateGradientCSS();
  }

  updateAngle(angle: number): void {
    this.gradient.set({ ...this.gradient(), angle });
    this.updateGradientCSS();
  }

  updateRepeating(repeating: boolean): void {
    this.gradient.set({ ...this.gradient(), repeating });
    this.updateGradientCSS();
  }

  updateStopColor(stopId: string, color: string): void {
    const updated = this.gradientService.updateColorStop(this.gradient(), stopId, { color });
    this.gradient.set(updated);
    this.updateGradientCSS();
  }

  updateStopPosition(stopId: string, position: number): void {
    const updated = this.gradientService.updateColorStop(this.gradient(), stopId, { position });
    this.gradient.set(updated);
    this.updateGradientCSS();
  }

  addStop(): void {
    const currentStops = this.gradient().stops;
    const sortedStops = [...currentStops].sort((a, b) => a.position - b.position);
    
    // Find the largest gap
    let maxGap = 0;
    let insertPosition = 50;
    
    for (let i = 0; i < sortedStops.length - 1; i++) {
      const gap = sortedStops[i + 1].position - sortedStops[i].position;
      if (gap > maxGap) {
        maxGap = gap;
        insertPosition = sortedStops[i].position + gap / 2;
      }
    }

    const updated = this.gradientService.addColorStop(this.gradient(), insertPosition);
    this.gradient.set(updated);
    this.updateGradientCSS();
    this.toastService.success('Color stop added');
  }

  removeStop(stopId: string): void {
    const updated = this.gradientService.removeColorStop(this.gradient(), stopId);
    if (updated.stops.length === this.gradient().stops.length) {
      this.toastService.error('Need at least 2 color stops');
      return;
    }
    this.gradient.set(updated);
    this.updateGradientCSS();
    this.toastService.success('Color stop removed');
  }

  randomizeGradient(): void {
    this.gradient.set(this.gradientService.randomGradient());
    this.updateGradientCSS();
    this.toastService.success('Random gradient generated!');
  }

  reverseGradient(): void {
    const currentGradient = this.gradient();
    const reversedStops = currentGradient.stops.map(stop => ({
      ...stop,
      position: 100 - stop.position
    }));
    
    this.gradient.set({
      ...currentGradient,
      stops: reversedStops
    });
    this.updateGradientCSS();
    this.toastService.success('Gradient reversed!');
  }

  applyPreset(preset: { name: string; config: GradientConfig }): void {
    this.gradient.set(preset.config);
    this.updateGradientCSS();
    this.toastService.success(`${preset.name} preset applied!`);
  }

  getPresetCSS(preset: { name: string; config: GradientConfig }): string {
    return this.gradientService.generateCSS(preset.config);
  }

  async copyCSSCode(): Promise<void> {
    const css = `background: ${this.gradientCSS()};`;
    try {
      await navigator.clipboard.writeText(css);
      this.toastService.success('CSS code copied to clipboard!');
    } catch (error) {
      this.toastService.error('Failed to copy CSS code');
    }
  }

  onDragStart(event: DragEvent, stopId: string): void {
    this.draggedStopId = stopId;
    if (event.dataTransfer) {
      event.dataTransfer.effectAllowed = 'move';
    }
  }

  onDragEnd(event: DragEvent): void {
    // Get the gradient bar element
    const gradientBar = (event.target as HTMLElement).parentElement;
    if (!gradientBar || !this.draggedStopId) return;

    const rect = gradientBar.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));

    this.updateStopPosition(this.draggedStopId, Math.round(percentage));
    this.draggedStopId = null;
  }

  viewThemePreview(): void {
    const stops = this.gradient().stops;
    const queryParams: any = {};

    // Map gradient stops to theme colors
    if (stops.length >= 1) queryParams.primary = stops[0].color.replace('#', '');
    if (stops.length >= 2) queryParams.secondary = stops[1].color.replace('#', '');
    if (stops.length >= 3) queryParams.accent = stops[2].color.replace('#', '');
    if (stops.length >= 4) queryParams.surface = stops[3].color.replace('#', '');
    if (stops.length >= 5) queryParams.text = stops[4].color.replace('#', '');

    // Set default background and textSecondary
    queryParams.background = 'f8fafc';
    queryParams.textSecondary = '64748b';

    this.router.navigate(['/theme-preview'], { queryParams });
    this.toastService.success('Opening theme preview with your gradient colors!');
  }
}
