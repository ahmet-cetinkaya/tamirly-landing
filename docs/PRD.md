# Product Requirements Document (PRD) - Tamirly Landing Page

## Project Overview

**Product Name:** Tamirly Landing Page
**Version:** 1.0
**Date:** December 2025
**Purpose**: Comprehensive specification for the Tamirly landing page, including
business objectives, audience, technical specs, and development phases.
**Status:** Draft

## Product Vision

The Tamirly landing page serves as the primary web presence and conversion engine
for the Tamirly mobile application. It effectively communicates the app's value
proposition to technicians and DIYers, driving downloads from both
Google Play Store and F-Droid.

## Business Objectives

### Primary Goals

- **Conversion Rate**: Achieve 15% download conversion from visitor to app install
- **Traffic**: Generate 5,000+ monthly visitors through organic and paid channels
- **Brand Awareness**: Establish Tamirly as the go-to offline repair tool
- **Dual Distribution**: Balance traffic between Google Play and F-Droid

### Success Metrics

- **Bounce Rate**: < 40% (indicating engaging content)
- **Time on Page**: > 2 minutes (indicating thorough review)
- **Download CTR**: > 12% on primary CTAs
- **Mobile Traffic**: > 70% of visitors (matching target audience)
- **SEO Ranking**: Top 10 for "HVAC error codes offline" keywords

## Target Audience

### Primary Users (75%)

#### HVAC Technicians & Professional Specialists

- Age: 25-55
- Technical background with appliance repair experience
- Work in areas with poor internet connectivity (basements, remote locations)
- Value offline functionality and speed
- Device: Android smartphones (work phones)

### Secondary Users (25%)

#### DIY Home Users

- Age: 30-60
- Basic technical knowledge, prefer self-repair
- Cost-conscious, want to avoid service calls
- Need clear, actionable guidance
- Device: Personal Android smartphones

### User Pain Points

- Time wasted searching for error codes online
- No internet access in repair locations
- Inaccurate or scattered information
- Complex technical manuals
- Language barriers in technical documentation

## Landing Page Architecture

### Section 1: Navigation Bar

**Purpose**: Provide clear navigation and immediate download access

**Components**:

- Logo: Tamirly branding with icon
- Navigation Links: Features, How it Works, Supported Brands
- Primary CTA: "Download App" button (Android icon)

**Design Specifications**:

- Fixed position, stays visible on scroll
- Background: Semi-transparent dark with blur effect
- Border-bottom: Subtle gray border for separation
- Height: 80px for comfortable touch targets

---

### Section 2: Hero Section

**Purpose**: Immediate value proposition and primary conversion

**Key Messaging**:

```text
Primary: "Offline Reliability. Instant Solutions."
Secondary: "Diagnose appliance errors in seconds without an internet connection.
           The ultimate tool for technicians and DIYers."
```

**Visual Components**:

1. **Trust Badge**: "New v2.0 Released" with pulse animation
2. **Hero Headline**: Large, gradient text (primary to cyan)
3. **Supporting Copy**: Clear value proposition text
4. **Primary CTAs**:
   - "Get for Android" (prominent, brand-colored)
   - "See how it works" (secondary, outlined)
5. **Social Proof**: "100% Offline", "50+ Brands", "Regular Updates"
6. **Product Showcase**: Interactive phone mockup with app interface preview

**Design Specifications**:

- Background: Dark theme with subtle circuit pattern overlay
- Gradient accents: Top-right and bottom-left radial glows
- Phone Mockup: 3D rotated, hover animation to upright
- App Preview: Shows error code detail screen (Mitsubishi E1 example)

**Conversion Elements**:

- Primary CTA: High contrast, shadow, icon + text
- Secondary CTA: Outline style, clear action
- Trust indicators: Checkmark icons with benefits

---

### Section 3: Features Section

**Purpose**: Detail core capabilities and differentiation

**Section Header**:

```text
Title: "Everything a Technician Needs"
Subtitle: "Tamirly is built to work in the field. No signal? No problem.
          Get accurate diagnostics instantly."
```

**Feature Grid** (3 columns × 2 rows = 6 features):

1. **100% Offline Database**
   - Icon: `wifi_off`
   - Description: "Access thousands of error codes without an internet connection.
     Perfect for basements or remote locations."

2. **Brand Specific Search**
   - Icon: `search`
   - Description: "Filter by manufacturer like Mitsubishi, Daikin, LG, and Samsung
     to find the exact model information."

3. **Step-by-Step Fixes**
   - Icon: `build`
   - Description: "Don't just see the error—fix it. We provide detailed recommended
     actions and possible causes for every code."

4. **Multi-Language Support**
   - Icon: `translate`
   - Description: "Interface and database available in multiple languages to help
     technicians worldwide work efficiently."

