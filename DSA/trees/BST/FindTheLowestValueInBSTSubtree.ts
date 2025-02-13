class TreeNode {
    data: number;
    left: TreeNode | null;
    right: TreeNode | null;
  
    constructor(data: number) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
  }
  
  function minValueNode(node: TreeNode): TreeNode {
    let current: TreeNode = node;
    while (current.left !== null) {
      current = current.left;
    }
    return current;
  }
  
  // Example Usage:
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(2);
  
  console.log("Minimum value in the BST:", minValueNode(root).data); // Output: 2
  