const fs = require('fs');
function myRequire(name) {
    const code = fs.readFileSync(name, 'utf8');
    const codeFn = new Function('exports', 'require', 'module', '__filename', '__dirname', `${code} return module.exports;`)

    const myModule = {
        exports: {},
    };
    return codeFn(myModule.exports, myRequire, myModule, __filename, __dirname);
}

const a = myRequire('./a.js');

console.log(a);
