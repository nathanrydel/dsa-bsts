import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  if(node === null) return [];
  const queue = new Queue<BNodeNum>([node]);
  const valsReturn: number[] = [];

  return valsReturn;

}

export { bfs };