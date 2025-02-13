// In-order Traversal does a recursive In-order Traversal of the left subtree, visits the root node, and finally, does a recursive In-order Traversal 
// of the right subtree. This traversal is mainly used for Binary Search Trees where it returns values in ascending order.
// What makes this traversal "in" order, is that the node is visited in between the recursive function calls. The node is visited after the In-order 
// Traversal of the left subtree, and before the In-order Traversal of the right subtree.

class TreeNode {
    data: string;
    left: TreeNode | null;
    right: TreeNode | null;
  
    constructor(data: string) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function inOrderTraversal(node: TreeNode | null): void {
    if (node === null) {
      return;
    }
    inOrderTraversal(node.left);
    process.stdout.write(node.data + ", "); // Print without newline
    inOrderTraversal(node.right);
  }
  
  // Example tree construction
  const root = new TreeNode("R");
  const nodeA = new TreeNode("A");
  const nodeB = new TreeNode("B");
  const nodeC = new TreeNode("C");
  const nodeD = new TreeNode("D");
  const nodeE = new TreeNode("E");
  const nodeF = new TreeNode("F");
  const nodeG = new TreeNode("G");
  
  root.left = nodeA;
  root.right = nodeB;
  nodeA.left = nodeC;
  nodeA.right = nodeD;
  nodeB.left = nodeE;
  nodeB.right = nodeF;
  nodeF.left = nodeG;
  
  // Run inorder traversal
  console.log("Inorder Traversal:");
  inOrderTraversal(root);
  console.log(); // For newline
  