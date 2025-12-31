# `Tamirly Landing` ![GitHub](https://img.shields.io/github/license/ahmetcetinkaya/tamirly-landing) ![GPL v3](https://img.shields.io/badge/license-GPLv3-blue) [![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?&logo=buy-me-a-coffee&logoColor=black)](https://ahmetcetinkaya.me/donate)

![Tamirly App Icon](docs/assets/tamirly-app-icon.png)

This repository contains the official landing page for **Tamirly** - an
offline-first mobile application that serves as a comprehensive database for
electronic appliance error codes, their meanings, and recommended solution steps.

The landing page serves as the primary gateway for technicians and DIYers to
discover, understand, and download Tamirly from Google Play Store and F-Droid.

## 🌐 About

This landing page is built with modern web technologies to provide fast
performance, responsive design, WCAG 2.1 AA accessibility, and SEO
optimization - all with a privacy-focused, self-hosting ready approach.

**Tech Stack**: AstroJS v5.16+, TypeScript, Bun, component-scoped CSS

## 🚀 Quick Start

```bash
# Clone and setup
git clone https://github.com/ahmetcetinkaya/tamirly-landing.git
cd tamirly-landing
git submodule update --init --recursive
bun install

# Start development
bun run landing:dev  # Visit http://localhost:4321
```

## 📚 Documentation

| Document                                  | Description                     |
| ----------------------------------------- | ------------------------------- |
| **[Structure](docs/ProjectStructure.md)** | Architecture and component docs |
| **[PRD](docs/LandingPage.PRD.md)**        | Landing page specifications     |

## 🎨 Key Features

The landing page showcases Tamirly's core capabilities:

- **100% Offline Database** - Thousands of error codes without internet
- **Brand Specific Search** - Mitsubishi, Daikin, LG, Samsung, and 50+ brands
- **Step-by-Step Fixes** - Detailed recommended actions
- **LED Pattern Decoder** - Identify errors from blinking patterns
- **Multi-Language Support** - Global accessibility
- **History & Saved** - Quick access to frequently used codes

## 📄 License

GNU General Public License v3.0 - see [LICENSE](LICENSE)

## 🔗 Links

- **Author**: [Ahmet Çetinkaya](https://ahmetcetinkaya.me)
- **Donate**: [Buy Me A Coffee](https://ahmetcetinkaya.me/donate)
