function asyncAdd(a, b, callback) {
  setTimeout(function () {
    callback(null, a + b);
  }, 1000);
}

/**
 * 请在此方法中调用asyncAdd方法，完成数值计算
 * @param  {...any} rest 传入的参数
 */
async function sum(...rest) {
  async function add(a, b) {
    return new Promise((resolve) => {
      asyncAdd(a, b, (err, result) => {
        resolve(result);
      });
    });
  }

  let sumResult = 0;
  for (let i of rest) {
    sumResult = await add(sumResult, i);
  }
  return sumResult;
}

// let start = window.performance.now();
sum(1, 2, 3, 4, 5, 6).then((res) => {
  // 请保证在调用sum方法之后，返回结果21
  console.log(res);
  //   console.log(`程序执行共耗时: ${window.performance.now() - start}`);
});
