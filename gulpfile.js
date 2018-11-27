const gulp = require('gulp');
const babel = require('gulp-babel');

// npm install --save-dev babel-preset-es2015
// npm install babel-core --save-dev
// npm install --save-dev babel-core babel-preset-env
// npm install --save-dev @babel/core @babel/preset-env

gulp.task('default', () => {
    try {
        gulp.src('./mysql.js')
            .pipe(babel({
                presets: ['@babel/env']
            }))
            .pipe(gulp.dest('babeled'));
    } catch (err) {
        console.log(err);
    }
});
