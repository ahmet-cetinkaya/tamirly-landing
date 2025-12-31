#!/bin/bash

# 🏷️  Create release - bump version, generate changelog, and create git tag
# Usage: ./create-release.sh [major|minor|patch|x.y.z] [--no-commit] [--no-tag] [--no-changelog]
#
# Examples:
#   ./create-release.sh patch          # 0.0.1 -> 0.0.2
#   ./create-release.sh minor          # 0.0.1 -> 0.1.0
#   ./create-release.sh major          # 0.0.1 -> 1.0.0
#   ./create-release.sh 1.2.3          # Set exact version
#   ./create-release.sh patch --no-tag # Bump without creating git tag
#   ./create-release.sh patch --no-changelog # Bump without generating changelog

set -e

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
PACKAGE_JSON="$PROJECT_ROOT/src/presentation/Tamirly.LandingWebUI/package.json"
ROOT_PACKAGE_JSON="$PROJECT_ROOT/package.json"
CHANGELOG_FILE="$PROJECT_ROOT/CHANGELOG.md"

# Source acore-scripts logger
ACORE_SCRIPTS_DIR="$PROJECT_ROOT/packages/acore-scripts/src"

if [[ ! -d "$ACORE_SCRIPTS_DIR" ]]; then
  echo "❌ Error: acore-scripts not found at $ACORE_SCRIPTS_DIR"
  echo "Please ensure Git submodules are initialized:"
  echo "  git submodule update --init --recursive"
  exit 1
fi

# shellcheck source=/dev/null
source "$ACORE_SCRIPTS_DIR/logger.sh"

# Default options
DO_COMMIT=true
DO_TAG=true
DO_CHANGELOG=true
VERSION_TYPE=""
CUSTOM_VERSION=""

# Print usage
print_usage() {
  cat << 'EOF'
🏷️  Tamirly Landing Release Script

Usage:
  create-release.sh [major|minor|patch|x.y.z] [options]

Arguments:
  major          Increment major version (0.0.1 -> 1.0.0)
  minor          Increment minor version (0.0.1 -> 0.1.0)
  patch          Increment patch version (0.0.1 -> 0.0.2)
  x.y.z          Set custom version (e.g., 1.2.3)

Options:
  --no-commit    Bump version without creating git commit
  --no-tag       Create commit without git tag
  --no-changelog Skip changelog generation
  -h, --help     Show this help message

Examples:
  create-release.sh patch                    # Bump patch version (0.0.1 -> 0.0.2)
  create-release.sh minor                    # Bump minor version (0.0.1 -> 0.1.0)
  create-release.sh major                    # Bump major version (0.0.1 -> 1.0.0)
  create-release.sh 1.2.3                    # Set exact version to 1.2.3
  create-release.sh patch --no-tag           # Bump without creating tag
  create-release.sh minor --no-commit        # Bump without commit/tag
  create-release.sh patch --no-changelog     # Bump without generating changelog

EOF
}

# Parse arguments
while [[ $# -gt 0 ]]; do
  case $1 in
    major | minor | patch)
      VERSION_TYPE="$1"
      shift
      ;;
    --no-commit)
      DO_COMMIT=false
      shift
      ;;
    --no-tag)
      DO_TAG=false
      shift
      ;;
    --no-changelog)
      DO_CHANGELOG=false
      shift
      ;;
    -h | --help)
      print_usage
      exit 0
      ;;
    [0-9]*.[0-9]*.[0-9]*)
      CUSTOM_VERSION="$1"
      shift
      ;;
    *)
      acore_log_error "Unknown argument: $1"
      print_usage
      exit 1
      ;;
  esac
done

# Validate arguments
if [[ -z "$VERSION_TYPE" && -z "$CUSTOM_VERSION" ]]; then
  acore_log_error "Version type or custom version required"
  print_usage
  exit 1
fi

if [[ -n "$VERSION_TYPE" && -n "$CUSTOM_VERSION" ]]; then
  acore_log_error "Cannot specify both version type and custom version"
  exit 1
fi

# Check if package.json exists
if [[ ! -f "$PACKAGE_JSON" ]]; then
  acore_log_error "package.json not found at $PACKAGE_JSON"
  exit 1
fi

# Check if we're in a git repository
if [[ "$DO_COMMIT" == true ]] && ! git rev-parse --git-dir > /dev/null 2>&1; then
  acore_log_error "Not a git repository. Use --no-commit to skip git operations."
  exit 1
fi

# Check for uncommitted changes
if [[ "$DO_COMMIT" == true ]]; then
  if ! git diff --quiet || ! git diff --cached --quiet; then
    acore_log_error "You have uncommitted changes. Please commit or stash them first."
    exit 1
  fi
fi

