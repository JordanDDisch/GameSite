var gulp = require('gulp'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    gulp.src('./scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(minifyCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("./css"));
});

gulp.task('watch', function() {
    gulp.watch('./scss/styles.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);