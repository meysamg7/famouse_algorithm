// Post-order Traversal works by recursively doing a Post-order Traversal of the left subtree and the right subtree, followed by a visit to the root node.
// It is used for deleting a tree, post-fix notation of an expression tree, etc.
// What makes this traversal "post" is that visiting a node is done "after" the left and right child nodes are called recursively.

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
  
  function postOrderTraversal(node: TreeNode | null): void {
    if (node === null) {
      return;
    }
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    process.stdout.write(node.data + ", "); // Print without newline
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
  
  // Run postorder traversal
  console.log("Postorder Traversal:");
  postOrderTraversal(root);
  console.log(); // For newline
  