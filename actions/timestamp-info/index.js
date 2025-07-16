const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Get inputs
    const timezone = core.getInput('timezone');
    const format = core.getInput('format');
    
    // Get current time
    const now = new Date();
    
    // Generate different timestamp formats
    const unix = Math.floor(now.getTime() / 1000);
    const iso = now.toISOString();
    const human = now.toLocaleString('en-US', { 
      timeZone: timezone,
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
    
    // Get timezone-specific timestamp
    let localTime;
    try {
      localTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    } catch (error) {
      core.warning(`Invalid timezone '${timezone}', using UTC instead`);
      localTime = now;
    }
    
    // Determine output based on format
    let timestamp;
    switch (format.toLowerCase()) {
      case 'unix':
        timestamp = unix.toString();
        break;
      case 'local':
        timestamp = localTime.toLocaleString();
        break;
      case 'human':
        timestamp = human;
        break;
      case 'iso':
      default:
        timestamp = iso;
        break;
    }
    
    // Log the timestamp info
    core.info(`Generated timestamp: ${timestamp}`);
    core.info(`Timezone: ${timezone}`);
    core.info(`Format: ${format}`);
    
    // Set outputs
    core.setOutput('timestamp', timestamp);
    core.setOutput('timezone', timezone);
    core.setOutput('unix', unix.toString());
    core.setOutput('iso', iso);
    core.setOutput('human', human);
    
    // Log additional context information
    core.info(`Action triggered by: ${github.context.actor}`);
    core.info(`Repository: ${github.context.repo.owner}/${github.context.repo.repo}`);
    core.info(`Event: ${github.context.eventName}`);
    
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();