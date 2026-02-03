import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Color Tools - Professional Color Tools for Designers & Developers'
  },
  {
    path: 'screen-picker',
    loadComponent: () => import('./tools/screen-picker/screen-picker.component').then(m => m.ScreenPickerComponent),
    title: 'Screen Color Picker | Color Tools'
  },
  {
    path: 'image-picker',
    loadComponent: () => import('./tools/image-picker/image-picker.component').then(m => m.ImagePickerComponent),
    title: 'Image Color Picker | Color Tools'
  },
  {
    path: 'converter',
    loadComponent: () => import('./tools/converter/converter.component').then(m => m.ConverterComponent),
    title: 'Color Converter | Color Tools'
  },
  {
    path: 'contrast-checker',
    loadComponent: () => import('./tools/contrast-checker/contrast-checker.component').then(m => m.ContrastCheckerComponent),
    title: 'Contrast Checker | Color Tools'
  },
  {
    path: 'palette-generator',
    loadComponent: () => import('./tools/palette-generator/palette-generator.component').then(m => m.PaletteGeneratorComponent),
    title: 'Palette Generator | Color Tools'
  },
  {
    path: 'gradient-generator',
    loadComponent: () => import('./tools/gradient-generator/gradient-generator.component').then(m => m.GradientGeneratorComponent),
    title: 'Gradient Generator | Color Tools'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
