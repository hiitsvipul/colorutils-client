# Color Tools - Professional Color Tools Web App

A modern, SEO-optimized, production-ready web application for professional color management. Built with Angular, Tailwind CSS, and TypeScript, featuring browser-native APIs only.

![Angular](https://img.shields.io/badge/Angular-19.0-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38bdf8)

## 🚀 Features

### Color Tools
1. **Screen Color Picker** - Pick colors from anywhere on your screen using the EyeDropper API
2. **Image Color Picker** - Upload images and pick colors with precision using zoom and magnifier
3. **Color Converter** - Convert between HEX, RGB, HSL, and CMYK formats
4. **Contrast Checker** - Check WCAG AA/AAA compliance for accessibility

### Technical Features
- ✅ Angular standalone components architecture
- ✅ Dark/Light theme with localStorage persistence
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ SEO-optimized with meta tags per route
- ✅ Lazy-loaded routes for performance
- ✅ Toast notifications for user feedback
- ✅ Smooth animations and transitions
- ✅ Accessibility-first design
- ✅ No backend required - 100% frontend
- ✅ Ad placeholder components (ready for future integration)

## 📁 Project Structure

```
src/app/
├── services/           # Core services
│   ├── color.service.ts       # Color conversion & calculations
│   ├── theme.service.ts       # Dark/light theme management
│   ├── toast.service.ts       # Toast notifications
│   └── seo.service.ts         # SEO meta tags management
├── shared/             # Shared components
│   ├── header/               # Navigation header
│   ├── footer/               # Footer
│   ├── toast-container/      # Toast notifications UI
│   └── ad-placeholder/       # Ad placeholder components
├── pages/              # Page components
│   └── home/                 # Home page
├── tools/              # Tool components
│   ├── screen-picker/        # Screen color picker
│   ├── image-picker/         # Image color picker
│   ├── converter/            # Color converter
│   └── contrast-checker/     # Contrast checker
└── app.routes.ts      # Route configuration
```

## 🛠️ Installation

### Prerequisites
- Node.js 18+ and npm
- Angular CLI 19+

### Setup

1. **Clone the repository**
```bash
cd colorUtilsClient
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
ng serve
# or
npm start
```

4. **Open browser**
Navigate to `http://localhost:4200/`

## 🎨 Usage

### Screen Color Picker
1. Navigate to Screen Picker
2. Click "Pick Color from Screen"
3. Click anywhere on your screen
4. View and copy color values in all formats

### Image Color Picker
1. Navigate to Image Picker
2. Upload an image
3. Adjust zoom if needed
4. Click on the image to pick a color
5. Use magnifier for precision

### Color Converter
1. Navigate to Converter
2. Enter any color value (HEX, RGB, or HSL)
3. View converted values in all formats
4. Use quick presets for common colors

### Contrast Checker
1. Navigate to Contrast Checker
2. Select text and background colors
3. View WCAG AA/AAA compliance
4. Use live preview to see contrast

## 🎯 Browser Support

- Chrome/Edge 95+ (Full support including EyeDropper API)
- Firefox 90+ (Partial - no EyeDropper API)
- Safari 15+ (Partial - no EyeDropper API)

## 🏗️ Building for Production

## 🏗️ Building for Production

```bash
ng build --configuration production
```

This will create optimized production files in the `dist/` directory with:
- Minified JavaScript and CSS
- Tree-shaking for smaller bundle size
- Ahead-of-Time (AOT) compilation
- Lazy-loaded routes

## 🎨 Theme System

The app supports dark and light themes:

```typescript
// Toggle theme
themeService.toggleTheme();

// Set specific theme
themeService.setTheme('dark');
themeService.setTheme('light');

// Get current theme
const currentTheme = themeService.theme();
```

Theme preference is automatically saved to localStorage and persists across sessions.

## 🔧 Configuration

### Tailwind CSS
Configured in `tailwind.config.js` with:
- Custom color palette
- Dark mode support (class strategy)
- Custom animations
- Extended theme

### Angular
- Standalone components
- Signal-based reactive state
- Lazy-loaded routes
- SEO optimization with meta tags

## 📱 Responsive Design

- **Mobile**: < 768px - Single column, hamburger menu
- **Tablet**: 768px - 1024px - Two columns
- **Desktop**: > 1024px - Full layout with multiple columns

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- WCAG contrast checking tool
- Screen reader friendly
- Focus states on interactive elements

## 🚀 Performance

- Lazy-loaded routes
- Optimized images
- Minimal dependencies
- Tree-shaking enabled
- AOT compilation
- Service Worker ready

## 🔜 Future Enhancements

- [ ] Export color palettes
- [ ] Save favorite colors
- [ ] Color harmony generator
- [ ] Gradient generator
- [ ] Integration with design tools
- [ ] PWA support
- [ ] Offline functionality

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Development

### Code Style
- TypeScript strict mode
- ESLint for code quality
- Prettier for formatting (recommended)

### Testing

```bash
# Unit tests
ng test

# E2E tests
ng e2e
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Built with ❤️ using Angular & Tailwind CSS**

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
