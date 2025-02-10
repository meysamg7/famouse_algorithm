class Queue<T> {
    private queue: T[];
  
    constructor() {
      this.queue = [];
    }
  
    // Add an element to the rear of the queue
    enqueue(element: T): void {
      this.queue.push(element);
    }
  
    // Remove and return the front element of the queue
    dequeue(): T | string {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue.shift() as T;
    }
  
    // View the front element without removing it
    peek(): T | string {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.queue[0];
    }
  
    // Check if the queue is empty
    isEmpty(): boolean {
      return this.queue.length === 0;
    }
  
    // Get the current size of the queue
    size(): number {
      return this.queue.length;
    }
  
    // View the entire queue
    getQueue(): T[] {
      return this.queue;
    }
  }
  
  // Create a queue of strings
  const myQueue = new Queue<string>();
  
  myQueue.enqueue("A");
  myQueue.enqueue("B");
  myQueue.enqueue("C");
  console.log("Queue:", myQueue.getQueue());
  
  console.log("Dequeue:", myQueue.dequeue());
  console.log("Peek:", myQueue.peek());
  console.log("isEmpty:", myQueue.isEmpty());
  console.log("Size:", myQueue.size());
  