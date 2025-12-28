# Project Structure

**Version**: 1.0.0
**Last Updated**: 2025-12-28
**Status**: Stable

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture Philosophy](#architecture-philosophy)
3. [Repository Layout](#repository-layout)
4. [Directory Details](#directory-details)
5. [File Conventions](#file-conventions)
6. [Component Architecture](#component-architecture)
7. [Module Dependencies](#module-dependencies)
8. [Data Flow](#data-flow)
9. [Configuration Hierarchy](#configuration-hierarchy)
10. [Extension Points](#extension-points)

---

## Overview

The Tamirly Landing project follows a **monorepo-with-submodules** architecture, where shared packages are maintained as external Git repositories and included as Git submodules. This approach provides clean separation between core libraries and application code while enabling code reuse across multiple projects.

### Key Architectural Principles

| Principle                  | Implementation                                                               |
| -------------------------- | ---------------------------------------------------------------------------- |
| **Separation of Concerns** | Core packages (`packages/`) isolated from presentation (`src/presentation/`) |
| **Code Reusability**       | Shared components via Git submodules                                         |
| **Type Safety**            | TypeScript strict mode throughout                                            |
| **Static-First**           | Pre-rendered HTML with minimal JavaScript                                    |
| **Component Scoping**      | Scoped CSS in `.astro` files                                                 |

---

## Architecture Philosophy

### Monorepo with Submodules

Unlike traditional workspace-based monorepos (pnpm workspaces, npm packages), this project uses **Git submodules** for shared packages.

**Why This Approach?**

| Benefit                    | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| **Independent Versioning** | Each package tracks its own commit history                   |
| **Clear Ownership**        | Packages live in separate repositories with their own issues |
| **Selective Updates**      | Update specific packages without affecting others            |
| **Simplified Publishing**  | Each package can be published independently                  |
| **No Workspace Overhead**  | No need for package manager workspace configuration          |

**Trade-offs**

| Consideration                 | Impact                                             |
| ----------------------------- | -------------------------------------------------- |
| **Initialization Complexity** | Requires `git submodule update --init --recursive` |
| **Commit Tracking**           | Submodules point to specific commits, not branches |
| **Nested Commands**           | Development requires cd into nested directories    |
| **Learning Curve**            | Developers must understand Git submodules          |

### Layered Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                       │
│           (Tamirly.LandingWebUI - Astro Application)         │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│  │   Pages       │  │  Components   │  │    Styles     │  │
│  └───────────────┘  └───────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Component Layer                        │
│                  (acore-astro - Shared UI)                  │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│  │ Animated      │  │   Metadata     │  │   Future...   │  │
│  │   Section     │  │   Component    │  │               │  │
│  └───────────────┘  └───────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Utility Layer                          │
│                (acore-scripts - Tooling)                    │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐  │
│  │ Format Sh     │  │ Format MD      │  │ Format JSON    │  │
│  └───────────────┘  └───────────────┘  └───────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Repository Layout

```
tamirly-landing/
├── 📄 Root Configuration
│   ├── .gitignore              # Git ignore patterns
│   ├── .gitmodules             # Submodule definitions
│   ├── .prettierignore         # Prettier exclusions
│   ├── bun.lock                # Bun lockfile
│   ├── package.json            # Root package config
│   ├── prettier.config.mjs     # Prettier settings
│   ├── README.md               # Public project README
│   ├── LICENSE                 # GPL v3 license
│   └── CLAUDE.md               # AI assistant guidance (gitignored)
│
├── 📁 Documentation (docs/)
│   ├── ProjectStructure.md     # This file - architecture docs
│   ├── LandingPage.PRD.md      # Landing page specifications
│   ├── TamirlyApp.PRD.md       # Mobile app requirements
│   └── mockup.html             # HTML prototype with Tailwind
│
├── 📁 Scripts (scripts/)
│   └── format.sh               # Unified formatting script
│
├── 📁 Git Submodules (packages/)
│   ├── acore-astro/            # Astro component library
│   │   ├── src/
│   │   │   └── components/
│   │   │       ├── AnimatedSection.astro
│   │   │       └── Metadata.astro
│   │   ├── package.json
│   │   ├── prettier.config.mjs
│   │   └── tsconfig.json
│   │
│   ├── acore-scripts/          # Shared formatting utilities
│   │   ├── src/
│   │   │   ├── format_sh.sh    # Shell script formatting
│   │   │   ├── format_md.sh    # Markdown formatting
│   │   │   ├── format_json.sh  # JSON/YAML formatting
│   │   │   └── logger.sh       # Logging utilities
│   │   └── tests/              # Format script tests
│   │
│   └── acore-solid/            # SolidJS utilities (unused)
│       ├── providers/          # SolidJS context providers
│       └── ui/                 # SolidJS UI components
│
└── 📁 Source (src/)
    └── presentation/
        └── Tamirly.LandingWebUI/
            ├── astro.config.mjs    # Astro configuration
            ├── package.json        # Landing page dependencies
            ├── tsconfig.json       # TypeScript configuration
            └── src/
                └── pages/
                    └── index.astro  # Landing page entry
```

---

## Directory Details

### Root Directory (`/`)

**Purpose**: Repository-level configuration and documentation.

| File/Directory        | Type   | Purpose                                           |
| --------------------- | ------ | ------------------------------------------------- |
| `.gitignore`          | Config | Git exclusions (IDE, dependencies, build outputs) |
| `.gitmodules`         | Config | Git submodule repository mappings                 |
| `.prettierignore`     | Config | Prettier formatting exclusions                    |
| `bun.lock`            | Lock   | Bun dependency lockfile                           |
| `package.json`        | Config | Root scripts, dev dependencies (prettier)         |
| `prettier.config.mjs` | Config | Code formatting rules with Astro plugin           |
| `README.md`           | Docs   | Public-facing project documentation               |
| `LICENSE`             | Legal  | GNU General Public License v3.0                   |
| `CLAUDE.md`           | Docs   | AI assistant guidance (gitignored)                |

**Key Scripts** (from `package.json`):

```json
{
  "format": "./scripts/format.sh",
  "format:check": "prettier --check \"**/*.{js,ts,astro,md,json,yaml,yml}\"",
  "format:write": "prettier --write \"**/*.{js,ts,astro,md,json,yaml,yml}\"",
  "landing:dev": "cd src/presentation/Tamirly.LandingWebUI && npm run dev",
  "landing:build": "cd src/presentation/Tamirly.LandingWebUI && npm run build",
  "landing:preview": "cd src/presentation/Tamirly.LandingWebUI && npm run preview"
}
```

### Documentation Directory (`/docs`)

**Purpose**: Project requirements, specifications, and design artifacts.

| File                  | Type      | Purpose                                | Size  |
| --------------------- | --------- | -------------------------------------- | ----- |
| `ProjectStructure.md` | Docs      | Architecture and structure (this file) | -     |
| `LandingPage.PRD.md`  | PRD       | Landing page specifications            | ~19KB |
| `TamirlyApp.PRD.md`   | PRD       | Mobile application requirements        | -     |
| `mockup.html`         | Prototype | HTML implementation with Tailwind CSS  | ~39KB |

### Scripts Directory (`/scripts`)

**Purpose**: Project automation and tooling scripts.

| File        | Purpose                 | Dependencies                              |
| ----------- | ----------------------- | ----------------------------------------- |
| `format.sh` | Unified code formatting | acore-scripts, prettier, shfmt (optional) |

**Format Script Features**:

- Shell Scripts (`.sh`) via shfmt from acore-scripts
- Markdown (`.md`) via prettier from acore-scripts
- JSON/YAML (`.json`, `.yaml`, `.yml`) via prettier from acore-scripts
- Astro files (`.astro`) via root prettier with plugin
- TypeScript/JavaScript (`.ts`, `.js`, `.tsx`, `.jsx`) via root prettier

### Submodules Directory (`/packages`)

**Purpose**: Shared packages maintained as external Git repositories.

#### acore-astro

**Repository**: https://github.com/ahmet-cetinkaya/acore-astro
**Purpose**: Reusable Astro components for landing pages and similar projects.

```
acore-astro/
├── src/
│   └── components/
│       ├── AnimatedSection.astro    # Scroll-triggered animations
│       └── Metadata.astro            # SEO and social metadata
├── package.json                      # Package dependencies
├── prettier.config.mjs               # Astro-specific formatting
└── tsconfig.json                     # TypeScript configuration
```

**Components**:

1. **AnimatedSection.astro**
   - Props: `animation`, `delay`, `duration`, `class`
   - Animations: fade-up, fade-in, slide-left, slide-right, scale-up
   - Features: Intersection Observer, respects `prefers-reduced-motion`

2. **Metadata.astro**
   - Props: `title`, `site`, `description`, `ogImage`, `canonicalURL`, etc.
   - Features: Open Graph, Twitter Cards, JSON-LD structured data, security headers

#### acore-scripts

**Repository**: https://github.com/ahmet-cetinkaya/acore-scripts
**Purpose**: Shared shell scripting utilities for formatting and logging.

```
acore-scripts/
├── src/
│   ├── format_sh.sh                 # Shell script formatting
│   ├── format_md.sh                 # Markdown formatting
│   ├── format_json.sh               # JSON/YAML formatting
│   └── logger.sh                    # Colored logging utilities
├── tests/                           # Format script tests
└── docs/                            # Script documentation
```

**Usage in `format.sh`**:

```bash
# Source format utilities
source "${PROJECT_ROOT}/packages/acore-scripts/src/format_sh.sh"
source "${PROJECT_ROOT}/packages/acore-scripts/src/format_md.sh"
source "${PROJECT_ROOT}/packages/acore-scripts/src/format_json.sh"
```

#### acore-solid

**Repository**: https://github.com/ahmet-cetinkaya/acore-solid
**Purpose**: SolidJS utilities and components (not actively used in landing page).

```
acore-solid/
├── providers/                       # SolidJS context providers
├── ui/                              # SolidJS UI components
├── tailwind.config.mjs              # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

**Status**: Included for future projects using SolidJS, not used in current landing page.

### Source Directory (`/src/presentation/Tamirly.LandingWebUI`)

**Purpose**: Main Astro application for the landing page.

```
Tamirly.LandingWebUI/
├── .vscode/
│   ├── extensions.json              # Recommended VS Code extensions
│   └── launch.json                  # Debug configurations
├── astro.config.mjs                 # Astro framework configuration
├── package.json                     # Application dependencies
├── tsconfig.json                    # TypeScript configuration
└── src/
    └── pages/
        └── index.astro              # Landing page entry point
```

**Key Files**:

1. **astro.config.mjs**

   ```javascript
   import { defineConfig } from "astro/config";
   export default defineConfig({});
   ```

   Current: Minimal configuration using Astro defaults.

2. **package.json**

   ```json
   {
     "name": "tamirly-landing-webui",
     "type": "module",
     "version": "0.0.1",
     "scripts": {
       "dev": "astro dev",
       "build": "astro build",
       "preview": "astro preview"
     },
     "dependencies": {
       "astro": "^5.16.6"
     }
   }
   ```

3. **tsconfig.json**
   ```json
   {
     "extends": "astro/tsconfigs/strict",
     "include": [".astro/types.d.ts", "**/*"],
     "exclude": ["dist"]
   }
   ```

---

## File Conventions

### Naming Conventions

| Type                 | Convention            | Example                 |
| -------------------- | --------------------- | ----------------------- |
| **Astro Components** | PascalCase.astro      | `AnimatedSection.astro` |
| **TypeScript Files** | PascalCase.ts         | `MetadataTypes.ts`      |
| **Shell Scripts**    | kebab-case.sh         | `format.sh`             |
| **Markdown Docs**    | PascalCase.md         | `ProjectStructure.md`   |
| **Config Files**     | kebab-case.config.mjs | `prettier.config.mjs`   |
| **Directories**      | kebab-case            | `acore-astro/`          |

### Import Path Conventions

**From landing page to acore-astro components**:

```astro
---
import AnimatedSection from "../../../packages/acore-astro/src/components/AnimatedSection.astro";
import Metadata from "../../../packages/acore-astro/src/components/Metadata.astro";
---
```

**Note**: Relative paths are used since this is not a workspace-based monorepo.

### File Encoding

- **Encoding**: UTF-8
- **Line Endings**: LF (Unix-style)
- **Indentation**: 2 spaces (no tabs)

---

## Component Architecture

### Astro Component Structure

Astro components use the **`.astro`** file format with three sections:

```astro
---
// 1. Frontmatter (Server-side JavaScript/TypeScript)
interface Props {
  title: string;
  description?: string;
}

const { title, description = "" } = Astro.props;
---

<!-- 2. Template (HTML-like syntax) -->
<div class="card">
  <h2>{title}</h2>
  <p>{description}</p>
  <slot />
  <!-- Children content -->
</div>

<style>
  /* 3. Scoped CSS */
  .card {
    background: var(--surface-dark);
    border-radius: 8px;
    padding: 1.5rem;
  }
</style>
```

### Component Hierarchy

```
Layout (Future)
├── Navigation
│   ├── Logo
│   ├── Links
│   └── CTA Button
├── Hero
│   ├── Headline
│   ├── Subheadline
│   ├── CTAs
│   └── Phone Mockup (AnimatedSection)
├── Features
│   ├── Grid Container
│   └── Feature Cards (×6, AnimatedSection)
├── How It Works
│   ├── Steps (×3)
│   └── Phone Mockups (AnimatedSection)
├── Brands
│   └── Brand Logos (AnimatedSection)
├── CTA Section
│   ├── Headline
│   ├── Subheadline
│   └── Download Button
└── Footer
    ├── Brand Column
    ├── Product Column
    ├── Support Column
    └── Legal Column
```

### State Management

**Current State**: Static site with no client-side state.

**Future State** (if needed):

- Islands architecture for interactive components
- React/Svelte/Vue integration via Astro islands
- Local state via component frameworks
- No global state management required for landing page

---

## Module Dependencies

### Dependency Graph

```
┌─────────────────────────────────────────────────────────────┐
│               Tamirly.LandingWebUI (Astro App)              │
│                                                              │
│  Depends on:                                                │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ acore-astro (Shared Components)                     │    │
│  │   • AnimatedSection.astro                           │    │
│  │   • Metadata.astro                                  │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ astro@5.16.6 (Framework)                            │    │
│  │   • Static site generation                          │    │
│  │   • File-based routing                              │    │
│  │   • Island architecture                             │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                    Root Package.json                        │
│                                                              │
│  Dev Dependencies:                                           │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ prettier@3.4.2 + prettier-plugin-astro@0.14.1       │    │
│  │   • Code formatting                                  │    │
│  │   • Astro syntax support                             │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │ acore-scripts (Submodule)                           │    │
│  │   • format_sh.sh                                     │    │
│  │   • format_md.sh                                     │    │
│  │   • format_json.sh                                   │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

### Dependency Categories

#### Runtime Dependencies

| Package | Version | Purpose                          |
| ------- | ------- | -------------------------------- |
| `astro` | ^5.16.6 | Static site generation framework |

#### Development Dependencies (Root)

| Package                 | Version | Purpose                           |
| ----------------------- | ------- | --------------------------------- |
| `prettier`              | ^3.4.2  | Code formatting                   |
| `prettier-plugin-astro` | ^0.14.1 | Astro syntax support for Prettier |

#### Git Submodules

| Submodule       | Repository                                                                                   | Purpose                        |
| --------------- | -------------------------------------------------------------------------------------------- | ------------------------------ |
| `acore-astro`   | [github.com/ahmet-cetinkaya/acore-astro](https://github.com/ahmet-cetinkaya/acore-astro)     | Shared Astro components        |
| `acore-scripts` | [github.com/ahmet-cetinkaya/acore-scripts](https://github.com/ahmet-cetinkaya/acore-scripts) | Formatting utilities           |
| `acore-solid`   | [github.com/ahmet-cetinkaya/acore-solid](https://github.com/ahmet-cetinkaya/acore-solid)     | SolidJS utilities (future use) |

---

## Data Flow

### Build Process

```
┌─────────────────────────────────────────────────────────────┐
│ 1. Source Files                                            │
│    ├── src/pages/index.astro                               │
│    ├── packages/acore-astro/src/components/*.astro          │
│    └── Scoped CSS in .astro files                           │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Astro Build Process                                     │
│    ├── Parse .astro files                                  │
│    ├── Execute frontmatter (server-side)                   │
│    ├── Process components                                  │
│    ├── Bundle CSS/JS                                       │
│    └── Generate static HTML                                │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Output (dist/)                                          │
│    ├── index.html (pre-rendered)                           │
│    ├── _astro/ (bundled JS/CSS)                            │
│    └── assets/ (optimized images, fonts)                   │
└─────────────────────────────────────────────────────────────┘
```

### Runtime Execution

```
┌─────────────────────────────────────────────────────────────┐
│ 1. User Requests Page                                      │
│    └── GET https://tamirly.example.com/                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 2. Server Serves Static Files                              │
│    ├── index.html (pre-rendered HTML)                      │
│    ├── _astro/*.js (hydrates interactive islands)           │
│    └── assets/* (static resources)                         │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│ 3. Browser Executes JavaScript                            │
│    ├── Intersection Observer (AnimatedSection)             │
│    └── Minimal JS for scroll animations                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Configuration Hierarchy

### Configuration Precedence

When multiple configuration files exist, they apply in this order:

1. **Root Prettier Config** (`/prettier.config.mjs`)
   - Applies to all files in repository
   - Includes prettier-plugin-astro for `.astro` files

2. **Submodule Prettier Configs** (e.g., `/packages/acore-astro/prettier.config.mjs`)
   - Apply only to files within that submodule
   - Excluded by root `.prettierignore`

3. **Astro Config** (`/src/presentation/Tamirly.LandingWebUI/astro.config.mjs`)
   - Applies only to Astro build process
   - Controls Vite, integrations, build options

4. **TypeScript Configs**
   - Root: N/A (no root tsconfig)
   - Landing Page: `/src/presentation/Tamirly.LandingWebUI/tsconfig.json`
   - Submodules: Each has its own tsconfig.json

### Prettier Configuration

**Root Configuration** (`/prettier.config.mjs`):

```javascript
export default {
  semi: true,
  trailingComma: "all",
  arrowParens: "always",
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: false,
  quoteProps: "as-needed",
  jsxSingleQuote: false,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: { parser: "astro" },
    },
    {
      files: ["*.md", "*.markdown"],
      options: { proseWrap: "preserve" },
    },
  ],
};
```

**Submodule Isolation**:

- Root `.prettierignore` excludes `packages/` directory
- Each submodule uses its own Prettier configuration
- Format script formats submodules independently

---

## Extension Points

### Adding New Components to acore-astro

1. **Navigate to submodule**:

   ```bash
   cd packages/acore-astro
   ```

2. **Create component**:

   ```bash
   # Create new component file
   touch src/components/NewComponent.astro
   ```

3. **Implement component**:

   ```astro
   ---
   export interface Props {
     title: string;
   }

   const { title } = Astro.props;
   ---

   <div class="new-component">
     <h2>{title}</h2>
     <slot />
   </div>

   <style>
     .new-component {
       /* Scoped styles */
     }
   </style>
   ```

4. **Commit to submodule**:

   ```bash
   git add src/components/NewComponent.astro
   git commit -m "feat: add NewComponent"
   git push origin main
   ```

5. **Update parent repository**:
   ```bash
   cd ../..
   git add packages/acore-astro
   git commit -m "chore: update acore-astro with NewComponent"
   ```

### Adding New Landing Page Sections

1. **Create section component** (optional):

   ```astro
   ---
   // src/components/Sections/NewSection.astro
   ---

   <section class="new-section">
     <AnimatedSection animation="fade-up">
       <!-- Section content -->
     </AnimatedSection>
   </section>

   <style>
     .new-section {
       /* Section-specific styles */
     }
   </style>
   ```

2. **Import and use in index.astro**:

   ```astro
   ---
   import NewSection from "../components/Sections/NewSection.astro";
   ---

   <!-- ...existing content... -->
   <NewSection />
   ```

### Adding Format Script Support

1. **Create formatter in acore-scripts**:

   ```bash
   cd packages/acore-scripts
   touch src/format_newtype.sh
   ```

2. **Implement formatter**:

   ```bash
   #!/bin/bash
   # format_newtype.sh - Format NEWTYPE files

   function format_newtype() {
     local target_dir="${1:-.}"
     echo "Formatting NEWTYPE files in: $target_dir"
     # Implementation
   }
   ```

3. **Source in root format.sh**:

   ```bash
   source "${PROJECT_ROOT}/packages/acore-scripts/src/format_newtype.sh"
   ```

4. **Call in format.sh**:
   ```bash
   format_newtype "$PROJECT_ROOT"
   ```

---

## Appendix: File Size Metrics

| Directory/File Type     | Count | Total Size |
| ----------------------- | ----- | ---------- |
| Root config files       | 8     | ~5KB       |
| Documentation           | 4     | ~60KB      |
| Scripts                 | 1     | ~2KB       |
| acore-astro components  | 2     | ~5KB       |
| acore-scripts utilities | 4     | ~3KB       |
| Landing page source     | 1     | ~1KB       |

---

## Document Information

**Title**: Tamirly Landing - Project Structure
**Version**: 1.0.0
**Last Updated**: 2025-12-28
**Maintainer**: Ahmet Çetinkaya
**License**: GNU General Public License v3.0

---

**End of Document**
