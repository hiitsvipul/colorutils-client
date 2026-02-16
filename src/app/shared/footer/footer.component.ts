import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="mt-16">
      <div class="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
        <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- About Section -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Color Utils</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Professional color utils for designers and developers. Pick, convert, and analyze colors with ease.
            </p>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Quick Links</h3>
            <ul class="space-y-2">
              <li *ngFor="let link of quickLinks">
                <a 
                  [href]="link.url" 
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
                >
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Us -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Contact Us</h3>
            <ul class="space-y-2">
              <li>
                <a 
                  href="mailto:flexboxdevssocial@gmail.com"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors flex items-start"
                >
                  <svg class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+916261221248"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors flex items-start"
                >
                  <svg class="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>+91 6261221248</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Resources -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Resources</h3>
            <ul class="space-y-2">
              <li *ngFor="let resource of resources">
                <a 
                  [href]="resource.url" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors flex items-center"
                >
                  {{ resource.label }}
                  <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright -->
        <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
          <div class="mb-4 flex flex-wrap justify-center gap-4 text-xs md:text-sm">
            <a routerLink="/about" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">About</a>
            <span class="text-gray-400 dark:text-gray-600">•</span>
            <a routerLink="/contact" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">Contact</a>
            <span class="text-gray-400 dark:text-gray-600">•</span>
            <a routerLink="/sitemap" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">Sitemap</a>
            <span class="text-gray-400 dark:text-gray-600">•</span>
            <a routerLink="/privacy" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">Privacy</a>
            <span class="text-gray-400 dark:text-gray-600">•</span>
            <a routerLink="/terms" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">Terms</a>
            <span class="text-gray-400 dark:text-gray-600">•</span>
            <a routerLink="/cookie-policy" class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer">Cookies</a>
          </div>
          <p class="text-center text-gray-600 dark:text-gray-400 text-sm">
            © {{ currentYear }} Color Utils. All rights reserved. Built with Angular & Tailwind CSS.
          </p>
        </div>
      </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  quickLinks = [
    { label: 'Image Color Picker', url: '/image-picker' },
    { label: 'Screen Color Picker', url: '/screen-picker' },
    { label: 'Color Converter', url: '/converter' },
    { label: 'Contrast Checker', url: '/contrast-checker' },
    { label: 'Theme Preview', url: '/theme-preview' }
  ];

  resources = [
    { label: 'WCAG Guidelines', url: 'https://www.w3.org/WAI/WCAG21/quickref/' },
    { label: 'Color Theory', url: 'https://www.interaction-design.org/literature/topics/color-theory' },
    { label: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/color' }
  ];
}
