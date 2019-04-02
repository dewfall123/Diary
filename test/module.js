const loop = require('./loop');
const fs = require('fs');
const path = require('path');

function myRequire(fpath) {
    const content = fs.readFileSync(path.join(__dirname, fpath), 'utf8');

    const fn = new Function('exports', 'module', `${content} \n return module.exports;`);
    const myModule = { exports: {} };
    return fn(myModule.exports, myModule);
}

const myloop = myRequire('./loop.js');
myloop();
loop();
console.log('end');

