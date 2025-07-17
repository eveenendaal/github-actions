# Install Tools Action

This GitHub Action installs task via pip and OpenTofu using the official install script. You can exclude either tool using the `exclude` input.

## Features

- Installs task using pip
- Installs OpenTofu using the official install script
- Allows exclusion of tools via input

## Usage

Add this step to your workflow:

```yaml
- name: Install Tools
  uses: ./actions/install-my-tools
```

### Exclude Tools

To exclude one or both tools, use the `exclude` input:

```yaml
- name: Install Tools (exclude task)
  uses: ./actions/install-my-tools
  with:
    exclude: task
```

```yaml
- name: Install Tools (exclude both)
  uses: ./actions/install-my-tools
  with:
    exclude: task,opentofu
```

---

MIT License
