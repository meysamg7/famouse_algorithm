function bubbleSort(arr: number[]): void {
    const n: number = arr.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
  }
  
  function radixSortWithBubbleSort(arr: number[]): void {
    let maxVal: number = Math.max(...arr);
    let exp = 1;
  
    while (Math.floor(maxVal / exp) > 0) {
      const radixArray: number[][] = Array.from({ length: 10 }, () => []);
  
      // Distribute numbers into buckets based on the current digit
      for (const num of arr) {
        const radixIndex = Math.floor(num / exp) % 10;
        radixArray[radixIndex].push(num);
      }
  
      // Sort each bucket using Bubble Sort
      for (const bucket of radixArray) {
        bubbleSort(bucket);
      }
  
      // Merge buckets back into the original array
      let i = 0;
      for (const bucket of radixArray) {
        for (const num of bucket) {
          arr[i] = num;
          i++;
        }
      }
  
      exp *= 10;
    }
  }
  
  const myArray: number[] = [170, 45, 75, 90, 802, 24, 2, 66];
  console.log("Original array:", myArray);
  radixSortWithBubbleSort(myArray);
  console.log("Sorted array:", myArray);
  