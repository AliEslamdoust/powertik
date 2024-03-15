const chokidar = require("chokidar");
const { exec } = require("child_process");
const { indexURL } = require("./powertik-files");

// Create a watcher instance
const watcher = chokidar.watch(indexURL, {
  // Add any additional options here if needed
});

runPowertik();

// Run the command when the file changes
watcher.on("change", () => {
  console.log(`applying detected changes in ${indexURL} ..`);
  runPowertik();
});

function runPowertik() {
  exec("node powertik.js", (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing the command: ${error}`);
      return;
    }
    console.log(stdout);
    console.error(stderr);
  });
}

console.log(`Watching ${indexURL} for changes...`);
