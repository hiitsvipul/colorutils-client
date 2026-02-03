import { Injectable, signal, effect } from '@angular/core';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // Signal for reactive theme state
  theme = signal<Theme>(this.getInitialTheme());

  constructor() {
    // Effect to apply theme changes to DOM and localStorage
    effect(() => {
      const currentTheme = this.theme();
      this.applyTheme(currentTheme);
    });
  }

  /**
   * Get initial theme from localStorage or default to dark
   */
  private getInitialTheme(): Theme {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      const stored = localStorage.getItem('color-tools-theme');
      return (stored === 'light' || stored === 'dark') ? stored : 'dark';
    }
    return 'dark';
  }

  /**
   * Apply theme to document root element
   */
  private applyTheme(theme: Theme): void {
    if (typeof document !== 'undefined') {
      const root = document.documentElement;
      
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      
      // Persist to localStorage
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('color-tools-theme', theme);
      }
    }
  }

  /**
   * Toggle between light and dark theme
   */
  toggleTheme(): void {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }

  /**
   * Set specific theme
   */
  setTheme(theme: Theme): void {
    this.theme.set(theme);
  }
}
