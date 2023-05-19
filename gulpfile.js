const { src, dest, watch, parallel, series} = require("gulp");

const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const webp = require('gulp-webp');
const htmlmin = require('gulp-htmlmin');
const include = require('gulp-file-include');

function html(){
    return src('app/**.html')
        .pipe(include({
            prefix:'@@'
        }))
        .pipe(dest('dist'))
}

function scripts() {
    return src([
        "app/js/*.js",
        "!app/js/main.min.js",
        ])
        .pipe(concat("main.min.js"))
        .pipe(uglify())
        .pipe(dest("app/js"))
        .pipe(browserSync.stream());
        
}

function styles() {
    return src("app/scss/style.scss")
        .pipe(autoprefixer({overrideBrowserslist:['last 10 version']}))
        .pipe(concat("style.min.css"))
        .pipe(scss({ outputStyle: "compressed" }))
        .pipe(dest("app/css"))
        .pipe(browserSync.stream());
}

function imgToWebP(){
    return src([
            "app/images/*.png",
            "app/images/*.jpg",
            "!app/images/*.webP",
        ])
        .pipe(webp())
        .pipe(dest('app/images'))
}
function watching(){
    watch(['app/scss/style.scss'],styles)
    watch(['app/js/main.js'],scripts)
    watch(['app/images/*.png'],imgToWebP)
    watch(['app/images/*.jpg'],imgToWebP)
    watch(['app/*.html']).on('change', browserSync.reload)
}

function browerSync(){
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
}

function building(){
    return src([
        'app/css/style.min.css',
        'app/js/main.min.js',
        'app/images/*.webp',
        'app/images/*.svg',
        'app/images/*.ico',
        'app/**/*.html',
    ], {base:'app'})
    .pipe(dest('dist'))
}

function cleanDist(){
    return src('dist')
    .pipe(clean())
}




exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browerSync = browerSync;
exports.imgToWebP = imgToWebP;

exports.build = series(cleanDist, building)
exports.default = parallel(styles, scripts, browerSync, watching,)