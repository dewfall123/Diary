    let arr = [{"A" : "Key1", "B" : "Key2", "C" : "Key3"},
    {"A" : "Data1", "B" : "Data2", "C" : "Data3"},
    {"A" : "Data5", "B" : "Data5", "C" : "Data7"}];

    const keys = Object.keys(arr[0]).map(i => arr[0][i]);
    let result = arr.map(obj => {
        const replacedObj = {};
        const oriKeys = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            replacedObj[keys[i]] = obj[oriKeys[i]]
        };
        return replacedObj;
    });
    console.log(JSON.stringify(result));

