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
			docs: 			{
				image: 'docs/image/',
				fonts: 'docs/fonts/',
				html: 'docs/',
				css: 'docs/css',
				js: 'docs/js/'
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
				docs: './docs'
			}
};

var 	config			= {
		server: {
			baseDir: "./docs"
		},
		tunnel: true,
		host: 'localhost',
		port: 9000,
		logPrefix: "Frontend_Devil"
};

gulp.task('html:docs',	function()	{
	gulp.src(path.app.pug)
		.pipe(pug({
			pretty: false
		}))
		.pipe(gulp.dest(path.docs.html))
		.pipe(reload({stream: true}));	//Перезагрузка сервера для обновлений
});

gulp.task('js:docs',	function()	{
	gulp.src(path.app.js)
		.pipe(rigger())
		.pipe(sourcemaps.init())
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.docs.js))
		.pipe(reload({stream:	true}));
});

gulp.task('style:docs',	function()	{
	gulp.src(path.app.scss)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(cssmin())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.docs.css))
		.pipe(reload({stream: true}));
});

gulp.task('image:docs',	function()	{
	gulp.src(path.app.image)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox:	false}],
			use: [pngquant()],
			interlaced: true 
		}))
		.pipe(gulp.dest(path.docs.image))
		.pipe(reload({stream: true}));
});

gulp.task('fonts:docs',	function()	{
	gulp.src(path.app.fonts)
		.pipe(gulp.dest(path.docs.fonts))
});

gulp.task('docs',	[
	'html:docs',
	'style:docs',
	'js:docs',
	'image:docs',
	'fonts:docs'
]);

gulp.task('watch',	function()	{
	watch([path.watch.pug],	function(event,	cb)	{
		gulp.start('html:docs');
	});
	watch([path.watch.scss],	function(event,	cb)	{
		gulp.start('style:docs');
	});
	watch([path.watch.js],		function(event,	cb)	{
		gulp.start('js:docs');
	});
	watch([path.watch.image],	function(event,	cb)	{
		gulp.start('image:docs');
	});
	watch([path.watch.fonts],	function(event,	cb)	{
		gulp.start('fonts:docs');
	});
});

gulp.task('webserver',	function()	{
	browserSync({
     server: {
        baseDir: "docs/",
        directory: true
     }
   });
});

gulp.task('clean',		function(cb)	{
	rimraf(path.clean.docs, cb);
});

gulp.task('default',	['docs',	'webserver',	'watch']);