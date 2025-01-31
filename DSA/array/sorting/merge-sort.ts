function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid: number = Math.floor(arr.length / 2);
    const leftHalf: number[] = arr.slice(0, mid);
    const rightHalf: number[] = arr.slice(mid);
  
    const sortedLeft = mergeSort(leftHalf);
    const sortedRight = mergeSort(rightHalf);
  
    return merge(sortedLeft, sortedRight);
  }
  
  function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0;
  
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  
  const unsortedArr: number[] = [3, 7, 6, -10, 15, 23.5, 55, -13];
  const sortedArr: number[] = mergeSort(unsortedArr);
  console.log("Sorted array:", sortedArr);

  
  // time complexity: O(n* log n)