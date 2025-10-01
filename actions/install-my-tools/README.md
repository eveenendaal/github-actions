# Install Tools Action

This GitHub Action installs task, OpenTofu, uv, and age. You can specify which tools to install using the `include` input.

## Features

- Installs task (via Homebrew on macOS and Linux)
- Installs OpenTofu (via Homebrew on macOS and Linux)
- Installs uv (via Homebrew on macOS and Linux)
- Installs age (via Homebrew on macOS and Linux)
- Automatically installs Homebrew on Linux if not present
- Allows selection of tools via input
- **Caches Homebrew packages** for faster subsequent runs

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

## Caching

This action automatically caches Homebrew packages to speed up subsequent workflow runs. The cache key is based on:
- The operating system (macOS or Linux)
- The list of tools being installed
- A version identifier

This means:
- If you run the action with the same tools on the same OS, it will reuse the cached packages
- If you change the list of tools, a new cache entry will be created
- Caches are shared across branches but isolated by OS and tool selection

No additional configuration is needed - caching works automatically!

---

MIT License
