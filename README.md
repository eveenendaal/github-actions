# GitHub Actions Collection

A collection of example custom GitHub actions that demonstrate different patterns and functionality. This repository contains multiple reusable actions that can be used in other repositories.

## Available Actions

### 🎯 [Hello World Greeting](actions/hello-world)
An example custom GitHub action that generates personalized greetings with different styles.

**Usage:**
```yaml
- uses: eveenendaal/github-actions/actions/hello-world@v1
  with:
    name: 'World'
    greeting-type: 'casual'
```

**Features:**
- Multiple greeting types (casual, formal, enthusiastic)
- Configurable name input
- Timestamp output
- Simple and educational example

### 🕐 [Timestamp Information](actions/timestamp-info)
A GitHub action that provides various timestamp formats and timezone information.

**Usage:**
```yaml
- uses: eveenendaal/github-actions/actions/timestamp-info@v1
  with:
    timezone: 'America/New_York'
    format: 'human'
```

**Features:**
- Multiple timestamp formats (ISO, Unix, Human-readable, Local)
- Timezone support with automatic conversion
- Comprehensive timestamp information outputs
- All formats available in outputs

## Quick Start

Each action is self-contained in its own directory under `actions/`. To use any action:

1. Reference the action with the full path: `eveenendaal/github-actions/actions/{action-name}@v1`
2. Check the individual action's README for specific usage instructions
3. See the example workflow for complete usage demonstrations

## Repository Structure

```
.
├── actions/
│   ├── hello-world/           # Greeting action
│   │   ├── action.yml
│   │   ├── index.js
│   │   ├── package.json
│   │   └── README.md
│   └── timestamp-info/        # Timestamp action
│       ├── action.yml
│       ├── index.js
│       ├── package.json
│       └── README.md
├── .github/
│   └── workflows/
│       └── example.yml        # Example workflow demonstrating all actions
├── README.md                  # This file
└── LICENSE                    # MIT License
```

## Example Workflow

See [.github/workflows/example.yml](.github/workflows/example.yml) for a complete example demonstrating all available actions.

## Development

### Adding New Actions

1. Create a new directory under `actions/` with a descriptive name
2. Add the following files:
   - `action.yml` - Action metadata and configuration
   - `index.js` - Main action logic
   - `package.json` - Node.js dependencies
   - `README.md` - Action-specific documentation
3. Install dependencies: `npm install`
4. Test the action in a workflow
5. Update this main README to include the new action

### Common Dependencies

All actions use:
- Node.js 20
- GitHub Actions Toolkit (@actions/core, @actions/github)

### Local Development

1. Clone the repository
2. Navigate to the specific action directory
3. Install dependencies: `npm install`
4. Make your changes
5. Test in a workflow

## Contributing

This repository serves as a collection of example actions for educational purposes. Feel free to:

- Fork and modify for your own use cases
- Submit pull requests with new example actions
- Report issues or suggest improvements
- Use these as templates for your own action development

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## About

This repository demonstrates:

- Multi-action repository structure
- Different types of GitHub action patterns
- Best practices for action development
- Comprehensive documentation and examples
- Workflow integration patterns

Perfect for learning how to create and organize custom GitHub actions!
