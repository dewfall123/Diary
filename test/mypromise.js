
// const p = new myPromise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('1s and logout');
//         resolve('result');
//     }, 1 * 1000);
// });
// console.log('start');
// p.then((result) => {
//     console.log('do then' + result);
// });
// start
// 1s and logout
// do then



class myPromise {
    constructor(fn) {
        this.status = 'pending';
        this.value = undefined;
        this.fulfilledCbs = [];
        this.rejectedCbs = [];
        this.resolve = (value) => {
            this.status = 'fulfilled';
            this.value = value;
            this.fulfilledCbs.forEach(cbFn => {
                cbFn(value);
            });
        };
        this.reject = (value) => {
            this.status = 'rejected';
            this.value = value;
            this.rejectedCbs.forEach(cbFn => {
                cbFn(value);
            });
        };
        fn(this.resolve, this.reject);
    }
}
myPromise.prototype.then = function(onFulfilled, onRejected) {
    if (onFulfilled && typeof onFulfilled !== 'function'
        || onRejected && typeof onRejected !== 'function') {
        throw new Error('then args must be a function');
    }
    if (this.status === 'pending') {
        this.fulfilledCbs.push(onFulfilled);
        this.rejectedCbs.push(onRejected);
    }
    else if (this.status === 'fulfilled') {
        onFulfilled(this.value);
    }
    else if (this.status === 'rejected') {
        onRejected(this.value);
    } else {
        throw new Error('status error');
    }
    return this;
}


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('1s and logout');
        resolve('result');
    }, 1 * 1000);
});
console.log('start');
p.then((result) => {
    console.log('do then' + result);
})
.then(() => {
    setTimeout(() => {
        console.log('do then -- 2');
    }, 1 * 1000);
})
.then(() => {
    console.log('do then -- 3');
});

// start
// 1s and logout
// do thenresult
// do then -- 3
// do then -- 2