const config1 = {
    name1: 'value1',
    name2: {
        name2Key1: 1,
        name2Key2: 2,
        name2Ob1: {
            key1: 'deep1',
        },
    }
};

const config2 = {
    name1: 'value2',
    name2: {
        name2Key3: 3,
        name2Ob1: {
            key1: 'deep2',
            key2: 'deep3',
        },
    }
}
function merge(a, b) {
    if (typeof a === 'object' && typeof b === 'object') {
        let copy = JSON.parse(JSON.stringify(a)); // 简单deepCopy
        Object.keys(b).forEach(key => {
            copy[key] = merge(a[key], b[key]);
        });
        return copy;
    }
    // 简单例子不考虑类型不同的情况
    return b || a;
}
console.log(JSON.stringify(merge(config1, config2)));