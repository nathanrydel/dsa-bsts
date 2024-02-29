import { BNodeNum } from "../common/bst";
import { Stack, StackNum } from "../common/stack";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {
  const dfsStack = new Stack<BNodeNum>();
  const valsReturn: number[] = [];

  let curr = node;

  while (!dfsStack.isEmpty() || curr !== null) {
    while (curr !== null) {
      dfsStack.push(curr);
      curr = curr.left;
    }

    let next = dfsStack.pop();
    if (next !== null) {
      valsReturn.push(next.val);
      curr = next.right;
    }
  }

  return valsReturn;
}

/** rInOrder(): Traverse from the invoking node using in-order DFS recursively.
 * Returns an array of visited nodes. */

function rInOrder(node: BNodeNum | null): number[] {
  if (node === null) return [];

  return [
    ...inOrder(node.left),
    node.val,
    ...inOrder(node.right)
  ];
}

/** inOrderAccum(): Traverse the BST using in-order DFS.
 * Returns an array of visited nodes.
 * Uses an "accumulator"
 */

function inOrderAccum(
  node: BNodeNum | null = null,
  accum: number[] = []): number[] {
  if (node === null) {
    return [];
  } else {
    inOrderAccum(node.left, accum);
    accum.push(node.val);
    inOrderAccum(node.right, accum);
  };
  return accum;
}


export { inOrder, rInOrder, inOrderAccum };
