import { BNodeNum } from "../common/bst";
import { Stack, StackNum } from "../common/stack";

/** inOrder(): Traverse from the invoking node using in-order DFS.
 * Returns an array of visited nodes. */

function inOrder(node: BNodeNum | null): number[] {

  // ITERATIVE APPROACH
  if (node === null) return [];

  const dfsStack = new Stack<BNodeNum>([node]);
  const valsReturn: number[] = [];

  while (!dfsStack.isEmpty()) {
    let current = dfsStack.pop();

    // if (current !== null) {
    //   dfsStack.push(current);
    //   current = current.left;
    //   // toVisit.push(current.left.val);
    // }
    // else{
    //   current = dfsStack.pop();
    //   toVisit.push(current.val);
    //   current = current.right;
    // }
    if(current.right){
      dfsStack.push(current.right);
    }
    if (current.left) {
      dfsStack.push(current.left);
    }else{
      valsReturn.push(current.val)
    }

    // valsReturn.push(current.val)

  }

  return valsReturn;

  // RECURSIVE APPROACH
  // if (node === null) return [];

  // return [
  //   ...inOrder(node.left),
  //   node.val,
  //   ...inOrder(node.right)
  // ];
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


export { inOrder, inOrderAccum };
