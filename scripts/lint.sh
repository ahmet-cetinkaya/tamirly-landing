#!/bin/bash

# 🛡️ Lint all project files using acore-scripts logger
# This script runs ESLint and markdownlint-cli2

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Source acore-scripts logger
ACORE_SCRIPTS_DIR="$PROJECT_ROOT/packages/acore-scripts/src"
if [[ -f "$ACORE_SCRIPTS_DIR/logger.sh" ]]; then
  # shellcheck source=/dev/null
  source "$ACORE_SCRIPTS_DIR/logger.sh"
else
  echo "❌ Error: acore-scripts logger not found at $ACORE_SCRIPTS_DIR/logger.sh"
  exit 1
fi

# Parse arguments
FIX_MODE=false
if [[ "$1" == "--fix" ]]; then
  FIX_MODE=true
fi

# Track overall success
OVERALL_SUCCESS=0

acore_log_header "🛡️  Linting Project Files"

# Run ESLint
if [ "$FIX_MODE" = true ]; then
  acore_log_info "Running ESLint with --fix..."
  if bunx eslint . --fix; then
    acore_log_success "ESLint fixes applied!"
  else
    acore_log_warning "ESLint found issues it couldn't fix!"
    OVERALL_SUCCESS=1
  fi
else
  acore_log_info "Running ESLint..."
  if bunx eslint .; then
    acore_log_success "ESLint finished!"
  else
    acore_log_error "ESLint found issues!"
    OVERALL_SUCCESS=1
  fi
fi

# Run markdownlint-cli2
echo ""
if [ "$FIX_MODE" = true ]; then
  acore_log_info "Running markdownlint-cli2 with --fix..."
  if bunx markdownlint-cli2 --fix "**/*.md"; then
    acore_log_success "markdownlint fixes applied!"
  else
    acore_log_warning "markdownlint found issues it couldn't fix!"
    [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=1
  fi
else
  acore_log_info "Running markdownlint-cli2..."
  if bunx markdownlint-cli2 "**/*.md"; then
    acore_log_success "markdownlint passed!"
  else
    acore_log_error "markdownlint found issues!"
    [[ $OVERALL_SUCCESS -eq 0 ]] && OVERALL_SUCCESS=1
  fi
fi

acore_log_divider

if [[ $OVERALL_SUCCESS -eq 0 ]]; then
  if [ "$FIX_MODE" = true ]; then
    acore_log_success "All fixable issues addressed!"
  else
    acore_log_success "All linting checks passed!"
  fi
  exit 0
else
  acore_log_error "Issues found. Please check the output above."
  exit 1
fi
