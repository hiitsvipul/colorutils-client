import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-sitemap',
  standalone: true,
  imports: [CommonModule, RouterModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-slate-950 py-8">
      <!-- Ad Placeholder Top -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4 mb-6">
          <app-ad-placeholder size="banner" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="max-w-4xl mx-auto mb-12">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Sitemap</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Complete navigation map of all pages and tools available on ColorUtils. Find what you're looking for quickly.
          </p>
        </div>

        <!-- Main Content -->
        <div class="max-w-4xl mx-auto space-y-8">

          <!-- Main Pages -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Main Pages</h2>
            <ul class="space-y-3">
              <li>
                <a routerLink="/" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Home
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Welcome to ColorUtils with getting started guide</p>
              </li>
              <li>
                <a routerLink="/about" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> About Us
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Learn about our mission, values, and commitment to privacy</p>
              </li>
              <li>
                <a routerLink="/contact" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Contact Us
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Get in touch with our team - email, phone, or contact form</p>
              </li>
            </ul>
          </section>

          <!-- Educational Resources -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Educational Resources</h2>
            <ul class="space-y-3">
              <li>
                <a routerLink="/color-theory" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Color Theory Guide
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Master fundamental color principles and design theory</p>
              </li>
              <li>
                <a routerLink="/faq" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> FAQ
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Comprehensive answers to common color and design questions</p>
              </li>
              <li>
                <a routerLink="/use-cases" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Use Cases
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Real-world applications of color in different industries</p>
              </li>
            </ul>
          </section>

          <!-- Color Tools -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Color Tools</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <a routerLink="/screen-picker" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Screen Color Picker
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Pick colors from anywhere on your screen</p>
              </div>
              <div>
                <a routerLink="/image-picker" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Image Color Picker
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Extract colors from uploaded images</p>
              </div>
              <div>
                <a routerLink="/converter" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Color Converter
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Convert between HEX, RGB, HSL, CMYK formats</p>
              </div>
              <div>
                <a routerLink="/contrast-checker" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Contrast Checker
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Check WCAG accessibility compliance</p>
              </div>
              <div>
                <a routerLink="/palette-generator" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Palette Generator
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Generate harmonious color palettes</p>
              </div>
              <div>
                <a routerLink="/gradient-generator" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Gradient Generator
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Create beautiful CSS gradients</p>
              </div>
              <div>
                <a routerLink="/theme-preview" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Theme Preview
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Design and preview custom website themes</p>
              </div>
            </div>
          </section>

          <!-- Legal & Compliance -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Legal & Compliance</h2>
            <ul class="space-y-3">
              <li>
                <a routerLink="/privacy" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Privacy Policy
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Learn how we protect your privacy and data</p>
              </li>
              <li>
                <a routerLink="/terms" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Terms & Conditions
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Read our legal terms and conditions of service</p>
              </li>
              <li>
                <a routerLink="/cookie-policy" class="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                  <span class="mr-2">→</span> Cookie Policy
                </a>
                <p class="text-sm text-gray-600 dark:text-gray-400 ml-6">Understand how we use cookies and GDPR compliance</p>
              </li>
            </ul>
          </section>

          <!-- Site Information -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 shadow-sm border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Site Information</h2>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <p class="font-bold text-gray-900 dark:text-white mb-1">Total Pages:</p>
                <p>14+ pages including tools, resources, and legal pages</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white mb-1">Last Updated:</p>
                <p>February 15, 2026</p>
              </div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white mb-1">Quick Links:</p>
                <p>
                  <a href="mailto:flexboxdevssocial@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">Email</a> •
                  <a href="tel:+916261221248" class="text-blue-600 dark:text-blue-400 hover:underline">Phone</a> •
                  <a routerLink="/faq" class="text-blue-600 dark:text-blue-400 hover:underline">FAQ</a>
                </p>
              </div>
            </div>
          </section>

          <!-- Navigation Tips -->
          <section class="bg-gray-100 dark:bg-gray-800 rounded-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Navigation Tips</h2>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>Search:</strong> Use your browser's find function (Ctrl+F / Cmd+F) to search on this page</li>
              <li><strong>Tools Menu:</strong> Access all color tools from the main navigation menu</li>
              <li><strong>Mobile Friendly:</strong> All pages are fully responsive and mobile-optimized</li>
              <li><strong>Accessibility:</strong> All pages follow WCAG accessibility guidelines</li>
              <li><strong>Fast Loading:</strong> Pages use lazy loading for optimal performance</li>
            </ul>
          </section>

        </div>
      </div>

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
export class SitemapComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Sitemap | Color Utils',
      description: 'Complete sitemap of ColorUtils - all pages, tools, resources, and navigation. Find what you\'re looking for quickly.',
      keywords: 'sitemap, navigation, site map, pages, tools',
      canonical: 'https://colorutils.com/sitemap'
    });
  }
}
