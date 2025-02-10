class SimpleHashSet {
  private size: number;
  private buckets: string[][];

  constructor(size: number = 100) {
    this.size = size;
    this.buckets = Array.from({ length: size }, () => []);
  }

  // Hash function: sum of character codes modulo the number of buckets
  private hashFunction(value: string): number {
    return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0) % this.size;
  }

  // Add a value if it's not already present
  public add(value: string): void {
    const index = this.hashFunction(value);
    const bucket = this.buckets[index];
    if (!bucket.includes(value)) {
      bucket.push(value);
    }
  }

  // Check if a value exists in the set
  public contains(value: string): boolean {
    const index = this.hashFunction(value);
    return this.buckets[index].includes(value);
  }

  // Remove a value
  public remove(value: string): void {
    const index = this.hashFunction(value);
    const bucket = this.buckets[index];
    const valueIndex = bucket.indexOf(value);
    if (valueIndex !== -1) {
      bucket.splice(valueIndex, 1);
    }
  }

  // Print all elements in the hash set
  public printSet(): void {
    console.log("Hash Set Contents:");
    this.buckets.forEach((bucket, index) => {
      console.log(`Bucket ${index}: ${bucket}`);
    });
  }
}

// Test the Hash Set
const hashSet = new SimpleHashSet(10);

hashSet.add("Charlotte");
hashSet.add("Thomas");
hashSet.add("Jens");
hashSet.add("Peter");
hashSet.add("Lisa");
hashSet.add("Adele");
hashSet.add("Michaela");
hashSet.add("Bob");

hashSet.printSet();

console.log("\n'Peter' is in the set:", hashSet.contains("Peter"));
console.log("Removing 'Peter'");
hashSet.remove("Peter");
console.log("'Peter' is in the set:", hashSet.contains("Peter"));
console.log("'Adele' has hash code:", hashSet["hashFunction"]("Adele"));
