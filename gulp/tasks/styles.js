var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
variables = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');
var sass = require('gulp-sass');

gulp.task('styles', ['sass'], function() {
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport,mixins,variables,nested,autoprefixer]))
			.on('error', function(errorInfo) {
				console.log(errorInfo.toString());
				this.emit('end');
			})
			.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('sass', function () {
  return gulp.src('./app/assets/materialize/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/temp/styles'));
});

// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });