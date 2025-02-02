function countingSort(arr: number[]): number[] {
    if (arr.length === 0) return [];
  
    const maxVal = Math.max(...arr); // Find the maximum value in the array
    const count: number[] = new Array(maxVal + 1).fill(0);
  
    // Populate the count array
    for (let num of arr) {
      count[num]++;
    }
  
    // Rebuild the sorted array
    const sortedArr: number[] = [];
    for (let i = 0; i < count.length; i++) {
      while (count[i] > 0) {
        sortedArr.push(i);
        count[i]--;
      }
    }
  
    return sortedArr;
  }
  
  const unsortedArr: number[] = [4, 2, 2, 6, 3, 3, 1, 6, 5, 2, 3];
  const sortedArr = countingSort(unsortedArr);
  console.log("Sorted array:", sortedArr);
  


// time complexity:
//  generally:  O(n+k)
//  best case:  O(n)
//  worst case: O(n^2)