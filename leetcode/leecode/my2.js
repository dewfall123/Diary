const input = [
    {id: 1},
    {id: 2, before: 1},
    {id: 3, after: 1},
    {id: 5, first: true},
    {id: 6, last: true},
    {id: 7, after: 8},
    {id: 8},
    {id: 9},
];


function order(inputArr) {
    const result = inputArr.map(i => {return i.id});
    // 先不考虑first last不存在
    for (let i of input) {
        // before/after/first/last
        if (i.before) {
            
        }
    }
}