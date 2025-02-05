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
  
  // Link nodes forward and backward to form a circular doubly linked list
  node1.next = node2;
  node1.prev = node4;
  
  node2.prev = node1;
  node2.next = node3;
  
  node3.prev = node2;
  node3.next = node4;
  
  node4.prev = node3;
  node4.next = node1;
  
  console.log("\nTraversing forward:");
  let currentNode: LSNod | null = node1;
  const startNodeForward: LSNod | null = node1;
  let forwardResult = `${currentNode.data} -> `;
  currentNode = currentNode.next;
  
  while (currentNode !== startNodeForward) {
    forwardResult += `${currentNode!.data} -> `;
    currentNode = currentNode!.next;
  }
  forwardResult += "...";
  console.log(forwardResult);
  
  console.log("\nTraversing backward:");
  currentNode = node4;
  const startNodeBackward: LSNod | null = node4;
  let backwardResult = `${currentNode.data} -> `;
  currentNode = currentNode.prev;
  
  while (currentNode !== startNodeBackward) {
    backwardResult += `${currentNode!.data} -> `;
    currentNode = currentNode!.prev;
  }
  backwardResult += "...";
  console.log(backwardResult);
  