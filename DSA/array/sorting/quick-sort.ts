function partition(array: number[], low: number, high: number): number {
    const pivot = array[high]; // Choose the pivot element
    let i = low - 1; // Index of smaller element
  
    for (let j = low; j < high; j++) {
      if (array[j] <= pivot) {
        i++;
        // Swap elements at i and j
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    // Place pivot in the correct position
    [array[i + 1], array[high]] = [array[high], array[i + 1]];
    return i + 1;
  }
  
  function quickSort(array: number[], low: number = 0, high: number | null = null): void {
    if (high === null) {
      high = array.length - 1;
    }
  
    if (low < high) {
      const pivotIndex = partition(array, low, high);
      quickSort(array, low, pivotIndex - 1);
      quickSort(array, pivotIndex + 1, high);
    }
  }
  
  const myArray: number[] = [64, 34, 25, 12, 22, 11, 90, 5];
  quickSort(myArray);
  console.log("Sorted array:", myArray);
  