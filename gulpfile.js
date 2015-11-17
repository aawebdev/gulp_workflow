///////////////////////////
/// Required
//////////////////////////

var gulp = require('gulp'),
	sourcemaps = require('gulp-sourcemaps'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
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
  return gulp.src(input)
  	.pipe(sourcemaps.init())
	.pipe(sass({ style: 'expanded' }))
	.pipe(sourcemaps.write(output))
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