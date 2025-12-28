# Tamirly Landing - Documentation Index

**Version**: 1.0.0
**Last Updated**: 2025-12-28
**Status**: Active

---

## Quick Navigation

| Document                                             | Purpose                     | Audience                   |
| ---------------------------------------------------- | --------------------------- | -------------------------- |
| [PRD.md](#prdmd)                                     | Landing page specifications | Developers, Designers, PMs |
| [CONTRIBUTING.md](#contributingmd)                   | Contribution guidelines     | Contributors, Developers   |
| [PROJECT_STRUCTURE.md](#project_structuremd)         | Architecture documentation  | Developers, Architects     |
| [landing-page-mockup.html](#landing-page-mockuphtml) | HTML prototype              | Designers, Developers      |

---

## Document Details

### PRD.md

**Type**: Product Requirements Document
**Size**: ~19 KB
**Status**: Draft v1.0
**Last Updated**: December 2025

**Purpose**: Comprehensive specification for the Tamirly landing page, including business objectives, target audience, technical requirements, and development phases.

**Key Sections**:

1. **Product Vision** (Lines 10-13)
   - Primary web presence and conversion engine
   - Target: HVAC technicians and DIYers
   - Dual distribution: Google Play + F-Droid

2. **Business Objectives** (Lines 15-29)
   - 15% download conversion rate
   - 5,000+ monthly visitors
   - < 40% bounce rate, > 2 min time on page

3. **Target Audience** (Lines 31-60)
   - Primary: HVAC Technicians (75%)
   - Secondary: DIY Home Users (25%)
   - Pain points: No internet access, scattered information

4. **Landing Page Architecture** (Lines 61-302)
   - 7 sections: Nav, Hero, Features, How It Works, Brands, CTA, Footer
   - Detailed component specifications
   - Design requirements and interactions

5. **Technical Requirements** (Lines 304-386)
   - Performance targets (LCP < 2.5s)
   - WCAG 2.1 AA accessibility
   - SEO requirements and schema markup
   - Responsive breakpoints

6. **Development Phases** (Lines 495-556)
   - Phase 1: MVP Launch (Complete)
   - Phase 2: Content Enhancement
   - Phase 3: Conversion Optimization
   - Phase 4: Advanced Features

**When to Reference**:

- Implementing new landing page features
- Understanding business context and success metrics
- Planning development phases and priorities
- Reviewing technical requirements

**Related Documents**: PROJECT_STRUCTURE.md, landing-page-mockup.html

---

### CONTRIBUTING.md

**Type**: Contributor Guidelines
**Size**: ~4.8 KB
**Status**: Stable
**Last Updated**: 2025-12-28

**Purpose**: Guidelines and instructions for contributing to the Tamirly Landing project.

**Key Sections**:

1. **Getting Started** (Lines 21-44)
   - Prerequisites: Node.js LTS, Bun (optional)
   - Initial setup with submodules
   - Development server startup

2. **Development Workflow** (Lines 46-78)
   - Branch strategy: main, feature/_, fix/_, docs/\*
   - Git submodule management
   - Development commands from `src/presentation/Tamirly.LandingWebUI/`

3. **Coding Standards** (Lines 79-138)
   - Astro/TypeScript conventions
   - File naming: PascalCase.astro, kebab-case.ts
   - Component structure pattern
   - Accessibility requirements

4. **Commit Guidelines** (Lines 139-170)
   - Format: `type: subject`
   - Types: feat, fix, docs, style, refactor, perf, test, chore, ci
   - Examples and best practices

5. **Pull Request Process** (Lines 171-209)
   - Pre-submission checklist
   - PR review process
   - Post-merge workflow

**When to Reference**:

- First-time contribution setup
- Writing commit messages
- Creating pull requests
- Understanding coding standards
- Working with Git submodules

**Related Documents**: PROJECT_STRUCTURE.md

---

### PROJECT_STRUCTURE.md

**Type**: Architecture Documentation
**Size**: ~32 KB
**Status**: Stable v1.0.0
**Last Updated**: 2025-12-28

**Purpose**: Comprehensive documentation of the project's architecture, repository layout, and component design.

**Key Sections**:

1. **Overview** (Lines 24-38)
   - Monorepo-with-submodules architecture
   - Key architectural principles
   - Layered architecture diagram

2. **Architecture Philosophy** (Lines 40-94)
   - Git submodules vs traditional workspaces
   - Benefits and trade-offs table
   - Layer diagram: Presentation → Component → Utility

3. **Repository Layout** (Lines 98-153)
   - Complete directory tree
   - Root configuration files
   - Documentation, scripts, submodules, source structure

4. **Directory Details** (Lines 157-341)
   - Root directory configuration files
   - Documentation directory contents
   - Scripts directory automation
   - Submodules: acore-astro, acore-scripts, acore-solid
   - Source directory Astro application

5. **Component Architecture** (Lines 377-454)
   - Astro component structure (.astro files)
   - Component hierarchy tree
   - State management approach

6. **Module Dependencies** (Lines 457-521)
   - Dependency graph diagram
   - Runtime dependencies
   - Development dependencies
   - Git submodules with repository links

7. **Data Flow** (Lines 524-577)
   - Build process flowchart
   - Runtime execution flowchart

8. **Extension Points** (Lines 641-761)
   - Adding components to acore-astro
   - Adding landing page sections
   - Adding format script support

**When to Reference**:

- Understanding project architecture
- Navigating the codebase
- Working with Git submodules
- Adding new components or features
- Understanding build and data flow

**Related Documents**: CONTRIBUTING.md, PRD.md

---

### landing-page-mockup.html

**Type**: HTML Prototype
**Size**: ~39 KB
**Status**: Complete
**Last Updated**: 2025-12-28

**Purpose**: Complete HTML implementation of the landing page using Tailwind CSS, serving as both a design reference and implementation guide.

**Key Sections**:

1. **Head Section** (Lines 1-100)
   - Meta tags and SEO configuration
   - Tailwind CSS CDN
   - Custom CSS styles (animations, gradients)
   - Font imports (Inter)

2. **Navigation Bar** (Lines 101-180)
   - Fixed positioning with blur effect
   - Logo, navigation links, CTA button
   - Mobile-responsive design

3. **Hero Section** (Lines 181-350)
   - Gradient text headline
   - Value proposition copy
   - Primary and secondary CTAs
   - Phone mockup with app preview
   - Trust badges and social proof

4. **Features Section** (Lines 351-500)
   - 6 feature cards in grid layout
   - Icons with descriptions
   - Hover effects and animations

5. **How It Works** (Lines 501-650)
   - 3-step process visualization
   - Phone mockups for each step
   - Connecting lines and animations

6. **Supported Brands** (Lines 651-720)
   - Brand logos in flex layout
   - Grayscale to color on hover

7. **Final CTA Section** (Lines 721-800)
   - Gradient background
   - Download call-to-action
   - Button with shadow effects

8. **Footer** (Lines 801-950)
   - 4-column layout
   - Brand, Product, Support, Legal sections
   - Social media icons and copyright

**When to Reference**:

- Implementing landing page sections
- Understanding visual design patterns
- Copying Tailwind CSS classes
- Referencing component interactions
- Extracting content structure

**Related Documents**: PRD.md (specifications), PROJECT_STRUCTURE.md (architecture)

---

### assets/

**Directory**: Static assets for documentation and design

| File                   | Purpose                           |
| ---------------------- | --------------------------------- |
| `tamirly-app-icon.png` | App icon for branding and mockups |

---

## Document Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                    PRD.md (Business)                       │
│  • Product vision and objectives                           │
│  • Target audience and pain points                         │
│  • Landing page specifications                            │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│           PROJECT_STRUCTURE.md (Architecture)              │
│  • Monorepo architecture with submodules                   │
│  • Component structure and dependencies                   │
│  • File organization and conventions                      │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│       landing-page-mockup.html (Implementation)            │
│  • Visual design reference                                │
│  • HTML/Tailwind implementation                            │
│  • Component interactions                                 │
└──────────────────────────┬──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│         CONTRIBUTING.md (Workflow)                         │
│  • Development setup and commands                          │
│  • Coding standards and conventions                        │
│  • PR and commit guidelines                                │
└─────────────────────────────────────────────────────────────┘
```

## Usage Scenarios

### For New Contributors

1. Start with **CONTRIBUTING.md** for setup
2. Read **PROJECT_STRUCTURE.md** for architecture understanding
3. Reference **landing-page-mockup.html** for implementation patterns
4. Review **PRD.md** for business context

### For Developers

1. **PRD.md** - Feature specifications and requirements
2. **PROJECT_STRUCTURE.md** - Architecture and component design
3. **landing-page-mockup.html** - Implementation reference
4. **CONTRIBUTING.md** - Coding standards and workflow

### For Designers

1. **PRD.md** - Design requirements and specifications
2. **landing-page-mockup.html** - Visual implementation
3. **PROJECT_STRUCTURE.md** - Component structure

### For Product Managers

1. **PRD.md** - Business objectives and success metrics
2. **PROJECT_STRUCTURE.md** - Technical architecture overview
3. **CONTRIBUTING.md** - Development workflow understanding

## Document Maintenance

### Update Frequency

| Document                 | Update Frequency | Trigger                              |
| ------------------------ | ---------------- | ------------------------------------ |
| PRD.md                   | Per phase        | Feature completion, strategy changes |
| CONTRIBUTING.md          | As needed        | Workflow changes, new standards      |
| PROJECT_STRUCTURE.md     | Major changes    | Architecture updates, new components |
| landing-page-mockup.html | Per phase        | Design iterations, new sections      |

### Version Control

All documentation changes should follow the commit guidelines in CONTRIBUTING.md:

```bash
docs: update PRD with Phase 2 specifications
docs: add architecture diagram to PROJECT_STRUCTURE
docs: update contributing guidelines with new standards
```

---

## Quick Reference Tables

### File Size Metrics

| Document                 | Lines | Size   | Type     |
| ------------------------ | ----- | ------ | -------- |
| PRD.md                   | 749   | 19 KB  | Markdown |
| CONTRIBUTING.md          | 220   | 4.8 KB | Markdown |
| PROJECT_STRUCTURE.md     | 788   | 32 KB  | Markdown |
| landing-page-mockup.html | ~950  | 39 KB  | HTML     |

### Key Topics by Document

| Topic                    | PRD | Contributing | Structure | Mockup |
| ------------------------ | --- | ------------ | --------- | ------ |
| Business Requirements    | ✅  |              |           |        |
| Technical Architecture   |     |              | ✅        |        |
| Code Standards           |     | ✅           | ✅        |        |
| Visual Design            | ✅  |              |           | ✅     |
| Development Workflow     |     | ✅           | ✅        |        |
| Component Specifications | ✅  |              | ✅        | ✅     |
| Git Workflow             |     | ✅           | ✅        |        |

### Section Mapping

| Landing Page Section | PRD Lines | Mockup Lines |
| -------------------- | --------- | ------------ |
| Navigation           | 64-79     | 101-180      |
| Hero                 | 82-117    | 181-350      |
| Features             | 120-170   | 351-500      |
| How It Works         | 173-210   | 501-650      |
| Brands               | 213-241   | 651-720      |
| Final CTA            | 244-263   | 721-800      |
| Footer               | 266-301   | 801-950      |

---

## Appendix: Document Statistics

### Total Documentation

- **Total Files**: 5 (4 docs + 1 asset)
- **Total Size**: ~95 KB
- **Total Lines**: ~2,700
- **Languages**: Markdown (3), HTML (1)

### Coverage

- **Business Requirements**: ✅ Complete (PRD.md)
- **Technical Architecture**: ✅ Complete (PROJECT_STRUCTURE.md)
- **Contributor Guidelines**: ✅ Complete (CONTRIBUTING.md)
- **Implementation Reference**: ✅ Complete (landing-page-mockup.html)

---

**Document Index Version**: 1.0.0
**Last Updated**: 2025-12-28
**Maintainer**: Ahmet Çetinkaya
**License**: GNU General Public License v3.0

---

**End of Index**
