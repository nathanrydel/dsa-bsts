import { BNodeNum } from "../common/bst";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {

  // ITERATIVE APPROACH
  // if (node === null) return [];

  // const dfsStack = new Stack<BNodeNum>([node]);
  // const toVisit: number[] = [];

  // while (!dfsStack.isEmpty()) {
  //   let current = dfsStack.pop();

  //   if (current.left) {
  //     dfsStack.push(current.left);
  //     toVisit.push(current.left.val);
  //     if (current) {
  //       dfsStack.push(current);
  //       toVisit.push(current.val);
  //     }
  //     if (current.right) {
  //       dfsStack.push(current.right);
  //       toVisit.push(current.right.val);
  //     }
  //   }
  // }

  // return toVisit;

  // RECURSIVE APPROACH
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
  return [42];
}


export { inOrder, inOrderAccum };
