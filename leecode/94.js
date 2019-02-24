/**
 * 递归解法：函数栈堆叠 return  是留下入口
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // 模拟函数栈
    let result = [];
    
    if (!root) {
        return result;
    }
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        if (node.left && !node.left.visited) {
            stack.push(node, node.left);
            continue;
        }
        // node.left && stack.push(node.left);
        node && result.push(node.val);
        node.right && stack.push(node.right);
        node.visited = true;
    }
    return result;
};
class NodeT {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
let a = new NodeT(1);
let b = new NodeT(2);
let c = new NodeT(3);
a.left = b;
a.right =c;
//      1
//   2     3
// 4   5
console.log(inorderTraversal(a));