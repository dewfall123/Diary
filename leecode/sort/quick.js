const a = [5,6,1,23,9,21,123,3];

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


function quickSort(arr, start, end) {
    if (end - start <= 1) {
        arr[start] > arr[end] ? [arr[start], arr[end]] = [arr[end], arr[start]] : '';
        return;
    }

    const comp = arr[start];
    let left = start + 1;
    let right = end;
    while (left < right) {
        while (arr[left] < comp) {
            left++;
        }
        while (arr[right] > comp) {
            right--;
        }
        if (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
        }
    }
    [arr[start], arr[right]] = [arr[right], arr[start]];
    quickSort(arr, start + 1, left - 1);
    quickSort(arr, left + 1, end);
}

const arr = a;
const result = quickSort(arr, 0, arr.length - 1);

console.log(arr + '');
