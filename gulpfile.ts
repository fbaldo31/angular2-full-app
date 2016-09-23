"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const merge = require('merge-stream');
// const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint())
        .pipe(tslint.report('prose'));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));
    return tsResult.js
        .pipe(sourcemaps.write(".", {sourceRoot: '/src'}))
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript nor Scss files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*" , "!**/*.ts", "!**/*.scss"])
        .pipe(gulp.dest("build"));
});

/**
 * Compile scss to css
 */
gulp.task('css', function () {
    var sassStream,
        cssStream;

    //compile sass
    sassStream = gulp.src('src/assets/styles/main.scss')
        .pipe(sass({
            errLogToConsole: true
        }));

    //select additional css files
    cssStream = gulp.src('./node_modules/ng2-toastr/ng2-toastr.css');

    //merge the two streams and concatenate their contents into a single file
    return merge(sassStream, cssStream)
        .pipe(concat('main.css'))
        .pipe(gulp.dest('src/assets/styles'));
});
/*
gulp.task('sass', function() {
    return gulp.src('src/assets/styles/main.scss',
                    './node_modules/ng2-toastr/ng2-toastr.css')
        .pipe(sass().on("error", sass.logError)
        )
        .pipe(gulp.dest('src/assets/styles'));
});

gulp.task('css', function() {
    return gulp.src('./node_modules/ng2-toastr/ng2-toastr.css')
        .pipe(gulp.dest('src/assets/styles'));
});

gulp.task('styles', function() {
    return gulp.src('./src/assets/styles/*.css')
        .pipe(concat('app.css'))
        .pipe(gulp.dest('./src/assets/styles'));
});*/

/**
 * Copy all assets into build directory.
 */
gulp.task("assets", () => {
    return gulp.src([
        'assets/img/**',
        'assets/fonts/**/*',
        ]).pipe(gulp.dest("build/assets"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {

    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'moment/min/moment-with-locales.min.js',
            'bootstrap/node_modules/tether/dist/js/tether.js',
            'bootstrap/node_modules/jquery/dist/jquery.js',
            'ng2-bootstrap/**',
            'ng2-toastr/**',
            //'ng2-translate/**',
            'chart.js/dist/Chart.js',
            'ng2-charts/**',
            //'angular2-smart-logger/**',
            //'angular2-cache/**',
            
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        // .pipe(concat('vendors.js'))
        .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch('src/assets/styles/*.scss', ['sass']);
});

/**
 * Build the project.
 */
gulp.task("build", [ 'css', 'libs', 'compile', 'assets', 'resources'], () => {
    console.log("Building the project ...");
});