import gulp from 'gulp';
import gulpPug from 'gulp-pug';
import gulpHtmlMin from 'gulp-htmlmin';
import gulpHtmlBeautify from 'gulp-html-beautify';
import gulpIf from 'gulp-if';
import { path } from '../config/path.js';

export const pug = () => {
  return gulp.src( path.src.pug )
    .pipe( gulpPug( {} ) )
    .pipe( gulpIf( app.isDev, gulpHtmlBeautify( { indentSize: 2 } ) ) )
    .pipe( gulpIf( app.isBuild, gulpHtmlMin( { collapseWhitespace: true } ) ) )
    .pipe( gulp.dest( path.dist.html ) )
}