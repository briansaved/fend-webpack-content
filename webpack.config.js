const path = require("path");
const webpack = require("webpack");

//module.exports = browserConfig;
module.exports = {
  entry: "./src/client/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
