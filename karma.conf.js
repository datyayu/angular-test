module.exports = config => {
  config.set({
    frameworks: ["jasmine"],
    files: ["spec/*.spec.js"],
    plugins: [
      require("karma-babel-preprocessor"),
      require("karma-jasmine"),
      require("karma-phantomjs-launcher"),
      require("karma-sourcemap-loader"),
      require("karma-spec-reporter"),
      require("karma-webpack")
    ],
    browsers: ["PhantomJS"],
    preprocessors: {
      "src/**/*.js": ["webpack", "sourcemap"],
      "spec/**/*.js": ["webpack", "sourcemap", "babel"]
    },
    reporters: ["spec"],
    webpack: {
      devtool: "source-map"
    },
    webpackMiddleware: {
      stats: "errors-only"
    }
  });
};
