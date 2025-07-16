# Hello World Greeting Action

An example custom GitHub action that generates personalized greetings. This action demonstrates the basic structure and functionality of a custom GitHub action that can be used in other repositories.

## Features

- 🎯 Simple and easy to understand example
- 📝 Configurable greeting types (casual, formal, enthusiastic)
- ⏰ Provides timestamp of when greeting was generated
- 🔧 Uses standard GitHub Actions toolkit
- 📖 Comprehensive documentation and examples

## Usage

### Basic Example

```yaml
- name: Generate Greeting
  id: greeting
  uses: eveenendaal/github-actions/actions/hello-world@v1
  with:
    name: 'World'
    greeting-type: 'casual'

- name: Use Greeting
  run: echo "${{ steps.greeting.outputs.greeting }}"
```

### Advanced Example

```yaml
- name: Formal Greeting
  id: formal-greeting
  uses: eveenendaal/github-actions/actions/hello-world@v1
  with:
    name: 'Distinguished Developer'
    greeting-type: 'formal'

- name: Show Results
  run: |
    echo "Greeting: ${{ steps.formal-greeting.outputs.greeting }}"
    echo "Generated at: ${{ steps.formal-greeting.outputs.time }}"
```

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `name` | Name of the person to greet | Yes | `World` |
| `greeting-type` | Type of greeting (`casual`, `formal`, `enthusiastic`) | No | `casual` |

## Outputs

| Output | Description |
|--------|-------------|
| `greeting` | The personalized greeting message |
| `time` | ISO timestamp of when the greeting was generated |

## Greeting Types

### Casual (default)
- Format: `Hello, {name}! Nice to see you.`
- Use case: General purpose, friendly tone

### Formal
- Format: `Good day, {name}. I hope you are well.`
- Use case: Professional or formal contexts

### Enthusiastic
- Format: `Hey there, {name}! 🎉 What an amazing day!`
- Use case: Celebratory or high-energy contexts

## Development

This action is built using:
- Node.js 20
- GitHub Actions Toolkit (@actions/core, @actions/github)

### Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Test in a workflow

## Contributing

This is an example action for educational purposes. Feel free to fork and modify for your own use cases.

## License

MIT License - see the [LICENSE](../../LICENSE) file for details.