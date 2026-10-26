const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const repoRoot = path.resolve(__dirname, "../../../../");
const configPath = path.join(repoRoot, "config.json");

if (args[0] === "--remove-attachment") {
  const [assignmentId, filename] = args.slice(1);

  if (!assignmentId || !filename) {
    console.error("Usage: node update-config.js --remove-attachment <assignment-id> <filename>");
    process.exit(1);
  }

  const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  const assignment = config.assignments.find((item) => item.id === assignmentId);

  if (!assignment) {
    console.error(`Error: Assignment "${assignmentId}" not found in config.json`);
    process.exit(1);
  }

  const attachments = assignment.attachments || [];
  assignment.attachments = attachments.filter((attachment) => attachment.file !== filename);

  if (attachments.length === assignment.attachments.length) {
    console.log(`Skipped: "${filename}" is not attached to "${assignmentId}"`);
    process.exit(0);
  }

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
  console.log(`Removed "${filename}" from assignment "${assignmentId}"`);
  process.exit(0);
}

const [assignmentId, title, description] = args;

if (!assignmentId || !title || !description) {
  console.error(
    'Usage: node update-config.js <assignment-id> "<title>" "<description>"',
  );
  process.exit(1);
}

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(assignmentId)) {
  console.error("Error: Assignment ID must be kebab-case.");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

if (!Array.isArray(config.assignments)) {
  console.error("Error: config.json must contain an assignments array.");
  process.exit(1);
}

if (config.assignments.some((assignment) => assignment.id === assignmentId)) {
  console.error(`Error: Assignment "${assignmentId}" already exists in config.json`);
  process.exit(1);
}

config.assignments.push({
  id: assignmentId,
  title,
  description,
  path: `assignments/${assignmentId}`,
});

fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + "\n");
console.log(`Added assignment "${title}" (${assignmentId}) to config.json`);