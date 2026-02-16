import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Color Utils - Professional Color Utils for Designers & Developers'
  },
  {
    path: 'screen-picker',
    loadComponent: () => import('./tools/screen-picker/screen-picker.component').then(m => m.ScreenPickerComponent),
    title: 'Screen Color Picker | Color Utils'
  },
  {
    path: 'image-picker',
    loadComponent: () => import('./tools/image-picker/image-picker.component').then(m => m.ImagePickerComponent),
    title: 'Image Color Picker | Color Utils'
  },
  {
    path: 'converter',
    loadComponent: () => import('./tools/converter/converter.component').then(m => m.ConverterComponent),
    title: 'Color Converter | Color Utils'
  },
  {
    path: 'contrast-checker',
    loadComponent: () => import('./tools/contrast-checker/contrast-checker.component').then(m => m.ContrastCheckerComponent),
    title: 'Contrast Checker | Color Utils'
  },
  {
    path: 'palette-generator',
    loadComponent: () => import('./tools/palette-generator/palette-generator.component').then(m => m.PaletteGeneratorComponent),
    title: 'Palette Generator | Color Utils'
  },
  {
    path: 'gradient-generator',
    loadComponent: () => import('./tools/gradient-generator/gradient-generator.component').then(m => m.GradientGeneratorComponent),
    title: 'Gradient Generator | Color Utils'
  },
  {
    path: 'theme-preview',
    loadComponent: () => import('./tools/theme-preview/theme-preview.component').then(m => m.ThemePreviewComponent),
    title: 'Theme Preview | Color Utils'
  },
  {
    path: 'color-theory',
    loadComponent: () => import('./pages/color-theory/color-theory.component').then(m => m.ColorTheoryComponent),
    title: 'Color Theory Guide | Color Utils'
  },
  {
    path: 'faq',
    loadComponent: () => import('./pages/faq/faq.component').then(m => m.FAQComponent),
    title: 'FAQ | Color Utils'
  },
  {
    path: 'use-cases',
    loadComponent: () => import('./pages/use-cases/use-cases.component').then(m => m.UseCasesComponent),
    title: 'Use Cases | Color Utils'
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent),
    title: 'Privacy Policy | Color Utils'
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent),
    title: 'Terms & Conditions | Color Utils'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us | Color Utils'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us | Color Utils'
  },
  {
    path: 'cookie-policy',
    loadComponent: () => import('./pages/cookie-policy/cookie-policy.component').then(m => m.CookiePolicyComponent),
    title: 'Cookie Policy | Color Utils'
  },
  {
    path: 'sitemap',
    loadComponent: () => import('./pages/sitemap/sitemap.component').then(m => m.SitemapComponent),
    title: 'Sitemap | Color Utils'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
