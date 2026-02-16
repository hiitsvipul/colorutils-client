import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-terms',
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
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms & Conditions</h1>
          <p class="text-gray-600 dark:text-gray-400 mb-2">Last Updated: February 15, 2026</p>
          <p class="text-gray-600 dark:text-gray-400">
            Please read these Terms & Conditions carefully before using ColorUtils. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
        </article>

        <!-- Content Sections -->
        <div class="space-y-8 text-gray-700 dark:text-gray-300">

          <!-- 1. Use License -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Use License</h2>
            <p class="mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on ColorUtils for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile, reverse engineer, or disassemble any software contained on the site</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              <li>Using the materials for any illegal purpose or violating any regulations, laws, or rights of third parties</li>
            </ul>
          </section>

          <!-- 2. Disclaimer -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Disclaimer</h2>
            <p class="mb-4">
              The materials on ColorUtils are provided on an "as is" basis. ColorUtils makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p>
              ColorUtils does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on the internet or relating to such materials or any sites linked to this website.
            </p>
          </section>

          <!-- 3. Limitations -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Limitations of Liability</h2>
            <p class="mb-4">
              In no event shall ColorUtils or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ColorUtils, even if ColorUtils or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <!-- 4. Accuracy of Materials -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Accuracy of Materials</h2>
            <p class="mb-4">
              The materials appearing on ColorUtils could include technical, typographical, or photographic errors. ColorUtils does not warrant that any of the materials on the website are accurate, complete, or current. ColorUtils may make changes to the materials contained on the website at any time without notice.
            </p>
          </section>

          <!-- 5. Materials and Links -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">5. Materials and Links</h2>
            <p class="mb-4">
              ColorUtils has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by ColorUtils of the site. Use of any such linked website is at the user's own risk.
            </p>
          </section>

          <!-- 6. Modifications -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">6. Modifications</h2>
            <p class="mb-4">
              ColorUtils may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <!-- 7. Governing Law -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">7. Governing Law</h2>
            <p class="mb-4">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <!-- 8. User Conduct -->
          <section class="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-sm">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">8. User Conduct</h2>
            <p class="mb-4">You agree not to:</p>
            <ul class="list-disc list-inside space-y-2 ml-2">
              <li>Use the website for any unlawful purpose or in violation of any laws or regulations</li>
              <li>Harass, abuse, or threaten other users of the website</li>
              <li>Attempt to gain unauthorized access to the website or its systems</li>
              <li>Transmit viruses, worms, or malicious code</li>
              <li>Interfere with or disrupt the website or servers connected to it</li>
            </ul>
          </section>

          <!-- 9. Contact for Violations -->
          <section class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 shadow-sm border border-blue-200 dark:border-blue-800">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">9. Contact for Violations</h2>
            <p class="mb-4">
              If you believe that any materials on ColorUtils violate your copyright or other intellectual property rights, please contact us immediately:
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
export class TermsComponent implements OnInit {
  private seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Terms & Conditions | Color Utils',
      description: 'Terms & Conditions for ColorUtils. Read our legal terms, usage policies, and conditions of service.',
      keywords: 'terms and conditions, terms of service, legal, conditions of use',
      canonical: 'https://colorutils.com/terms'
    });
  }
}
