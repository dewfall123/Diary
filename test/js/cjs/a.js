const list = [];
let num = 1;

setTimeout(() => {
  num = 2;
  console.log("2s后  修改num");
}, 2000);

module.exports = num;
