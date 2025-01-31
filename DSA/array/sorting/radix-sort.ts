let myArray: number[] = [170, 45, 75, 90, 802, 24, 2, 66];
console.log("Original array:", myArray);

let radixArray: number[][] = Array.from({ length: 10 }, () => []);
let maxVal = Math.max(...myArray);
let exp = 1;

while (Math.floor(maxVal / exp) > 0) {

  // Distribute numbers into buckets based on current digit
  while (myArray.length > 0) {
    const val = myArray.pop()!;
    const radixIndex = Math.floor(val / exp) % 10;
    radixArray[radixIndex].push(val);
  }

  // Collect numbers back from buckets into the original array
  for (const bucket of radixArray) {
    while (bucket.length > 0) {
      const val = bucket.pop()!;
      myArray.push(val);
    }
  }

  exp *= 10;
}

console.log("Sorted array:", myArray);


// time complexity:
//  generally:  O(n * k)
//  best case:  O(n)
//  worst case: O(n^2)