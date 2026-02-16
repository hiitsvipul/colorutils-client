import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeoService } from '../../services/seo.service';
import { AdPlaceholderComponent } from '../../shared/ad-placeholder/ad-placeholder.component';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, AdPlaceholderComponent],
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
            Frequently Asked Questions
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about colors, accessibility, and our tools.
          </p>
        </header>

        <!-- Categories Filter -->
        <div class="max-w-4xl mx-auto mb-8">
          <div class="flex flex-wrap gap-2">
            <button
              (click)="selectedCategory.set(null)"
              [class.ring-2]="selectedCategory() === null"
              class="px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors"
              [class.ring-primary-500]="selectedCategory() === null"
            >
              All Questions
            </button>
            @for (category of categories(); track category) {
              <button
                (click)="selectedCategory.set(category)"
                [class.ring-2]="selectedCategory() === category"
                class="px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-700 hover:border-primary-500 transition-colors"
                [class.ring-primary-500]="selectedCategory() === category"
              >
                {{ category }}
              </button>
            }
          </div>
        </div>

        <!-- FAQs -->
        <div class="max-w-4xl mx-auto space-y-4">
          @for (faq of filteredFAQs(); track faq.question) {
            <details class="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden group">
              <summary class="px-6 py-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-between font-semibold text-gray-900 dark:text-white">
                <span>{{ faq.question }}</span>
                <svg class="w-5 h-5 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </summary>
              <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
                {{ faq.answer }}
              </div>
            </details>
          }
        </div>

        <!-- Contact CTA -->
        <section class="max-w-4xl mx-auto mt-16 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-lg p-8 text-center">
          <h2 class="text-2xl font-bold mb-4">Didn't find your answer?</h2>
          <p class="mb-6">
            Have a question that's not covered here? We'd love to help!
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:flexboxdevssocial@gmail.com" class="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Email Us
            </a>
            <a href="tel:6261221248" class="inline-block px-8 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Call: +91 6261221248
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
export class FAQComponent implements OnInit {
  private seoService = inject(SeoService);
  selectedCategory = signal<string | null>(null);

