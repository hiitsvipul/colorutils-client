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
          <a routerLink="/" class="flex mr-5 items-center space-x-2 group">
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
              class="nav-link px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium relative whitespace-nowrap"
            >
              {{ link.label }}
            </a>

            <!-- Tools Dropdown -->
            <div class="relative group">
              <button class="nav-link px-4 py-3 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 font-medium flex items-center gap-1">
                Tools
                <svg class="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </button>
              
              <!-- Dropdown Menu -->
              <div class="absolute left-0 mt-0 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-gray-200 dark:border-slate-700 z-50">
                <a routerLink="/image-picker" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                  📷 Image Picker
                </a>
                <a routerLink="/screen-picker" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                  🎨 Screen Picker
                </a>
                <a routerLink="/converter" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                  🔄 Color Converter
                </a>
                <a routerLink="/contrast-checker" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                  ♿ Contrast Checker
                </a>
                <a routerLink="/palette-generator" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                  🎨 Palette Generator
                </a>
                <a routerLink="/gradient-generator" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                  🌈 Gradient Generator
                </a>
                <a routerLink="/theme-preview" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                  🎭 Theme Preview
                </a>
              </div>
            </div>
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

              <!-- Mobile Tools Section -->
              <div class="pt-2 mt-2 border-t border-gray-200 dark:border-slate-700">
                <div class="px-4 py-2 text-sm font-semibold text-gray-600 dark:text-gray-400">Tools</div>
                <a routerLink="/image-picker" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors rounded-lg">
                  📷 Image Picker
                </a>
                <a routerLink="/screen-picker" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors rounded-lg">
                  🎨 Screen Picker
                </a>
                <a routerLink="/converter" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors rounded-lg">
                  🔄 Color Converter
                </a>
                <a routerLink="/contrast-checker" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors rounded-lg">
                  ♿ Contrast Checker
                </a>
                <a routerLink="/palette-generator" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors rounded-lg">
                  🎨 Palette Generator
                </a>
                <a routerLink="/gradient-generator" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors rounded-lg">
                  🌈 Gradient Generator
                </a>
                <a routerLink="/theme-preview" (click)="closeMobileMenu()" class="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors rounded-lg">
                  🎭 Theme Preview
                </a>
              </div>
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
    { label: 'Learn', path: '/color-theory' },
    { label: 'Use Cases', path: '/use-cases' },
    { label: 'FAQ', path: '/faq' }
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