5. **History & Saved**
   - Icon: `history`
   - Description: "Quickly access previously viewed errors or save frequently
     encountered codes for instant retrieval."

6. **LED Pattern Decoder**
   - Icon: `light_mode`
   - Description: "Identify errors even without a digital display by decoding the
     blinking LED patterns on the unit board."

**Design Specifications**:

- Card layout: Equal height, rounded corners
- Hover effect: Border color change to primary blue
- Icon background: Light primary color, changes to solid on hover
- Spacing: 32px gaps between cards

---

### Section 4: How It Works

**Purpose**: Demonstrate simplicity and reduce adoption friction

**Section Header**:

```text
Title: "Simple Workflow"
Subtitle: "Three steps to solve any appliance issue."
```

**Three-Step Process** (Horizontal with phone mockups):

#### Step 01: Select Appliance

- Description: "Choose the appliance and specific brand."
- Phone Mockup: Shows brand-selection screen (Daikin, Mitsubishi, LG, Samsung)
- Visual: Scrollable brand list with colored badges

#### Step 02: Enter Code

- Description: "Type the error code displayed on the screen or select the LED pattern."
- Phone Mockup: Shows code input keypad with cursor animation
- Visual: Numeric keypad with "E2\_" input in progress

#### Step 03: Fix It

- Description: "Follow the recommended actions to repair the fault immediately."
- Phone Mockup: Shows error details with recommended actions checklist
- Visual: "Medium" severity badge, fan motor error, actionable steps

**Design Specifications**:

- Connecting line: Horizontal gray line between steps (desktop only)
- Step numbers: Large, in circles, surface background
- Hover effect: Phone mockups lift up on hover
- Staggered animation: Each phone lifts with increasing delay

---

### Section 5: Supported Brands

**Purpose**: Build credibility through brand recognition

**Section Header**:

```text
Text: "Trusted Database for Major Brands"
Style: Uppercase, letter-spaced, muted color
```

**Brand Grid** (Flexbox row, centered):

Brands displayed (grayscale, hover to color):

- DAIKIN (Bold, display font)
- MITSUBISHI (Italic, black weight)
- SAMSUNG (Bold, tracking-tight)
- LG Electronics (Light weight)
- HITACHI (Bold, letter-spaced)
- Carrier (Bold, italic)

**Design Specifications**:

- Initial state: 60% opacity, grayscale filter
- Hover state: Full color, 500ms transition
- Spacing: 64px gaps (desktop), 32px (mobile)
- Responsive wrapping on smaller screens

---

### Section 6: Final CTA Section

**Purpose**: Last-chance conversion before footer

**Section Content**:

```text
Headline: "Ready to simplify your repairs?"
Body: "Download Tamirly today and carry a complete library of appliance
       repair manuals in your pocket."
CTA: "Download for Android" button
```

**Design Specifications**:

- Background: Gradient (primary to blue-600)
- Shape: Large rounded rectangle (3xl radius)
- Overlay: Circuit pattern at 10% opacity
- Button: White background, primary text, shadow, scale on hover

---

### Section 7: Footer

**Purpose**: Navigation, legal, and secondary links

**Footer Columns** (4 columns):

#### Column 1: Brand

- Tamirly logo and name
- Tagline: "The ultimate offline companion for appliance technicians.
  Diagnose smarter, fix faster."

#### Column 2: Product

- Features
- Supported Brands
- Pricing
- Download

#### Column 3: Support

- Help Center
- Contact Us
- Suggest a Brand

#### Column 4: Legal

- Privacy Policy
- Terms of Service

**Footer Bottom**:

- Copyright: "© 2023 Tamirly. All rights reserved."
- Social Icons: Twitter (X), Instagram
- Spacing: Flex row, gap between elements

---

## Technical Requirements

### Performance

**Load Time Targets**:

- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

**Optimization Requirements**:

- Image compression and lazy loading
- CSS minification and critical path optimization
- Font preloading for Inter and Material Icons
- CDN delivery for static assets

### Accessibility (WCAG 2.1 AA)

**Requirements**:

- Color contrast: Minimum 4.5:1 for text, 3:1 for large text
- Keyboard navigation: All interactive elements accessible via Tab
- Screen reader: Proper ARIA labels on buttons and links
- Focus indicators: Visible focus states on all interactive elements
- Alt text: Descriptive text for all images and icons
- Semantic HTML: Proper heading hierarchy (h1 → h2 → h3)

### SEO Requirements

**On-Page SEO**:

```text
Title Tag: "Tamirly - Offline Appliance Error Code Database"
Meta Description: "Diagnose appliance errors offline. 50+ brands, 1000+ codes.
                   The tool for HVAC technicians and DIYers. Download free."
Canonical URL: https://tamirly.app/
```

