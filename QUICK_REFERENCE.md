# Color Tools - Quick Reference Guide

## 🎯 Application Overview

A modern, production-ready color tools web application built with Angular 19, Tailwind CSS, and TypeScript. Features a clean, professional UI with dark/light theme support and full accessibility compliance.

## 📋 Quick Start

```bash
npm install
npm start
# Navigate to http://localhost:4200
```

## 🛠️ Tools Available

### 1. Screen Color Picker (`/screen-picker`)
**API Used:** EyeDropper API
**Features:**
- Pick colors from anywhere on screen
- Instant color values in HEX, RGB, HSL, CMYK
- One-click copy buttons
- Graceful fallback for unsupported browsers

**Usage:**
```typescript
// In component
const eyeDropper = new EyeDropper();
const result = await eyeDropper.open();
```

### 2. Image Color Picker (`/image-picker`)
**API Used:** Canvas API
**Features:**
- Upload and analyze images
- Zoom controls (1x - 5x)
- Magnifier for precision picking
- Click to pick any pixel color

**Technical Details:**
- Uses Canvas 2D context for pixel reading
- ImageData API for color extraction
- Real-time magnifier rendering

### 3. Color Converter (`/converter`)
**Features:**
- Convert between HEX, RGB, HSL, CMYK
- Auto-detect input format
- 12 quick color presets
- Copy all formats instantly

**Supported Formats:**
```
HEX:  #FF5733 or FF5733
RGB:  rgb(255, 87, 51) or 255, 87, 51
HSL:  hsl(9, 100%, 60%) or 9, 100%, 60%
```

### 4. Contrast Checker (`/contrast-checker`)
**Features:**
- WCAG AA/AAA compliance checking
- Live preview with sample text
- Contrast ratio calculation
- Pass/fail indicators

**WCAG Requirements:**
- AA Normal Text: 4.5:1
- AA Large Text: 3:1
- AAA Normal Text: 7:1
- AAA Large Text: 4.5:1

## 🎨 Core Services

### ColorService (`services/color.service.ts`)
**Methods:**
```typescript
// Convert HEX to RGB
hexToRgb(hex: string): { r, g, b } | null

// Convert RGB to HEX
rgbToHex(r: number, g: number, b: number): string

// Convert RGB to HSL
rgbToHsl(r, g, b): { h, s, l }

// Convert HSL to RGB
hslToRgb(h, s, l): { r, g, b }

// Convert RGB to CMYK
rgbToCmyk(r, g, b): { c, m, y, k }

// Get all formats at once
getAllFormats(r, g, b): ColorFormats

// Parse any color string
parseColor(color: string): { r, g, b } | null

// Calculate contrast ratio
getContrastRatio(color1, color2): number
```

### ThemeService (`services/theme.service.ts`)
**Features:**
- Signal-based reactive theme state
- localStorage persistence
- Automatic DOM updates

**Usage:**
```typescript
// Toggle theme
themeService.toggleTheme();

// Set specific theme
themeService.setTheme('dark');
themeService.setTheme('light');

// Get current theme (signal)
const theme = themeService.theme();
```

### ToastService (`services/toast.service.ts`)
**Usage:**
```typescript
// Show notifications
toastService.success('Color copied!');
toastService.error('Invalid format');
toastService.info('Tip: Use zoom for precision');

// Custom duration
toastService.success('Saved!', 5000); // 5 seconds
```

### SeoService (`services/seo.service.ts`)
**Usage:**
```typescript
seoService.updateMetaTags({
  title: 'Page Title',
  description: 'Page description',
  keywords: 'keyword1, keyword2',
  author: 'Author Name',
  ogTitle: 'Social media title',
  ogDescription: 'Social media description'
});
```

## 🧩 Shared Components

### HeaderComponent
- Responsive navigation
- Theme toggle button
- Mobile hamburger menu
- Active route highlighting

### FooterComponent
- Quick links
- External resources
- Copyright info

### AdPlaceholderComponent
**Sizes:**
```html
<app-ad-placeholder size="banner"></app-ad-placeholder>    <!-- 728x90 -->
<app-ad-placeholder size="square"></app-ad-placeholder>    <!-- 250x250 -->
<app-ad-placeholder size="rectangle"></app-ad-placeholder> <!-- Full width x 192px -->
```

