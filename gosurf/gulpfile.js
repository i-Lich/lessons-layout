const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const terser = require('gulp-terser');
const del = require('del');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const sourcemaps = require('gulp-sourcemaps');
const image = require('gulp-image');
const browserSync = require('browser-sync').create();




//scss файлы
const cssFiles = [
    './node_modules/animate.css/animate.css',
    // './src/scss/slick.css',
    './src/scss/main.scss'
];

//js файлы
const jsFiles = [
    './node_modules/wow.js/dist/wow.min.js',
    './node_modules/jquery/dist/jquery.min.js',
    './src/js/slick.js',
    './src/js/lib.js',
    './src/js/main.js',
];
//стили


function styles() {
    return gulp.src('./src/scss/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

// function styles() {
//     return gulp.src(cssFiles)
//         .pipe(sourcemaps.init())
//         // .pipe(concat('style.scss'))
//         .pipe(sass().on('error', sass.logError))
//
//         // .pipe(autoprefixer({
//         //     overrideBrowserslist: ['last 2 versions'],
//         //     cascade: false
//         // }))
//
//         // .pipe(cleanCSS({
//         //     level: 2
//         // }))
//         .pipe(sourcemaps.write())
//         //выходная папка для CSS файла
//         .pipe(gulp.dest('./build/css'))
//         .pipe(browserSync.stream());
// }

//скрипты

function scripts() {
    return gulp.src(jsFiles)
        .pipe(sourcemaps.init())
        .pipe(concat('script.js'))
        //минификация
        .pipe(terser())
        .pipe(sourcemaps.write('./'))
        //выходная папка для JS файла
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());
}
//сжатие пикч
function images() {
    return gulp.src('./src/img/**')
        .pipe(image())
        .pipe(gulp.dest('./build/img/'))
};

//удалить лишние файлы
function clean(){
    return del(['build/*'])
}

//просмотр файлов
function watch(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./src/img/**', images);
    // gulp.watch('./src/scss/**/*.css', styles);
    // gulp.watch('./src/scss/**/*.sass', styles);
    gulp.watch('./src/scss/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch("./*.html").on('change', browserSync.reload);

}

// gulp.task('styles', styles);
gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts, images)));
gulp.task('dev', gulp.series('build','watch'));