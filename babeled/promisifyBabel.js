"use strict";

function promisify(original) {
  if (typeof original !== 'function') throw new ERR_INVALID_ARG_TYPE('original', 'Function', original);

  if (original[kCustomPromisifiedSymbol]) {
    var _fn = original[kCustomPromisifiedSymbol];

    if (typeof _fn !== 'function') {
      throw new ERR_INVALID_ARG_TYPE('util.promisify.custom', 'Function', _fn);
    }

    Object.defineProperty(_fn, kCustomPromisifiedSymbol, {
      value: _fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return _fn;
  } // Names to create an object from in case the callback receives multiple
  // arguments, e.g. ['stdout', 'stderr'] for child_process.exec.


  var argumentNames = original[kCustomPromisifyArgsSymbol];

  function fn() {
    var promise = new Promise();

    try {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      original.call.apply(original, [this].concat(args, [function (err) {
        if (err) {
          promiseReject(promise, err);
        } else if (argumentNames !== undefined && (arguments.length <= 1 ? 0 : arguments.length - 1) > 1) {
          var obj = {};

          for (var i = 0; i < argumentNames.length; i++) {
            obj[argumentNames[i]] = i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1];
          }

          Promise.resolve(obj);
        } else {
          Promise.resolve(arguments.length <= 1 ? undefined : arguments[1]);
        }
      }]));
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
  return Object.defineProperties(fn, Object.getOwnPropertyDescriptors(original));
}