  faqs: FAQ[] = [
    {
      question: 'What is RGB color format?',
      answer: 'RGB (Red, Green, Blue) is an additive color model used for digital displays. Each color is represented by three values ranging from 0-255, where 0 means no light and 255 means full intensity of that color. For example, white is RGB(255, 255, 255) because all three channels are at maximum, and black is RGB(0, 0, 0) because no light is emitted. Red is represented as RGB(255, 0, 0), green as RGB(0, 255, 0), and blue as RGB(0, 0, 255). RGB is the standard format for web design, digital screens, photography, and video because it directly corresponds to how monitors and screens display colors by emitting red, green, and blue light. Understanding RGB is fundamental for anyone working with digital media. RGB values can also be expressed as percentages (0-100%) or in other formats. When working with transparency, RGBA is used where the fourth value (alpha) ranges from 0 (fully transparent) to 1 (fully opaque). The advantage of RGB is its direct correspondence to display hardware, making it incredibly useful for web developers and digital designers.',
      category: 'Color Formats'
    },
    {
      question: 'What is HEX color format?',
      answer: 'HEX (Hexadecimal) color format is a shorthand notation for RGB colors using 6 digits composed of numbers 0-9 and letters A-F. The format follows the pattern #RRGGBB where RR represents the red intensity, GG represents green, and BB represents blue. Each pair of digits represents a value from 00 to FF (0 to 255 in decimal). For example, #FF0000 is red (FF for red, 00 for green, 00 for blue), #FFFFFF is white (maximum values for all), and #000000 is black (zero values for all). HEX is the most commonly used color format in CSS and web design because it\'s concise, human-readable, and widely supported across all browsers and design tools. Short HEX notation is also supported for certain colors: #RGB becomes #RRGGBB (so #F00 becomes #FF0000). HEX colors can be converted directly to RGB by converting each pair of hexadecimal digits to decimal. For example, #FF equals 255 in decimal. The HEX format has been an industry standard for decades and remains the preferred choice for web developers and designers due to its compatibility and simplicity.',
      category: 'Color Formats'
    },
    {
      question: 'What is HSL color format?',
      answer: 'HSL (Hue, Saturation, Lightness) is a more intuitive color model compared to RGB because it mimics how humans perceive color. Hue represents the actual color and is measured in degrees from 0-360° on the color wheel (0° is red, 120° is green, 240° is blue, and 360° returns to red). Saturation represents the intensity or purity of the color on a scale of 0-100%, where 0% is completely gray and 100% is full color saturation. Lightness represents the brightness of the color from 0-100%, where 0% is black, 50% is pure color, and 100% is white. HSL is particularly useful for designers because it allows you to easily create variations of a color by adjusting saturation and lightness values while maintaining the same hue. For instance, you can create a darker version by reducing lightness, or a muted version by reducing saturation. CSS fully supports HSL color notation as HSL(hue, saturation%, lightness%). HSL also supports transparency through HSLA where the fourth value is the alpha channel. Many designers find HSL more intuitive than RGB because thinking in terms of "make this color darker" or "make this less saturated" aligns better with human color perception and color theory principles.',
      category: 'Color Formats'
    },
    {
      question: 'What does contrast ratio mean?',
      answer: 'Contrast ratio measures the difference in brightness (luminance) between two colors, expressed as a ratio such as 4.5:1 or 7:1. The higher the ratio, the greater the difference in brightness and the easier it is to distinguish the two colors. The contrast ratio is calculated by comparing the relative luminance of the lighter color to the darker color, resulting in a value between 1:1 (same brightness) and 21:1 (maximum contrast between black and white). The Web Content Accessibility Guidelines (WCAG) define specific contrast ratio requirements to ensure readability for all users. WCAG Level AA (the minimum standard for most websites) requires a contrast ratio of 4.5:1 for normal text and 3:1 for large text (18pt or larger, or 14pt bold or larger). WCAG Level AAA (enhanced accessibility) requires 7:1 for normal text and 4.5:1 for large text. For non-text elements and UI components, WCAG requires 3:1. These standards exist because adequate contrast is absolutely critical for users with low vision, color blindness, or dyslexia. Proper contrast also improves readability in bright sunlight and on small screens. You can easily check contrast ratios using our Contrast Checker tool or other WCAG validation tools available online.',
      category: 'Accessibility'
    },
    {
      question: 'Why is color contrast important?',
      answer: 'Color contrast is one of the most critical aspects of accessible design for several important reasons. First, adequate contrast helps users with color blindness, which affects approximately 8% of males and 0.5% of females globally. People with color blindness have difficulty distinguishing certain color combinations, and without sufficient brightness contrast, they cannot read text or understand visual information. Second, contrast is essential for users with low vision or reduced visual acuity, including millions of older adults whose vision naturally declines with age. These users rely heavily on high contrast to perceive text and interface elements. Third, good contrast improves readability in all conditions, including bright sunlight where screen glare makes text harder to read. Fourth, proper contrast ensures legal compliance with accessibility standards like WCAG (Web Content Accessibility Guidelines) and the Americans with Disabilities Act (ADA). Websites that fail accessibility standards can face legal challenges and exclusion of users with disabilities. Fifth, improved contrast benefits everyone, not just people with disabilities. Users report finding high-contrast websites easier to read and more professional-looking. Finally, from an SEO perspective, Google emphasizes accessibility as part of its ranking algorithms, so implementing proper color contrast can help improve search rankings. Best practice involves testing all color combinations used on your site with tools like our Contrast Checker to ensure they meet WCAG AA standards at minimum.',
      category: 'Accessibility'
    },
    {
      question: 'What is color blindness and how does it affect design?',
      answer: 'Color blindness, medically known as color vision deficiency (CVD), is a genetic trait that affects how the eye perceives certain colors. Approximately 8% of males and 0.5% of females are born with some form of color blindness, making it a significant portion of the population. The most common type is red-green color blindness, affecting about 99% of color-blind individuals. This type has two variants: protanopia (red blindness) where red appears as dark brown/black, and deuteranopia (green blindness) where green appears as brown/yellow. Less common is blue-yellow color blindness (tritanopia) affecting only 0.001% of the population. Acquired color blindness can also develop from eye diseases, medications, or aging. For designers, color blindness has profound implications. The most critical rule is to never use color alone to convey important information, as color-blind users cannot distinguish the information. Instead, combine color with other visual elements like patterns, icons, text labels, or shapes. For example, instead of a red button to indicate error and green for success, use red X and green checkmark icons with clear text labels. Always test designs with color blindness simulators to see how they appear to color-blind users. Ensure sufficient contrast ratios (4.5:1 minimum) since most color-blind people can see grayscale contrast. Avoid problematic color combinations like red-green, red-brown, or blue-yellow. Use tools and plugins that simulate color blindness to validate your designs. By designing with color blindness in mind from the start, you create inclusive designs that work for everyone.',
      category: 'Accessibility'
    },
    {
      question: 'How do I choose a color palette?',
      answer: 'Choosing an effective color palette is a thoughtful process that balances aesthetics, usability, and psychology. Start by understanding your brand identity and the emotions you want to evoke. Different colors trigger different psychological responses: red conveys energy and urgency, blue suggests trust and calm, green represents growth and nature, yellow radiates optimism and warmth, and purple symbolizes creativity and luxury. Consider your target audience and industry expectations. A luxury fashion brand will use different colors than a children\'s toy company. Next, use color harmony schemes to create visually appealing combinations: complementary colors (opposite on the color wheel) create high contrast and excitement, perfect for CTAs; analogous colors (adjacent on the wheel) create harmony and unity, ideal for calm designs; triadic colors (equally spaced) offer balanced vibrancy; split-complementary colors provide contrast with less intensity; and monochromatic variations create sophistication. A good practice is to limit your palette to 3-5 main colors plus neutral shades (whites, grays, blacks) for text and backgrounds. Assign roles: a primary brand color, secondary colors for accents, and neutrals for supporting text and backgrounds. Test your palette for contrast compliance, ensuring it meets WCAG accessibility standards of 4.5:1 for text. Consider how colors appear on different devices since monitors, phones, and print display colors differently. Use our Palette Generator tool to experiment with harmony schemes and instantly see how different color combinations work together. Get feedback from others, especially people from diverse backgrounds, as cultural color associations vary significantly worldwide.',
      category: 'Design Tips'
    },
    {
      question: 'What are the best colors for accessibility?',
      answer: 'The truth about color accessibility is that no specific colors are inherently more accessible than others—what matters most is contrast between the foreground and background colors. Any color combination can be accessible if it achieves sufficient contrast ratio, with WCAG Level AA requiring 4.5:1 for text and Level AAA requiring 7:1. That said, some color combinations are naturally easier to achieve high contrast and are generally safer choices. Dark text on light backgrounds is always a safe choice because the contrast is naturally high. Similarly, light text on dark backgrounds provides good contrast. Colors that are inherently high in brightness difference (like white and black, yellow and navy, or bright colors on dark backgrounds) make it easier to achieve accessibility standards without effort. Avoid combinations that are problematic for color-blind users: never rely on red-green alone to distinguish information (approximately 8% of males cannot distinguish this). Similarly, avoid blue-yellow combinations for those with tritanopia, though this is less common. Avoid low-saturation colors on backgrounds of similar saturation, as this makes it difficult for everyone to read. Test all your color combinations with our Contrast Checker tool to get exact contrast ratios. Use color vision deficiency simulators to see how your design appears to people with various types of color blindness. Remember that contrast isn\'t just about text on background—buttons, links, borders, and icons must also meet contrast requirements. When in doubt, test with real users and use automated accessibility tools to catch problems before launch.',
      category: 'Design Tips'
    },
    {
      question: 'Can I use these tools on mobile devices?',
      answer: 'Yes, all of our color tools are fully responsive and designed to work seamlessly across mobile devices, tablets, and desktops. Our entire interface is built using mobile-first design principles, meaning the mobile experience is as good as, if not better than, the desktop experience. However, some tools have specific considerations for mobile use. The Screen Color Picker tool is optimized for desktop and laptop use where you can easily pick colors from anywhere on your screen. On mobile devices, its functionality is more limited due to browser security restrictions that prevent web applications from freely accessing pixels outside the browser window. The Image Color Picker works great on mobile—you can upload images from your camera or photo library and extract colors from them. All other tools (Converter, Contrast Checker, Palette Generator, Gradient Generator, and Theme Preview) work perfectly on mobile with full functionality. The interfaces automatically adapt to smaller screens with touch-friendly buttons and readable text sizes. You can easily copy color values, share palettes, and export results on mobile. All tools work entirely in your browser with no server uploads, so they work offline too. For the best experience on mobile, use a modern browser like Chrome, Safari, Firefox, or Edge. If you encounter any mobile-specific issues, try rotating your device to landscape mode for more screen space, or consider using the tools on a desktop for tasks requiring precise color picking.',
      category: 'Tools'
    },
    {
      question: 'What color format should I use for web design?',
      answer: 'For web design, the choice of color format depends on your specific needs and preferences, as CSS supports multiple color formats equally well. HEX (Hexadecimal) color format is historically the most traditional and remains widely used because it\'s concise, was supported by all browsers from the earliest versions, and is still the default export from most design tools like Figma and Adobe Creative Suite. HEX format appears as #RRGGBB (e.g., #FF5733), and many developers find it intuitive to work with. RGB (Red, Green, Blue) format is increasingly popular, especially in modern web development, because it\'s more readable and directly maps to how screens work. RGB appears as RGB(255, 87, 51) and is particularly useful when working with transparency using RGBA(255, 87, 51, 0.5). HSL (Hue, Saturation, Lightness) is gaining popularity among designers because it\'s more intuitive—you can easily create color variations by adjusting saturation and lightness values. HSL appears as HSL(10, 100%, 60%). Named colors (like "red," "blue," "tomato") are supported but limited to 147 predefined colors and not recommended for professional design. Modern CSS also supports newer formats like LCH and OKLCH which better represent human color perception, but browser support is still developing. The best practice recommendation is to use HEX in your CSS for broad compatibility, especially for established projects. For new projects, consider using CSS custom properties (variables) that can store colors in any format, allowing you to change the format globally. Use our Color Converter tool to instantly convert between any of these formats as needed during your workflow.',
      category: 'Tools'
    },
    {
      question: 'How do I export my color palette?',
      answer: 'Our Palette Generator offers multiple export options to suit different workflows and use cases. After generating a palette you love, you\'ll see export buttons at the bottom. You can export your palette as a JSON file, which is perfect for developers who want to import color data into their applications or design systems. The JSON format is structured and easy to parse programmatically. CSS export provides CSS variables (also called CSS custom properties) in the format :root { --color-1: #FF5733; } etc., which you can copy directly into your stylesheet and use throughout your project. This is incredibly useful because you can reference colors by variable name and update them globally in one place. You can also export as a Tailwind Config snippet if you\'re using the Tailwind CSS framework, automatically integrating the palette into your Tailwind configuration. For sharing and presentation purposes, you can export the palette as a downloadable image showing color swatches with hex values—perfect for sharing with clients or team members. Some of these options can be copied directly to your clipboard for quick pasting into code editors, while others allow downloading as files. You can also take screenshots of your palette directly from the generator. Each export format has specific use cases: use JSON for APIs and data processing, CSS variables for web projects, images for presentations and documentation, and Tailwind exports for projects using that framework. The flexibility of these export options means you can use Color Utils seamlessly in your existing workflow regardless of your technology stack.',
      category: 'Tools'
    },
    {
      question: 'What is a color gradient?',
      answer: 'A color gradient is a smooth, gradual transition between two or more colors, creating a blended visual effect. Gradients add significant visual interest, depth, and sophistication to designs compared to solid colors. There are several types of gradients you should understand. Linear gradients transition smoothly from one color to another along a straight line, defined by an angle or direction. For example, a top-to-bottom gradient transitions from one color at the top to another color at the bottom. Radial gradients emanate outward from a center point, creating a circular or elliptical transition pattern. Angular gradients (also called conic gradients) rotate around a center point like the hand of a clock. In CSS, gradients are created using the background-image property with functions like linear-gradient(), radial-gradient(), and conic-gradient(). You can add multiple color stops at different percentages to create complex gradients with many colors. For example, linear-gradient(to right, red 0%, yellow 50%, green 100%) creates a three-color gradient. Gradients are incredibly versatile: they can be used for backgrounds, borders, text effects, and buttons. Modern design trends heavily feature gradients to create dynamic, contemporary-looking interfaces. Our Gradient Generator tool helps you create gradients visually with a preview, rather than hand-coding CSS. You can adjust colors, direction, angle, and color stop positions in real-time and instantly see the result. Once satisfied, you can export the CSS code directly to your project. Gradients work across all modern browsers and devices, making them a reliable design choice for web and mobile applications.',
      category: 'Design Tips'
    },
    {
      question: 'Are your tools free to use?',
      answer: 'Yes, absolutely! All ColorUtils tools are completely free to use with no hidden charges, subscription requirements, or premium features behind a paywall. Our mission is to make professional-grade color tools accessible to everyone—designers, developers, students, and enthusiasts alike. You don\'t need to create an account, log in, or provide any payment information. Simply visit the site, select a tool, and start using it immediately. We believe that quality tools shouldn\'t be gatekept behind expensive software subscriptions. Many professional designers and developers use our tools alongside or instead of expensive design software for color-specific tasks. The tools are continuously updated and improved based on user feedback. We don\'t charge per use, per export, or have limits on how many colors you can process or palettes you can generate. Whether you\'re a professional designer working on a client project, a developer building a website, a student learning design principles, or a hobbyist exploring color, you have full access to all our tools without paying anything. This commitment to free, accessible tools makes ColorUtils an excellent resource for anyone working with colors, from beginners to professionals.',
      category: 'General'
    },
    {
      question: 'Do you store my data or colors?',
      answer: 'No, we absolutely do not store any of your data or color information. All color tools work entirely in your browser using client-side JavaScript, which means everything happens locally on your device. Your data never leaves your computer, laptop, tablet, or phone, and we have no servers that receive or store your color information. This design philosophy means we don\'t even know what colors you\'re working with or when you use our tools. We don\'t track your color preferences, usage patterns, or which tools you use most. This is fundamentally different from cloud-based design tools like Figma or Adobe Creative Cloud, which do store your projects on their servers. Our privacy-first approach means you can use ColorUtils with complete confidence that your work and creative choices remain private. You don\'t need to worry about your color palettes or color-picking activities being analyzed, shared, or used for advertising purposes. This is particularly important for professional designers working on confidential client projects—you can freely use our tools without any concern about data privacy. Since everything runs locally, ColorUtils even works offline after the initial page load. The trade-off is that we can\'t save your work across devices—if you refresh the page, your current work is cleared. However, you can export colors and palettes (as JSON, CSS, images, etc.) to save them locally on your computer. Our commitment to privacy and client-side processing is built into our core values and differentiates us from many other online tools.',
      category: 'General'
    }
  ];

  get categories(): any {
    return signal([...new Set(this.faqs.map(f => f.category))]);
  }

  get filteredFAQs(): any {
    const category = this.selectedCategory();
    return signal(category ? this.faqs.filter(f => f.category === category) : this.faqs);
  }

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Frequently Asked Questions - ColorUtils',
      description: 'Find answers to common questions about color formats, accessibility, and how to use our color tools.',
      keywords: 'FAQ, color questions, accessibility, color blindness, color formats, RGB, HEX, HSL'
    });
  }
}
