const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "main.js",
    path: path.resole(__dirname, "dist"),
  },
};
