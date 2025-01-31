const myArray: number[] = [7, 3, 9, 12, 11];

const n: number = myArray.length;

for (let i = 0; i < n - 1; i++) {
  let swapped = false;

  for (let j = 0; j < n - i - 1; j++) {
    if (myArray[j] > myArray[j + 1]) {
      // Swap elements
      [myArray[j], myArray[j + 1]] = [myArray[j + 1], myArray[j]];
      swapped = true;
    }
  }

  if (!swapped) {
    break;
  }
}

console.log("Sorted array:", myArray);


// time complexity o(n^2)