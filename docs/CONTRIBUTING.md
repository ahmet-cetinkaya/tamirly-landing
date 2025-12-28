# Contributing to Tamirly Landing

Thank you for your interest in contributing to Tamirly Landing! This document provides guidelines and instructions for contributing effectively.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- **Node.js**: Latest LTS version
- **Bun**: Optional but recommended for faster installs
- **Git**: For version control

### Initial Setup

```bash
# Clone with submodules
git clone --recursive https://github.com/ahmetcetinkaya/tamirly-landing.git
cd tamirly-landing

# Install dependencies
bun install
# or: npm install

# Start development server
cd src/presentation/Tamirly.LandingWebUI
bun run dev
# or: npm run dev
```

## Development Workflow

### Branch Strategy

- `main` - Production branch, always stable
- `feature/*` - New features
- `fix/*` - Bug fixes
- `docs/*` - Documentation updates
- `refactor/*` - Code refactoring

### Working with Submodules

The project uses Git submodules for shared packages. When updating:

```bash
# Update submodules to latest
git submodule update --remote --merge

# Commit submodule changes in parent repo
git add packages/
git commit -m "chore: update acore packages"
```

### Development Commands

All commands run from `src/presentation/Tamirly.LandingWebUI/`:

```bash
bun run dev      # Start dev server (http://localhost:4321)
bun run build    # Production build to dist/
bun run preview  # Preview production build
```

## Coding Standards

### Astro/TypeScript

- Use TypeScript strict mode
- Define component props with interfaces
- Use component-scoped CSS (`<style>` blocks)
- Follow the existing project structure

### File Naming

- Components: `PascalCase.astro`
- Pages: `kebab-case.astro`
- Utilities: `kebab-case.ts`
- Styles: Scoped in component files

### Component Structure

```astro
---
// Frontmatter: imports, props, logic
import { type HTMLAttributes } from "astro:attributes";

interface Props {
  title: string;
  description?: string;
}

const { title, description } = Astro.props;
---

<!-- Template: HTML/Astro syntax -->
<section>
  <h1>{title}</h1>
  {description && <p>{description}</p>}
</section>

<style>
  /* Component-scoped CSS */
  section {
    padding: 2rem;
  }
</style>
```

### Accessibility

- Use semantic HTML elements
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers
- Respect `prefers-reduced-motion`

### Performance

- Minimal JavaScript (only animations via Intersection Observer)
- Static-first approach
- Optimize images and assets
- Lazy load where appropriate

## Commit Guidelines

### Commit Message Format

```
type: subject

body
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Build process or dependencies
- `ci` - CI/CD changes

### Examples

```bash
feat: add hero section with animation
fix: resolve mobile navigation overflow issue
docs: update installation instructions
style: format code with prettier
refactor: extract metadata component to shared package
```

## Pull Request Process

### Before Submitting

1. **Test your changes**
   - Run `bun run build` to verify production build
   - Test on multiple browsers and screen sizes
   - Verify accessibility with keyboard navigation

2. **Update documentation**
   - Update relevant docs in `docs/`
   - Add comments for complex logic
   - Update README if needed

3. **Code quality**
   - Follow the coding standards above
   - Remove any debug code or console.logs
   - Ensure no linter errors

### Submitting a PR

1. Create a descriptive title: `feat: add feature description`
2. Describe what changed and why
3. Link related issues (e.g., `Closes #123`)
4. Add screenshots for UI changes
5. Ensure CI checks pass

### PR Review Process

- Maintainers will review your PR
- Address feedback promptly
- Keep discussions focused and constructive
- Request review when changes are complete

### After Merge

- Update your local main branch
- Delete your feature branch
- Celebrate your contribution! 🎉

## Questions?

- Open an issue for bugs or feature requests
- Start a discussion for questions
- Check existing documentation first

---

**Thank you for contributing to Tamirly Landing!**
