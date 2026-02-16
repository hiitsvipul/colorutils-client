import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-slate-950 py-8">
      <!-- Ad Placeholder Top -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4 mb-6">
          <app-ad-placeholder size="banner" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>

      <div class="container mx-auto px-4 max-w-4xl">
        <!-- Header -->
        <article class="mb-12">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
          <p class="text-gray-600 dark:text-gray-400 mb-2">Last Updated: February 15, 2026</p>
          <p class="text-gray-600 dark:text-gray-400">
            At ColorUtils, we are committed to protecting your privacy and ensuring you have a positive experience on our website. This privacy policy explains how we handle your information.
          </p>
        </article>

        <!-- Content Sections -->
        <div class="space-y-8 text-gray-700 dark:text-gray-300">

          <!-- 1. Overview -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Overview</h2>
            <p class="mb-4">
              ColorUtils is a privacy-first color utility application. We are committed to a simple principle: <strong>we do not collect, store, or transmit your color data</strong>. All of our tools operate entirely on your device (client-side), meaning your work and creative choices remain completely private.
            </p>
            <p>
              This privacy policy describes what limited information we may collect and how we handle it. Since ColorUtils prioritizes local processing, there is very little data collection involved in using our tools.
            </p>
          </section>

          <!-- 2. What Data We Don't Collect -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. What Data We Don't Collect</h2>
            <p class="mb-4">ColorUtils does <strong>NOT</strong> collect or store:</p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li>Color values you pick or convert</li>
              <li>Color palettes you generate</li>
              <li>Images you upload for color picking</li>
              <li>Gradient designs you create</li>
              <li>Theme configurations you customize</li>
              <li>Your personal information or profile data</li>
              <li>Your browsing history or usage patterns</li>
            </ul>
            <p class="mt-4">
              All of these activities happen entirely in your browser using JavaScript. Your data never leaves your device, and we have no servers that receive or process your color information.
            </p>
          </section>

          <!-- 3. Client-Side Processing -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Client-Side Processing (How We Protect Your Privacy)</h2>
            <p class="mb-4">
              ColorUtils is built with client-side processing as a core principle. This means:
            </p>
            <div class="space-y-4 ml-4">
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Local Processing</h3>
                <p>All color calculations, conversions, and generations happen in your web browser using JavaScript, not on our servers.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">No Data Transmission</h3>
                <p>Your color work is never sent to our servers. When you close your browser tab, your work is cleared from memory - we have no copies.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Offline Capable</h3>
                <p>After the initial page load, you can use ColorUtils offline without any internet connection. Your work remains private regardless of connectivity.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">No Tracking</h3>
                <p>We do not use tracking pixels, analytics scripts, or cookies to monitor your color work or usage patterns.</p>
              </div>
            </div>
          </section>

          <!-- 4. Limited Information We May Collect -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Limited Information We May Collect</h2>
            <p class="mb-4">
              While we do not collect color data, we may collect minimal technical information for website operation:
            </p>
            <div class="space-y-4 ml-4">
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Server Logs</h3>
                <p>When you visit ColorUtils, your web server may automatically log your IP address, browser type, and pages visited. This is standard web server practice and is used only for technical support and security purposes.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Google AdSense</h3>
                <p>We use Google AdSense to display advertisements on our website. Google AdSense may use cookies and other tracking technologies to display relevant ads. Please review Google's privacy policy for more information: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">https://policies.google.com/privacy</a></p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Browser Storage</h3>
                <p>ColorUtils may use localStorage for temporary session data (such as your current tool settings), but this data is stored only on your device and is never sent to our servers.</p>
              </div>
            </div>
          </section>

          <!-- 5. Third-Party Services -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Third-Party Services</h2>
            <p class="mb-4">
              ColorUtils may use the following third-party services:
            </p>
            <div class="space-y-4 ml-4">
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Google AdSense</h3>
                <p>For displaying advertisements. Google may collect information about your browsing activity to display relevant ads. Visit <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Google's privacy policy</a> for details.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">EyeDropper API</h3>
                <p>The Screen Color Picker tool uses the browser's native EyeDropper API. This API operates entirely within your browser with no data transmission.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Web Fonts</h3>
                <p>We may use web fonts from external services. The font provider may log your IP address and page visit information as part of standard web service operation.</p>
              </div>
            </div>
          </section>

          <!-- 6. Your Rights -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
            <p class="mb-4">
              Because ColorUtils does not collect personal information, most data privacy regulations do not apply. However, you have the right to:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li>Use ColorUtils without creating an account or providing personal information</li>
              <li>Clear your browser cache and local storage at any time</li>
              <li>Disable cookies in your browser settings</li>
              <li>Contact us with privacy concerns (see contact information below)</li>
            </ul>
          </section>

          <!-- 7. Children's Privacy -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Children's Privacy</h2>
            <p class="mb-4">
              ColorUtils does not knowingly collect information from children under 13. Since we do not collect personal information and use client-side processing only, ColorUtils is inherently child-safe. If a child uses ColorUtils, their work remains completely private and is never transmitted or stored on our servers.
            </p>
            <p>
              Parents and guardians can feel confident that children using ColorUtils are not having their data collected or tracked.
            </p>
          </section>

          <!-- 8. Data Security -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Data Security</h2>
            <p class="mb-4">
              Since ColorUtils processes all data on your device and does not transmit your color work to our servers, your data is inherently secure. We recommend:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li>Keep your browser and operating system updated</li>
              <li>Use HTTPS connections when accessing ColorUtils</li>
              <li>Be cautious when exporting color data to external files</li>
              <li>Clear your browser cache if using a shared computer</li>
            </ul>
          </section>

          <!-- 9. Data Retention -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Data Retention</h2>
            <p class="mb-4">
              Since ColorUtils does not collect color data:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li>Your color work is retained only while your browser tab is open</li>
              <li>Closing the tab clears all your color data from memory</li>
              <li>Refreshing the page clears your current work</li>
              <li>To save your work, you must manually export it (as JSON, CSS, or image)</li>
              <li>Standard server logs may be retained for 30-90 days for security purposes</li>
            </ul>
          </section>

          <!-- 10. Changes to This Policy -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">10. Changes to This Policy</h2>
            <p class="mb-4">
              We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically to stay informed about how we protect your privacy.
            </p>
          </section>

          <!-- 11. Contact Us -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 shadow-sm border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
            <p class="mb-4">
              If you have questions about this privacy policy or our privacy practices, please contact us:
            </p>
            <div class="space-y-3 ml-4">
              <div>
                <p class="font-bold text-gray-900 dark:text-white">Email:</p>
                <a href="mailto:flexboxdevssocial@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">flexboxdevs<wbr>social&#64;gmail.com</a>
              </div>
              <div>
                <p class="font-bold text-gray-900 dark:text-white">Phone:</p>
                <a href="tel:+916261221248" class="text-blue-600 dark:text-blue-400 hover:underline">+91 6261221248</a>
              </div>
            </div>
          </section>

          <!-- Summary Section -->
          <section class="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 shadow-sm border border-green-200 dark:border-green-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Privacy Summary</h2>
            <ul class="space-y-2">
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>Your color work is never collected or stored on our servers</strong></span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>All processing happens locally in your browser</strong></span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>We don't track your usage or color selections</strong></span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>No personal information required to use ColorUtils</strong></span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>Google AdSense may display ads based on your interests (standard practice)</strong></span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>Your privacy and trust are our top priority</strong></span></li>
            </ul>
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
export class PrivacyComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Privacy Policy | Color Utils',
      description: 'ColorUtils Privacy Policy. Learn how we protect your privacy with client-side processing and no data collection. All color work stays on your device.',
      keywords: 'privacy policy, data protection, privacy-first, client-side processing, color tools',
      canonical: 'https://colorutils.com/privacy'
    });
  }
}
