class Node {
    data: number;
    next: Node | null;
  
    constructor(data: number) {
      this.data = data;
      this.next = null;
    }
  }
  
  function traverseAndPrint(head: Node | null): void {
    let currentNode: Node | null = head;
    let result = "";
  
    while (currentNode) {
      result += `${currentNode.data} -> `;
      currentNode = currentNode.next;
    }
  
    result += "null";
    console.log(result);
  }
  
  function insertNodeAtPosition(head: Node | null, newNode: Node, position: number): Node | null {
    if (position <= 1 || !head) {
      newNode.next = head;
      return newNode;
    }
  
    let currentNode: Node | null = head;
  
    // Traverse to the node before the insertion point
    for (let i = 1; i < position - 1; i++) {
      if (!currentNode) break;
      currentNode = currentNode.next;
    }
  
    if (currentNode) {
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  
    return head;
  }
  
  // Create nodes
  const node1 = new Node(7);
  const node2 = new Node(3);
  const node3 = new Node(2);
  const node4 = new Node(9);
  
  // Link nodes
  node1.next = node2;
  node2.next = node3;
  node3.next = node4;
  
  console.log("Original list:");
  traverseAndPrint(node1);
  
  // Insert a new node with value 97 at position 2
  const newNode = new Node(97);
  const updatedHead = insertNodeAtPosition(node1, newNode, 2);
  
  console.log("\nAfter insertion:");
  traverseAndPrint(updatedHead);
  