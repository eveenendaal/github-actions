# Rust Version Upgrade Action

This GitHub Action automatically calculates the next version number for your Rust project based on git tags and updates the version inline in `Cargo.toml` and writes it to a `VERSION` file.

## Features

- 🚀 Automatically bumps major, minor, or patch version
- 🏷️ Uses git tags to determine the current version
- 📝 Updates `Cargo.toml` inline
- 🗂️ Writes the new version to a `VERSION` file
- 🔧 Outputs the new version for use in subsequent workflow steps

## Usage

Add this step to your workflow:

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

## Inputs

| Input        | Description                                      | Required | Default |
|--------------|--------------------------------------------------|----------|---------|
| `tag-prefix` | Prefix for version tags (e.g., `v`)              | No       | `v`     |
| `bump`       | Which part to bump: `major`, `minor`, or `patch` | No       | `minor` |

## Outputs

| Output    | Description                                          |
|-----------|------------------------------------------------------|
| `version` | The new version number set in Cargo.toml and VERSION |

## Example

If your latest tag is `v1.2.3` and you set `bump: minor`, the new version will be `1.3.0`, `Cargo.toml` will be updated, and the same version will be written to the `VERSION` file.

---

MIT License
