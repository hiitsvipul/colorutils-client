import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from '../../services/color.service';
import { ToastService } from '../../services/toast.service';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textSecondary: string;
}

@Component({
  selector: 'app-theme-preview',
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
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-3">Theme Preview</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Create and preview custom website themes. See how your color choices look on real UI components before implementing them.
          </p>
          
          <!-- Why Use Section -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6 border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why Use a Theme Preview?</h2>
            <ul class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Visualize Before Implementing:</strong> See exactly how your colors look across all UI elements before writing code.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Test Color Combinations:</strong> Verify contrast, readability, and visual hierarchy on real components.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Fast Design Iterations:</strong> Change colors instantly and see results across your entire UI - save development time.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Consistency Validation:</strong> Ensure brand colors work consistently across buttons, cards, navigation, and other components.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Dark Mode Support:</strong> Preview themes in both light and dark modes to ensure accessibility.</span></li>
              <li class="flex items-start"><span class="text-blue-600 dark:text-blue-400 mr-3">✓</span> <span><strong>Stakeholder Approval:</strong> Show clients and team members exactly what the finished design will look like.</span></li>
            </ul>
          </section>

          <!-- Theme Components Section -->
          <section class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 mb-6 border border-purple-200 dark:border-purple-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Theme Color Roles</h2>
            <div class="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h3 class="font-bold text-lg mb-2">Primary Color</h3>
                <p>The main brand color used for key actions, links, and primary UI elements. This should be your most recognizable color.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Secondary Color</h3>
                <p>Supporting color for secondary actions and less critical UI elements. Should complement but not compete with primary.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Accent Color</h3>
                <p>Highlight color for special emphasis, alerts, or important information. Use sparingly for maximum impact.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Background & Surface</h3>
                <p>Colors for page backgrounds and card/component surfaces. Should have sufficient contrast with text.</p>
              </div>
              <div>
                <h3 class="font-bold text-lg mb-2">Text Colors</h3>
                <p>Primary text and secondary text colors. Must meet accessibility contrast ratios for readability.</p>
              </div>
            </div>
          </section>

          <!-- How It Works Section -->
          <section class="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">How to Use the Theme Preview</h2>
            <ol class="space-y-3 text-gray-700 dark:text-gray-300">
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">1.</span> <span>Select your primary brand color using the color picker or by entering a color value.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">2.</span> <span>Customize secondary, accent, and background colors to build your complete theme.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">3.</span> <span>See your theme applied to real UI components - buttons, cards, navigation, and more.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">4.</span> <span>Toggle between light and dark modes to ensure your theme works in both.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">5.</span> <span>Make adjustments and iterate until you're happy with the complete design.</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 font-bold mr-3">6.</span> <span>Export your theme colors in CSS or JSON format for implementation.</span></li>
            </ol>
          </section>
        </article>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <!-- Color Controls Sidebar -->
          <div class="lg:col-span-4 space-y-6">
            <!-- Controls Card -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Theme Colors</h2>
              
              <!-- Section Tabs -->
              <div class="mb-6 flex flex-wrap gap-2">
                @for (section of editingSections; track section.value) {
                  <button
                    (click)="editingSection.set(section.value)"
                    [class.bg-primary-600]="editingSection() === section.value"
                    [class.text-white]="editingSection() === section.value"
                    [class.bg-gray-100]="editingSection() !== section.value"
                    [class.dark:bg-gray-800]="editingSection() !== section.value"
                    [class.text-gray-700]="editingSection() !== section.value"
                    [class.dark:text-gray-300]="editingSection() !== section.value"
                    class="px-4 py-2 rounded-lg font-medium transition-all hover:scale-105 text-sm"
                  >
                    {{ section.label }}
                  </button>
                }
              </div>

              <div class="h-px bg-gray-200 dark:bg-gray-700 mb-6"></div>

              <!-- Global Theme Colors -->
              @if (editingSection() === 'global') {
                <div class="space-y-5">
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Set default theme colors that all sections will inherit
                  </p>
                  
                  <!-- Primary Color -->
              <div class="mb-5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Primary Color
                  @if (editingSection() !== 'global' && !getSectionColor('primary')) {
                    <span class="text-xs text-gray-500 dark:text-gray-400">(using global)</span>
                  }
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [ngModel]="getCurrentColor('primary')"
                    (ngModelChange)="updateSectionColor('primary', $event)"
                    class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [ngModel]="getCurrentColor('primary')"
                    (ngModelChange)="updateSectionColor('primary', $event)"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="#3b82f6"
                  />
                  @if (editingSection() !== 'global' && getSectionColor('primary')) {
                    <button
                      (click)="clearSectionColor('primary')"
                      class="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm"
                      title="Reset to global"
                    >
                      ↺
                    </button>
                  }
                </div>
              </div>

              <!-- Secondary Color -->
              <div class="mb-5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Secondary Color
                  @if (editingSection() !== 'global' && !getSectionColor('secondary')) {
                    <span class="text-xs text-gray-500 dark:text-gray-400">(using global)</span>
                  }
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [ngModel]="getCurrentColor('secondary')"
                    (ngModelChange)="updateSectionColor('secondary', $event)"
                    class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [ngModel]="getCurrentColor('secondary')"
                    (ngModelChange)="updateSectionColor('secondary', $event)"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="#8b5cf6"
                  />
                  @if (editingSection() !== 'global' && getSectionColor('secondary')) {
                    <button
                      (click)="clearSectionColor('secondary')"
                      class="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm"
                      title="Reset to global"
                    >
                      ↺
                    </button>
                  }
                </div>
              </div>

              <!-- Accent Color -->
              <div class="mb-5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Accent Color
                  @if (editingSection() !== 'global' && !getSectionColor('accent')) {
                    <span class="text-xs text-gray-500 dark:text-gray-400">(using global)</span>
                  }
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [ngModel]="getCurrentColor('accent')"
                    (ngModelChange)="updateSectionColor('accent', $event)"
                    class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [ngModel]="getCurrentColor('accent')"
                    (ngModelChange)="updateSectionColor('accent', $event)"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="#10b981"
                  />
                  @if (editingSection() !== 'global' && getSectionColor('accent')) {
                    <button
                      (click)="clearSectionColor('accent')"
                      class="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm"
                      title="Reset to global"
                    >
                      ↺
                    </button>
                  }
                </div>
              </div>

              <!-- Background Color -->
              <div class="mb-5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Background Color
                  @if (editingSection() !== 'global' && !getSectionColor('background')) {
                    <span class="text-xs text-gray-500 dark:text-gray-400">(using global)</span>
                  }
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [ngModel]="getCurrentColor('background')"
                    (ngModelChange)="updateSectionColor('background', $event)"
                    class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [ngModel]="getCurrentColor('background')"
                    (ngModelChange)="updateSectionColor('background', $event)"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="#ffffff"
                  />
                  @if (editingSection() !== 'global' && getSectionColor('background')) {
                    <button
                      (click)="clearSectionColor('background')"
                      class="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm"
                      title="Reset to global"
                    >
                      ↺
                    </button>
                  }
                </div>
              </div>

              <!-- Surface Color -->
              <div class="mb-5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Surface Color
                  @if (editingSection() !== 'global' && !getSectionColor('surface')) {
                    <span class="text-xs text-gray-500 dark:text-gray-400">(using global)</span>
                  }
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [ngModel]="getCurrentColor('surface')"
                    (ngModelChange)="updateSectionColor('surface', $event)"
                    class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [ngModel]="getCurrentColor('surface')"
                    (ngModelChange)="updateSectionColor('surface', $event)"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="#f9fafb"
                  />
                  @if (editingSection() !== 'global' && getSectionColor('surface')) {
                    <button
                      (click)="clearSectionColor('surface')"
                      class="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm"
                      title="Reset to global"
                    >
                      ↺
                    </button>
                  }
                </div>
              </div>

              <!-- Text Color -->
              <div class="mb-5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Text Color
                  @if (editingSection() !== 'global' && !getSectionColor('text')) {
                    <span class="text-xs text-gray-500 dark:text-gray-400">(using global)</span>
                  }
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [ngModel]="getCurrentColor('text')"
                    (ngModelChange)="updateSectionColor('text', $event)"
                    class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [ngModel]="getCurrentColor('text')"
                    (ngModelChange)="updateSectionColor('text', $event)"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="#111827"
                  />
                  @if (editingSection() !== 'global' && getSectionColor('text')) {
                    <button
                      (click)="clearSectionColor('text')"
                      class="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm"
                      title="Reset to global"
                    >
                      ↺
                    </button>
                  }
                </div>
              </div>

              <!-- Secondary Text Color -->
              <div class="mb-5">
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Secondary Text Color
                  @if (editingSection() !== 'global' && !getSectionColor('textSecondary')) {
                    <span class="text-xs text-gray-500 dark:text-gray-400">(using global)</span>
                  }
                </label>
                <div class="flex gap-3">
                  <input
                    type="color"
                    [ngModel]="getCurrentColor('textSecondary')"
                    (ngModelChange)="updateSectionColor('textSecondary', $event)"
                    class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer"
                  />
                  <input
                    type="text"
                    [ngModel]="getCurrentColor('textSecondary')"
                    (ngModelChange)="updateSectionColor('textSecondary', $event)"
                    class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="#6b7280"
                  />
                  @if (editingSection() !== 'global' && getSectionColor('textSecondary')) {
                    <button
                      (click)="clearSectionColor('textSecondary')"
                      class="px-3 py-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors text-sm"
                      title="Reset to global"
                    >
                      ↺
                    </button>
                  }
                </div>
              </div>
                </div>
              }

              <!-- Navbar Colors -->
              @if (editingSection() === 'navbar') {
                <div class="space-y-5">
                  <div class="flex items-center justify-between mb-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Customize colors for the navigation bar
                    </p>
                    <button
                      (click)="resetSection('navbar')"
                      class="px-3 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50"
                    >
                      Reset Section
                    </button>
                  </div>

                  <!-- Navbar Background -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Navbar Background
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('navbar', 'primary')" (ngModelChange)="updateSectionColor('primary', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('navbar', 'primary')" (ngModelChange)="updateSectionColor('primary', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Navbar Text -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Navbar Text/Links
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('navbar', 'background')" (ngModelChange)="updateSectionColor('background', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('navbar', 'background')" (ngModelChange)="updateSectionColor('background', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                </div>
              }

              <!-- Hero Section Colors -->
              @if (editingSection() === 'hero') {
                <div class="space-y-5">
                  <div class="flex items-center justify-between mb-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Customize colors for the hero section
                    </p>
                    <button
                      (click)="resetSection('hero')"
                      class="px-3 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50"
                    >
                      Reset Section
                    </button>
                  </div>

                  <!-- Hero Background -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Hero Background
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('hero', 'background')" (ngModelChange)="updateSectionColor('background', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('hero', 'background')" (ngModelChange)="updateSectionColor('background', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Hero Heading -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Hero Heading
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('hero', 'text')" (ngModelChange)="updateSectionColor('text', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('hero', 'text')" (ngModelChange)="updateSectionColor('text', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Hero Description -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Hero Description
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('hero', 'textSecondary')" (ngModelChange)="updateSectionColor('textSecondary', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('hero', 'textSecondary')" (ngModelChange)="updateSectionColor('textSecondary', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Hero Button -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Hero Button
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('hero', 'accent')" (ngModelChange)="updateSectionColor('accent', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('hero', 'accent')" (ngModelChange)="updateSectionColor('accent', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                </div>
              }

              <!-- Cards Section Colors -->
              @if (editingSection() === 'cards') {
                <div class="space-y-5">
                  <div class="flex items-center justify-between mb-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Customize colors for the feature cards section
                    </p>
                    <button
                      (click)="resetSection('cards')"
                      class="px-3 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50"
                    >
                      Reset Section
                    </button>
                  </div>

                  <!-- Cards Section Background -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Section Background
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('cards', 'surface')" (ngModelChange)="updateSectionColor('surface', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('cards', 'surface')" (ngModelChange)="updateSectionColor('surface', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Card Background -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Card Background
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('cards', 'background')" (ngModelChange)="updateSectionColor('background', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('cards', 'background')" (ngModelChange)="updateSectionColor('background', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Card Icon Background -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Icon Background
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('cards', 'secondary')" (ngModelChange)="updateSectionColor('secondary', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('cards', 'secondary')" (ngModelChange)="updateSectionColor('secondary', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Card Title -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Card Title
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('cards', 'text')" (ngModelChange)="updateSectionColor('text', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('cards', 'text')" (ngModelChange)="updateSectionColor('text', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Card Description -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Card Description
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('cards', 'textSecondary')" (ngModelChange)="updateSectionColor('textSecondary', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('cards', 'textSecondary')" (ngModelChange)="updateSectionColor('textSecondary', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                </div>
              }

              <!-- Footer Colors -->
              @if (editingSection() === 'footer') {
                <div class="space-y-5">
                  <div class="flex items-center justify-between mb-4">
                    <p class="text-sm text-gray-600 dark:text-gray-400">
                      Customize colors for the footer
                    </p>
                    <button
                      (click)="resetSection('footer')"
                      class="px-3 py-1 text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded hover:bg-red-200 dark:hover:bg-red-900/50"
                    >
                      Reset Section
                    </button>
                  </div>

                  <!-- Footer Background -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Footer Background
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('footer', 'text')" (ngModelChange)="updateSectionColor('text', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('footer', 'text')" (ngModelChange)="updateSectionColor('text', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Footer Text -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Footer Text/Links
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('footer', 'background')" (ngModelChange)="updateSectionColor('background', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('footer', 'background')" (ngModelChange)="updateSectionColor('background', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>

                  <!-- Footer Secondary Text -->
                  <div>
                    <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Footer Secondary Text
                    </label>
                    <div class="flex gap-3">
                      <input type="color" [ngModel]="getColorForSection('footer', 'textSecondary')" (ngModelChange)="updateSectionColor('textSecondary', $event)" class="w-16 h-10 rounded border-2 border-gray-300 dark:border-gray-700 cursor-pointer" />
                      <input type="text" [ngModel]="getColorForSection('footer', 'textSecondary')" (ngModelChange)="updateSectionColor('textSecondary', $event)" class="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white" />
                    </div>
                  </div>
                </div>
              }

              <!-- Action Buttons -->
              <div class="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                <button
                  (click)="resetColors()"
                  class="flex-1 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Reset
                </button>
                <button
                  (click)="exportTheme()"
                  class="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Export CSS
                </button>
              </div>
            </section>

            <!-- Ad Placeholder Sidebar (Desktop) -->
            <div class="hidden lg:block">
              <app-ad-placeholder size="square" [enableAds]="false"></app-ad-placeholder>
            </div>
          </div>

          <!-- Preview Section -->
          <div class="lg:col-span-8">
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Live Preview</h2>
                <div class="flex items-center gap-3">
                  <label class="text-sm font-medium text-gray-700 dark:text-gray-300">
                    View:
                  </label>
                  <select
                    [(ngModel)]="selectedSection"
                    class="px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent cursor-pointer"
                  >
                    @for (section of sections; track section.value) {
                      <option [value]="section.value">{{ section.label }}</option>
                    }
                  </select>
                </div>
              </div>

              <!-- Preview Container -->
              <div class="border-2 border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-inner">
                <!-- Preview Navbar -->
                @if (selectedSection() === 'all' || selectedSection() === 'navbar') {
                  <div
                    [style.background-color]="getColorForSection('navbar', 'primary')"
                    class="px-6 py-4 flex items-center justify-between"
                  >
                  <div
                    [style.color]="getColorForSection('navbar', 'background')"
                    class="text-xl font-bold"
                  >
                    Logo
                  </div>
                  <div class="flex gap-6">
                    <a
                      [style.color]="getColorForSection('navbar', 'background')"
                      class="hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      Home
                    </a>
                    <a
                      [style.color]="getColorForSection('navbar', 'background')"
                      class="hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      About
                    </a>
                    <a
                      [style.color]="getColorForSection('navbar', 'background')"
                      class="hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      Services
                    </a>
                    <a
                      [style.color]="getColorForSection('navbar', 'background')"
                      class="hover:opacity-80 transition-opacity cursor-pointer"
                    >
                      Contact
                    </a>
                  </div>
                  </div>
                }

                <!-- Preview Hero Section -->
                @if (selectedSection() === 'all' || selectedSection() === 'hero') {
                <div
                  [style.background-color]="getColorForSection('hero', 'background')"
                  class="px-6 py-12 text-center"
                >
                  <h1
                    [style.color]="getColorForSection('hero', 'text')"
                    class="text-4xl font-bold mb-4"
                  >
                    Welcome to Your Website
                  </h1>
                  <p
                    [style.color]="getColorForSection('hero', 'textSecondary')"
                    class="text-lg mb-6 max-w-2xl mx-auto"
                  >
                    This is how your website will look with your custom theme colors. Try different combinations to find the perfect match.
                  </p>
                  <button
                    [style.background-color]="getColorForSection('hero', 'accent')"
                    [style.color]="getColorForSection('hero', 'background')"
                    class="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Get Started
                  </button>
                  </div>
                }

                <!-- Preview Feature Cards -->
                @if (selectedSection() === 'all' || selectedSection() === 'cards') {
                <div
                  [style.background-color]="getColorForSection('cards', 'surface')"
                  class="px-6 py-12"
                >
                  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    @for (feature of features; track feature.title) {
                      <div
                        [style.background-color]="getColorForSection('cards', 'background')"
                        class="rounded-lg p-6 shadow-md"
                      >
                        <div
                          [style.background-color]="getColorForSection('cards', 'secondary')"
                          [style.color]="getColorForSection('cards', 'background')"
                          class="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                        >
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" [attr.d]="feature.icon"></path>
                          </svg>
                        </div>
                        <h3
                          [style.color]="getColorForSection('cards', 'text')"
                          class="text-xl font-bold mb-2"
                        >
                          {{ feature.title }}
                        </h3>
                        <p
                          [style.color]="getColorForSection('cards', 'textSecondary')"
                          class="text-sm"
                        >
                          {{ feature.description }}
                        </p>
                      </div>
                    }
                  </div>
                  </div>
                }

                <!-- Preview Footer -->
                @if (selectedSection() === 'all' || selectedSection() === 'footer') {
                <div
                  [style.background-color]="getColorForSection('footer', 'text')"
                  [style.color]="getColorForSection('footer', 'background')"
                  class="px-6 py-8 text-center"
                >
                  <div class="mb-4">
                    <div class="text-lg font-bold mb-2">Your Brand</div>
                    <p [style.color]="getColorForSection('footer', 'textSecondary')" class="text-sm opacity-80">
                      © 2026 All rights reserved
                    </p>
                  </div>
                  <div class="flex justify-center gap-6 text-sm">
                    <a class="hover:opacity-80 transition-opacity cursor-pointer">Privacy</a>
                    <a class="hover:opacity-80 transition-opacity cursor-pointer">Terms</a>
                    <a class="hover:opacity-80 transition-opacity cursor-pointer">Contact</a>
                  </div>
                  </div>
                }
              </div>

              <!-- Contrast Warnings -->
              @if (contrastWarnings().length > 0) {
                <div class="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                  <div class="flex items-start gap-3">
                    <svg class="w-5 h-5 text-yellow-600 dark:text-yellow-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                    </svg>
                    <div class="flex-1">
                      <h4 class="font-semibold text-yellow-800 dark:text-yellow-500 mb-2">Accessibility Warnings</h4>
                      <ul class="space-y-1 text-sm text-yellow-700 dark:text-yellow-400">
                        @for (warning of contrastWarnings(); track warning) {
                          <li>• {{ warning }}</li>
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              }
            </section>

            <!-- Visiting Card Preview -->
            <section class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mt-6">
              <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Visiting Card Preview</h2>
              
              <!-- Card Styles Grid -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Style 1: Modern Minimal -->
                <div class="relative">
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Modern Minimal</p>
                  <div 
                    class="aspect-[1.75/1] rounded-lg shadow-xl p-6 flex flex-col justify-between"
                    [style.background-color]="themeColors.background"
                  >
                    <div>
                      <h3 
                        class="text-2xl font-bold mb-1"
                        [style.color]="themeColors.text"
                      >
                        John Doe
                      </h3>
                      <p 
                        class="text-sm"
                        [style.color]="themeColors.textSecondary"
                      >
                        Product Designer
                      </p>
                    </div>
                    <div class="space-y-1">
                      <p class="text-xs" [style.color]="themeColors.textSecondary">john&#64;company.com</p>
                      <p class="text-xs" [style.color]="themeColors.textSecondary">+1 (555) 123-4567</p>
                    </div>
                    <div 
                      class="absolute top-6 right-6 w-12 h-12 rounded-full"
                      [style.background-color]="themeColors.primary"
                    ></div>
                  </div>
                </div>

                <!-- Style 2: Bold Accent -->
                <div class="relative">
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Bold Accent</p>
                  <div 
                    class="aspect-[1.75/1] rounded-lg shadow-xl overflow-hidden"
                  >
                    <div 
                      class="h-1/3 p-6 flex items-center"
                      [style.background-color]="themeColors.primary"
                    >
                      <h3 
                        class="text-2xl font-bold"
                        [style.color]="themeColors.background"
                      >
                        John Doe
                      </h3>
                    </div>
                    <div 
                      class="h-2/3 p-6 flex flex-col justify-between"
                      [style.background-color]="themeColors.background"
                    >
                      <p 
                        class="text-sm font-medium"
                        [style.color]="themeColors.text"
                      >
                        Product Designer
                      </p>
                      <div class="space-y-1">
                        <p class="text-xs" [style.color]="themeColors.textSecondary">john&#64;company.com</p>
                        <p class="text-xs" [style.color]="themeColors.textSecondary">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Style 3: Gradient Edge -->
                <div class="relative">
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Gradient Edge</p>
                  <div 
                    class="aspect-[1.75/1] rounded-lg shadow-xl p-6 flex flex-col justify-between relative overflow-hidden"
                    [style.background-color]="themeColors.background"
                  >
                    <div 
                      class="absolute left-0 top-0 bottom-0 w-2"
                      [style.background]="'linear-gradient(to bottom, ' + themeColors.primary + ', ' + themeColors.accent + ')'"
                    ></div>
                    <div class="pl-4">
                      <h3 
                        class="text-2xl font-bold mb-1"
                        [style.color]="themeColors.text"
                      >
                        John Doe
                      </h3>
                      <p 
                        class="text-sm"
                        [style.color]="themeColors.primary"
                      >
                        Product Designer
                      </p>
                    </div>
                    <div class="pl-4 space-y-1">
                      <p class="text-xs" [style.color]="themeColors.textSecondary">john&#64;company.com</p>
                      <p class="text-xs" [style.color]="themeColors.textSecondary">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <!-- Style 4: Corner Accent -->
                <div class="relative">
                  <p class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Corner Accent</p>
                  <div 
                    class="aspect-[1.75/1] rounded-lg shadow-xl p-6 flex flex-col justify-between relative overflow-hidden"
                    [style.background-color]="themeColors.surface"
                  >
                    <div>
                      <h3 
                        class="text-2xl font-bold mb-1"
                        [style.color]="themeColors.text"
                      >
                        John Doe
                      </h3>
                      <p 
                        class="text-sm"
                        [style.color]="themeColors.textSecondary"
                      >
                        Product Designer
                      </p>
                    </div>
                    <div class="space-y-1">
                      <p class="text-xs" [style.color]="themeColors.textSecondary">john&#64;company.com</p>
                      <p class="text-xs" [style.color]="themeColors.textSecondary">+1 (555) 123-4567</p>
                    </div>
                    <div 
                      class="absolute bottom-0 right-0 w-24 h-24 rounded-tl-full"
                      [style.background-color]="themeColors.accent"
                      style="opacity: 0.2;"
                    ></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <!-- Ad Placeholder Bottom -->
      <div class="bg-white dark:bg-slate-950 mt-8">
        <div class="container mx-auto px-4">
          <app-ad-placeholder size="rectangle" [enableAds]="false"></app-ad-placeholder>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ThemePreviewComponent implements OnInit {
  private colorService = inject(ColorService);
  private toastService = inject(ToastService);
  private seoService = inject(SeoService);
  private route = inject(ActivatedRoute);

  themeColors: ThemeColors = {
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    accent: '#10b981',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#111827',
    textSecondary: '#6b7280'
  };

  features = [
    {
      title: 'Feature One',
      description: 'Amazing feature that helps your users accomplish their goals faster.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z'
    },
    {
      title: 'Feature Two',
      description: 'Powerful tools designed to make your workflow more efficient.',
      icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4'
    },
    {
      title: 'Feature Three',
      description: 'Seamless integration with your existing tools and workflows.',
      icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    }
  ];

  contrastWarnings = signal<string[]>([]);
  selectedSection = signal<string>('all');
  editingSection = signal<string>('global');

  sections = [
    { value: 'all', label: 'All Sections' },
    { value: 'navbar', label: 'Navigation Bar' },
    { value: 'hero', label: 'Hero Section' },
    { value: 'cards', label: 'Feature Cards' },
    { value: 'footer', label: 'Footer' }
  ];

  editingSections = [
    { value: 'global', label: 'Global Theme' },
    { value: 'navbar', label: 'Navigation Bar' },
    { value: 'hero', label: 'Hero Section' },
    { value: 'cards', label: 'Feature Cards' },
    { value: 'footer', label: 'Footer' }
  ];

  // Section-specific color overrides
  sectionColors: { [section: string]: Partial<ThemeColors> } = {
    global: {},
    navbar: {},
    hero: {},
    cards: {},
    footer: {}
  };

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Theme Preview - Visualize Website Color Schemes | Color Utils',
      description: 'Create and preview custom website themes in real-time. See how your color choices look on navigation, hero sections, cards, and footers before implementing them.',
      keywords: 'theme preview, website theme, color scheme preview, theme generator, website colors, ui preview, theme builder',
      author: 'Color Utils',
      ogUrl: 'https://colorutils.com/theme-preview',
      canonical: 'https://colorutils.com/theme-preview'
    });

    // Check for query params with colors from palette/gradient generators
    this.route.queryParams.subscribe(params => {
      let colorsApplied = false;

      if (params['primary']) {
        this.themeColors.primary = this.normalizeColor(params['primary']);
        colorsApplied = true;
      }
      if (params['secondary']) {
        this.themeColors.secondary = this.normalizeColor(params['secondary']);
        colorsApplied = true;
      }
      if (params['accent']) {
        this.themeColors.accent = this.normalizeColor(params['accent']);
        colorsApplied = true;
      }
      if (params['background']) {
        this.themeColors.background = this.normalizeColor(params['background']);
        colorsApplied = true;
      }
      if (params['surface']) {
        this.themeColors.surface = this.normalizeColor(params['surface']);
        colorsApplied = true;
      }
      if (params['text']) {
        this.themeColors.text = this.normalizeColor(params['text']);
        colorsApplied = true;
      }
      if (params['textSecondary']) {
        this.themeColors.textSecondary = this.normalizeColor(params['textSecondary']);
        colorsApplied = true;
      }

      if (colorsApplied) {
        this.updatePreview();
        this.toastService.show('Colors applied from your palette/gradient!', 'success');
      } else {
        this.updatePreview();
      }
    });
  }

  normalizeColor(color: string): string {
    // Add # prefix if missing
    return color.startsWith('#') ? color : `#${color}`;
  }

  onSectionChange(): void {
    // Update preview when switching sections
    this.updatePreview();
  }

  getSectionLabel(value: string): string {
    return this.editingSections.find(s => s.value === value)?.label || value;
  }

  getCurrentColor(colorKey: keyof ThemeColors): string {
    const section = this.editingSection();
    if (section === 'global') {
      return this.themeColors[colorKey];
    }
    return this.sectionColors[section]?.[colorKey] || this.themeColors[colorKey];
  }

  getSectionColor(colorKey: keyof ThemeColors): string | undefined {
    const section = this.editingSection();
    if (section === 'global') return undefined;
    return this.sectionColors[section]?.[colorKey];
  }

  updateSectionColor(colorKey: keyof ThemeColors, value: string): void {
    const section = this.editingSection();
    if (section === 'global') {
      this.themeColors[colorKey] = value;
    } else {
      if (!this.sectionColors[section]) {
        this.sectionColors[section] = {};
      }
      this.sectionColors[section][colorKey] = value;
    }
    this.updatePreview();
  }

  clearSectionColor(colorKey: keyof ThemeColors): void {
    const section = this.editingSection();
    if (section !== 'global' && this.sectionColors[section]) {
      delete this.sectionColors[section][colorKey];
      this.updatePreview();
    }
  }

  resetSection(section: string): void {
    if (section !== 'global') {
      this.sectionColors[section] = {};
      this.updatePreview();
      this.toastService.show(`${this.getSectionLabel(section)} colors reset to global`, 'success');
    }
  }

  getColorForSection(section: string, colorKey: keyof ThemeColors): string {
    return this.sectionColors[section]?.[colorKey] || this.themeColors[colorKey];
  }

  updatePreview(): void {
    this.checkContrast();
  }

  checkContrast(): void {
    const warnings: string[] = [];

    // Check primary button contrast
    const primaryContrast = this.calculateContrast(this.themeColors.primary, this.themeColors.background);
    if (primaryContrast < 4.5) {
      warnings.push('Primary color and background may not meet WCAG AA standards');
    }

    // Check text contrast
    const textContrast = this.calculateContrast(this.themeColors.text, this.themeColors.background);
    if (textContrast < 4.5) {
      warnings.push('Text color and background may not meet WCAG AA standards');
    }

    // Check accent button contrast
    const accentContrast = this.calculateContrast(this.themeColors.accent, this.themeColors.background);
    if (accentContrast < 4.5) {
      warnings.push('Accent color and background may not meet WCAG AA standards');
    }

    this.contrastWarnings.set(warnings);
  }

  calculateContrast(color1: string, color2: string): number {
    try {
      const rgb1 = this.hexToRgb(color1);
      const rgb2 = this.hexToRgb(color2);

      const l1 = this.getLuminance(rgb1.r, rgb1.g, rgb1.b);
      const l2 = this.getLuminance(rgb2.r, rgb2.g, rgb2.b);

      const lighter = Math.max(l1, l2);
      const darker = Math.min(l1, l2);

      return (lighter + 0.05) / (darker + 0.05);
    } catch {
      return 0;
    }
  }

  hexToRgb(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : { r: 0, g: 0, b: 0 };
  }

  getLuminance(r: number, g: number, b: number): number {
    const [rs, gs, bs] = [r, g, b].map(val => {
      val = val / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  }

  resetColors(): void {
    this.themeColors = {
      primary: '#3b82f6',
      secondary: '#8b5cf6',
      accent: '#10b981',
      background: '#ffffff',
      surface: '#f9fafb',
      text: '#111827',
      textSecondary: '#6b7280'
    };
    this.updatePreview();
    this.toastService.show('Theme colors reset to defaults', 'success');
  }

  exportTheme(): void {
    const css = `/* Custom Theme Colors */
:root {
  --color-primary: ${this.themeColors.primary};
  --color-secondary: ${this.themeColors.secondary};
  --color-accent: ${this.themeColors.accent};
  --color-background: ${this.themeColors.background};
  --color-surface: ${this.themeColors.surface};
  --color-text: ${this.themeColors.text};
  --color-text-secondary: ${this.themeColors.textSecondary};
}

/* Usage Examples */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-background);
}

.btn-accent {
  background-color: var(--color-accent);
  color: var(--color-background);
}

body {
  background-color: var(--color-background);
  color: var(--color-text);
}`;

    navigator.clipboard.writeText(css);
    this.toastService.show('CSS theme exported to clipboard!', 'success');
  }
}
