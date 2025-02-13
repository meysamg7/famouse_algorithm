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
  
  function deleteNode(node: TreeNode | null, data: number): TreeNode | null {
    if (!node) return null;
  
    if (data < node.data) {
      node.left = deleteNode(node.left, data);
    } else if (data > node.data) {
      node.right = deleteNode(node.right, data);
    } else {
      // Node with only one child or no child
      if (!node.left) return node.right;
      if (!node.right) return node.left;
  
      // Node with two children, get the in-order successor
      const temp = minValueNode(node.right);
      node.data = temp.data;
      node.right = deleteNode(node.right, temp.data);
    }
    return node;
  }
  
  // Example Usage:
  const root = new TreeNode(10);
  root.left = new TreeNode(5);
  root.right = new TreeNode(15);
  root.left.left = new TreeNode(2);
  root.left.right = new TreeNode(7);
  root.right.right = new TreeNode(20);
  
  console.log("Before Deletion:", root);
  deleteNode(root, 5);
  console.log("After Deletion:", root);
  