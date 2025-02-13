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
  
  // Creating nodes
  const root = new TreeNode("R");
  const nodeA = new TreeNode("A");
  const nodeB = new TreeNode("B");
  const nodeC = new TreeNode("C");
  const nodeD = new TreeNode("D");
  const nodeE = new TreeNode("E");
  const nodeF = new TreeNode("F");
  const nodeG = new TreeNode("G");
  
  // Constructing the tree
  root.left = nodeA;
  root.right = nodeB;
  
  nodeA.left = nodeC;
  nodeA.right = nodeD;
  
  nodeB.left = nodeE;
  nodeB.right = nodeF;
  
  nodeF.left = nodeG;
  
  // Test
  console.log("root.right.left.data:", root.right?.left?.data);
  