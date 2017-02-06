var gulp = require('gulp');
var del = require('del');
var imagemin = require('gulp-imagemin');
var cssnano = require('gulp-cssnano');
browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
	browserSync.init({

		notify: false,

		server: {
			baseDir: "docs"
		}
	});
});

gulp.task('deleteDistFolder', function() {
	return del("./docs");
});


gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
	var pathsToCopy = [
		'./app/**/*',
		'./app/index.html',
		'./app/temp/styles/materialize.css',
		'./app/temp/scripts/App.js',
		'!./app/assets/images/**',
		'!./app/assets/styles/**'
	]

	return gulp.src(pathsToCopy)
		.pipe(gulp.dest('./docs'));
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
	return gulp.src(['./app/assets/images/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./docs/assets/images"));
});

gulp.task('minifyTrigger', ['deleteDistFolder'], function() {
	gulp.start('minify');
});

gulp.task('minify', ['styles', 'scripts'], function() {
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(cssnano())
		.pipe(gulp.dest('./docs/temp/styles'));
});

gulp.task('build', ['copyGeneralFiles', 'optimizeImages', 'minifyTrigger']);