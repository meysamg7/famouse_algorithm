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
  
  function search(node: TreeNode | null, target: number): TreeNode | null {
    if (node === null) {
      return null;
    } else if (node.data === target) {
      return node;
    } else if (target < node.data) {
      return search(node.left, target);
    } else {
      return search(node.right, target);
    }
  }
  
  // Example Usage:
  const rootNode = new TreeNode(10);
  rootNode.left = new TreeNode(5);
  rootNode.right = new TreeNode(15);
  rootNode.left.left = new TreeNode(3);
  rootNode.left.right = new TreeNode(7);
  rootNode.right.left = new TreeNode(12);
  rootNode.right.right = new TreeNode(18);
  
  const targetValue = 7;
  const result = search(rootNode, targetValue);
  
  if (result) {
    console.log(`Found node with value: ${result.data}`);
  } else {
    console.log(`Node with value ${targetValue} not found.`);
  }
  

  // The time complexity for searching a BST for a value is O(h), where h is the height of the tree.