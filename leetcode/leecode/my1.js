const input = [
    {id:1, name: 'i1'},
    {id:2, name:'i2', parentId: 1},
    {id:4, name:'i4', parentId: 3},
    {id:3, name:'i3', parentId: 2},
    // {id:8, name:'i8', parentId: 7}
];


function createTree (inputArr) {
    for (let node of inputArr) {
        if (node.parentId !== undefined) {
            const parent = input.filter(n => {
                return n.id === node.parentId;
            });
            if (parent.length !== 1) {
                console.log(node.name + ' is error');
                return;
            }
            parent[0].next = node;
        }
    }
    return inputArr[0];
}

const result = createTree(input);
console.log(result);