**Schema Markup**:

- Organization schema
- SoftwareApplication schema
- Review/Rating schema (when available)

**Technical SEO**:

- Sitemap.xml generation
- Robots.txt configuration
- Open Graph tags for social sharing
- Twitter Card markup

### Responsive Design

**Breakpoints**:

- Mobile: < 640px (stack content vertically)
- Tablet: 640px - 1024px (2-column layouts)
- Desktop: > 1024px (full multi-column layouts)

**Mobile Optimizations**:

- Touch targets: Minimum 44×44px
- Font scaling: Base 16px, scales proportionally
- Simplified navigation: Hamburger menu on mobile
- Optimized images: Serve appropriately sized images

### Cross-Browser Compatibility

**Supported Browsers**:

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari, Chrome Mobile

**Progressive Enhancement**:

- Core functionality works without JavaScript
- Enhanced experience with JavaScript enabled
- Graceful degradation for older browsers

## Content Requirements

### Copywriting Guidelines

**Tone and Voice**:

- Professional yet approachable
- Technical but accessible
- Action-oriented and confident
- Global English (avoid regional idioms)

**Writing Principles**:

- Clear headlines that communicate value
- Benefit-focused copy over feature lists
- Active voice and strong verbs
- Scannable formatting (bullet points, short paragraphs)
- Concrete numbers and specifics ("50+ brands" not "many brands")

### Image and Asset Requirements

**Product Screenshots**:

- High-resolution app screenshots (at least 6)
- Error code detail screen
- Brand selection screen
- Code input screen
- LED pattern decoder
- Search results screen
- Settings/saved codes screen

**Brand Assets**:

- App icon (512×512px PNG)
- Logo variations (horizontal, vertical, icon-only)
- Favicon (32×32px, 16×16px)

**Stock Images**:

- HVAC technician in field (optional)
- Appliance repair context images (optional)
- Abstract tech backgrounds (circuit patterns, etc.)

### Localisation Readiness

**Design for Multi-Language**:

- Text expansion room (up to 30% longer than English)
- UTF-8 character support
- Right-to-left language capability (future)
- Easy text extraction for translation

---

## Conversion Optimization

### Call-to-Action Strategy

**Primary CTAs**:

1. Hero section: "Get for Android" (immediate conversion)
2. Final CTA section: "Download for Android" (last chance)
3. Navigation bar: "Download App" (always visible)

**CTA Design Principles**:

- High contrast with surrounding content
- Clear action verbs ("Download", "Get")
- Icon + text combination for clarity
- Hover and active states for feedback
- Shadow/depth for prominence

**Download Destinations**:

- Google Play Store: Primary link (70-80% of users)
- F-Droid: Secondary link (20-30% of users)
- Direct APK: Optional for advanced users

### Trust Signals

**Credibility Elements**:

1. "New v2.0 Released" - Active development signal
2. "50+ Brands" - Comprehensive coverage
3. "100% Offline" - Technical capability
4. Brand logos - Trusted partnerships
5. Clean, professional design - Quality indicator

**Future Trust Signals** (Phase 2):

- User testimonials/reviews
- Download count (once available)
- Rating stars (from Play Store)
- "As featured in" media logos
- Professional photos of real technicians using app

### A/B Testing Priorities

**Test Variables**:

1. Hero headline variations (offline-first vs. speed-focused)
2. CTA button text ("Download" vs. "Get for Android" vs. "Install Free")
3. Feature ordering (offline-first vs. search-first)
4. Social proof placement (in hero vs. separate section)
5. Color scheme variations (blue vs. green vs. orange primary)

---

## Development Phases

### Phase 1: MVP Launch (Current)

**Scope**: Static HTML landing page based on mockup

**Deliverables**:

- ✅ Complete responsive HTML implementation
- ✅ Tailwind CSS styling with custom config
- ✅ All content sections from mockup
- ✅ Google Play Store and F-Droid download links
- ✅ Basic SEO meta tags
- ✅ Accessibility compliance (WCAG 2.1 AA)

**Timeline**: Complete

### Phase 2: Content Enhancement

**Scope**: Rich media and interactivity

**Deliverables**:

- High-resolution app screenshots
- Interactive phone mockups with scrollable previews
- App demo video (60-90 seconds)
- Download count/ratings integration (from Play Store API)
- User testimonials section
- FAQ section expansion

**Timeline**: Week 1-2 after app launch

### Phase 3: Conversion Optimization

**Scope**: A/B testing and analytics

**Deliverables**:

- Google Analytics 4 integration
- Google Tag Manager for A/B testing
- Heat map recording (Hotjar or similar)
- A/B test implementation (Google Optimize or similar)
- Conversion funnel tracking
- Exit-intent popup (optional)

**Timeline**: Week 3-4 after launch

