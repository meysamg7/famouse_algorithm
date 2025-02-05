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
  
  function deleteSpecificNode(head: Node | null, nodeToDelete: Node): Node | null {
    if (!head) return null;
  
    // Handle deletion of the head node
    if (head === nodeToDelete) {
      return head.next;
    }
  
    let currentNode: Node | null = head;
    
    while (currentNode.next && currentNode.next !== nodeToDelete) {
      currentNode = currentNode.next;
    }
  
    // If node not found, return the head
    if (!currentNode.next) {
      return head;
    }
  
    // Skip the node to delete
    currentNode.next = currentNode.next.next;
  
    return head;
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
  
  console.log("Before deletion:");
  traverseAndPrint(node1);
  
  // Delete node4
  const updatedHead = deleteSpecificNode(node1, node4);
  
  console.log("\nAfter deletion:");
  traverseAndPrint(updatedHead);
  