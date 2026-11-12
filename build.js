const fs = require("node:fs");
const path = require("node:path");

const outputDirectory = path.join(__dirname, "dist");
const filesToCopy = ["index.js", "package.json", "package-lock.json"];

fs.rmSync(outputDirectory, { recursive: true, force: true });
fs.mkdirSync(outputDirectory);

for (const file of filesToCopy) {
  fs.copyFileSync(
    path.join(__dirname, file),
    path.join(outputDirectory, file),
  );
}

console.log(`Build output created in ${outputDirectory}`);
