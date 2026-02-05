# Google AdSense Integration Guide

## Setup Steps

### 1. Get Your AdSense Account Ready
1. Sign up for Google AdSense at https://www.google.com/adsense
2. Submit your website (colorutils.com) for approval
3. Wait for approval (usually 1-3 days)
4. Once approved, get your Publisher ID (format: `ca-pub-XXXXXXXXXXXXXXXX`)

### 2. Create Ad Units
1. In AdSense dashboard, go to **Ads** → **By ad unit**
2. Create ad units for each size you need:
   - **Banner ads**: Display ad (728x90 or responsive)
   - **Rectangle ads**: Display ad (300x250 or responsive)
3. Copy the **Ad Slot ID** for each unit (format: `1234567890`)

### 3. Configure Your Application

#### Update Publisher ID
Replace `YOUR_PUBLISHER_ID` in these files:

**File: `src/index.html`**
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_PUBLISHER_ID"
     crossorigin="anonymous"></script>
```

**File: `src/app/shared/ad-placeholder/ad-placeholder.component.ts`**
```typescript
adClient = 'ca-pub-YOUR_PUBLISHER_ID';
```

#### Enable Ads in Your Pages
Update your component templates to enable ads:

**Example: Home Page**
```typescript
<!-- Top Banner Ad -->
<app-ad-placeholder 
  size="banner" 
  [enableAds]="true"
  adSlot="1234567890">
</app-ad-placeholder>

<!-- Bottom Rectangle Ad -->
<app-ad-placeholder 
  size="rectangle" 
  [enableAds]="true"
  adSlot="0987654321">
</app-ad-placeholder>
```

### 4. Testing

#### Development Mode (Show Placeholders)
```html
<!-- Shows placeholder instead of real ads -->
<app-ad-placeholder size="banner" [enableAds]="false"></app-ad-placeholder>
```

#### Production Mode (Show Real Ads)
```html
<!-- Shows real AdSense ads -->
<app-ad-placeholder 
  size="banner" 
  [enableAds]="true"
  adSlot="YOUR_AD_SLOT_ID">
</app-ad-placeholder>
```

### 5. Create Environment Configuration (Optional)

**Create `src/environments/environment.ts`:**
```typescript
export const environment = {
  production: false,
  adsense: {
    enabled: false,
    publisherId: 'ca-pub-YOUR_PUBLISHER_ID',
    adSlots: {
      homeBannerTop: '',
      homeRectangleBottom: '',
      toolsBannerTop: '',
      toolsRectangleBottom: ''
    }
  }
};
```

**Create `src/environments/environment.prod.ts`:**
```typescript
export const environment = {
  production: true,
  adsense: {
    enabled: true,
    publisherId: 'ca-pub-YOUR_PUBLISHER_ID',
    adSlots: {
      homeBannerTop: '1234567890',
      homeRectangleBottom: '0987654321',
      toolsBannerTop: '1111111111',
      toolsRectangleBottom: '2222222222'
    }
  }
};
```

### 6. Ad Placements in Your App

Current ad locations (7 pages total):
- **Home page**: 2 ads (top banner + bottom rectangle)
- **Image Picker**: 2 ads (top banner + bottom rectangle)
- **Screen Picker**: 2 ads (top banner + bottom rectangle)
- **Converter**: 2 ads (top banner + bottom rectangle)
- **Contrast Checker**: 2 ads (top banner + bottom rectangle)
- **Palette Generator**: 2 ads (top banner + bottom rectangle)
- **Gradient Generator**: 2 ads (top banner + bottom rectangle)

**Total**: 14 ad units (7 banner + 7 rectangle)

### 7. AdSense Best Practices

1. **Ad Placement**
   - Place ads above the fold (visible without scrolling)
   - Maintain good user experience
   - Don't place too many ads per page

2. **Content Requirements**
   - Ensure you have substantial original content
   - Follow Google's content policies
   - No prohibited content

3. **Performance**
   - Ads load asynchronously (won't block page load)
   - Use responsive ad units for mobile compatibility

4. **Policy Compliance**
   - Don't click your own ads
   - Don't encourage clicks
   - Don't modify ad code

### 8. Monitoring

- Check AdSense dashboard for:
  - Impressions
  - Clicks
  - Revenue
  - CTR (Click-through rate)
  - Policy violations

### 9. Troubleshooting

**Ads not showing:**
- Check browser console for errors
- Verify Publisher ID is correct
- Verify Ad Slot IDs are correct
- Check if AdBlocker is active
- Wait 24-48 hours after setup (AdSense needs time)

**Blank ad spaces:**
- AdSense might not have relevant ads to show
- Your site might be new (low traffic)
- Try different ad sizes

**Console errors:**
- Check network tab for blocked requests
- Ensure adsbygoogle.js is loading
- Verify HTTPS is enabled

## Quick Start Checklist

- [ ] Sign up for Google AdSense
- [ ] Get site approved
- [ ] Get Publisher ID
- [ ] Create ad units in AdSense dashboard
- [ ] Get Ad Slot IDs for each unit
- [ ] Replace `YOUR_PUBLISHER_ID` in `index.html`
- [ ] Replace `YOUR_PUBLISHER_ID` in `ad-placeholder.component.ts`
- [ ] Update each page to use real ad slot IDs
- [ ] Set `enableAds="true"` for production
- [ ] Deploy to production
- [ ] Verify ads are showing
- [ ] Monitor AdSense dashboard

## Need Help?

- AdSense Help Center: https://support.google.com/adsense
- AdSense Community: https://support.google.com/adsense/community
- AdSense Policies: https://support.google.com/adsense/answer/48182