# Extract current versions
CURRENT_VERSION=$(grep -o '"version":\s*"[^"]*"' "$PACKAGE_JSON" | cut -d'"' -f4 | tr -d ' ')
ROOT_CURRENT_VERSION=$(grep -o '"version":\s*"[^"]*"' "$ROOT_PACKAGE_JSON" | cut -d'"' -f4 | tr -d ' ')

if [[ -z "$CURRENT_VERSION" ]]; then
  acore_log_error "Failed to extract current version from package.json"
  exit 1
fi

if [[ -z "$ROOT_CURRENT_VERSION" ]]; then
  acore_log_error "Failed to extract current version from root package.json"
  exit 1
fi

# Parse current version
MAJOR=$(echo "$CURRENT_VERSION" | cut -d. -f1)
MINOR=$(echo "$CURRENT_VERSION" | cut -d. -f2)
PATCH=$(echo "$CURRENT_VERSION" | cut -d. -f3)

# Calculate new version
if [[ -n "$VERSION_TYPE" ]]; then
  case $VERSION_TYPE in
    major)
      NEW_VERSION="$((MAJOR + 1)).0.0"
      ;;
    minor)
      NEW_VERSION="$MAJOR.$((MINOR + 1)).0"
      ;;
    patch)
      NEW_VERSION="$MAJOR.$MINOR.$((PATCH + 1))"
      ;;
  esac
else
  NEW_VERSION="$CUSTOM_VERSION"
fi

# Validate new version format
if ! [[ "$NEW_VERSION" =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  acore_log_error "Invalid version format: $NEW_VERSION (expected x.y.z)"
  exit 1
fi

# Display release info
acore_log_header "Release Summary"
acore_log_info "Landing UI: $CURRENT_VERSION → $NEW_VERSION"
acore_log_info "Root:       $ROOT_CURRENT_VERSION → $NEW_VERSION"

# Confirm before proceeding
read -p "Continue with this release? [y/N] " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  acore_log_warning "Release cancelled"
  exit 0
fi

# Update version in package.json files
acore_log_info "Updating version in package.json files..."
sed -i "s/\"version\": \"$CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" "$PACKAGE_JSON"
sed -i "s/\"version\": \"$ROOT_CURRENT_VERSION\"/\"version\": \"$NEW_VERSION\"/" "$ROOT_PACKAGE_JSON"

# Verify the changes
UPDATED_VERSION=$(grep -o '"version":\s*"[^"]*"' "$PACKAGE_JSON" | cut -d'"' -f4 | tr -d ' ')
ROOT_UPDATED_VERSION=$(grep -o '"version":\s*"[^"]*"' "$ROOT_PACKAGE_JSON" | cut -d'"' -f4 | tr -d ' ')
if [[ "$UPDATED_VERSION" != "$NEW_VERSION" || "$ROOT_UPDATED_VERSION" != "$NEW_VERSION" ]]; then
  acore_log_error "Failed to update version in package.json files"
  exit 1
fi

acore_log_success "Version updated to $NEW_VERSION"

# Function to capitalize first letter
_capitalize() {
  local text="$1"
  echo "$(echo "${text:0:1}" | tr '[:lower:]' '[:upper:]')${text:1}"
}

# Generate changelog for the main project
_generate_changelog() {
  local version="$1"
  local changelog_content=""

  # Get commits since last tag (or from beginning if no tags)
  local latest_tag
  latest_tag=$(git describe --tags --abbrev=0 2> /dev/null || echo "")

  local commit_range
  if [[ -n "$latest_tag" ]]; then
    commit_range="$latest_tag..HEAD"
  else
    commit_range="HEAD"
  fi

  # Categorize commits
  local added=""
  local changed=""
  local fixed=""
  local security=""

  while IFS= read -r commit; do
    if [[ -n "$commit" ]]; then
      # Extract commit message (everything after the hash and space)
      local message
      message=$(echo "$commit" | cut -d' ' -f2-)

      # Skip version bump commits and merge commits
      if [[ ! "$message" =~ ^(chore:\ (bump|release|update)\ version|Merge\ ) ]]; then
        # Parse conventional commits
        if [[ "$message" =~ ^(feat|fix|docs|style|refactor|perf|test|chore|ci|build)(\(.+\))?:\ (.+)$ ]]; then
          local type
          local description
          type=$(echo "$message" | cut -d':' -f1 | sed 's/(.*//')
          description=$(echo "$message" | cut -d':' -f2- | sed 's/^ *//')
          description=$(_capitalize "$description")

          case "$type" in
            "feat")
              if [[ -z "$added" ]]; then
                added="- $description"
              else
                added="$added"$'\n'"- $description"
              fi
              ;;
            "fix")
              if [[ -z "$fixed" ]]; then
                fixed="- $description"
              else
                fixed="$fixed"$'\n'"- $description"
              fi
              ;;
            "perf" | "refactor")
              if [[ "$description" =~ (UI|user|interface|experience|performance) ]]; then
                if [[ -z "$changed" ]]; then
                  changed="- $description"
                else
                  changed="$changed"$'\n'"- $description"
                fi
              fi
              ;;
          esac
        fi
      fi
    fi
  done < <(git log --oneline --no-merges "$commit_range")

  # Build changelog sections
  if [[ -n "$added" ]]; then
    changelog_content="### Added"$'\n'"$added"$'\n'
  fi

  if [[ -n "$changed" ]]; then
    if [[ -n "$changelog_content" ]]; then
      changelog_content="$changelog_content"$'\n'"### Changed"$'\n'"$changed"$'\n'
    else
      changelog_content="### Changed"$'\n'"$changed"$'\n'
    fi
  fi

  if [[ -n "$fixed" ]]; then
    if [[ -n "$changelog_content" ]]; then
      changelog_content="$changelog_content"$'\n'"### Fixed"$'\n'"$fixed"$'\n'
    else
      changelog_content="### Fixed"$'\n'"$fixed"$'\n'
    fi
  fi

  # If no changes found, add default message
  if [[ -z "$changelog_content" ]]; then
    changelog_content="### Changed"$'\n'"- Initial release"$'\n'
  fi

  echo "$changelog_content"
}

