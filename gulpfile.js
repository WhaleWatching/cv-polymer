// Common simple gulpfile
// (c)2015 Edward Cheng
// Under GPLv2

var
  path_source = 'src',
  path_dest = 'public';

var
  gulp = require('gulp'),
  jade = require('gulp-jade'),
  less = require('gulp-less'),
  browserSync = require('browser-sync')
  coffee = require('gulp-coffee'),
  sourcemaps = require('gulp-sourcemaps'),
  filter = require('gulp-filter'),
  del = require('del');

gulp.task('style', function () {
  filter_less = filter(['*.less']);
  return gulp.src([path_source + '/style/**/*.*'])
    .pipe(sourcemaps.init())
      .pipe(filter_less)
        .pipe(less())
      .pipe(filter_less.restore())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path_dest + '/static'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('script', function () {
  filter_coffee = filter(['*.coffee']);
  return gulp.src([path_source + '/script/**/*.*'])
    .pipe(sourcemaps.init())
      .pipe(filter_coffee)
        .pipe(coffee())
      .pipe(filter_coffee.restore())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path_dest + '/static'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('view', function () {
  filter_jade = filter(['*.jade']);
  return gulp.src([path_source + '/view/**/*.*'])
    .pipe(sourcemaps.init())
      // .pipe(filter_jade)
        .pipe(jade({pretty: '\t'}))
      // .pipe(filter_jade.restore())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path_dest))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: path_dest
    },
    browser: false,
    ghostMode: false
  });
});

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch(path_source + '/script/**/*.*', ['script']);
  gulp.watch(path_source + '/style/**/*.*', ['style']);
  gulp.watch(path_source + '/view/**/*.*', ['view']);
});

gulp.task('build', ['script', 'view', 'style']);