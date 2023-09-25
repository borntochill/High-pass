const {
  src,
  dest,
  series,
  watch
} = require('gulp')

const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create();
const htmlMin = require('gulp-htmlmin')
const cleanCSS = require('gulp-clean-css')
const svgSprite = require('gulp-svg-sprite')
const image = require('gulp-image');
const del = require('del');

const clean = () => {
  return del(['main'])
}

const svgSprites = () => {
  return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(dest('main/img'))
}
const styles = () => {
  return src('src/style/**/*.css')
    .pipe(concat('style.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('main/style'))
    .pipe(browserSync.stream())
}
const htmlMinify = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(dest('main'))
    .pipe(browserSync.stream())
}
const scripts = () => {
  return src([
      'src/js/script.js'
    ])
    .pipe(dest('main/js'))
    .pipe(browserSync.stream())
}

const fonts = () => {
  return src([
      'src/fonts/**/*.woff',
      'src/fonts/**/*.woff2'
    ])
    .pipe(dest('main/fonts'))
}

const images = () => {
  return src([
      'src/img/**/*.jpg',
      'src/img/**/*.png',
      'src/img/*.svg',
      'src/img/**/*.jpeg',
      'src/img/svg/map.svg'
    ])
    .pipe(image())
    .pipe(dest('main/img'))
}


const concatDev = require('gulp-concat')
const cssBeautifyDev = require('gulp-cssbeautify')
const svgSpriteDev = require('gulp-svg-sprite')
const delDev = require('del');

const cleanDev = () => {
  return delDev(['Dev'])
}

const svgSpritesDev = () => {
  return src('src/img/svg/**/*.svg')
    .pipe(svgSpriteDev({
      mode: {
        stack: {
          sprite: 'sprite.svg'
        }
      }
    }))
    .pipe(dest('Dev/img'))
}
const htmlDev = () => {
  return src('src/**/*.html')
    .pipe(dest('Dev'))
    .pipe(browserSync.stream())
}
const stylesDev = () => {
  return src('src/style/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concatDev('style.css'))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(cssBeautifyDev())
    .pipe(sourcemaps.write())
    .pipe(dest('Dev/style'))
    .pipe(browserSync.stream())
}

const scriptsDev = () => {
  return src([
      'src/js/script.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(dest('Dev/js'))
    .pipe(browserSync.stream())
}

const fontsDev = () => {
  return src([
      'src/fonts/**/*.woff',
      'src/fonts/**/*.woff2'
    ])
    .pipe(dest('Dev/fonts'))
}

const imagesDev = () => {
  return src([
      'src/img/**/*.jpg',
      'src/img/**/*.png',
      'src/img/*.svg',
      'src/img/**/*.jpeg',
      'src/img/svg/map.svg'
    ])
    .pipe(dest('Dev/img'))
}

const watchFilesDev = () => {
  browserSync.init({
    server: {
      baseDir: 'Dev'
    }
  })
}

watch('src/**/*.html', htmlDev)
watch('src/style/**/*.css', stylesDev)
watch('src/img/svg/**/*.svg', svgSpritesDev)
watch('src/img/**/*.png', imagesDev)
watch('src/js/**/*.js', scriptsDev)

exports.main = series(clean, htmlMinify, scripts, styles, images, svgSprites, fonts);
exports.dev = series(cleanDev, htmlDev, scriptsDev, stylesDev, imagesDev, svgSpritesDev, fontsDev, watchFilesDev);