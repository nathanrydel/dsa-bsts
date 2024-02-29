import { BNodeNum, BSTNum } from "../common/bst";

/** insertRecursively(val): Insert a new node into the BST with value val.
 * Uses recursion. */

function insertRecursively(bst: BSTNum, val: number): void {
  // base case(s) for BST?
  if (bst.root === null) {
    bst.root = new BNodeNum(val);
  } else {
    _insertRecursively(bst.root, val);
  }

  // need internal helper function to take a node and insert
  function _insertRecursively(node: BNodeNum, val: number): void {
    // if the val is less than the node val? -> insert new node left
    if (val < node.val) {
      // if node.left is null -> create new node with val
      if (node.left === null) {
        node.left = new BNodeNum(val);
      } else {
        _insertRecursively(node.left, val);
      }
      // if the val is greater than the node val? -> insert new node right
    } else {
      // if node.right is null -> create new node with val
      if (node.right === null) {
        node.right = new BNodeNum(val);
        // else recursively run on next right node
      } else {
        _insertRecursively(node.right, val);
      }
    }
  };
}

export { insertRecursively };

