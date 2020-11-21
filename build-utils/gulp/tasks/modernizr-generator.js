const gulp = require('gulp');
const del = require('del');
const modernizr = require('gulp-modernizr');
const options = require('../../../modernizr-config.json');

const paths = {
  temp: {
    root: './temp',
  },
  src: {
    css: './src/styles/**/*.css',
    js: './src/app/**/*.js',
  },
  dest: {
    file: {
      vendors: './src/vendors/js/modernizr.js',
    },
    dir: {
      vendors: './src/vendors/js/',
    }

  }
};

function beginClean() {
  return del([paths.dest.file.vendors]);
}

function createModernizrFile() {
  return gulp.src([paths.src.css, paths.src.js])
    .pipe(modernizr(options))
    .pipe(gulp.dest(paths.dest.dir.vendors));
}

function endClean() {
  return del([paths.temp.root]);
}

exports.createModernizrFile = createModernizrFile;

const build = gulp.series(beginClean, createModernizrFile, endClean);

gulp.task('modernizr-generator', build);
