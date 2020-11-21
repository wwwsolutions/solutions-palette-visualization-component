const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');
const svg2png = require('gulp-svg2png');


const paths = {
  temp: {
    root: './temp',
    sprites: './temp/',
    svg: './temp/css/*.svg',
    png: './temp/*.png',
    css: './temp/css/*.css'
  },
  src: {
    sprites: './src/assets/sprites',
    pngs: './src/assets/sprites',
    icons: './src/assets/icons/**/*.svg',
    generated: './src/styles/generated'
  },
  templates: {
    sprite: './build-utils/gulp/templates/sprite.css'
  },
  files: {
    sprites: './src/assets/sprites/**.svg',
    images: './src/assets/sprites/**.png',
    generated: './src/styles/postcss/generated/_sprite.css'

  }
};

const config = {
  shape: {
    spacing: {
      padding: 1
    }
  },
  mode: {
    css: {
      variables: {
        replaceSvgWithPng: function () {
          return function (sprite, render) {
            return render(sprite).split('.svg').join('.png');
          }
        }
      },
      sprite: 'sprite.svg',
      render: {
        css: {
          template: paths.templates.sprite
        }
      }
    }
  }
};


function beginClean() {
  return del([paths.temp.root, paths.files.sprites, paths.files.images, paths.files.generated]);
}

function createSprite() {
  return gulp.src(paths.src.icons)
    .pipe(svgSprite(config))
    .pipe(gulp.dest(paths.temp.sprites));
}

function createPngCopy() {
  return gulp.src(paths.temp.svg)
    .pipe(svg2png())
    .pipe(gulp.dest(paths.temp.root))
}

function copySpriteGraphic() {
  return gulp.src(paths.temp.svg)
    .pipe(gulp.dest(paths.src.sprites));
}

function copyPngGraphic() {
  return gulp.src(paths.temp.png)
    .pipe(gulp.dest(paths.src.pngs));
}

function copySpriteCSS() {
  return gulp.src(paths.temp.css)
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest(paths.src.generated));
}

function endClean() {
  return del([paths.temp.root], { force: true });
}

exports.beginClean = beginClean;
exports.createSprite = createSprite;
exports.createPngCopy = createPngCopy;
exports.copySpriteGraphic = copySpriteGraphic;
exports.copySpriteCSS = copySpriteCSS;

const build = gulp.series(beginClean, createSprite, createPngCopy, copySpriteGraphic, copyPngGraphic, copySpriteCSS, endClean);

gulp.task('sprites-generator', build);
