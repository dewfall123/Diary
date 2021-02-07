/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) {
    return null;
  }
  function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }

  const nodeMap = {};

  function copy(node) {
    if (nodeMap[node.val]) {
      return nodeMap[node.val];
    }
    const copyNode = new Node(node.val, []);
    nodeMap[copyNode.val] = copyNode;

    for (const neiNode of node.neighbors) {
      copyNode.neighbors.push(copy(neiNode));
    }

    return copyNode;
  }

  const result = copy(node);
  return result;
};
// @lc code=end

function Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

cloneGraph(node1);
