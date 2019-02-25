const { promisify } = require('util');

const f = function (str, cb) {
    setTimeout(() => {
        console.log(str)
        cb();
    }, 2 * 1000);
};
// (async () => {
//     console.log('start');
//     f('f', () => {
//         console.log('end');
//     });
// })();

(async () => {
    console.log('start');
    let pf = promisify(f);
    await pf('f', () => {console.log('callback end')});
    // await pf('f');
    console.log('end');
})();