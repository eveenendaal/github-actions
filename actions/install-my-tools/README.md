# Install Tools Action

This GitHub Action installs task, OpenTofu, uv, and age. You can specify which tools to install using the `include` input.

## Features

- Installs task (via Homebrew on macOS, snap on Linux)
- Installs OpenTofu (via Homebrew on macOS, snap on Linux)
- Installs uv (via Homebrew on macOS, pip on Linux)
- Installs age (via Homebrew on macOS, apt on Linux)
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
- name: Install Tools (only age)
  uses: ./actions/install-my-tools
  with:
    include: age
```

```yaml
- name: Install Tools (all)
  uses: ./actions/install-my-tools
  with:
    include: task,opentofu,uv,age
```

If `include` is empty, all tools are installed by default.

---

MIT License
