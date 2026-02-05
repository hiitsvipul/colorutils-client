import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="mt-16">
      <div class="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800">
        <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
