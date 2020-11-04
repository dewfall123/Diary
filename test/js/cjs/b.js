// require('./c')
// require.cache = {}

const num = require("./a");
console.log(num);

setTimeout(() => {
  console.log("3s后");
  console.log(num);
  const latestNum = require("./a");
  console.log(latestNum);
}, 3000);

// console.log(list);

// const list1 = require("./a");
// console.log(list1);
