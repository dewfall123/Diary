import { list, num } from "./a.mjs";

console.log(list);
console.log(num);

setTimeout(() => {
  console.log("b 3s后", num);
}, 3000);
