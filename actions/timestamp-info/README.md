# Timestamp Information Action

A GitHub action that provides various timestamp formats and timezone information. This action demonstrates handling different output formats and timezone conversions.

## Features

- 🕐 Multiple timestamp formats (ISO, Unix, Human-readable, Local)
- 🌍 Timezone support with automatic conversion
- 📊 Comprehensive timestamp information in outputs
- 🔧 Uses standard GitHub Actions toolkit
- 📖 Clear documentation and examples

## Usage

### Basic Example

```yaml
- name: Get Timestamp
  id: timestamp
  uses: eveenendaal/github-actions/actions/timestamp-info@v1
  with:
    timezone: 'UTC'
    format: 'iso'

- name: Use Timestamp
  run: echo "Current time: ${{ steps.timestamp.outputs.timestamp }}"
```

### Advanced Example

```yaml
- name: Get NY Time
  id: ny-time
  uses: eveenendaal/github-actions/actions/timestamp-info@v1
  with:
    timezone: 'America/New_York'
    format: 'human'

- name: Get London Time
  id: london-time
  uses: eveenendaal/github-actions/actions/timestamp-info@v1
  with:
    timezone: 'Europe/London'
    format: 'local'

- name: Show Results
  run: |
    echo "New York time: ${{ steps.ny-time.outputs.timestamp }}"
    echo "London time: ${{ steps.london-time.outputs.timestamp }}"
    echo "Unix timestamp: ${{ steps.ny-time.outputs.unix }}"
    echo "ISO timestamp: ${{ steps.ny-time.outputs.iso }}"
```

## Inputs

| Input | Description | Required | Default |
|-------|-------------|----------|---------|
| `timezone` | Timezone for timestamp (e.g., UTC, America/New_York, Europe/London) | No | `UTC` |
| `format` | Output format (`iso`, `local`, `unix`, `human`) | No | `iso` |

## Outputs

| Output | Description |
|--------|-------------|
| `timestamp` | The formatted timestamp according to the specified format |
| `timezone` | The timezone used for the timestamp |
| `unix` | Unix timestamp (seconds since epoch) |
| `iso` | ISO 8601 formatted timestamp |
| `human` | Human-readable timestamp with timezone |

## Format Types

### ISO (default)
- Format: `2023-12-07T14:30:00.000Z`
- Use case: Standard interchange format

### Local
- Format: `12/7/2023, 2:30:00 PM`
- Use case: Locale-specific formatting

### Unix
- Format: `1701954600`
- Use case: Unix timestamp for calculations

### Human
- Format: `December 7, 2023 at 02:30:00 PM EST`
- Use case: User-friendly display

## Supported Timezones

Common timezone examples:
- `UTC` (default)
- `America/New_York`
- `America/Los_Angeles`
- `Europe/London`
- `Europe/Berlin`
- `Asia/Tokyo`
- `Asia/Shanghai`
- `Australia/Sydney`

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