# GitHub Actions Collection

A collection of custom GitHub actions for automating Rust project versioning.

## Available Actions

### 🏷️ [Rust Version Upgrade](actions/rust-version-upgrade)
A GitHub action that automatically calculates the next version number for your Rust project based on git tags and updates the version inline in `Cargo.toml`.

**Usage:**
```yaml
- name: Rust Version Upgrade
  id: rust_version
  uses: ./actions/rust-version-upgrade
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
- Outputs the new version for use in subsequent workflow steps

## Quick Start

Each action is self-contained in its own directory under `actions/`. To use the Rust version upgrade action:

1. Reference the action with the full path: `./actions/rust-version-upgrade`
2. Check the action's README for specific usage instructions
3. See the example workflow for complete usage demonstrations

## Repository Structure

```
.
├── actions/
│   └── rust-version-upgrade/  # Rust version upgrade action
│       ├── action.yml
│       ├── index.js
│       ├── package.json
│       └── README.md
├── .github/
│   └── workflows/
│       └── example.yml        # Example workflow demonstrating the action
├── README.md                  # This file
├── LICENSE                    # MIT License
```

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## About

This repository demonstrates:
- Custom GitHub action for Rust version management
- Best practices for action development
- Comprehensive documentation and examples
- Workflow integration patterns

Perfect for automating Rust project versioning in CI/CD!
