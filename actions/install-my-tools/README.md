# Install Tools Action

This GitHub Action installs task, OpenTofu, and uv. You can specify which tools to install using the `include` input.

## Features

- Installs task (via pip on macOS, snap on Linux)
- Installs OpenTofu (via snap)
- Installs uv (via pip)
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
- name: Install Tools (only uv)
  uses: ./actions/install-my-tools
  with:
    include: uv
```

```yaml
- name: Install Tools (all)
  uses: ./actions/install-my-tools
  with:
    include: task,opentofu,uv
```

If `include` is empty, all tools are installed by default.

---

MIT License
