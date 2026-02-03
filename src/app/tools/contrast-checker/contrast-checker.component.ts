import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ColorService } from '../../services/color.service';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

interface ContrastResult {
  ratio: number;
  aa: { normal: boolean; large: boolean };
  aaa: { normal: boolean; large: boolean };
}

@Component({
  selector: 'app-contrast-checker',
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
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Contrast Checker</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Check color contrast ratios for accessibility compliance. Ensure your text is readable according to WCAG guidelines.
          </p>
        </article>

        <!-- Main Tool Card -->
        <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 mb-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Check Contrast</h2>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Color Inputs -->
            <div class="space-y-6">
              <!-- Text Color -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Text Color (Foreground)
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [(ngModel)]="textColor"
                    (change)="checkContrast()"
                    class="w-20 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [(ngModel)]="textColor"
                    (input)="checkContrast()"
                    placeholder="#000000"
                    class="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <!-- Background Color -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Background Color
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [(ngModel)]="backgroundColor"
                    (change)="checkContrast()"
                    class="w-20 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [(ngModel)]="backgroundColor"
                    (input)="checkContrast()"
                    placeholder="#FFFFFF"
                    class="flex-1 px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  />
                </div>
              </div>

              <!-- Quick Presets -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Quick Presets
                </label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    (click)="applyPreset('#000000', '#FFFFFF')"
                    class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Black on White
                  </button>
                  <button
                    (click)="applyPreset('#FFFFFF', '#000000')"
                    class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    White on Black
                  </button>
                  <button
                    (click)="applyPreset('#0066CC', '#FFFFFF')"
                    class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Blue on White
                  </button>
                  <button
                    (click)="applyPreset('#333333', '#F5F5F5')"
                    class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    Dark Gray on Light
                  </button>
                </div>
              </div>
            </div>

            <!-- Live Preview -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Live Preview
              </label>
              <div 
                class="rounded-lg p-8 shadow-md border-2 border-gray-200 dark:border-gray-700 min-h-[300px] flex flex-col justify-center"
                [style.background-color]="backgroundColor"
                [style.color]="textColor"
              >
                <h3 class="text-3xl font-bold mb-4">Sample Heading</h3>
                <p class="text-lg mb-4">
                  This is a sample paragraph with normal text size. It demonstrates how your text will look with the selected colors.
                </p>
                <p class="text-sm">
                  This is smaller text to test readability at different sizes.
                </p>
              </div>
            </div>
          </div>

          <!-- Contrast Results -->
          @if (contrastResult()) {
            <div class="mt-8 animate-slide-up">
              <!-- Contrast Ratio -->
              <div class="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg p-6 mb-6">
                <div class="text-center">
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-400 mb-2">Contrast Ratio</p>
                  <p class="text-5xl font-bold text-gray-900 dark:text-white">
                    {{ contrastResult()!.ratio.toFixed(2) }}:1
                  </p>
                </div>
              </div>

              <!-- WCAG Compliance -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <!-- WCAG AA -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span class="w-2 h-2 bg-primary-500 rounded-full mr-2"></span>
                    WCAG AA
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-gray-700 dark:text-gray-300">Normal Text (4.5:1)</span>
                      @if (contrastResult()!.aa.normal) {
                        <span class="flex items-center text-green-600 dark:text-green-400 font-semibold">
                          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Pass
                        </span>
                      } @else {
                        <span class="flex items-center text-red-600 dark:text-red-400 font-semibold">
                          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          Fail
                        </span>
                      }
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-gray-700 dark:text-gray-300">Large Text (3:1)</span>
                      @if (contrastResult()!.aa.large) {
                        <span class="flex items-center text-green-600 dark:text-green-400 font-semibold">
                          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Pass
                        </span>
                      } @else {
                        <span class="flex items-center text-red-600 dark:text-red-400 font-semibold">
                          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          Fail
                        </span>
                      }
                    </div>
                  </div>
                </div>

                <!-- WCAG AAA -->
                <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
                  <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span class="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    WCAG AAA
                  </h3>
                  <div class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-gray-700 dark:text-gray-300">Normal Text (7:1)</span>
                      @if (contrastResult()!.aaa.normal) {
                        <span class="flex items-center text-green-600 dark:text-green-400 font-semibold">
                          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Pass
                        </span>
                      } @else {
                        <span class="flex items-center text-red-600 dark:text-red-400 font-semibold">
                          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          Fail
                        </span>
                      }
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-gray-700 dark:text-gray-300">Large Text (4.5:1)</span>
                      @if (contrastResult()!.aaa.large) {
                        <span class="flex items-center text-green-600 dark:text-green-400 font-semibold">
                          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          Pass
                        </span>
                      } @else {
                        <span class="flex items-center text-red-600 dark:text-red-400 font-semibold">
                          <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                          Fail
                        </span>
                      }
                    </div>
                  </div>
                </div>
              </div>

              <!-- Info Note -->
              <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p class="text-sm text-blue-800 dark:text-blue-300">
                  <strong>Note:</strong> Large text is defined as 18pt (24px) or 14pt (18.66px) bold and larger.
                  WCAG AA is the minimum standard for most websites, while AAA provides enhanced accessibility.
                </p>
              </div>
            </div>
          }
        </section>

        <!-- WCAG Info Section -->
        <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-6">
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4">Understanding WCAG Standards</h2>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Level AA (Minimum)</h3>
              <p class="text-sm">Requires a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text. This is the legal requirement for most websites.</p>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Level AAA (Enhanced)</h3>
              <p class="text-sm">Requires a contrast ratio of at least 7:1 for normal text and 4.5:1 for large text. Provides the highest level of accessibility.</p>
            </div>
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
export class ContrastCheckerComponent implements OnInit {
  private colorService = inject(ColorService);
  private toastService = inject(ToastService);
  private seoService = inject(SeoService);

  textColor = '#000000';
  backgroundColor = '#FFFFFF';
  contrastResult = signal<ContrastResult | null>(null);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contrast Checker - WCAG Accessibility Compliance | Color Tools',
      description: 'Check color contrast ratios for WCAG AA and AAA compliance. Ensure your website meets accessibility standards.',
      keywords: 'contrast checker, wcag contrast, accessibility, color contrast, aa compliance, aaa compliance',
      author: 'Color Tools',
      ogUrl: 'https://colorutils.com/contrast-checker',
      canonical: 'https://colorutils.com/contrast-checker'
    });

    // Initial check
    this.checkContrast();
  }

  checkContrast(): void {
    const textRgb = this.colorService.parseColor(this.textColor);
    const bgRgb = this.colorService.parseColor(this.backgroundColor);

    if (!textRgb || !bgRgb) {
      return;
    }

    const ratio = this.colorService.getContrastRatio(textRgb, bgRgb);

    const result: ContrastResult = {
      ratio,
      aa: {
        normal: ratio >= 4.5,
        large: ratio >= 3
      },
      aaa: {
        normal: ratio >= 7,
        large: ratio >= 4.5
      }
    };

    this.contrastResult.set(result);
  }

  applyPreset(text: string, background: string): void {
    this.textColor = text;
    this.backgroundColor = background;
    this.checkContrast();
    this.toastService.success('Preset applied!');
  }
}