# Generate changelog
if [[ "$DO_CHANGELOG" == true ]]; then
  acore_log_section "Changelog Generation"
  acore_log_info "Generating changelog for version $NEW_VERSION..."

  # Generate changelog content
  changelog_content=$(_generate_changelog "$NEW_VERSION")

  # Get current date
  current_date=$(date +%Y-%m-%d)

  # Create or update CHANGELOG.md
  if [[ ! -f "$CHANGELOG_FILE" ]]; then
    # Create new CHANGELOG.md
    acore_log_info "Creating fresh CHANGELOG.md file"
    cat > "$CHANGELOG_FILE" << 'EOF'
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

EOF
  fi

  # Prepare new entry
  new_entry="## [$NEW_VERSION] - $current_date"$'\n\n'"$changelog_content"

  # Insert new entry after [Unreleased] section
  if grep -q "## \\[Unreleased\\]" "$CHANGELOG_FILE"; then
    tmp_file="$CHANGELOG_FILE.tmp"
    awk -v new_entry="$new_entry" '
      /^## \[Unreleased\]/ {
        print $0
        print ""
        printf "%s", new_entry
        print ""
        next
      }
      { print }
    ' "$CHANGELOG_FILE" > "$tmp_file"
    mv "$tmp_file" "$CHANGELOG_FILE"
  else
    # If no Unreleased section, append to file
    echo "" >> "$CHANGELOG_FILE"
    echo -e "$new_entry" >> "$CHANGELOG_FILE"
  fi

  acore_log_success "Changelog generated successfully"
  CHANGELOG_GENERATED=true
fi

# Create git commit
if [[ "$DO_COMMIT" == true ]]; then
  acore_log_info "Creating git commit..."
  git add "$PACKAGE_JSON"
  git add "$ROOT_PACKAGE_JSON"

  # Add changelog if it was generated
  if [[ "$DO_CHANGELOG" == true && "$CHANGELOG_GENERATED" == true && -f "$CHANGELOG_FILE" ]]; then
    git add "$CHANGELOG_FILE"
    git commit -m "chore: release $NEW_VERSION"
  else
    git commit -m "chore: bump version to $NEW_VERSION"
  fi

  if [[ "$DO_CHANGELOG" == true && "$CHANGELOG_GENERATED" == true && -f "$CHANGELOG_FILE" ]]; then
    acore_log_success "Commit created: chore: release $NEW_VERSION"
  else
    acore_log_success "Commit created: chore: bump version to $NEW_VERSION"
  fi

  # Create git tag
  if [[ "$DO_TAG" == true ]]; then
    TAG_NAME="v$NEW_VERSION"
    acore_log_info "Creating git tag: $TAG_NAME"
    git tag -a "$TAG_NAME" -m "Release version $NEW_VERSION"
    acore_log_success "Tag created: $TAG_NAME"
  fi
fi

acore_log_divider
acore_log_success "Release created successfully!"
acore_log_divider

# Display next steps
if [[ "$DO_COMMIT" == true ]]; then
  acore_log_section "Next Steps"
  echo "  Review the commit: git show HEAD"
  echo "  Push commit:        git push"
  if [[ "$DO_TAG" == true ]]; then
    echo "  Push tag:           git push origin $TAG_NAME"
  fi
fi
