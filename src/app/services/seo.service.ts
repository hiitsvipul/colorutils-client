import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  canonical?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta
  ) {}

  /**
   * Update SEO meta tags
   */
  updateMetaTags(data: SEOData): void {
    // Set title
    this.titleService.setTitle(data.title);

    // Set basic meta tags
    this.metaService.updateTag({ name: 'description', content: data.description });
    
    if (data.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: data.keywords });
    }
    
    if (data.author) {
      this.metaService.updateTag({ name: 'author', content: data.author });
    }

    // Set Open Graph meta tags
    this.metaService.updateTag({ property: 'og:title', content: data.ogTitle || data.title });
    this.metaService.updateTag({ property: 'og:description', content: data.ogDescription || data.description });
    
    if (data.ogUrl) {
      this.metaService.updateTag({ property: 'og:url', content: data.ogUrl });
    }
    
    if (data.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: data.ogImage });
    }
    
    this.metaService.updateTag({ property: 'og:type', content: 'website' });

    // Set canonical URL
    if (data.canonical) {
      let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', data.canonical);
    }

    // Twitter Card meta tags
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.metaService.updateTag({ name: 'twitter:title', content: data.ogTitle || data.title });
    this.metaService.updateTag({ name: 'twitter:description', content: data.ogDescription || data.description });
    
    if (data.ogImage) {
      this.metaService.updateTag({ name: 'twitter:image', content: data.ogImage });
    }
  }
}
