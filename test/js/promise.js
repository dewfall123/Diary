const p = new Promise((resolve) => {
    console.log('start');
    resolve();
});
p.then(() => {
    console.log('then1');
    // throw new Error('this is a error');
}).catch(() => {
    console.log('catch');
}).then(() => {
    console.log('then2');
});

// p;