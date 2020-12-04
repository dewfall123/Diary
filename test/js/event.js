const fs = require("fs");

console.log("start");
let globalStart = Date.now();

function call(callback) {
  fs.readFile(__filename, callback);
}

for (let i = 0; i < 20; i++) {
  call(() => {
    let start = Date.now();
    while (Date.now() - start < 100) {}
    console.log(`done:${i}`);
  });
}

setTimeout(() => {
  console.log("timeout：" + `${Date.now() - globalStart}ms`);

  setImmediate(() => {
    console.log("immediate：" + `${Date.now() - globalStart}ms`);
  });
}, 10);
