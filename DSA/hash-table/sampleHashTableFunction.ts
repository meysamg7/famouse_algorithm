// Initialize hash set
const myHashSet: (string | null)[][] = [
    [null], ['Jones'], [null], ['Lisa'], [null],
    ['Bob'], [null], ['Siri'], ['Pete'], [null]
  ];
  
  // Hash function
  function hashFunction(value: string): number {
    return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0) % 10;
  }
  
  // Add a value to the hash set
  function add(value: string): void {
    const index = hashFunction(value);
    const bucket = myHashSet[index];
  
    if (!bucket.includes(value)) {
      bucket.push(value);
    }
  }
  
  // Check if a value exists in the hash set
  function contains(value: string): boolean {
    const index = hashFunction(value);
    const bucket = myHashSet[index];
    return bucket.includes(value);
  }
  
  // Test
  add('Stuart');
  console.log('Hash Set:', myHashSet);
  console.log(`Contains Stuart: ${contains('Stuart')}`);
  