import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

interface UseCase {
  title: string;
  description: string;
  industry: string;
  benefits: string[];
  tools: string[];
  icon: string;
}

@Component({
  selector: 'app-use-cases',
  standalone: true,
  imports: [CommonModule, RouterModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-slate-950">
      <!-- Ad Top -->
      <div class="bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4 py-6">
          <app-ad-placeholder size="banner" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>

      <div class="container mx-auto px-4 py-12">
        <header class="max-w-4xl mx-auto mb-12 text-center">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Real-World Use Cases
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Discover how professionals across industries use color tools to create stunning designs.
          </p>
        </header>

        <!-- Use Cases Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          @for (useCase of useCases; track useCase.title) {
            <article class="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow">
              <div class="p-8">
                <div class="text-4xl mb-4">{{ useCase.icon }}</div>
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ useCase.title }}</h2>
                <span class="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-semibold rounded-full mb-4">
                  {{ useCase.industry }}
                </span>
                <p class="text-gray-700 dark:text-gray-300 mb-6">{{ useCase.description }}</p>

                <div class="mb-6">
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">Key Benefits</h3>
                  <ul class="space-y-2">
                    @for (benefit of useCase.benefits; track benefit) {
                      <li class="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        {{ benefit }}
                      </li>
                    }
                  </ul>
                </div>

                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-3">Recommended Tools</h3>
                  <div class="flex flex-wrap gap-2">
                    @for (tool of useCase.tools; track tool) {
                      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-lg">
                        {{ tool }}
                      </span>
                    }
                  </div>
                </div>
              </div>
            </article>
          }
        </div>

        <!-- Stats Section -->
        <section class="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg p-12">
          <h2 class="text-3xl font-bold mb-12 text-center">Why Color Matters</h2>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div class="text-4xl font-bold mb-2">93%</div>
              <p class="text-white/90">Of purchase decisions are based on visual appearance</p>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">85%</div>
              <p class="text-white/90">Of consumers cite color as a reason for buying a product</p>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">0.05s</div>
              <p class="text-white/90">Time needed to form a first impression of a website</p>
            </div>
            <div>
              <div class="text-4xl font-bold mb-2">80%</div>
              <p class="text-white/90">Of that impression is determined by color</p>
            </div>
          </div>
        </section>

        <!-- Industry Guide -->
        <section class="mt-16 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">Color Guidelines by Industry</h2>
          
          <div class="space-y-6">
            <div class="border-l-4 border-blue-500 pl-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">💼 Corporate & Business</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">Focus on trust and professionalism with blues, grays, and blacks. Limited color palettes. High contrast for readability.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Recommended:</strong> Use our Contrast Checker to ensure accessibility for client presentations.</p>
            </div>

            <div class="border-l-4 border-pink-500 pl-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">🎨 Creative & Design</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">Vibrant colors, bold gradients, and experimental combinations. Creative freedom with complementary or triadic color schemes.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Recommended:</strong> Use our Palette Generator and Gradient Generator for inspiration.</p>
            </div>

            <div class="border-l-4 border-green-500 pl-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">🌱 Health & Wellness</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">Calming colors like greens and blues. Clean, minimal designs. Trust and safety are paramount.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Recommended:</strong> Use our Screen Picker to extract calming colors from nature images.</p>
            </div>

            <div class="border-l-4 border-orange-500 pl-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">🛒 E-commerce & Retail</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">Action-oriented reds and oranges for CTAs. Brand colors that stand out. High contrast for product visibility.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Recommended:</strong> Use our Contrast Checker for button contrast and Theme Preview for overall look.</p>
            </div>

            <div class="border-l-4 border-purple-500 pl-6">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">🚀 Tech & Software</h3>
              <p class="text-gray-700 dark:text-gray-300 mb-3">Modern, sleek designs with purples, teals, and blacks. Emphasis on usability and clear visual hierarchy.</p>
              <p class="text-sm text-gray-600 dark:text-gray-400"><strong>Recommended:</strong> Use our Color Converter to ensure consistency across different format requirements.</p>
            </div>
          </div>
        </section>

        <!-- CTA -->
        <section class="mt-16 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">Start Creating Better Color Designs Today</h2>
          <p class="mb-6 text-white/90">
            Explore our suite of tools to find the perfect colors for your next project.
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <a routerLink="/palette-generator" class="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Generate Palettes
            </a>
            <a routerLink="/contrast-checker" class="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Check Contrast
            </a>
            <a routerLink="/gradient-generator" class="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Create Gradients
            </a>
          </div>
        </section>
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
export class UseCasesComponent implements OnInit {
  private seoService = inject(SeoService);

  useCases: UseCase[] = [
    {
      title: 'Web Design',
      description: 'Create beautiful, user-friendly websites with carefully selected color palettes that enhance user experience and guide navigation.',
      industry: 'Digital Design',
      benefits: [
        'Improved user engagement through color psychology',
        'Better conversion rates with strategic CTA colors',
        'Consistent branding across web properties',
        'Accessible designs that work for all users'
      ],
      tools: ['Palette Generator', 'Contrast Checker', 'Theme Preview'],
      icon: '🌐'
    },
    {
      title: 'Graphic Design',
      description: 'Design impactful graphics, posters, and visual content with harmonious color schemes that capture attention and convey messages effectively.',
      industry: 'Creative',
      benefits: [
        'Professional color combinations in seconds',
        'Consistent visual identity across designs',
        'Color harmony that looks polished',
        'Export colors in multiple formats'
      ],
      tools: ['Palette Generator', 'Gradient Generator', 'Color Converter'],
      icon: '🎨'
    },
    {
      title: 'Brand Identity',
      description: 'Develop distinctive brand color palettes that differentiate your business and create lasting brand recognition.',
      industry: 'Branding',
      benefits: [
        'Create memorable brand colors',
        'Generate color variations for different applications',
        'Ensure brand consistency',
        'Test accessibility of brand colors'
      ],
      tools: ['Palette Generator', 'Contrast Checker', 'Image Picker'],
      icon: '🏷️'
    },
    {
      title: 'UI/UX Design',
      description: 'Build intuitive user interfaces with color systems that improve usability, accessibility, and user satisfaction.',
      industry: 'Digital Design',
      benefits: [
        'Accessible interfaces for all users',
        'Clear visual hierarchy',
        'Better user navigation with color coding',
        'Consistency across products'
      ],
      tools: ['Contrast Checker', 'Theme Preview', 'Color Converter'],
      icon: '⚙️'
    },
    {
      title: 'Marketing & Advertising',
      description: 'Design eye-catching marketing materials and ads that convert with scientifically-backed color choices.',
      industry: 'Marketing',
      benefits: [
        'Higher engagement with color psychology',
        'Better ROI through optimized color choices',
        'Stand out from competitors',
        'Consistent messaging across channels'
      ],
      tools: ['Palette Generator', 'Gradient Generator', 'Image Picker'],
      icon: '📢'
    },
    {
      title: 'Photography & Editing',
      description: 'Enhance photos and create cohesive photo galleries with color grading and complementary color selections.',
      industry: 'Visual Arts',
      benefits: [
        'Extract dominant colors from images',
        'Create color-matched design elements',
        'Develop consistent photo collections',
        'Professional color grading foundation'
      ],
      tools: ['Image Picker', 'Screen Picker', 'Palette Generator'],
      icon: '📸'
    },
    {
      title: 'Accessibility & Compliance',
      description: 'Ensure your designs meet accessibility standards with proper contrast ratios and color blindness considerations.',
      industry: 'Web/Design',
      benefits: [
        'WCAG compliance for legal protection',
        'Better experience for users with disabilities',
        'Larger addressable audience',
        'Reduced legal liability'
      ],
      tools: ['Contrast Checker', 'Theme Preview', 'Color Converter'],
      icon: '♿'
    },
    {
      title: 'Content & Presentations',
      description: 'Create visually engaging presentations and content with color schemes that improve comprehension and retention.',
      industry: 'Communication',
      benefits: [
        'More engaging presentations',
        'Improved information retention',
        'Professional appearance',
        'Clear visual organization'
      ],
      tools: ['Palette Generator', 'Gradient Generator', 'Contrast Checker'],
      icon: '📊'
    }
  ];

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Real-World Use Cases - ColorUtils',
      description: 'Explore how professionals use color tools in web design, branding, marketing, and more. Discover best practices by industry.',
      keywords: 'use cases, web design, branding, graphic design, color applications, design industry, UI/UX'
    });
  }
}
