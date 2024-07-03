const { src, dest } = require("gulp");

const sass = require('gulp-sass')(require('sass'));

function generateCSS(cb) {
    src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('css/'));
    cb();
}

exports.css = generateCSS;