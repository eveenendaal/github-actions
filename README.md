# GitHub Actions Collection

A collection of custom GitHub actions for automating version management and installing development tools.

## Available Actions

### 🏷️ [Get Next Version](actions/get-next-version)
A GitHub action that calculates the next semantic version number based on existing GitHub releases.

**Usage:**
```yaml
- name: Get next version
  id: version
  uses: eveenendaal/github-actions/actions/get-next-version@master
  with:
    version-prefix: 'v'      # Optional, default: ''
    bump-type: 'patch'       # Optional, one of: major, minor, patch (default: patch)

- name: Show version info
  run: |
    echo "Current version: ${{ steps.version.outputs.current-version }}"
    echo "Next version: ${{ steps.version.outputs.next-version }}"
```

**Features:**
- Uses GitHub releases (not git tags) to determine current version
- Supports major, minor, or patch version bumping
- Handles optional version prefixes (like 'v')
- Smart defaults for edge cases (no releases, invalid formats)
- Read-only operation - doesn't modify repository files

### 🏷️ [Rust Version Upgrade](actions/rust-version-upgrade)
A GitHub action that automatically calculates the next version number for your Rust project based on git tags and updates the version inline in `Cargo.toml` and writes it to a `VERSION` file.

**Usage:**
```yaml
- name: Rust Version Upgrade
  id: rust_version
  uses: eveenendaal/github-actions/actions/rust-version-upgrade@master
  with:
    tag-prefix: 'v'      # Optional, default: 'v'
    bump: 'minor'        # Optional, one of: major, minor, patch (default: minor)

- name: Show new version
  run: echo "New version is ${{ steps.rust_version.outputs.version }}"
```

**Features:**
- Automatically bumps major, minor, or patch version
- Uses git tags to determine the current version
- Updates `Cargo.toml` inline
- Writes the new version to a `VERSION` file
- Outputs the new version for use in subsequent workflow steps

### 🛠️ [Install Tools](actions/install-my-tools)
Installs task, OpenTofu, uv, and age via Homebrew on both macOS and Linux. Automatically installs Homebrew on Linux if not present. Includes caching for faster subsequent runs. You can specify which tools to install using the `include` input.

**Usage:**
```yaml
- name: Install Tools
  uses: eveenendaal/github-actions/actions/install-my-tools@master
  with:
    include: task,opentofu,uv,age # or any combination, or leave empty for all
```

See [actions/install-my-tools/README.md](actions/install-my-tools/README.md) for more details.

## Quick Start

Each action is self-contained in its own directory under `actions/`. To use any action:

1. Reference the action with the full path: `eveenendaal/github-actions/actions/<action-name>@master`
2. Check the action's README for specific usage instructions
3. See the example workflows for complete usage demonstrations

## Repository Structure

```
.
├── actions/
│   ├── get-next-version/      # Get next version action
│   │   ├── action.yml
│   │   └── README.md
│   ├── install-my-tools/      # Install development tools action
│   │   ├── action.yml
│   │   └── README.md
│   └── rust-version-upgrade/  # Rust version upgrade action
│       ├── action.yml
│       └── README.md
└── README.md                  # This file
```

## License

MIT License

## About

This repository demonstrates:
- Custom GitHub actions for version management and development tooling
- Best practices for action development
- Comprehensive documentation and examples  
- Workflow integration patterns

Perfect for automating project versioning and development environment setup in CI/CD!