### ToastContainerComponent
- Fixed positioning (top-right)
- Auto-dismiss (3 seconds default)
- Smooth animations
- Multiple toast support

## 🎨 Styling System

### Tailwind Configuration
**Custom Colors:**
```javascript
primary: {
  50: '#f0f9ff',   100: '#e0f2fe',
  200: '#bae6fd',  300: '#7dd3fc',
  400: '#38bdf8',  500: '#0ea5e9',
  600: '#0284c7',  700: '#0369a1',
  800: '#075985',  900: '#0c4a6e'
}
```

**Custom Animations:**
- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up with fade
- `animate-slide-down` - Slide down with fade

### Dark Mode
**Implementation:**
```html
<!-- Tailwind dark mode classes -->
<div class="bg-white dark:bg-gray-900">
  <p class="text-gray-900 dark:text-white">Content</p>
</div>
```

**Activation:**
- Controlled by `dark` class on `<html>` element
- ThemeService handles all updates
- Persisted in localStorage

## 📱 Responsive Breakpoints

```css
/* Mobile First */
sm:  640px   /* Small devices */
md:  768px   /* Tablets */
lg:  1024px  /* Desktops */
xl:  1280px  /* Large desktops */
2xl: 1536px  /* Extra large screens */
```

## 🚀 Performance Tips

### Route Lazy Loading
All routes use `loadComponent` for code splitting:
```typescript
{
  path: 'screen-picker',
  loadComponent: () => import('./tools/screen-picker/...')
}
```

### Signal-based State
Uses Angular signals for reactive state:
```typescript
const theme = signal<Theme>('dark');
const color = signal<ColorFormats | null>(null);
```

### Optimized Animations
Minimal, performant CSS animations:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

## 🔒 Browser APIs Used

1. **EyeDropper API** - Screen color picking
2. **Canvas API** - Image manipulation
3. **Clipboard API** - Copy to clipboard
4. **LocalStorage API** - Theme persistence
5. **FileReader API** - Image uploads

## ♿ Accessibility Features

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation
- Focus states
- High contrast support
- Screen reader friendly
- Skip to main content
- Descriptive alt text

## 📊 SEO Optimization

### Per-Route Meta Tags
Each route updates:
- Page title
- Meta description
- Keywords
- Open Graph tags
- Twitter Card tags

### Best Practices
- Semantic HTML structure
- Descriptive headings (H1-H3)
- Clean URLs
- Fast load times
- Mobile-responsive
- Schema.org structured data ready

## 🔧 Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm start
ng serve

# Build for production
npm run build
ng build --configuration production

# Run tests
npm test
ng test

# Lint code
ng lint

# Check bundle size
ng build --stats-json
```

## 📦 Project Dependencies

**Core:**
- Angular 19.x
- TypeScript 5.x
- Tailwind CSS 3.x

**No external UI libraries** - Pure Tailwind CSS
**No paid APIs** - Browser-native APIs only
**No backend** - 100% frontend application

## 🎯 Production Checklist

- [x] Responsive design
- [x] Dark/Light theme
- [x] SEO optimization
- [x] Lazy loading
- [x] Accessibility
- [x] Error handling
- [x] Loading states
- [x] Toast notifications
- [x] Ad placeholders
- [x] Browser compatibility
- [x] Clean code structure
- [x] Documentation

## 📝 Code Style

### TypeScript
```typescript
// Use signals for reactive state
const value = signal<Type>(initialValue);

// Use inject() for dependency injection
private service = inject(ServiceName);

// Use async/await for promises
async copyToClipboard(text: string): Promise<void> {
  await navigator.clipboard.writeText(text);
}
```

### Component Structure
```typescript
@Component({
  selector: 'app-name',
  standalone: true,
  imports: [CommonModule, ...],
  template: `...`,
  styles: []
})
export class NameComponent implements OnInit {
  // Services
  private service = inject(ServiceName);
  
  // Signals
  value = signal<Type>(initial);
  
  // Lifecycle
  ngOnInit(): void { }
  
  // Methods
  methodName(): void { }
}
```

## 🎓 Learning Resources

- [Angular Documentation](https://angular.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web APIs](https://developer.mozilla.org/en-US/docs/Web/API)

---

**Questions or issues?** Open an issue on GitHub or refer to the main README.md

**Last Updated:** February 2026
