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
      <section class="relative bg-gradient-to-br from-primary-600 to-blue-600 text-white py-24 overflow-hidden">
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
          <app-ad-placeholder size="banner" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>

      <!-- Features Section -->
      <section id="features" class="py-20 bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4">
          <div class="text-center mb-16 animate-fade-in">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              <span class="gradient-text">Powerful Color Utils</span>
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
                <div class="w-16 h-16 bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
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

      <!-- Educational Content Section -->
      <section class="py-20 bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Learn Color Theory & Design Principles</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 text-center mb-4">
              Master the principles of color design to create more effective and accessible interfaces. Whether you're a web designer, graphic designer, UX professional, or developer, understanding color theory is essential for creating visually appealing and accessible designs.
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-center mb-12">
              Color is one of the most powerful design tools available. It influences user perception, guides attention, conveys meaning, and impacts accessibility. Learn how to choose color palettes that work harmoniously, ensure your designs are accessible to all users including those with color blindness, and understand the psychology behind colors.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">🎨 Color Models</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Understand RGB, HSL, CMYK, and other color models. Learn how different formats work and when to use each one for optimal results.
                </p>
                <a routerLink="/color-theory" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all">
                  Learn More <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>

              <div class="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">♿ Accessibility</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Discover WCAG standards and how to create inclusive designs. Learn about color contrast, color blindness, and accessibility best practices.
                </p>
                <a routerLink="/color-theory" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all">
                  Learn More <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>

              <div class="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">🎼 Color Harmony</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Explore complementary, analogous, triadic, and monochromatic color schemes. Create visually appealing palettes that work together.
                </p>
                <a routerLink="/color-theory" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all">
                  Learn More <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>

              <div class="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">🧠 Color Psychology</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Learn how colors evoke emotions and psychological responses. Understand the psychology behind red, blue, green, and other colors.
                </p>
                <a routerLink="/color-theory" class="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all">
                  Learn More <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>

            <div class="mt-12 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800 text-center">
              <p class="text-gray-700 dark:text-gray-300 mb-4">
                Want to dive deeper into color theory? Explore our comprehensive guide with color wheel explanations, harmony schemes, and practical examples.
              </p>
              <a routerLink="/color-theory" class="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                View Complete Guide
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Use Cases Section -->
      <section class="py-20 bg-gray-50 dark:bg-slate-800">
        <div class="container mx-auto px-4">
          <div class="max-w-5xl mx-auto">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Real-World Applications Across Industries</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 text-center mb-4">
              See how professionals use color tools across different industries and design disciplines.
            </p>
            <p class="text-gray-600 dark:text-gray-300 text-center mb-12">
              Color is integral to professional work across every industry. Web designers use color to create intuitive user interfaces that guide users through digital experiences. Graphic designers use color psychology to create emotionally resonant marketing materials. UX professionals ensure color accessibility so products work for everyone. Brand strategists develop distinctive color systems that create lasting brand recognition. From healthcare to entertainment, finance to fashion, color choices impact user experience, brand perception, and accessibility compliance.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">🌐 Web & Digital Design</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Create beautiful, accessible websites and applications with carefully selected color palettes. Web designers use color to establish visual hierarchy, guide user attention, and improve usability. Proper color contrast ensures accessibility for the 8% of males with color blindness and millions of users with low vision. Our tools help you validate WCAG compliance and experiment with color schemes before implementation.
                </p>
              </div>

              <div class="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">🎨 Graphic & Visual Design</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Design impactful marketing materials, presentations, and visual content with harmonious color schemes that capture attention. Color psychology plays a crucial role—colors evoke specific emotions and associations that influence how viewers perceive your message. Create professional designs with the right color harmony, whether you need complementary colors for high contrast, analogous colors for subtle harmony, or triadic schemes for vibrant designs.
                </p>
              </div>

              <div class="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">🏷️ Brand & Identity Design</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Develop distinctive brand color systems that create lasting recognition and differentiate your business in competitive markets. Brand colors become synonymous with companies—think of Apple's minimalist white and black, or Coca-Cola's signature red. Our palette generator and color harmony tools help you develop systematic color schemes that work across applications, from digital to print, and remain consistent across all brand touchpoints.
                </p>
              </div>
            </div>

            <div class="text-center">
              <a routerLink="/use-cases" class="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
                Explore More Use Cases
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Getting Started Section -->
      <section class="py-20 bg-white dark:bg-slate-900">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">Getting Started with Color Tools</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 text-center mb-12">
              Whether you're new to color theory or an experienced designer, our comprehensive tools and guides help you master color in your designs.
            </p>

            <div class="space-y-8">
              <div class="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">📚 Understanding Color Formats</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Digital color is expressed in multiple formats, each suited for different purposes. RGB (Red, Green, Blue) is used for screens and digital displays, representing colors as combinations of light. HEX (Hexadecimal) is the web standard for CSS and design tools, using 6-digit codes like #FF5733. HSL (Hue, Saturation, Lightness) offers an intuitive approach where you think in terms of the color itself, its intensity, and brightness. CMYK is used exclusively for print materials. Our Color Converter tool helps you convert between all these formats instantly, and our comprehensive guide explains when to use each format.
                </p>
              </div>

              <div class="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-8 border border-purple-200 dark:border-purple-800">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">🎨 Color Harmony & Psychology</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Creating visually appealing color combinations requires understanding color harmony schemes. Complementary colors sit opposite each other on the color wheel and create high-contrast, vibrant combinations perfect for call-to-action buttons. Analogous colors sit next to each other and create harmonious, cohesive designs ideal for calm, unified interfaces. Triadic schemes use three colors equally spaced around the wheel for balanced vibrancy. Monochromatic schemes use variations of a single color for sophisticated, professional designs. Beyond harmony, colors carry psychological meanings: blue suggests trust and calmness, red conveys urgency and energy, green represents growth and nature, yellow radiates optimism, and purple symbolizes creativity. Our Palette Generator creates harmonious combinations automatically based on these principles.
                </p>
              </div>

              <div class="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-8 border border-green-200 dark:border-green-800">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">♿ Accessibility & Contrast</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Creating accessible color designs is essential in modern web and application development. The Web Content Accessibility Guidelines (WCAG) define specific contrast ratio requirements: Level AA (minimum standard) requires 4.5:1 for normal text and 3:1 for large text, while Level AAA (enhanced) requires 7:1 and 4.5:1 respectively. These requirements exist because color blindness affects 8% of males, and millions more have low vision. Our Contrast Checker tool immediately tells you if your color combinations meet WCAG standards. You can also use color blindness simulators to see how your designs appear to people with different types of color vision deficiency, ensuring your designs work for everyone regardless of their visual abilities.
                </p>
              </div>

              <div class="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg p-8 border border-orange-200 dark:border-orange-800">
                <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-3">🔧 Practical Color Tools & Workflows</h3>
                <p class="text-gray-700 dark:text-gray-300 mb-4">
                  Our suite of practical tools integrates seamlessly into your design workflow. The Screen Color Picker lets you capture colors from anywhere on your screen using the browser's EyeDropper API. The Image Color Picker lets you upload images and extract color palettes, useful when you want your design to match existing visuals or artwork. The Gradient Generator creates smooth CSS transitions between colors with real-time preview. The Theme Preview shows how your chosen colors work together on actual UI components like buttons, cards, and forms. All tools work entirely in your browser with no uploads or data collection, ensuring your creative work remains private. Export colors in any format you need: CSS variables for modern projects, JSON for applications, or images for documentation.
                </p>
              </div>
            </div>

            <div class="mt-12 p-8 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg border border-primary-400 text-center">
              <h3 class="text-2xl font-bold mb-4">Ready to Master Color?</h3>
              <p class="text-lg mb-6 text-primary-100">
                Explore our comprehensive color theory guide, learn about accessibility standards, and discover real-world applications across industries. All completely free, no signup required.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a routerLink="/color-theory" class="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Read Color Theory Guide
                </a>
                <a routerLink="/use-cases" class="inline-block px-6 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors border border-white">
                  Explore Use Cases
                </a>
              </div>
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
              Try our color utils now and enhance your workflow
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
          <app-ad-placeholder size="rectangle" [enableAds]="true"></app-ad-placeholder>
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
    },
    {
      name: 'Theme Preview',
      description: 'Visualize website themes with custom colors on real UI components',
      route: '/theme-preview',
      icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    }
  ];

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Color Utils - Professional Color Picker, Converter & Accessibility Checker',
      description: 'Free online color utils for designers and developers. Pick colors from screen or images, convert between formats, and check WCAG contrast ratios.',
      keywords: 'color utils, color picker, hex converter, rgb converter, hsl converter, contrast checker, wcag, accessibility, eyedropper',
      author: 'Color Utils',
      ogUrl: 'https://colorutils.com/',
      canonical: 'https://colorutils.com/'
    });

    // Add FAQ structured data
    this.addStructuredData();
  }

  private addStructuredData(): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': 'What is Color Utils?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Color Utils is a comprehensive suite of free online tools for designers and developers to work with colors. It includes a screen color picker, image color picker, color converter, contrast checker, palette generator, gradient generator, and theme preview tool.'
          }
        },
        {
          '@type': 'Question',
          'name': 'How do I pick colors from my screen?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Use our Screen Color Picker tool. Click the "Pick Color from Screen" button, then click anywhere on your screen to capture that color. The tool will provide the color in HEX, RGB, HSL, and CMYK formats.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Is Color Utils free to use?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! Color Utils is completely free to use. All tools are available without registration or subscription.'
          }
        },
        {
          '@type': 'Question',
          'name': 'What is WCAG contrast checking?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'WCAG (Web Content Accessibility Guidelines) contrast checking ensures your color combinations are readable for all users, including those with visual impairments. Our Contrast Checker tool verifies AA and AAA compliance levels.'
          }
        },
        {
          '@type': 'Question',
          'name': 'Can I generate color palettes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Yes! Our Palette Generator creates harmonious color schemes using color theory algorithms like analogous, complementary, triadic, and monochromatic. You can also extract palettes from images.'
          }
        }
      ]
    });
    document.head.appendChild(script);
  }
}
