# Install Tools Action

This GitHub Action installs task via pip and OpenTofu using the official install script. You can specify which tools to install using the `include` input.

## Features

- Installs task using pip
- Installs OpenTofu using the official install script
- Allows selection of tools via input

## Usage

Add this step to your workflow:

```yaml
- name: Install Tools
  uses: eveenendaal/github-actions/actions/install-my-tools@master
```

### Include Tools

To install only specific tools, use the `include` input:

```yaml
- name: Install Tools (only task)
  uses: ./actions/install-my-tools
  with:
    include: task
```

```yaml
- name: Install Tools (only opentofu)
  uses: ./actions/install-my-tools
  with:
    include: opentofu
```

```yaml
- name: Install Tools (both)
  uses: ./actions/install-my-tools
  with:
    include: task,opentofu
```

If `include` is empty or not set, both tools are installed by default.

---

MIT License
