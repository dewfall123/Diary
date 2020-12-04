let startTime = Date.now();

console.log("start");

let call = () => {
  if (Date.now() - startTime < 50) {
    setTimeout(call);
    console.log(`${Date.now() - startTime}`);
  }
};
call();
