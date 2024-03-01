import { BNodeNum } from "../common/bst";
import { Queue } from "../common/queue";


/** bfs(): Traverse the BST using BFS.
 * Returns an array of visited nodes. */

function bfs(node: BNodeNum | null): number[] {
  if(node === null) return [];
  const queue = new Queue<BNodeNum>([node]);
  const valsReturn: number[] = [];

  // let currNode = queue.dequeue();
  // valsReturn.push(queue.dequeue().val);

  while(!queue.isEmpty()){
    let currNode = queue.dequeue();
    valsReturn.push(currNode.val);
    if(currNode.left !== null){
      queue.enqueue(currNode.left);
    }
    if(currNode.right !== null){
      queue.enqueue(currNode.right);
    }
  }

  return valsReturn;

}

export { bfs };