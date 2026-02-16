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
          <app-ad-placeholder size="banner" [enableAds]="false"></app-ad-placeholder>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <!-- Header Section -->
        <article class="mb-12">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Contrast Checker</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Check color contrast ratios for accessibility compliance. Ensure your text is readable according to WCAG guidelines and accessible to all users, including those with color blindness or vision impairments.
          </p>
          
          <!-- Why Use Section -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Check Color Contrast?</h2>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Legal Compliance:</strong> WCAG 2.1 is an official accessibility standard - poor contrast can result in legal liability and accessibility lawsuits.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Accessibility for All:</strong> 1 in 12 men and 1 in 200 women have color blindness - proper contrast helps everyone read your content.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Better Readability:</strong> High contrast improves readability for people with low vision, dyslexia, and other visual conditions.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>SEO & User Experience:</strong> Accessible design improves user experience and can boost SEO rankings.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Design Best Practice:</strong> Professional designers always verify contrast - it's essential for quality web and print design.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Mobile Readability:</strong> High contrast is especially important for mobile screens and outdoor viewing conditions.</span></li>
            </ul>
          </section>

          <!-- WCAG Standards Section -->
          <section class="bg-orange-50 dark:bg-orange-900/20 rounded-lg p-6 mb-6 border border-orange-200 dark:border-orange-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">WCAG Accessibility Standards</h2>
            <p class="mb-4 text-gray-700 dark:text-gray-300">The Web Content Accessibility Guidelines (WCAG) define minimum contrast ratios for different text sizes:</p>
            <div class="space-y-3 text-gray-700 dark:text-gray-300">
              <div class="p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <p><strong>AA Level (Minimum):</strong> 4.5:1 for normal text, 3:1 for large text (18pt+ or 14pt+ bold)</p>
              </div>
              <div class="p-3 bg-white dark:bg-gray-800 rounded border border-orange-300 dark:border-orange-700">
                <p><strong>AAA Level (Enhanced):</strong> 7:1 for normal text, 4.5:1 for large text - better readability for users with vision impairments</p>
              </div>
              <p class="mt-4">This tool checks against both standards so you can ensure your design meets accessibility requirements.</p>
            </div>
          </section>

          <!-- How It Works Section -->
          <section class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use the Contrast Checker</h2>
            <ol class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">1.</span> <span>Enter the background color (where text will be placed) in any format (HEX, RGB, HSL).</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">2.</span> <span>Enter the text/foreground color in any format.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">3.</span> <span>The tool instantly calculates the contrast ratio and shows WCAG compliance status.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">4.</span> <span>Check the AA and AAA columns - green means compliant, red means fail.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">5.</span> <span>Use the live preview to see how the text looks on the background.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">6.</span> <span>If contrast is too low, adjust the colors until you reach at least AA compliance.</span></li>
            </ol>
          </section>
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
          <app-ad-placeholder size="rectangle" [enableAds]="false"></app-ad-placeholder>
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
      title: 'Contrast Checker - WCAG Accessibility Compliance | Color Utils',
      description: 'Check color contrast ratios for WCAG AA and AAA compliance. Ensure your website meets accessibility standards.',
      keywords: 'contrast checker, wcag contrast, accessibility, color contrast, aa compliance, aaa compliance',
      author: 'Color Utils',
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
