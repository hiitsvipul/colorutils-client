import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-color-theory',
  standalone: true,
  imports: [CommonModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-slate-950">
      <!-- Ad Top -->
      <div class="bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4 py-6">
          <app-ad-placeholder size="banner" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>

      <article class="container mx-auto px-4 py-12">
        <!-- Header -->
        <header class="max-w-4xl mx-auto mb-12">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Color Theory Fundamentals
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 mb-4">
            Master the principles of color theory to create harmonious and impactful designs.
          </p>
          <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            <span>📅 Published: February 9, 2026</span>
            <span>⏱️ 10 min read</span>
          </div>
        </header>

        <!-- Table of Contents -->
        <nav class="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">📑 Table of Contents</h2>
          <ul class="space-y-2 text-primary-600 dark:text-primary-400">
            <li><a href="#color-models" class="hover:underline">1. Color Models (RGB, HSL, CMYK)</a></li>
            <li><a href="#color-wheel" class="hover:underline">2. The Color Wheel</a></li>
            <li><a href="#harmony" class="hover:underline">3. Color Harmony</a></li>
            <li><a href="#contrast" class="hover:underline">4. Contrast & Accessibility</a></li>
            <li><a href="#psychology" class="hover:underline">5. Color Psychology</a></li>
            <li><a href="#best-practices" class="hover:underline">6. Best Practices</a></li>
          </ul>
        </nav>

        <!-- Main Content -->
        <div class="max-w-4xl mx-auto space-y-12">

          <!-- Section 1 -->
          <section id="color-models" class="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎨 1. Understanding Color Models</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Different color models represent colors in different ways, each suited for specific purposes.
            </p>

            <div class="space-y-6">
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">RGB (Red, Green, Blue)</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Used for:</strong> Digital screens, web design, photography
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  RGB is an additive model where light is combined. Each color is represented as a mixture of red, green, and blue light intensities ranging from 0-255. For example, white is RGB(255, 255, 255) and black is RGB(0, 0, 0).
                </p>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">HSL (Hue, Saturation, Lightness)</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Used for:</strong> Web design, CSS styling, intuitive color selection
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  HSL represents color in a more intuitive way. Hue (0-360°) defines the color, Saturation (0-100%) defines intensity, and Lightness (0-100%) defines brightness. HSL makes it easier to create color variations.
                </p>
              </div>

              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">CMYK (Cyan, Magenta, Yellow, Black)</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Used for:</strong> Print design, physical media
                </p>
                <p class="text-gray-700 dark:text-gray-300">
                  CMYK is a subtractive model used in printing. Unlike RGB which adds light, CMYK removes light by overlaying inks. This is why the models differ significantly.
                </p>
              </div>
            </div>
          </section>

          <!-- Section 2 -->
          <section id="color-wheel" class="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">🔄 2. The Color Wheel</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              The color wheel is a visual representation of colors arranged by their chromatic relationship. It's fundamental to understanding color relationships and creating harmonious palettes.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Primary Colors</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                  In traditional color theory: Red, Yellow, Blue
                </p>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  Cannot be created by mixing other colors
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Secondary Colors</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                  Created by mixing two primary colors: Green, Orange, Purple
                </p>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  Positioned between primary colors on the wheel
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tertiary Colors</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                  Created by mixing a primary and secondary color
                </p>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  Creates a total of 12 colors on the traditional wheel
                </p>
              </div>

              <div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Warm vs Cool</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-2">
                  Warm: Reds, oranges, yellows. Cool: Blues, greens, purples
                </p>
                <p class="text-gray-600 dark:text-gray-400 text-sm">
                  Affects mood and perception of designs
                </p>
              </div>
            </div>
          </section>

          <!-- Section 3 -->
          <section id="harmony" class="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">🎼 3. Color Harmony Schemes</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              Color harmony refers to combinations of colors that look visually appealing together. These schemes create balance and order.
            </p>

            <div class="space-y-4">
              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Complementary Colors</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">
                  Colors opposite on the color wheel (e.g., blue and orange). Creates high contrast and visual excitement. Use one as primary and the other as accent.
                </p>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Analogous Colors</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">
                  Colors next to each other on the wheel (e.g., blue, blue-green, green). Creates harmony and cohesion. Great for calm, unified designs.
                </p>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Triadic Colors</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">
                  Three colors equally spaced on the wheel (120° apart). Creates vibrant, balanced schemes. Popular in modern design.
                </p>
              </div>

              <div class="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Monochromatic Colors</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">
                  Variations of a single color (different tints, tones, shades). Creates sophisticated, unified look. Excellent for professional designs.
                </p>
              </div>
            </div>
          </section>

          <!-- Section 4 -->
          <section id="contrast" class="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">♿ 4. Contrast & Accessibility</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              Proper color contrast is essential for accessibility and readability. WCAG (Web Content Accessibility Guidelines) sets standards for color contrast ratios.
            </p>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-6">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-3">WCAG Contrast Standards</h3>
              <div class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p><strong>Level AA (Minimum):</strong> 4.5:1 for normal text, 3:1 for large text</p>
                <p><strong>Level AAA (Enhanced):</strong> 7:1 for normal text, 4.5:1 for large text</p>
                <p><strong>Best Practice:</strong> Aim for AAA compliance for inclusive design</p>
              </div>
            </div>

            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Why It Matters</h3>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ Helps users with color blindness (8% of males, 0.5% of females)</li>
              <li>✅ Improves readability for aging users</li>
              <li>✅ Better readability in bright sunlight</li>
              <li>✅ Improves overall user experience</li>
              <li>✅ Ensures legal compliance (ADA, WCAG)</li>
            </ul>
          </section>

          <!-- Section 5 -->
          <section id="psychology" class="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">🧠 5. Color Psychology</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              Colors evoke emotions and psychological responses. Understanding color psychology helps create designs that communicate the right message.
            </p>

            <div class="space-y-4">
              <div class="border-l-4 border-red-500 pl-4">
                <h3 class="font-semibold text-gray-900 dark:text-white">Red</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Energy, passion, urgency, excitement. Use for CTAs or important messages.</p>
              </div>

              <div class="border-l-4 border-blue-500 pl-4">
                <h3 class="font-semibold text-gray-900 dark:text-white">Blue</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Trust, calm, stability, professionalism. Most used in corporate design.</p>
              </div>

              <div class="border-l-4 border-green-500 pl-4">
                <h3 class="font-semibold text-gray-900 dark:text-white">Green</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Growth, health, nature, balance. Associated with eco-friendly and wellness brands.</p>
              </div>

              <div class="border-l-4 border-yellow-500 pl-4">
                <h3 class="font-semibold text-gray-900 dark:text-white">Yellow</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Optimism, happiness, warmth. Use sparingly to avoid overwhelming.</p>
              </div>

              <div class="border-l-4 border-purple-500 pl-4">
                <h3 class="font-semibold text-gray-900 dark:text-white">Purple</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Creativity, luxury, mystery. Popular for premium and tech brands.</p>
              </div>

              <div class="border-l-4 border-orange-500 pl-4">
                <h3 class="font-semibold text-gray-900 dark:text-white">Orange</h3>
                <p class="text-gray-700 dark:text-gray-300 text-sm">Enthusiasm, energy, creativity. Creates friendly, approachable feeling.</p>
              </div>
            </div>
          </section>

          <!-- Section 6 -->
          <section id="best-practices" class="bg-white dark:bg-gray-900 rounded-lg p-8 border border-gray-200 dark:border-gray-700">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">⭐ 6. Best Practices</h2>
            <div class="space-y-3">
              <div class="flex gap-3">
                <span class="text-2xl">✓</span>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Limit your palette</h3>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Use 3-5 colors maximum. Primary color, secondary color, accent colors, and neutrals.</p>
                </div>
              </div>

              <div class="flex gap-3">
                <span class="text-2xl">✓</span>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Consider context</h3>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Colors have cultural meanings. Research your target audience.</p>
                </div>
              </div>

              <div class="flex gap-3">
                <span class="text-2xl">✓</span>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Test for accessibility</h3>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Always check contrast ratios and test with color blindness simulators.</p>
                </div>
              </div>

              <div class="flex gap-3">
                <span class="text-2xl">✓</span>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Use color intentionally</h3>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Every color should serve a purpose. Don't use colors randomly.</p>
                </div>
              </div>

              <div class="flex gap-3">
                <span class="text-2xl">✓</span>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white">Don't rely on color alone</h3>
                  <p class="text-gray-700 dark:text-gray-300 text-sm">Use patterns, icons, or text to convey information, not just color.</p>
                </div>
              </div>
            </div>
          </section>

          <!-- CTA -->
          <section class="bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg p-8">
            <h2 class="text-2xl font-bold mb-4">Ready to Apply These Principles?</h2>
            <p class="mb-6">
              Use our color tools to put these color theory principles into practice.
            </p>
            <div class="flex flex-wrap gap-4">
              <a routerLink="/palette-generator" class="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                Generate Palettes
              </a>
              <a routerLink="/contrast-checker" class="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                Check Contrast
              </a>
            </div>
          </section>
        </div>
      </article>

      <!-- Ad Bottom -->
      <div class="bg-white dark:bg-slate-900 mt-12">
        <div class="container mx-auto px-4 py-6">
          <app-ad-placeholder size="rectangle" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ColorTheoryComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Color Theory Fundamentals Guide - ColorUtils',
      description: 'Learn color theory principles including color models, harmony, psychology, and accessibility guidelines for design.',
      keywords: 'color theory, color models, color harmony, color psychology, accessibility, WCAG'
    });
  }
}
