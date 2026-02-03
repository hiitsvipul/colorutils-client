import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-primary-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        <!-- Animated background elements -->
        <div class="absolute inset-0 opacity-20">
          <div class="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow"></div>
          <div class="absolute bottom-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span class="inline-block animate-slide-down">Professional</span>
              <span class="inline-block animate-slide-down" style="animation-delay: 0.1s;"> Color</span>
              <span class="inline-block animate-slide-down" style="animation-delay: 0.2s;"> Tools</span>
            </h1>
            <p class="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up" style="animation-delay: 0.3s;">
              Everything you need for color management: pick, convert, and analyze colors with ease.
            </p>
            <div class="flex flex-wrap justify-center gap-4 animate-scale-in" style="animation-delay: 0.5s;">
              <a 
                routerLink="/screen-picker"
                class="group px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-2xl hover:shadow-glow-lg hover:scale-110 transition-all duration-300 hover:-translate-y-1"
              >
                <span class="flex items-center gap-2">
                  Get Started
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </a>
              <a 
                href="#features"
                class="px-8 py-4 glass-strong text-primary-600 dark:text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:-translate-y-1"
              >
                Explore Tools
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Ad Placeholder -->
      <div class="bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4 py-6">
          <app-ad-placeholder size="banner"></app-ad-placeholder>
        </div>
      </div>

      <!-- Features Section -->
      <section id="features" class="py-20 bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="gradient-text">Powerful Color Tools</span>
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our suite of tools helps designers and developers work with colors more efficiently.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            @for (tool of tools; track tool.name) {
              <a 
                [routerLink]="tool.route"
                class="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:-translate-y-2 animate-slide-up border border-gray-200 dark:border-slate-700"
                [style.animation-delay]="($index * 0.1) + 's'"
              >
                <div class="w-16 h-16 bg-gradient-to-br from-primary-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                  <svg class="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="tool.icon"></path>
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {{ tool.name }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {{ tool.description }}
                </p>
              </a>
            }
          </div>
        </div>
      </section>

      <!-- Why Choose Us Section -->
      <section class="py-20 bg-gray-50 dark:bg-slate-800">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="gradient-text">Why Choose Color Tools?</span>
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div class="text-center group animate-slide-up" style="animation-delay: 0.1s;">
              <div class="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Fast & Efficient</h3>
              <p class="text-gray-600 dark:text-gray-300">
                All tools run locally in your browser for instant results
              </p>
            </div>

            <div class="text-center group animate-slide-up" style="animation-delay: 0.2s;">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">Privacy First</h3>
              <p class="text-gray-600 dark:text-gray-300">
                No data is sent to servers - everything stays in your browser
              </p>
            </div>

            <div class="text-center group animate-slide-up" style="animation-delay: 0.3s;">
              <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Always Free</h3>
              <p class="text-gray-600 dark:text-gray-400">
                All tools are completely free with no hidden charges
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4">
          <div class="bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 class="text-4xl font-bold mb-4">Ready to Start?</h2>
            <p class="text-xl mb-8 text-primary-100">
              Try our color tools now and enhance your workflow
            </p>
            <a 
              routerLink="/screen-picker"
              class="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Start Picking Colors
            </a>
          </div>
        </div>
      </section>

      <!-- Ad Placeholder Bottom -->
      <div class="bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4 pb-8">
          <app-ad-placeholder size="rectangle"></app-ad-placeholder>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  private seoService = inject(SeoService);

  tools = [
    {
      name: 'Image Color Picker',
      description: 'Upload images and pick colors with precision using zoom and magnifier',
      route: '/image-picker',
      icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    },
    {
      name: 'Screen Color Picker',
      description: 'Pick colors from anywhere on your screen using the EyeDropper API',
      route: '/screen-picker',
      icon: 'M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
    },
    {
      name: 'Color Converter',
      description: 'Convert between HEX, RGB, HSL, and CMYK color formats instantly',
      route: '/converter',
      icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
    },
    {
      name: 'Contrast Checker',
      description: 'Check WCAG compliance and ensure your colors meet accessibility standards',
      route: '/contrast-checker',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      name: 'Palette Generator',
      description: 'Generate beautiful color palettes using color theory or extract from images',
      route: '/palette-generator',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    },
    {
      name: 'Gradient Generator',
      description: 'Create stunning CSS gradients with live preview and export options',
      route: '/gradient-generator',
      icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
    }
  ];

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Color Tools - Professional Color Picker, Converter & Accessibility Checker',
      description: 'Free online color tools for designers and developers. Pick colors from screen or images, convert between formats, and check WCAG contrast ratios.',
      keywords: 'color tools, color picker, hex converter, rgb converter, hsl converter, contrast checker, wcag, accessibility, eyedropper',
      author: 'Color Tools',
      ogUrl: 'https://colorutils.com/',
      canonical: 'https://colorutils.com/'
    });
  }
}
