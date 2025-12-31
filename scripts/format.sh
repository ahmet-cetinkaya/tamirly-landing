#!/bin/bash

# 🎨 Format all project files using acore-scripts
# This script formats markdown, shell scripts, JSON, YAML, Astro, and TypeScript files

set -e

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Source acore-scripts format utilities
ACORE_SCRIPTS_DIR="$PROJECT_ROOT/packages/acore-scripts/src"

# Check if acore-scripts exists
if [[ ! -d "$ACORE_SCRIPTS_DIR" ]]; then
  echo "❌ Error: acore-scripts not found at $ACORE_SCRIPTS_DIR"
  echo "Please ensure Git submodules are initialized:"
  echo "  git submodule update --init --recursive"
  exit 1
fi

# Source logger
# shellcheck source=/dev/null
source "$ACORE_SCRIPTS_DIR/logger.sh"

# Track overall success
OVERALL_SUCCESS=0

acore_log_header "🎨 Formatting Project Files"
acore_log_info "Running formatters for different file types..."

# Format Shell Scripts
if [[ -f "$ACORE_SCRIPTS_DIR/format_sh.sh" ]]; then
  acore_log_section "🐚 Formatting Shell Scripts"
  # shellcheck source=/dev/null
  source "$ACORE_SCRIPTS_DIR/format_sh.sh"
  if ! acore_sh_format_all; then
    OVERALL_SUCCESS=1
  fi
fi

# Format Markdown Files
if [[ -f "$ACORE_SCRIPTS_DIR/format_md.sh" ]]; then
  acore_log_section "📝 Formatting Markdown Files"
  # shellcheck source=/dev/null
  source "$ACORE_SCRIPTS_DIR/format_md.sh"
  if ! acore_format_md_files; then
    # Non-fatal, continue but track
    [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=2
  fi
fi

# Format JSON Files
if [[ -f "$ACORE_SCRIPTS_DIR/format_json.sh" ]]; then
  acore_log_section "📦 Formatting JSON Files"
  # shellcheck source=/dev/null
  source "$ACORE_SCRIPTS_DIR/format_json.sh"
  if ! acore_format_json_files; then
    # Non-fatal, continue but track
    [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=2
  fi
fi

# Format YAML Files
if [[ -f "$ACORE_SCRIPTS_DIR/format_yaml.sh" ]]; then
  acore_log_section "⚙️  Formatting YAML Files"
  # shellcheck source=/dev/null
  source "$ACORE_SCRIPTS_DIR/format_yaml.sh"
  if ! acore_format_yaml_files; then
    # Non-fatal, continue but track
    [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=2
  fi
fi

# Format Astro and TypeScript Files with Prettier
if command -v prettier > /dev/null 2>&1; then
  acore_log_section "🚀 Formatting Astro & TypeScript Files"

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
  acore_log_info "Formatting Astro files..."
  if prettier --write "**/*.astro" \
    --ignore-path=.gitignore \
    --ignore-path=.prettierignore \
    --log-level warn 2>&1 | grep -v "No matching files"; then
    acore_log_success "Astro files formatted"
  fi

  # Format TypeScript/JavaScript files
  acore_log_info "Formatting TypeScript/JavaScript files..."
  if prettier --write "**/*.{ts,tsx,js,jsx,mjs,cjs}" \
    --ignore-path=.gitignore \
    --ignore-path=.prettierignore \
    --log-level warn 2>&1 | grep -v "No matching files"; then
    acore_log_success "TypeScript/JavaScript files formatted"
  fi

  acore_log_success "Code formatting completed successfully!"
else
  acore_log_warning "Prettier is not installed or not in PATH"
  acore_log_info "Cannot format Astro/TypeScript files without Prettier"
  acore_log_info "To install Prettier: bun install -g prettier"
  # Non-fatal, continue but track
  [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=2
fi

acore_log_divider

if [[ $OVERALL_SUCCESS -eq 0 ]]; then
  acore_log_success "All formatting completed successfully!"
  exit 0
elif [[ $OVERALL_SUCCESS -eq 1 ]]; then
  acore_log_error "Formatting completed with errors (shell scripts)"
  exit 1
else
  acore_log_warning "Formatting completed with some warnings"
  exit 0
fi
