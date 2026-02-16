import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-cookie-policy',
  standalone: true,
  imports: [CommonModule, RouterModule, AdPlaceholderComponent],
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
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Cookie Policy</h1>
          <p class="text-gray-600 dark:text-gray-400 mb-2">Last Updated: February 15, 2026</p>
          <p class="text-gray-600 dark:text-gray-400">
            This Cookie Policy explains what cookies are, how ColorUtils uses them, and how you can control your cookie preferences for GDPR compliance and your privacy.
          </p>
        </article>

        <!-- Content Sections -->
        <div class="space-y-8 text-gray-700 dark:text-gray-300">

          <!-- 1. What Are Cookies -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. What Are Cookies?</h2>
            <p class="mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. Cookies help websites remember information about your visit, including your preferences and actions.
            </p>
            <p class="mb-4">
              There are two main types of cookies:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li><strong>Session Cookies:</strong> Temporary cookies that are deleted when you close your browser</li>
              <li><strong>Persistent Cookies:</strong> Cookies that remain on your device until they expire or you manually delete them</li>
            </ul>
          </section>

          <!-- 2. How ColorUtils Uses Cookies -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. How ColorUtils Uses Cookies</h2>
            <p class="mb-4">
              ColorUtils uses cookies in very limited ways, consistent with our privacy-first approach:
            </p>
            <div class="space-y-4 ml-4">
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Essential Cookies</h3>
                <p>We use essential cookies only for basic website functionality, such as remembering your theme preference (light/dark mode) and maintaining session information.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Analytics & Performance</h3>
                <p>We do not use cookies to track your behavior or collect analytics. We do not use Google Analytics or similar tracking tools.</p>
              </div>
              <div>
                <h3 class="font-bold text-gray-900 dark:text-white mb-2">Third-Party Cookies (Google AdSense)</h3>
                <p>Google AdSense may place cookies on your device to display relevant advertisements. These cookies are controlled by Google, not by ColorUtils. See Google's cookie policy for details.</p>
              </div>
            </div>
          </section>

          <!-- 3. Types of Cookies We Use -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Types of Cookies We Use</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-gray-700 dark:text-gray-300">
                <thead class="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th class="px-4 py-2 text-left font-bold">Cookie Name</th>
                    <th class="px-4 py-2 text-left font-bold">Purpose</th>
                    <th class="px-4 py-2 text-left font-bold">Type</th>
                  </tr>
                </thead>
                <tbody class="border-t border-gray-200 dark:border-gray-700">
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <td class="px-4 py-2">theme-preference</td>
                    <td class="px-4 py-2">Remembers your light/dark mode preference</td>
                    <td class="px-4 py-2">Persistent</td>
                  </tr>
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <td class="px-4 py-2">session-id</td>
                    <td class="px-4 py-2">Maintains your session while browsing</td>
                    <td class="px-4 py-2">Session</td>
                  </tr>
                  <tr class="border-t border-gray-200 dark:border-gray-700">
                    <td class="px-4 py-2">google_ads_*</td>
                    <td class="px-4 py-2">Google AdSense (set by Google)</td>
                    <td class="px-4 py-2">Persistent</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- 4. Your Cookie Preferences -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. How to Control Cookies</h2>
            <p class="mb-4">
              You have full control over cookies on your device. You can:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li><strong>Delete Cookies:</strong> Clear your browser cache to delete all cookies</li>
              <li><strong>Disable Cookies:</strong> Use your browser settings to disable cookies entirely</li>
              <li><strong>Block Third-Party Cookies:</strong> Configure your browser to block cookies from external sources like Google AdSense</li>
              <li><strong>Use Private Browsing:</strong> Use your browser's private/incognito mode to prevent cookies from being stored</li>
            </ul>
            <p class="mt-4 text-sm">
              <strong>Note:</strong> Disabling essential cookies may affect website functionality and your experience on ColorUtils.
            </p>
          </section>

          <!-- 5. Google AdSense Cookies -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Google AdSense & Third-Party Cookies</h2>
            <p class="mb-4">
              ColorUtils uses Google AdSense to display advertisements. Google may use cookies and other technologies to:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li>Display personalized ads based on your interests</li>
              <li>Track ad performance and click-through rates</li>
              <li>Prevent ad fraud and abuse</li>
            </ul>
            <p class="mt-4">
              For more information about Google's cookie practices, visit Google's <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Cookie & Similar Technologies</a> page.
            </p>
            <p class="mt-4">
              You can also visit <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">Google Ads Settings</a> to control personalization of ads.
            </p>
          </section>

          <!-- 6. GDPR Compliance -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. GDPR & Privacy Regulations</h2>
            <p class="mb-4">
              ColorUtils is committed to GDPR (General Data Protection Regulation) compliance and other data protection regulations:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li>We obtain your consent before placing non-essential cookies</li>
              <li>We provide clear information about how cookies are used</li>
              <li>You can withdraw consent by deleting cookies or adjusting your preferences</li>
              <li>We do not sell or share cookie data with third parties</li>
              <li>You have the right to access, modify, or delete your cookie data</li>
            </ul>
          </section>

          <!-- 7. Changes to This Policy -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Changes to This Policy</h2>
            <p class="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we make material changes, we will update the "Last Updated" date at the top of this page.
            </p>
          </section>

          <!-- 8. Questions or Concerns -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 shadow-sm border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. Questions or Concerns?</h2>
            <p class="mb-4">
              If you have questions about this Cookie Policy or how we use cookies, please contact us:
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

          <!-- Summary -->
          <section class="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 shadow-sm border border-green-200 dark:border-green-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cookie Summary</h2>
            <ul class="space-y-2">
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>Minimal Cookies:</strong> We use only essential cookies for basic functionality</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>No Tracking:</strong> We do not use cookies to track your behavior</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>Google Ads:</strong> Google AdSense may use cookies for ad display</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>You Control Cookies:</strong> You can delete, disable, or block cookies anytime</span></li>
              <li class="flex items-start"><span class="text-green-600 dark:text-green-400 mr-3">✓</span> <span><strong>GDPR Compliant:</strong> We respect privacy regulations and your rights</span></li>
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
export class CookiePolicyComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Cookie Policy | Color Utils',
      description: 'ColorUtils Cookie Policy. Learn how we use cookies, third-party cookies, and how to control your cookie preferences for GDPR compliance.',
      keywords: 'cookie policy, cookies, GDPR, privacy, cookie control',
      canonical: 'https://colorutils.com/cookie-policy'
    });
  }
}
