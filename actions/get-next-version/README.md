# Get Next Version Action

A GitHub action that calculates the next semantic version number based on existing GitHub releases.

## Features

- 🏷️ **Release-based versioning**: Uses GitHub releases (not git tags) to determine current version
- 📈 **Semantic versioning**: Supports major.minor.patch version bumping
- 🔧 **Flexible prefixes**: Optional version prefixes (like 'v1.0.0')
- 🚀 **Zero setup**: Works out of the box with GitHub CLI
- ✨ **Smart defaults**: Handles edge cases like no existing releases or invalid version formats

## Usage

### Basic Usage

```yaml
- name: Get next version
  id: version
  uses: eveenendaal/github-actions/actions/get-next-version@master

- name: Show version info
  run: |
    echo "Current version: ${{ steps.version.outputs.current-version }}"
    echo "Next version: ${{ steps.version.outputs.next-version }}"
```

### With Version Prefix

```yaml
- name: Get next version with 'v' prefix
  id: version
  uses: eveenendaal/github-actions/actions/get-next-version@master
  with:
    version-prefix: 'v'
    bump-type: 'minor'

- name: Create release
  run: |
    gh release create "v${{ steps.version.outputs.next-version }}" \
      --title "Release v${{ steps.version.outputs.next-version }}" \
      --notes "Automated release"
```

### Bump Different Version Parts

```yaml
# Bump patch version (default)
- uses: eveenendaal/github-actions/actions/get-next-version@master
  with:
    bump-type: 'patch'  # 1.0.0 -> 1.0.1

# Bump minor version
- uses: eveenendaal/github-actions/actions/get-next-version@master
  with:
    bump-type: 'minor'  # 1.0.0 -> 1.1.0

# Bump major version
- uses: eveenendaal/github-actions/actions/get-next-version@master
  with:
    bump-type: 'major'  # 1.0.0 -> 2.0.0
```

## Inputs

| Input            | Description                                                     | Required | Default |
|------------------|-----------------------------------------------------------------|----------|---------|
| `version-prefix` | Prefix for version tags (e.g., 'v'). Leave empty for no prefix. | No       | `''`    |
| `bump-type`      | Which part to bump: `major`, `minor`, or `patch`                | No       | `patch` |

## Outputs

| Output            | Description                                                   |
|-------------------|---------------------------------------------------------------|
| `next-version`    | The calculated next version number (without prefix)           |
| `current-version` | The current/latest version found (empty if no releases exist) |

## How It Works

1. **Fetches releases**: Uses GitHub CLI to get the latest release from your repository
2. **Parses version**: Extracts semantic version from the release tag (supports optional prefix)
3. **Calculates next**: Increments the appropriate version part based on `bump-type`
4. **Handles edge cases**: 
   - No releases → starts with appropriate initial version (0.0.1, 0.1.0, or 1.0.0)
   - Invalid format → resets to initial version
   - Respects version prefixes in input but outputs clean version numbers

## Version Logic

### Initial Versions (No Releases)
- `patch` bump → `0.0.1`
- `minor` bump → `0.1.0` 
- `major` bump → `1.0.0`

### Version Bumping (With Existing Releases)
- `patch`: `1.2.3` → `1.2.4`
- `minor`: `1.2.3` → `1.3.0`
- `major`: `1.2.3` → `2.0.0`

## Requirements

- GitHub CLI (`gh`) must be available (standard in GitHub Actions runners)
- Repository must have appropriate permissions to read releases

## Example Workflow

```yaml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Calculate next version
        id: version
        uses: eveenendaal/github-actions/actions/get-next-version@master
        with:
          version-prefix: 'v'
          bump-type: 'patch'
      
      - name: Update package.json
        run: |
          npm version ${{ steps.version.outputs.next-version }} --no-git-tag-version
      
      - name: Commit version bump
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add package.json
          git commit -m "Bump version to ${{ steps.version.outputs.next-version }}"
          git push
      
      - name: Create release
        run: |
          gh release create "v${{ steps.version.outputs.next-version }}" \
            --title "Release v${{ steps.version.outputs.next-version }}" \
            --generate-notes
```

## Comparison with Similar Actions

This action differs from typical git tag-based versioning tools:

- ✅ Uses **GitHub releases** instead of git tags
- ✅ **Read-only**: Doesn't modify your repository files
- ✅ **Flexible**: Supports different bump types and prefixes
- ✅ **Robust**: Handles edge cases gracefully

Perfect for workflows where you want to calculate the next version before actually creating a release or updating files.
