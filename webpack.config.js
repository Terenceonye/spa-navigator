const path = require("path");

module.exports = {
  entry: "./src/spa-navigator.js",
  output: {
    filename: "spa-navigator.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "SPANavigator",
    libraryTarget: "umd",
    globalObject: "this"
  },
  mode: "production"
};
