let a = [4, -2, 2, -4];
a.sort((a, b) => {
    let diff = Math.abs(a) - Math.abs(b)
    if (diff === 0) {
        return a < 0 ? -1 : 1;
    }
    return diff;
});

console.log(a);