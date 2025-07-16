const core = require('@actions/core');
const execSync = require('child_process').execSync;
const fs = require('fs');

function getLatestTag(prefix) {
  try {
    const tags = execSync(`git tag -l "${prefix}*"`, { encoding: 'utf8' })
      .split('\n')
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    return tags.length ? tags[tags.length - 1] : null;
  } catch {
    return null;
  }
}

function bumpVersion(version, part) {
  let [major, minor, patch] = version.split('.').map(Number);
  if (part === 'major') {
    major += 1; minor = 0; patch = 0;
  } else if (part === 'minor') {
    minor += 1; patch = 0;
  } else {
    patch += 1;
  }
  return `${major}.${minor}.${patch}`;
}

function updateCargoToml(newVersion) {
  const cargoPath = 'Cargo.toml';
  let content = fs.readFileSync(cargoPath, 'utf8');
  content = content.replace(/^version = ".*"/m, `version = "${newVersion}"`);
  fs.writeFileSync(cargoPath, content);
}

async function run() {
  try {
    const prefix = core.getInput('tag-prefix') || 'v';
    const bump = core.getInput('bump') || 'minor';
    let latestTag = getLatestTag(prefix);
    let currentVersion = latestTag ? latestTag.replace(prefix, '') : '1.0.0';
    let newVersion = bumpVersion(currentVersion, bump);
    updateCargoToml(newVersion);
    core.setOutput('version', newVersion);
    core.info(`Updated Cargo.toml to version ${newVersion}`);
  } catch (error) {
    core.setFailed(`Action failed: ${error.message}`);
  }
}

run();