### Phase 4: Advanced Features

**Scope**: Dynamic content and personalization

**Deliverables**:

- CMS integration for easy content updates
- Multi-language support (Turkish, Arabic, Spanish)
- Dynamic brand logo rotation
- Interactive error code search demo
- Blog/resources section
- Technician community forum integration

**Timeline**: Month 2-3 after launch

---

## Maintenance Requirements

### Content Updates

**Monthly**:

- Review and update featured app screenshots
- Check and update download links
- Refresh social media links
- Review analytics for performance insights

**Quarterly**:

- Update brand logos if new partnerships added
- Add new testimonials/reviews
- Refresh copy based on user feedback
- SEO audit and keyword updates

### Technical Maintenance

**Regular Tasks**:

- Monitor page load performance
- Check cross-browser compatibility
- Update dependencies (Tailwind, etc.)
- Security audits for forms or dynamic features
- Backup and disaster recovery testing

### Analytics Review

**Key Metrics to Track**:

- Traffic sources (organic, direct, social, referral)
- Device and browser breakdown
- Geographic distribution
- Conversion funnel drop-off points
- Top exit pages
- Search queries driving traffic

---

## Risk Assessment

### Technical Risks

**Risk**: Slow page load on mobile networks
**Mitigation**:

- Optimize images and lazy load
- Use CDN for static assets
- Minimize JavaScript bundles
- Progressive loading strategy

**Risk**: Poor SEO ranking
**Mitigation**:

- Keyword-optimized copy
- Technical SEO best practices
- Quality backlink strategy
- Regular content updates

### Business Risks

**Risk**: Low conversion rate
**Mitigation**:

- A/B testing for optimization
- Clear value proposition
- Trust signals and social proof
- Easy download process

**Risk**: App store approval delays
**Mitigation**:

- F-Droid as alternative distribution
- Direct APK download option
- Clear communication of timeline

---

## Dependencies

### Internal Dependencies

- Final app screenshots from development team
- App store listing text and assets
- Download link URLs (Play Store, F-Droid)
- Brand approval for logo usage

### External Dependencies

- Google Play Store and F-Droid accounts
- Domain and hosting setup
- SSL certificate installation
- Analytics account setup

---

## Success Criteria

### Launch Criteria

- [x] All sections implemented per mockup
- [x] Responsive design tested on mobile, tablet, desktop
- [x] Accessibility audit passed (WCAG 2.1 AA)
- [x] SEO meta tags implemented
- [x] Download links functional
- [x] Cross-browser testing completed
- [x] Load performance targets met

### Post-Launch Success (30 days)

- [ ] 1,000+ unique visitors
- [ ] < 40% bounce rate
- [ ] > 2 minute average time on page
- [ ] 10%+ download conversion rate
- [ ] Top 20 ranking for target keywords

---

## Appendices

### A. Competitor Landing Page Analysis

**RepairClinic**:

- Strengths: Comprehensive content, clear navigation
- Weaknesses: cluttered, not mobile-optimized, web-only focus

**HVAC Buddy**:

- Strengths: Professional design, clear feature presentation
- Weaknesses: Subscription focus unclear, weak offline emphasis

**Tamirly Differentiation**:

- Offline-first messaging (unique positioning)
- Dual distribution (Play Store + F-Droid)
- Clean, modern dark theme
- Interactive product showcase

### B. Keyword Research

**Primary Keywords**:

- "HVAC error codes offline"
- "appliance error code database"
- "offline HVAC troubleshooting"
- "air conditioner error codes"
- "Mitsubishi AC error codes"
- "Daikin error code list"

**Secondary Keywords**:

- "HVAC technician tools"
- "DIY appliance repair"
- "AC error code meaning"
- "offline repair manual"
- "LED error code decoder"

### C. User Journey Mapping

**Technician Journey**:

1. Problem: On-site with HVAC error, no internet
2. Search: "HVAC error codes offline" on phone
3. Arrival: Lands on Tamirly landing page
4. Evaluation: Scans features, sees offline capability
5. Trust: Recognizes brand logos, sees v2.0 release badge
6. Decision: Clicks "Get for Android"
7. Conversion: Downloads from Play Store
8. Usage: Opens app, searches error code, fixes issue

**DIY User Journey**:

1. Problem: Appliance showing error code
2. Search: Error code + model number on Google
3. Arrival: Lands on Tamirly via search result
4. Evaluation: Reads "Simple workflow" section
5. Trust: Sees "Step-by-step fixes" feature
6. Decision: Clicks "See how it works", then downloads
7. Conversion: Installs app, searches code
8. Success: Follows recommended actions, fixes appliance

---

**Document Status**: Draft v1.0
**Last Updated**: December 2025
**Next Review**: After Phase 2 launch
**Approved By**: TBD
