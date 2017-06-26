var gulp=require('gulp');
var minihtml=require('gulp-minify-html');
var minicss=require('gulp-clean-css');

gulp.task('htmltask',function(){
	gulp.src('*.html')
	.pipe(minihtml())
	.pipe(gulp.dest('dist'))
})
