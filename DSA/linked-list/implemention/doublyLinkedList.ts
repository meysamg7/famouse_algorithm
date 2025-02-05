class LSNod {
    data: number;
    next: LSNod | null;
    prev: LSNod | null;
  
    constructor(data: number) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  // Create nodes
  const node1 = new LSNod(3);
  const node2 = new LSNod(5);
  const node3 = new LSNod(13);
  const node4 = new LSNod(2);
  
  // Link nodes forward and backward
  node1.next = node2;
  
  node2.prev = node1;
  node2.next = node3;
  
  node3.prev = node2;
  node3.next = node4;
  
  node4.prev = node3;
  
  console.log("\nTraversing forward:");
  let currentNode: LSNod | null = node1;
  let forwardResult = "";
  
  while (currentNode) {
    forwardResult += `${currentNode.data} -> `;
    currentNode = currentNode.next;
  }
  forwardResult += "null";
  console.log(forwardResult);
  
  console.log("\nTraversing backward:");
  currentNode = node4;
  let backwardResult = "";
  
  while (currentNode) {
    backwardResult += `${currentNode.data} -> `;
    currentNode = currentNode.prev;
  }
  backwardResult += "null";
  console.log(backwardResult);
  