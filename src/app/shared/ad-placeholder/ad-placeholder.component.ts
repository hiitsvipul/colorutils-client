import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

declare var adsbygoogle: any;

@Component({
  selector: 'app-ad-placeholder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      [class]="'rounded-lg overflow-hidden ' + sizeClass"
      role="complementary"
      [attr.aria-label]="'Advertisement ' + size"
    >
      @if (enableAds && effectiveAdSlot) {
        <!-- Google AdSense -->
        <ins class="adsbygoogle"
             style="display:block"
             [attr.data-ad-client]="adClient"
             [attr.data-ad-slot]="effectiveAdSlot"
             [attr.data-ad-format]="adFormat"
             [attr.data-full-width-responsive]="fullWidthResponsive"></ins>
      } @else {
        <!-- Placeholder for development -->
        <div 
          class="bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center h-full"
        >
          <div class="text-center p-4">
            <svg class="w-8 h-8 mx-auto mb-2 text-gray-400 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
            </svg>
            <p class="text-xs text-gray-500 dark:text-gray-500 font-medium">Ad Space ({{ size }})</p>
          </div>
        </div>
      }
    </div>
  `,
  styles: []
})
export class AdPlaceholderComponent implements OnInit, AfterViewInit {
  @Input() size: 'banner' | 'square' | 'rectangle' = 'banner';
  @Input() adSlot?: string; // Your AdSense ad slot ID
  @Input() enableAds: boolean = false; // Set to true to show real ads
  
  // Replace with your AdSense publisher ID
  adClient = 'ca-pub-1686089400711825';
  
  // Default ad slots for each size (optional - can be overridden via @Input)
  private defaultAdSlots = {
    square: '6499650389',
    banner: '1941857659', // Horizontal ad slot
    rectangle: '6630678174' // Vertical/Rectangle ad slot
  };
  
  get effectiveAdSlot(): string {
    return this.adSlot || this.defaultAdSlots[this.size] || '';
  }
  
  get adFormat(): string {
    const formats = {
      banner: 'horizontal',
      square: 'rectangle',
      rectangle: 'auto'
    };
    return formats[this.size];
  }
  
  get fullWidthResponsive(): string {
    return this.size === 'banner' || this.size === 'rectangle' ? 'true' : 'false';
  }

  get sizeClass(): string {
    const sizes = {
      banner: 'h-24 w-full',
      square: 'h-64 w-64 mx-auto',
      rectangle: 'h-48 w-full'
    };
    return sizes[this.size];
  }
  
  ngOnInit(): void {
    // Component initialization
  }
  
  ngAfterViewInit(): void {
    if (this.enableAds && this.effectiveAdSlot && typeof adsbygoogle !== 'undefined') {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }
}
