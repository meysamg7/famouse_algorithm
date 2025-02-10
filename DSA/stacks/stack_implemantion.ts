class Stack<T> {
    private stack: T[];
  
    constructor() {
      this.stack = [];
    }
  
    // Add an element to the top of the stack
    push(element: T): void {
      this.stack.push(element);
    }
  
    // Remove and return the top element from the stack
    pop(): T | string {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.stack.pop() as T;
    }
  
    // View the top element without removing it
    peek(): T | string {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.stack[this.stack.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty(): boolean {
      return this.stack.length === 0;
    }
  
    // Get the current size of the stack
    size(): number {
      return this.stack.length;
    }
  
    // View the entire stack
    getStack(): T[] {
      return this.stack;
    }
  }
  
  // Create a stack of strings
  const myStack = new Stack<string>();
  
  myStack.push("A");
  myStack.push("B");
  myStack.push("C");
  console.log("Stack:", myStack.getStack());
  
  console.log("Pop:", myStack.pop());
  console.log("Peek:", myStack.peek());
  console.log("isEmpty:", myStack.isEmpty());
  console.log("Size:", myStack.size());
  