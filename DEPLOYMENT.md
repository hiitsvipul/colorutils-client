# Deployment Guide - Color Tools

## 📋 Pre-Deployment Checklist

- [ ] All features tested locally
- [ ] Theme switching works
- [ ] All routes accessible
- [ ] SEO meta tags verified
- [ ] Responsive design tested
- [ ] Browser compatibility checked
- [ ] Production build successful
- [ ] No console errors

## 🏗️ Building for Production

### 1. Build Command
```bash
ng build --configuration production
```

### 2. Build Output
The build creates files in `dist/color-utils-client/browser/`:
- Minified JavaScript bundles
- Optimized CSS
- Static HTML files
- Assets (images, fonts, etc.)

### 3. Build Optimizations
- **Tree-shaking**: Removes unused code
- **Minification**: Compresses JS/CSS
- **AOT Compilation**: Ahead-of-time compilation
- **Code Splitting**: Lazy-loaded routes
- **Asset Optimization**: Compressed images

## 🚀 Deployment Options

### Option 1: Netlify (Recommended)

**Step 1: Create `netlify.toml`**
```toml
[build]
  command = "npm run build"
  publish = "dist/color-utils-client/browser"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

**Step 2: Deploy**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

**Step 3: Configure Domain**
- Go to Netlify dashboard
- Domain settings
- Add custom domain

### Option 2: Vercel

**Step 1: Create `vercel.json`**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist/color-utils-client/browser"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

**Step 2: Deploy**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 3: Firebase Hosting

**Step 1: Install Firebase CLI**
```bash
npm install -g firebase-tools
firebase login
```

**Step 2: Initialize Firebase**
```bash
firebase init hosting
```

**Configuration:**
- Public directory: `dist/color-utils-client/browser`
- Single-page app: Yes
- GitHub integration: Optional

**Step 3: Create `firebase.json`**
```json
{
  "hosting": {
    "public": "dist/color-utils-client/browser",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(jpg|jpeg|gif|png|svg|webp)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      },
      {
        "source": "**/*.@(js|css)",
        "headers": [
          {
            "key": "Cache-Control",
            "value": "max-age=31536000"
          }
        ]
      }
    ]
  }
}
```

**Step 4: Deploy**
```bash
firebase deploy
```

### Option 4: GitHub Pages

**Step 1: Install angular-cli-ghpages**
```bash
npm install -g angular-cli-ghpages
```

**Step 2: Build with base href**
```bash
ng build --configuration production --base-href "/color-tools/"
```

**Step 3: Deploy**
```bash
npx angular-cli-ghpages --dir=dist/color-utils-client/browser
```

### Option 5: AWS S3 + CloudFront

**Step 1: Build**
```bash
ng build --configuration production
```

**Step 2: Create S3 Bucket**
- Enable static website hosting
- Upload files from `dist/color-utils-client/browser/`

**Step 3: Configure CloudFront**
- Create distribution
- Origin: S3 bucket
- Default root object: `index.html`
- Error pages: Redirect 404 to `/index.html`

**Step 4: Deploy with AWS CLI**
```bash
aws s3 sync dist/color-utils-client/browser/ s3://your-bucket-name/ --delete
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

## 🔧 Environment Configuration

### Angular Environment Files

**Create `src/environments/environment.prod.ts`:**
```typescript
export const environment = {
  production: true,
  apiUrl: 'https://api.colortools.app',
  analytics: {
    enabled: true,
    trackingId: 'YOUR_GA_ID'
  }
};
```

**Update `angular.json`:**
```json
"configurations": {
  "production": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.prod.ts"
      }
    ]
  }
}
```

## 📊 Performance Optimization

### 1. Enable Compression
Most hosting platforms auto-enable, but verify:
```
Content-Encoding: gzip
```

### 2. Set Cache Headers
```
Cache-Control: max-age=31536000 (for assets)
Cache-Control: no-cache (for index.html)
```

### 3. Enable HTTP/2
All modern hosting platforms support this.

### 4. CDN Integration
For global performance:
- Cloudflare
- AWS CloudFront
- Fastly

## 🔒 Security Headers

### Recommended Headers
```
Content-Security-Policy: default-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### Netlify `_headers` file:
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## 📈 Analytics Integration

### Google Analytics 4

**Step 1: Add to `index.html`:**
```html
<head>
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  </script>
</head>
```

### Microsoft Clarity (Heatmaps)
```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

## 🎯 SEO Post-Deployment

### 1. Submit Sitemap
Create `src/sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://colortools.app/</loc>
    <priority>1.0</priority>
    <changefreq>weekly</changefreq>
  </url>
  <url>
    <loc>https://colortools.app/screen-picker</loc>
    <priority>0.8</priority>
    <changefreq>monthly</changefreq>
  </url>
  <!-- Add other routes -->
</urlset>
```

Submit to:
- Google Search Console
- Bing Webmaster Tools

### 2. robots.txt
Create `src/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://colortools.app/sitemap.xml
```

### 3. Verify Meta Tags
Use tools:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## 🚨 Monitoring

### Error Tracking
Options:
- **Sentry**: Application monitoring
- **LogRocket**: Session replay
- **Rollbar**: Error tracking

**Example Sentry Integration:**
```typescript
import * as Sentry from "@sentry/angular";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  environment: "production"
});
```

### Performance Monitoring
- Google Lighthouse CI
- WebPageTest
- GTmetrix

### Uptime Monitoring
- UptimeRobot
- Pingdom
- StatusCake

## 🔄 CI/CD Pipeline

### GitHub Actions Example

**`.github/workflows/deploy.yml`:**
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test -- --watch=false --browsers=ChromeHeadless
    
    - name: Build
      run: npm run build
    
    - name: Deploy to Netlify
      uses: netlify/actions/cli@master
      with:
        args: deploy --prod
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📱 PWA Setup (Optional)

### 1. Add Service Worker
```bash
ng add @angular/pwa
```

### 2. Configure `ngsw-config.json`
```json
{
  "index": "/index.html",
  "assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/*.css",
          "/*.js"
        ]
      }
    }
  ]
}
```

## ✅ Post-Deployment Verification

### Checklist
- [ ] Site loads on all devices
- [ ] All routes work correctly
- [ ] Theme toggle functions
- [ ] Color tools work as expected
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Analytics tracking works
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] SSL certificate valid
- [ ] Lighthouse score > 90

### Testing Tools
- **Lighthouse**: Performance, SEO, Accessibility
- **WebPageTest**: Load times
- **GTmetrix**: Performance analysis
- **BrowserStack**: Cross-browser testing
- **Google Mobile-Friendly Test**

## 🆘 Troubleshooting

### Issue: Routes return 404
**Solution:** Configure redirects/rewrites to index.html

### Issue: Assets not loading
**Solution:** Check base href in index.html matches deployment path

### Issue: Theme not persisting
**Solution:** Verify localStorage is accessible (not blocked by privacy settings)

### Issue: Slow load times
**Solution:** 
- Enable compression
- Optimize images
- Use CDN
- Check bundle size

## 📞 Support

For deployment issues:
1. Check hosting provider documentation
2. Review build logs
3. Test production build locally: `npx http-server dist/color-utils-client/browser`

---

**Deployment Complete!** 🎉

Monitor your application and iterate based on user feedback and analytics.
