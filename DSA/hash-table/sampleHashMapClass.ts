class SimpleHashMap {
    private size: number;
    private buckets: [string, string][][];
  
    constructor(size: number = 100) {
      this.size = size;
      this.buckets = Array.from({ length: size }, () => []);
    }
  
    // Hash function to sum numeric characters and return modulo 10
    private hashFunction(key: string): number {
      const numericSum = key.split("").reduce((sum, char) => {
        const num = parseInt(char);
        return !isNaN(num) ? sum + num : sum;
      }, 0);
      return numericSum % 10;
    }
  
    // Add or update a key-value pair
    public put(key: string, value: string): void {
      const index = this.hashFunction(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        const [k] = bucket[i];
        if (k === key) {
          bucket[i] = [key, value]; // Update existing key
          return;
        }
      }
  
      bucket.push([key, value]); // Add new key-value pair
    }
  
    // Retrieve a value by key
    public get(key: string): string | null {
      const index = this.hashFunction(key);
      const bucket = this.buckets[index];
  
      for (const [k, v] of bucket) {
        if (k === key) return v;
      }
  
      return null; // Key not found
    }
  
    // Remove a key-value pair
    public remove(key: string): void {
      const index = this.hashFunction(key);
      const bucket = this.buckets[index];
  
      for (let i = 0; i < bucket.length; i++) {
        const [k] = bucket[i];
        if (k === key) {
          bucket.splice(i, 1); // Remove the key-value pair
          return;
        }
      }
    }
  
    // Print all key-value pairs
    public printMap(): void {
      console.log("Hash Map Contents:");
      this.buckets.forEach((bucket, index) => {
        console.log(`Bucket ${index}: ${JSON.stringify(bucket)}`);
      });
    }
  }
  
  // Creating the Hash Map
  const hashMap = new SimpleHashMap(10);
  
  // Adding some entries
  hashMap.put("123-4567", "Charlotte");
  hashMap.put("123-4568", "Thomas");
  hashMap.put("123-4569", "Jens");
  hashMap.put("123-4570", "Peter");
  hashMap.put("123-4571", "Lisa");
  hashMap.put("123-4672", "Adele");
  hashMap.put("123-4573", "Michaela");
  hashMap.put("123-6574", "Bob");
  
  hashMap.printMap();
  
  // Demonstrating retrieval
  console.log("\nName associated with '123-4570':", hashMap.get("123-4570"));
  
  console.log("Updating the name for '123-4570' to 'James'");
  hashMap.put("123-4570", "James");
  
  console.log("Name associated with '123-4570':", hashMap.get("123-4570"));
  