var gulp = require('gulp');
var cssify = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('test', function() {
  console.log('test task');
});

gulp.task('sass', function() {
  gulp.src('./*.scss')
    .pipe( cssify() )
    .pipe( autoprefixer({ browsers: 'last 10 versions' }) )
    .pipe( gulp.dest('css') );
});

gulp.task('watch', function() {
  gulp.watch('./*.scss', ['sass']);
});