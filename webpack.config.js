const path = require("path");

const SRC_DIR = path.resolve(__dirname, "src");
const ENTRY_FILE = path.resolve(SRC_DIR, "app.js");
const OUTPUT_DIR = path.resolve(__dirname, "dist");
const NODE_MODULES_DIR = path.resolve(__dirname, "node_modules");

module.exports = {
  entry: ENTRY_FILE,

  output: {
    path: OUTPUT_DIR,
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: SRC_DIR,
        exclude: NODE_MODULES_DIR,
        loader: "babel-loader"
      }
    ]
  },

  devtool: "source-map"
};
