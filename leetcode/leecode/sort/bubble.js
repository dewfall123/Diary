const a = [3,5,6,1,23,9,21,123,3];

function bubble (arr) {
    for (let i = arr.length - 1; i > 1; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

bubble(a);
console.log(a);