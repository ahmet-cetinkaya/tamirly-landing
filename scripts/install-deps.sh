#!/bin/bash
set -e

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_ROOT"

# Source logger
source packages/acore-scripts/src/logger.sh

acore_log_header "Installing Dependencies"

# Initialize and update submodules if needed
acore_log_info "Checking submodules..."
if [ -f ".gitmodules" ]; then
  if ! git submodule status | grep -q "^"; then
    acore_log_info "Initializing submodules..."
    git submodule update --init --recursive
    acore_log_success "Submodules initialized"
  else
    acore_log_success "Submodules already initialized"
  fi
fi

# Root workspace dependencies (includes submodules)
acore_log_section "Root Workspace"
bun install
acore_log_success "Root workspace dependencies installed"

# Install dependencies in each submodule
acore_log_section "Submodules"
for pkg_dir in packages/*/; do
  if [ -f "$pkg_dir/package.json" ]; then
    pkg_name=$(basename "$pkg_dir")
    acore_log_info "Installing $pkg_name dependencies..."
    (cd "$pkg_dir" && bun install)
    acore_log_success "$pkg_name dependencies installed"
  fi
done

# Landing site dependencies
acore_log_section "Landing Site"
cd src/presentation/Tamirly.LandingWebUI
bun install
acore_log_success "Landing site dependencies installed"

echo ""
acore_log_success "All dependencies installed!"
acore_log_divider
