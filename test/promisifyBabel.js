
function promisify(original) {
    const kCustomPromisifiedSymbol = ('util.promisify.custom');
    const kCustomPromisifyArgsSymbol = ('customPromisifyArgs');

    if (typeof original !== 'function')
        throw new Error('original', 'Function', original);

    if (original[kCustomPromisifiedSymbol]) {
        const fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== 'function') {
            throw new Error('util.promisify.custom', 'Function', fn);
        }
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
            value: fn,
            enumerable: false,
            writable: false,
            configurable: true
        });
        return fn;
    }

    // Names to create an object from in case the callback receives multiple
    // arguments, e.g. ['stdout', 'stderr'] for child_process.exec.
    const argumentNames = original[kCustomPromisifyArgsSymbol];

    function fn(...args) {
        const promise = new Promise();
        try {
            original.call(this, ...args, (err, ...values) => {
                if (err) {
                    promiseReject(promise, err);
                } else if (argumentNames !== undefined && values.length > 1) {
                    const obj = {};
                    for (var i = 0; i < argumentNames.length; i++)
                        obj[argumentNames[i]] = values[i];
                    Promise.resolve(obj);
                } else {
                    Promise.resolve(values[0]);
                }
            });
        } catch (err) {
            Promise.reject(promise, err);
        }
        return promise;
    }

    Object.setPrototypeOf(fn, Object.getPrototypeOf(original));

    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
        value: fn,
        enumerable: false,
        writable: false,
        configurable: true
    });
    return Object.defineProperties(
        fn,
        Object.getOwnPropertyDescriptors(original)
    );
}