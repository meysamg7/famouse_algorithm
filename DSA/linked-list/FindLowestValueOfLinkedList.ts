class Node {
    data: number;
    next: Node | null;
  
    constructor(data: number) {
      this.data = data;
      this.next = null;
    }
  }
  
  function findLowestValue(head: Node): number {
    let minValue = head.data;
    let currentNode: Node | null = head.next;
  
    while (currentNode) {
      if (currentNode.data < minValue) {
        minValue = currentNode.data;
      }
      currentNode = currentNode.next;
    }
  
    return minValue;
  }
  
  // Create nodes
  const node1 = new Node(7);
  const node2 = new Node(11);
  const node3 = new Node(3);
  const node4 = new Node(2);
  const node5 = new Node(9);
  
  // Link nodes
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  node4.next = node5;
  
  console.log("The lowest value in the linked list is:", findLowestValue(node1));
  