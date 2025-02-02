function linearSearch(arr: number[], targetVal: number): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === targetVal) {
        return i;
      }
    }
    return -1;
  }
  
  const arr: number[] = [3, 7, 2, 9, 5];
  const targetVal: number = 9;
  
  const result: number = linearSearch(arr, targetVal);
  
  if (result !== -1) {
    console.log(`Value ${targetVal} found at index ${result}`);
  } else {
    console.log(`Value ${targetVal} not found`);
  }
  

  // time complexity: O(n)