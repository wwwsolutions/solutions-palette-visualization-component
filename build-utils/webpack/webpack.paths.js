// HELPERS
const resolveAbs = require("../helpers/helpers");

const paths = {
  root: resolveAbs("/"),
  // context: resolveAbs('./src'),
  src: "./src",
  entry: {
    index: "./src/index.js",
  },
  assets: {
    audio: "./src/assets/audio",
    fonts: "./src/assets/fonts",
    icons: "./src/assets/icons",
    images: "./src/assets/images",
    sprites: "./src/assets/sprites",
    video: "./src/assets/video",
  },
  dist: {
    root: resolveAbs("./dist"),
    scripts: "./scripts",
    stylesheets: "./stylesheets",
    audio: "./dist/assets/audio",
    fonts: "./dist/assets/fonts",
    icons: "./dist/assets/icons",
    images: "./dist/assets/images",
    sprites: "./dist/assets/sprites",
    video: "./dist/assets/video",
  }
};

module.exports = paths;
