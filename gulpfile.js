// sudo npm install --save-dev gulp-sourcemaps gulp-imagemin gulp-autoprefixer imagemin-pngquant gulp-uglify gulp-rigger gulp-minify-css rimraf gulp-watch gulp-pug gulp-sass browser-sync
var 	gulp = require('gulp'),
		sourcemaps = require('gulp-sourcemaps'),
		imagemin = require('gulp-imagemin'),
		prefixer = require('gulp-autoprefixer'),
		pngquant = require('imagemin-pngquant'),
		uglify = require('gulp-uglify'),
		rigger = require('gulp-rigger'),
		cssmin = require('gulp-minify-css'),
		rimraf = require('rimraf'),
		watch = require('gulp-watch'),
		pug = require('gulp-pug'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;

var		path 			= {
			dist: 			{
				image: 'dist/image/',
				fonts: 'dist/fonts/',
				html: 'dist/',
				css: 'dist/css',
				js: 'dist/js/'
			},
			app:			{
				image: 'app/image/**/**/*.*',
				fonts: 'app/fonts/**/*.*',
				scss: 'app/scss/*.scss',
				pug: 'app/*.pug',
				js: 'app/js/*.js'	
			},
			watch: 			{
				image: 'app/image/**/**/*.*',
				fonts: 'app/fonts/**/*.*',
				html: 'app/**/*.html',
				scss: 'app/scss/*.scss',
				pug: 'app/*.pug',
				css: 'app/css/*.css',
				js: 'app/js/*.js'
			},
			clean: 			{
				dist: './dist'
			}
};

var 	config			= {
		server: {
			baseDir: "./dist"
		},
		tunnel: true,
		host: 'localhost',
		port: 9000,
		logPrefix: "Frontend_Devil"
};

gulp.task('html:dist',	function()	{
	gulp.src(path.app.pug)
		.pipe(pug({
			pretty: false
		}))
		.pipe(gulp.dest(path.dist.html))
		.pipe(reload({stream: true}));	//Перезагрузка сервера для обновлений
});

gulp.task('js:dist',	function()	{
	gulp.src(path.app.js)
		.pipe(rigger())
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.dist.js))
		.pipe(reload({stream:	true}));
});

gulp.task('style:dist',	function()	{
	gulp.src(path.app.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(cssmin())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.dist.css))
		.pipe(reload({stream: true}));
});

gulp.task('image:dist',	function()	{
	gulp.src(path.app.image)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox:	false}],
			use: [pngquant()],
			interlaced: true 
		}))
		.pipe(gulp.dest(path.dist.image))
		.pipe(reload({stream: true}));
});

gulp.task('fonts:dist',	function()	{
	gulp.src(path.app.fonts)
		.pipe(gulp.dest(path.dist.fonts))
});

gulp.task('dist',	[
	'html:dist',
	'style:dist',
	'js:dist',
	'image:dist',
	'fonts:dist'
]);

gulp.task('watch',	function()	{
	watch([path.watch.pug],	function(event,	cb)	{
		gulp.start('html:dist');
	});
	watch([path.watch.scss],	function(event,	cb)	{
		gulp.start('style:dist');
	});
	watch([path.watch.js],		function(event,	cb)	{
		gulp.start('js:dist');
	});
	watch([path.watch.image],	function(event,	cb)	{
		gulp.start('image:dist');
	});
	watch([path.watch.fonts],	function(event,	cb)	{
		gulp.start('fonts:dist');
	});
});

gulp.task('webserver',	function()	{
	browserSync({
     server: {
        baseDir: "dist/",
        directory: true
     }
   });
});

gulp.task('clean',		function(cb)	{
	rimraf(path.clean.dist, cb);
});

gulp.task('default',	['dist',	'webserver',	'watch']);