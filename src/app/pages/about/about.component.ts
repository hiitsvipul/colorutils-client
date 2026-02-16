import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-about',
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
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">About ColorUtils</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Professional color utilities designed for designers, developers, and creative professionals who demand precision, privacy, and simplicity.
          </p>
        </div>

        <!-- Main Content -->
        <div class="max-w-4xl mx-auto space-y-12">

          <!-- Mission Section -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              ColorUtils exists to solve a critical problem in the design and development workflow: handling colors efficiently while protecting user privacy.
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              We believe that color tools should be:
            </p>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300 ml-4">
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Privacy-First:</strong> Your color work should never leave your device</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Fast & Efficient:</strong> Instant results without waiting for server responses</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Comprehensive:</strong> Multiple tools for every color-related task</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Free & Accessible:</strong> No paywalls, subscriptions, or sign-ups</span></li>
            </ul>
          </section>

          <!-- Why We Built ColorUtils -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Why We Built ColorUtils</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Designers and developers spend countless hours working with colors - picking them from designs, converting between formats, checking contrast for accessibility, and creating harmonious palettes. Yet existing tools often require:
            </p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
              <li>• Sign-ups and account creation</li>
              <li>• Sending your work to external servers</li>
              <li>• Complex interfaces that slow you down</li>
              <li>• Ads and distracting UI elements</li>
              <li>• Limited or paid features</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              ColorUtils was built as an alternative - a suite of fast, private, free color tools that work entirely in your browser. No servers. No tracking. No friction.
            </p>
          </section>

          <!-- Our Approach -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Approach: Client-Side First</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Every tool on ColorUtils is designed to run entirely in your browser. This means:
            </p>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Privacy by Design</h3>
                <p>Your color data never leaves your device. We can't track what colors you work with because we never see them. Your work is completely private.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Instant Performance</h3>
                <p>No network latency. No server delays. All calculations happen instantly on your machine, delivering results in milliseconds.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Works Offline</h3>
                <p>After the initial page load, ColorUtils works offline. You can use our tools without an internet connection.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Sustainable & Efficient</h3>
                <p>Client-side processing uses less bandwidth and reduces server costs, allowing us to keep ColorUtils free forever.</p>
              </div>
            </div>
          </section>

          <!-- The Tools -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Tools</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              ColorUtils provides seven essential tools covering every color-related task:
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">📷 Image Color Picker</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300">Extract colors from uploaded images with zoom and magnifier features.</p>
              </div>
              <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">🎨 Screen Color Picker</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300">Pick colors from anywhere on your screen using the EyeDropper API.</p>
              </div>
              <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">🔄 Color Converter</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300">Convert between HEX, RGB, HSL, and CMYK formats instantly.</p>
              </div>
              <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">♿ Contrast Checker</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300">Check WCAG accessibility compliance and contrast ratios.</p>
              </div>
              <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">🎨 Palette Generator</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300">Generate harmonious color palettes using color theory.</p>
              </div>
              <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">🌈 Gradient Generator</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300">Create beautiful CSS gradients with real-time preview.</p>
              </div>
              <div class="border border-gray-200 dark:border-gray-700 rounded p-4">
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">🎭 Theme Preview</h3>
                <p class="text-sm text-gray-700 dark:text-gray-300">Design and preview custom website themes.</p>
              </div>
            </div>
          </section>

          <!-- Commitment to Education -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Commitment to Education</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Beyond tools, ColorUtils provides comprehensive educational resources including:
            </p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
              <li>• <strong>Color Theory Guide:</strong> Learn fundamental color principles and design theory</li>
              <li>• <strong>Color Format Tutorials:</strong> Understand HEX, RGB, HSL, CMYK, and when to use each</li>
              <li>• <strong>Accessibility Standards:</strong> Master WCAG guidelines for accessible color choices</li>
              <li>• <strong>Real-World Use Cases:</strong> Explore how professionals use color in their work</li>
              <li>• <strong>Comprehensive FAQ:</strong> Get answers to common color and design questions</li>
            </ul>
            <p class="text-gray-700 dark:text-gray-300">
              We believe that understanding color theory is as important as having the tools to work with colors.
            </p>
          </section>

          <!-- Our Values -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 shadow-sm border border-blue-200 dark:border-blue-800">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Values</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Privacy</h3>
                <p class="text-gray-700 dark:text-gray-300">We will never collect, store, or sell your data. Privacy is a fundamental right.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Accessibility</h3>
                <p class="text-gray-700 dark:text-gray-300">Our tools are accessible to everyone, regardless of ability or background.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Simplicity</h3>
                <p class="text-gray-700 dark:text-gray-300">Powerful tools should be easy to use. No unnecessary complexity.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Generosity</h3>
                <p class="text-gray-700 dark:text-gray-300">Everything is free. We believe good tools should be available to all.</p>
              </div>
            </div>
          </section>

          <!-- Contact & Support -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Have questions, suggestions, or want to report a bug? We'd love to hear from you!
            </p>
            <div class="space-y-4">
              <div>
                <p class="font-bold text-gray-900 dark:text-white mb-2">Email:</p>
                <a href="mailto:flexboxdevssocial@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">flexboxdevs<wbr>social&#64;gmail.com</a>
              </div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white mb-2">Phone:</p>
                <a href="tel:+916261221248" class="text-blue-600 dark:text-blue-400 hover:underline">+91 6261221248</a>
              </div>
            </div>
            <p class="text-gray-600 dark:text-gray-400 mt-6 text-sm">
              Check out our comprehensive <a routerLink="/faq" class="text-blue-600 dark:text-blue-400 hover:underline">FAQ page</a> for common questions and answers.
            </p>
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
export class AboutComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'About Us | Color Utils',
      description: 'About ColorUtils - privacy-first color utilities for designers and developers. Learn our mission, values, and commitment to accessibility.',
      keywords: 'about color utils, color tools, design tools, privacy first, accessibility',
      canonical: 'https://colorutils.com/about'
    });
  }
}
