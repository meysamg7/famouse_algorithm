// Binary Tree can be stored in an Array starting with the root node R on index 0. The rest of the tree can be built by taking a node stored 
// on index i, and storing its left child node on index 2⋅i+1, and its right child node on index 2⋅i+2.


const binaryTreeArray: (string | null)[] = [
    "R", "A", "B", "C", "D", "E", "F", null, null, null, null, null, null, "G"
  ];
  
  function leftChildIndex(index: number): number {
    return 2 * index + 1;
  }
  
  function rightChildIndex(index: number): number {
    return 2 * index + 2;
  }
  
  function preOrder(index: number): (string | null)[] {
    if (index >= binaryTreeArray.length || binaryTreeArray[index] === null) {
      return [];
    }
    return [
      binaryTreeArray[index], 
      ...preOrder(leftChildIndex(index)), 
      ...preOrder(rightChildIndex(index))
    ];
  }
  
  function inOrder(index: number): (string | null)[] {
    if (index >= binaryTreeArray.length || binaryTreeArray[index] === null) {
      return [];
    }
    return [
      ...inOrder(leftChildIndex(index)), 
      binaryTreeArray[index], 
      ...inOrder(rightChildIndex(index))
    ];
  }
  
  function postOrder(index: number): (string | null)[] {
    if (index >= binaryTreeArray.length || binaryTreeArray[index] === null) {
      return [];
    }
    return [
      ...postOrder(leftChildIndex(index)), 
      ...postOrder(rightChildIndex(index)), 
      binaryTreeArray[index]
    ];
  }
  
  console.log("Pre-order Traversal:", preOrder(0));
  console.log("In-order Traversal:", inOrder(0));
  console.log("Post-order Traversal:", postOrder(0));
  
  