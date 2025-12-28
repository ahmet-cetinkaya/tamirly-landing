#!/bin/bash

# 🎨 Format all project files using acore-scripts
# This script formats markdown, shell scripts, JSON, YAML, Astro, and TypeScript files

set -e

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Source acore-scripts format utilities
ACORE_SCRIPTS_DIR="$PROJECT_ROOT/packages/acore-scripts/src"

# Configuration: Files to exclude from formatting
EXCLUDE_PATTERNS=(
  "node_modules/"
  ".git/"
  "dist/"
  "dist-ssr/"
  ".astro/"
  "*.min.js"
  "*.min.mjs"
  "*.min.css"
  "packages/"
)

# Check if acore-scripts exists
if [[ ! -d "$ACORE_SCRIPTS_DIR" ]]; then
  echo "❌ Error: acore-scripts not found at $ACORE_SCRIPTS_DIR"
  echo "Please ensure Git submodules are initialized:"
  echo "  git submodule update --init --recursive"
  exit 1
fi

# Source logger
source "$ACORE_SCRIPTS_DIR/logger.sh"

# Track overall success
OVERALL_SUCCESS=0

echo "🎨 Formatting Project Files"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Format Shell Scripts
if [[ -f "$ACORE_SCRIPTS_DIR/format_sh.sh" ]]; then
  echo ""
  source "$ACORE_SCRIPTS_DIR/format_sh.sh"
  if ! acore_sh_format_all; then
    OVERALL_SUCCESS=1
  fi
fi

# Format Markdown Files
if [[ -f "$ACORE_SCRIPTS_DIR/format_md.sh" ]]; then
  echo ""
  source "$ACORE_SCRIPTS_DIR/format_md.sh"
  if ! acore_format_md_files; then
    # Non-fatal, continue but track
    [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=2
  fi
fi

# Format JSON Files
if [[ -f "$ACORE_SCRIPTS_DIR/format_json.sh" ]]; then
  echo ""
  source "$ACORE_SCRIPTS_DIR/format_json.sh"
  if ! acore_format_json_files; then
    # Non-fatal, continue but track
    [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=2
  fi
fi

# Format YAML Files
if [[ -f "$ACORE_SCRIPTS_DIR/format_yaml.sh" ]]; then
  echo ""
  source "$ACORE_SCRIPTS_DIR/format_yaml.sh"
  if ! acore_format_yaml_files; then
    # Non-fatal, continue but track
    [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=2
  fi
fi

# Format Astro and TypeScript Files with Prettier
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if command -v prettier > /dev/null 2>&1; then
  echo ""
  echo "🚀 Formatting Astro & TypeScript Files"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  # Check if .prettierignore exists, if not create a basic one
  if [[ ! -f "$PROJECT_ROOT/.prettierignore" ]]; then
    cat > "$PROJECT_ROOT/.prettierignore" << 'EOF'
# Dependencies
node_modules/
packages/

# Build outputs
dist/
dist-ssr/
.out/
.astro/

# Cache
.cache/
.parcel-cache/

# Logs
*.log

# Lock files (optional)
package-lock.json
yarn.lock
pnpm-lock.yaml

# Minified files
*.min.js
*.min.mjs
*.min.css
EOF
  fi

  # Format Astro files
  echo "📨 Formatting Astro files..."
  if prettier --write "**/*.astro" \
    --ignore-path=.gitignore \
    --ignore-path=.prettierignore \
    --log-level warn 2>&1 | grep -v "No matching files"; then
    echo "✅ Astro files formatted"
  fi

  # Format TypeScript/JavaScript files
  echo "💎 Formatting TypeScript/JavaScript files..."
  if prettier --write "**/*.{ts,tsx,js,jsx,mjs,cjs}" \
    --ignore-path=.gitignore \
    --ignore-path=.prettierignore \
    --log-level warn 2>&1 | grep -v "No matching files"; then
    echo "✅ TypeScript/JavaScript files formatted"
  fi

  echo "✅ Code formatting completed successfully!"
else
  echo ""
  echo "⚠️  Prettier is not installed or not in PATH"
  echo "Cannot format Astro/TypeScript files without Prettier"
  echo ""
  echo "To install Prettier:"
  echo "  npm:    npm install -g prettier"
  echo "  yarn:   yarn global add prettier"
  echo "  pnpm:   pnpm add -g prettier"
  echo "  bun:    bun install -g prettier"
  echo ""
  echo "For Astro support, also install:"
  echo "  npm install -g prettier-plugin-astro"
  echo ""
  # Non-fatal, continue but track
  [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=2
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if [[ $OVERALL_SUCCESS -eq 0 ]]; then
  echo "✅ All formatting completed successfully!"
  exit 0
elif [[ $OVERALL_SUCCESS -eq 1 ]]; then
  echo "⚠️  Formatting completed with errors (shell scripts)"
  exit 1
else
  echo "⚠️  Formatting completed with some warnings (optional formatters missing)"
  exit 0
fi
