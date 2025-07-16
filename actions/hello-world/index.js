const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
  try {
    // Get inputs
    const name = core.getInput('name');
    const greetingType = core.getInput('greeting-type');
    
    // Get current time
    const now = new Date();
    const timeString = now.toISOString();
    
    // Generate greeting based on type
    let greeting;
    switch (greetingType.toLowerCase()) {
      case 'formal':
        greeting = `Good day, ${name}. I hope you are well.`;
        break;
      case 'enthusiastic':
        greeting = `Hey there, ${name}! 🎉 What an amazing day!`;
        break;
      case 'casual':
      default:
        greeting = `Hello, ${name}! Nice to see you.`;
        break;
    }
    
    // Log the greeting
    core.info(`Generated greeting: ${greeting}`);
    
    // Set outputs
    core.setOutput('greeting', greeting);
    core.setOutput('time', timeString);
    
    // Log additional context information
    core.info(`Action triggered by: ${github.context.actor}`);
    core.info(`Repository: ${github.context.repo.owner}/${github.context.repo.repo}`);
    core.info(`Event: ${github.context.eventName}`);
    
  } catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
  }
}

run();