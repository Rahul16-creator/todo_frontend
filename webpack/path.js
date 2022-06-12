const path = require("path");

module.exports = {
  root: path.resolve(__dirname, "../"),
  outputPath: path.resolve(__dirname, "../", "dist"),
  entryPath: path.resolve(__dirname, "../", "src/index.jsx"),
  templatePath: path.resolve(__dirname, "../", "src/template/index.html"),
  cssFolder: "css",
  jsFolder: "js",
};