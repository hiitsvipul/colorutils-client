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
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
