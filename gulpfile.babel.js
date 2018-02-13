'use strict';


///// PLUGINS

import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import stripCssComments from 'gulp-strip-css-comments';
import cleanCSS from 'gulp-clean-css';
import minifyjs from 'gulp-js-minify';

///// PATHS 

const paths = {
    css: {
        src: 'src/scss/index.scss',
        dest: 'static/styles'
    },
    js: {
        src: [
            'src/js/plugins/jquerymodal.js',
            'src/js/custom/index.js'
        ],
        dest: 'static/scripts'
    }
}




///// STYLEGUIDE TASKS


// scss to css
gulp.task('css', () => {
    return gulp.src(paths.css.src)
    .pipe(sass())
    .pipe(stripCssComments())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest(paths.css.dest));
});


// js
gulp.task('js', () => {
    return gulp.src(paths.js.src)
    // .pipe(minifyjs())
    .pipe(gulp.dest(paths.js.dest));
});


