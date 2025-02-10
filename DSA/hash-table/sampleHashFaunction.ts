function hashFunction(value: string): number {
    let sumOfChars = 0;
  
    for (const char of value) {
      sumOfChars += char.charCodeAt(0);
    }
  
    return sumOfChars % 10;
  }
  
  console.log(`'Bob' has hash code: ${hashFunction('Bob')}`);
  