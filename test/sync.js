const fs = require('fs');
const promisify = require('util').promisify;
console.log('测试sync');

fs.readFile = promisify(fs.readFile);

setTimeout(() => {
    console.log('end');
}, 0);

let c;
// c = fs.readFileSync('./11.19.md', {
//     encoding: 'utf8',
// });
(async () => {
    console.log('do');
    fs.readFile('./11.19.md', 'utf8', (err, data) => {
        console.log(data);
    });
})();

console.log(c && c.length);
