///////////////////////////
/// Required
//////////////////////////

var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	bs = require('browser-sync').create();
	
///////////////////////////
/// Variables
//////////////////////////
var input = './assets/sass/**/*.scss';
var output = './assets/css';

	
///////////////////////////
/// Sass Tasks
//////////////////////////
gulp.task('sass', function () {
  sass(input, {sourcemap: true, style: 'compact'})
  .pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
	bs.reload;
});

///////////////////////////
/// BrowserSync Tasks
//////////////////////////
gulp.task('sync',function(){
	bs.init({
		server: "./"
	})
	bs.watch('*.html').on('change', bs.reload);
	bs.watch('./assets/css/*.css').on('change', bs.reload);
})

///////////////////////////
/// Watch Task
//////////////////////////
gulp.task('watch',function() {
	/*gulp.watch('assets/sass/*.scss', ['sass']);*/
	gulp.watch('./**/**/*.scss',['sass']);
});

///////////////////////////
/// Default Task
//////////////////////////

gulp.task('default',['sass','sync','watch']);