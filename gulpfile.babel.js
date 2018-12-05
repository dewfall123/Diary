const gulp = require('gulp');
const babel = require('gulp-babel');
const polyfill = require("babel-polyfill");
// npm install --save-dev babel-preset-es2015
// npm install babel-core --save-dev
// npm install --save-dev babel-core babel-preset-env
// npm install --save-dev @babel/core @babel/preset-env
// npm i --save-dev @babel/register

gulp.task('default', () => {
    gulp.src(['node_modules/babel-polyfill/dist/polyfill.js', './test/promisifyBabel.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('./babeled'));
});
