class Node<T> {
    data: T;
    next: Node<T> | null;
  
    constructor(data: T) {
      this.data = data;
      this.next = null;
    }
  }
  
  class Queue<T> {
    private front: Node<T> | null;
    private rear: Node<T> | null;
    private length: number;
  
    constructor() {
      this.front = null;
      this.rear = null;
      this.length = 0;
    }
  
    // Add an element to the queue
    enqueue(element: T): void {
      const newNode = new Node(element);
      if (this.rear === null) {
        this.front = this.rear = newNode;
      } else {
        this.rear.next = newNode;
        this.rear = newNode;
      }
      this.length++;
    }
  
    // Remove and return the front element
    dequeue(): T | string {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      const temp = this.front as Node<T>;
      this.front = temp.next;
      this.length--;
      if (this.front === null) {
        this.rear = null;
      }
      return temp.data;
    }
  
    // View the front element
    peek(): T | string {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return (this.front as Node<T>).data;
    }
  
    // Check if the queue is empty
    isEmpty(): boolean {
      return this.length === 0;
    }
  
    // Get the current size of the queue
    size(): number {
      return this.length;
    }
  
    // Print the entire queue
    printQueue(): void {
      let temp = this.front;
      const elements: T[] = [];
      while (temp !== null) {
        elements.push(temp.data);
        temp = temp.next;
      }
      console.log(elements.join(" "));
    }
  }
  
  // Example usage
  const myQueue = new Queue<string>();
  
  myQueue.enqueue("A");
  myQueue.enqueue("B");
  myQueue.enqueue("C");
  
  console.log("Queue: ");
  myQueue.printQueue();
  
  console.log("Dequeue:", myQueue.dequeue());
  console.log("Peek:", myQueue.peek());
  console.log("isEmpty:", myQueue.isEmpty());
  console.log("Size:", myQueue.size());
  