import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';
import { ToastService } from '../../services/toast.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, AdPlaceholderComponent],
  template: `
    <div class="min-h-screen bg-gray-50 dark:bg-slate-950 py-8">
      <!-- Ad Placeholder Top -->
      <div class="bg-white dark:bg-slate-950">
        <div class="container mx-auto px-4 mb-6">
          <app-ad-placeholder size="banner" [enableAds]="true"></app-ad-placeholder>
        </div>
      </div>

      <div class="container mx-auto px-4">
        <!-- Header -->
        <div class="max-w-4xl mx-auto mb-12">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Have questions, suggestions, or feedback? We'd love to hear from you. Get in touch with the ColorUtils team.
          </p>
        </div>

        <!-- Main Content Grid -->
        <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
            
            <!-- Email -->
            <div class="bg-white dark:bg-gray-900 rounded-lg p-6 mb-4 shadow-sm">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                  <a href="mailto:flexboxdevssocial@gmail.com" class="text-blue-600 dark:text-blue-400 hover:underline">flexboxdevs<wbr>social&#64;gmail.com</a>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">We'll respond to your email within 24 hours</p>
                </div>
              </div>
            </div>

            <!-- Phone -->
            <div class="bg-white dark:bg-gray-900 rounded-lg p-6 mb-4 shadow-sm">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
                  <a href="tel:+916261221248" class="text-blue-600 dark:text-blue-400 hover:underline">+91 6261221248</a>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">Available Monday-Friday, 9AM-6PM IST</p>
                </div>
              </div>
            </div>

            <!-- Support -->
            <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 dark:text-white mb-2">Questions?</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">Check out our <a routerLink="/faq" class="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">FAQ page</a> for quick answers.</p>
                  <p class="text-sm text-gray-600 dark:text-gray-400">Learn more about us on our <a routerLink="/about" class="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">About page</a>.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form (Informational) -->
          <div>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Message Us</h2>
            <div class="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-sm">
              <form (ngSubmit)="onSubmit()" class="space-y-4">
                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    [(ngModel)]="form.name"
                    name="name"
                    placeholder="John Doe"
                    class="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    [(ngModel)]="form.email"
                    name="email"
                    placeholder="you@example.com"
                    class="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    [(ngModel)]="form.subject"
                    name="subject"
                    placeholder="What is this about?"
                    class="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                    required
                  />
                </div>

                <div>
                  <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    [(ngModel)]="form.message"
                    name="message"
                    placeholder="Your message..."
                    rows="5"
                    class="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
              <p class="text-xs text-gray-500 dark:text-gray-400 mt-4">
                We'll get back to you as soon as possible. Please also email us directly at flexboxdevs<wbr>social&#64;gmail.com for faster response.
              </p>
            </div>
          </div>

        </div>

        <!-- FAQ Section -->
        <div class="max-w-4xl mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 border border-blue-200 dark:border-blue-800 mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Common Questions</h2>
          <div class="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-2">How do I report a bug?</h3>
              <p>Email us with details about the bug, what you were trying to do, and your browser information.</p>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-2">Can I suggest a feature?</h3>
              <p>Absolutely! We love hearing your ideas. Email us with your feature request and why it would be useful.</p>
            </div>
            <div>
              <h3 class="font-bold text-gray-900 dark:text-white mb-2">Do you offer API access?</h3>
              <p>Currently, ColorUtils is a web application only. All tools run in your browser without requiring API access.</p>
            </div>
          </div>
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
export class ContactComponent implements OnInit {
  private seoService = inject(SeoService);
  private toastService = inject(ToastService);

  form = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Contact Us | Color Utils',
      description: 'Contact ColorUtils - reach out with questions, feedback, or feature requests. We\'d love to hear from you!',
      keywords: 'contact, support, feedback, email, help',
      canonical: 'https://colorutils.com/contact'
    });
  }

  onSubmit(): void {
    if (this.form.name && this.form.email && this.form.subject && this.form.message) {
      this.toastService.success('Thank you for your message! Please also email us directly for faster response.');
      // In a real app, you would send this to a backend service
      // For now, we just show the toast and reset the form
      this.form = { name: '', email: '', subject: '', message: '' };
    } else {
      this.toastService.error('Please fill out all fields');
    }
  }
}
