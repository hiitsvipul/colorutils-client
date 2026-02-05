import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-slate-700 shadow-lg">
      <nav class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center space-x-2 group">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow group-hover:scale-110 transition-all duration-300">
              <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-700">Color Utils</span>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-1">
            <a 
              *ngFor="let link of navLinks" 
              [routerLink]="link.path" 
              routerLinkActive="nav-link-active"
              [routerLinkActiveOptions]="{exact: true}"
              class="nav-link px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative"
            >
              {{ link.label }}
            </a>
          </div>

          <!-- Theme Toggle & Mobile Menu -->
          <div class="flex items-center space-x-3">
            <!-- Theme Toggle Button -->
            <button
              (click)="toggleTheme()"
              class="p-3 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300 group"
              [attr.aria-label]="themeService.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
              title="Toggle theme"
            >
              @if (themeService.theme() === 'dark') {
                <svg class="w-5 h-5 text-yellow-400 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              } @else {
                <svg class="w-5 h-5 text-slate-700 group-hover:rotate-180 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                </svg>
              }
            </button>

            <!-- Mobile Menu Button -->
            <button
              (click)="toggleMobileMenu()"
              class="md:hidden p-3 rounded-xl bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg class="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation -->
        @if (mobileMenuOpen) {
          <div class="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-slate-700 animate-slide-down">
            <div class="flex flex-col space-y-2">
              <a 
                *ngFor="let link of navLinks" 
                [routerLink]="link.path" 
                routerLinkActive="bg-gradient-to-r from-primary-500 to-purple-500 text-white shadow-lg"
                (click)="closeMobileMenu()"
                class="px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 font-medium"
              >
                {{ link.label }}
              </a>
            </div>
          </div>
        }
      </nav>
    </header>
  `,
  styles: [`
    .nav-link {
      position: relative;
    }
    
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 3px;
      background: #3b82f6;
      transition: width 0.3s ease-in-out;
    }
    
    .nav-link:hover::after {
      width: 100%;
    }
    
    .nav-link-active {
      color: #2563eb !important;
    }
    
    .dark .nav-link-active {
      color: #60a5fa !important;
    }
    
    .nav-link-active::after {
      width: 100% !important;
    }
  `]
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  mobileMenuOpen = false;

  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Image Picker', path: '/image-picker' },
    { label: 'Screen Picker', path: '/screen-picker' },
    { label: 'Converter', path: '/converter' },
    { label: 'Contrast Checker', path: '/contrast-checker' },
    { label: 'Palette Generator', path: '/palette-generator' },
    { label: 'Gradient Generator', path: '/gradient-generator' },
    { label: 'Theme Preview', path: '/theme-preview' }
  ];

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }
}
