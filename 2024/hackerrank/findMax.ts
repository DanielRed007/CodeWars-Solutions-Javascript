//  Finding the Maximum Element in an Array

function findMax1(arr: number[]): number {
  // If the array is empty throw error
  if (arr.length === 0) throw new Error("Array is empty");
  // I get the first value as max in the first position
  let max = arr[0];
  // Then iterate in ascending order, and only replace the max value for higher values
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // At the end you get the max value
  return max;
}

// Version 2

function findMax2(arr: number[]): number {
  return arr.sort((a, b) => b - a)[0];
}

// Example usage
const numbers = [3, 5, 7, 2, 8];
console.log(findMax1(numbers));
console.log(findMax2(numbers)); // Output: 8
