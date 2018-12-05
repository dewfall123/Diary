"use strict";

var _require = require('util'),
    promisify = _require.promisify;

var f = function f(str, cb) {
  setTimeout(function () {
    console.log(str);
    cb();
  }, 2 * 1000);
};

var pf = promisify(f);