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
  
  function insert(node: TreeNode | null, data: number): TreeNode {
    if (node === null) {
      return new TreeNode(data);
    } else {
      if (data < node.data) {
        node.left = insert(node.left, data);
      } else if (data > node.data) {
        node.right = insert(node.right, data);
      }
    }
    return node;
  }
  
  // Example Usage:
  let root: TreeNode | null = null;
  root = insert(root, 10);
  insert(root, 5);
  insert(root, 15);
  insert(root, 3);
  insert(root, 7);
  insert(root, 12);
  insert(root, 18);
  
  console.log("BST root:", root);
  