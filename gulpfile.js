// Common simple gulpfile
// (c)2015 Edward Cheng
// Under GPLv2

var
  path_source = './src',
  path_dest = './',
  env = 'dev';

var
  gulp = require('gulp'),
  jade = require('gulp-jade'),
  less = require('gulp-less'),
  browserSync = require('browser-sync')
  coffee = require('gulp-coffee'),
  util = require('gulp-util'),
  sourcemaps = require('gulp-sourcemaps'),
  mincss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  filter = require('gulp-filter'),
  smoosher = require('gulp-smoosher'),
  debug = require('gulp-debug'),
  del = require('del');

gulp.task('style', function () {
  filter_less = filter(['*.less']);
  return gulp.src([path_source + '/style/**/*.less',path_source + '/style/**/*.css'])
    .pipe(env == 'dev' ? sourcemaps.init() : util.noop())
      .pipe(filter_less)
        .pipe(less())
      .pipe(filter_less.restore())
    .pipe(env == 'dev' ? sourcemaps.write() : util.noop())
    .pipe(env == 'prod' ? mincss() : util.noop())
    .pipe(gulp.dest(path_dest + '/static'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('script', function () {
  filter_coffee = filter(['*.coffee']);
  return gulp.src([path_source + '/script/**/*.coffee',path_source + '/script/**/*.js'])
    .pipe(env == 'dev' ? sourcemaps.init() : util.noop())
      .pipe(filter_coffee)
        .pipe(coffee())
      .pipe(filter_coffee.restore())
    .pipe(env == 'dev' ? sourcemaps.write() : util.noop())
    .pipe(env == 'prod' ? uglify() : util.noop())
    .pipe(gulp.dest(path_dest + '/static'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('view', function () {
  filter_jade = filter(['*.jade']);
  return gulp.src([path_source + '/view/**/*.*'])
    // .pipe(filter_jade)
      .pipe(jade({pretty: '\t'}))
    // .pipe(filter_jade.restore())
    .pipe(gulp.dest(path_dest))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('element', ['element-source'], function () {
  filter_jade = filter(['*.jade']);
  return gulp.src([
      path_source + '/element/**/*.jade',
      path_source + '/element/**/*.html'
    ])
    .pipe(filter_jade)
      .pipe(jade({pretty: '\t', doctype: '5'}))
    .pipe(filter_jade.restore())
    .pipe(smoosher({base: path_dest + '/elements'}))
    .pipe(gulp.dest(path_dest + '/elements'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('element-source', function () {
  filter_less = filter(['*.less']);
  filter_coffee = filter(['*.coffee']);
  filter_js = filter(['*.js']);
  filter_css = filter(['*.css']);
  return gulp.src([
      path_source + '/element/**/*.coffee',
      path_source + '/element/**/*.less',
      path_source + '/element/**/*.js',
      path_source + '/element/**/*.css'
    ])
    .pipe(env == 'dev' ? sourcemaps.init() : util.noop())
      .pipe(filter_coffee)
        .pipe(coffee())
      .pipe(filter_coffee.restore())
      .pipe(filter_less)
        .pipe(less())
      .pipe(filter_less.restore())
    .pipe(env == 'dev' ? sourcemaps.write() : util.noop())
      .pipe(filter_js)
        .pipe(env == 'prod' ? uglify() : util.noop())
      .pipe(filter_js.restore())
      .pipe(filter_css)
        .pipe(env == 'prod' ? mincss() : util.noop())
      .pipe(filter_css.restore())
    .pipe(gulp.dest(path_dest + '/elements'))
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: path_dest
    },
    open: false,
    ghostMode: false
  });
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch(path_source + '/script/**/*.*', ['script']);
  gulp.watch(path_source + '/style/**/*.*', ['style']);
  gulp.watch(path_source + '/view/**/*.*', ['view']);
  gulp.watch(path_source + '/element/**/*.*', ['element']);
});

gulp.task('build', ['script', 'view', 'style', 'element']);
gulp.task('prod', function () {
  env = 'prod';
  gulp.start('build');
});