function binarySearch(arr: number[], targetVal: number): number {
    let left: number = 0;
    let right: number = arr.length - 1;
  
    while (left <= right) {
      const mid: number = Math.floor((left + right) / 2);
  
      if (arr[mid] === targetVal) {
        return mid;
      }
  
      if (arr[mid] < targetVal) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  const myArray: number[] = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  const myTarget: number = 15;
  
  const result: number = binarySearch(myArray, myTarget);
  
  if (result !== -1) {
    console.log(`Value ${myTarget} found at index ${result}`);
  } else {
    console.log("Target not found in array.");
  }
  

  // time complexity: O(log2n) >> base is 2