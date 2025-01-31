const sampleArray: number[] = [64, 34, 25, 12, 22, 11, 90, 5];
const arrNum: number = sampleArray.length;

for (let i = 0; i < arrNum; i++) {
  let minIndex = i;

  for (let j = i + 1; j < arrNum; j++) {
    if (sampleArray[j] < sampleArray[minIndex]) {
      minIndex = j;
    }
  }

  // Swap elements
  [sampleArray[i], sampleArray[minIndex]] = [sampleArray[minIndex], sampleArray[i]];
}

console.log("Sorted array:", sampleArray);


// time complexity o(n^2)