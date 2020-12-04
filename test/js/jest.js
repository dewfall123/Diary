function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

(async () => {
  const order = [];
  order.push("1");
  setTimeout(() => {
    order.push("6");
  }, 0);

  new Promise((r) => {
    r();
  }).then(() => {
    order.push("4");
  });

  await sleep(0);

  console.log(order);
})();
