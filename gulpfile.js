"use strict";

var gulp 			= require("gulp"),
	sass 			= require("gulp-sass"),
	browserSync 	= require("browser-sync"),
	autoprefixer	= require("gulp-autoprefixer"),
	sourcemaps 		= require("gulp-sourcemaps"),
	notify 			= require("gulp-notify"),
	rename 			= require("gulp-rename"),
	cleancss		= require("gulp-clean-css"),
	babel			= require("gulp-babel"),
	concat 			= require("gulp-concat"),
	uglify 			= require("gulp-uglify");


gulp.task("sass", function(){
	return gulp.src("public/scss/**/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle: "compressed"}).on("error", notify.onError()))
	.pipe(rename({ suffix: ".min", prefix : ""}))
	.pipe(autoprefixer(["last 15 versions"]))
	.pipe(cleancss( {level: { 1: { specialComments: 0 } } }))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("public/css"))
	.pipe(notify({ message: "Fichier SCSS bien compilé", onLast: true}))
	.pipe(browserSync.stream());
});

gulp.task("scripts", function() {
	return gulp.src([
		"public/libs/jquery/jquery-3.5.1.min.js",
		"public/js/src/**/*.js", allowEmptytrue
	])
	.pipe(sourcemaps.init())
	.pipe(babel({
		presets: ["@babel/env"]
	}))
	.pipe(concat("scripts.min.js"))
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("public/js/dist"))
	.pipe(notify( { message: "TASK: js complété !", onLast: true}))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task("code", function() {
	return gulp.src("**.*.html")
	.pipe(browserSync.reload({ stream: true}))
});

gulp.task("watch", function(){
	gulp.watch("public/scss/**/*.scss", gulp.parallel("sass"));
	gulp.watch("./*.html", gulp.parallel("code"));
	gulp.watch(["./public/js/src/**/*.js", "public/libs/**/*.js"], gulp.parallel("scripts"));
});

gulp.task("browser-sync", function(){
	browserSync.init({
		server:{
			baseDir:"./"
		},
		reloadDelay:200,
		files:[
			"./public/css/*.css",
			"./public/js/**/*.js",
			"./**/*.html"
		]
	});
});

gulp.task("default", gulp.parallel("sass","browser-sync","watch", "code", "scripts"));