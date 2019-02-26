const a = [3,5,6,1,23,9,21,123,3];

function quickSort(arr) {
    if (!arr || arr.length <= 1) {
        return arr;
    }
    const mVal = arr[0];

    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] > mVal ? right.push(arr[i]) : left.push(arr[i]);
    }
    return [...quickSort(left), mVal, ...quickSort(right)];
}

console.log(quickSort(a) + '');