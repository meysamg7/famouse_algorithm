class LSNode {
    data: number;
    next: LSNode | null;
  
    constructor(data: number) {
      this.data = data;
      this.next = null;
    }
  }
  
  // Create nodes
  const node1 = new LSNode(3);
  const node2 = new LSNode(5);
  const node3 = new LSNode(13);
  const node4 = new LSNode(2);
  
  // Link the nodes
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  // Traverse the linked list
  let currentNode: LSNode | null = node1;
  let result = "";
  
  while (currentNode) {
    result += `${currentNode.data} -> `;
    currentNode = currentNode.next;
  }
  result += "null";
  
  console.log(result);
  