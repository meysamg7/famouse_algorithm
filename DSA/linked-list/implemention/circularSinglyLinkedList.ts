class LSNod {
    data: number;
    next: LSNod | null;
  
    constructor(data: number) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Create nodes
  const node1 = new LSNod(3);
  const node2 = new LSNod(5);
  const node3 = new LSNod(13);
  const node4 = new LSNod(2);
  
  // Link nodes in a circular fashion
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node1;
  
  let currentNode: LSNod | null = node1;
  const startNode: LSNod | null = node1;
  
  // Traverse circular linked list
  let result = `${currentNode.data} -> `;
  currentNode = currentNode.next;
  
  while (currentNode !== startNode) {
    result += `${currentNode!.data} -> `;
    currentNode = currentNode!.next;
  }
  
  result += "...";
  console.log(result);
  