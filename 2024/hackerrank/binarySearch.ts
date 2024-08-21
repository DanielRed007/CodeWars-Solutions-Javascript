function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1; // Target not found
}

// Example usage
const sortedArray = [1, 3, 5, 7, 9];
console.log(binarySearch(sortedArray, 5)); // Output: 2
console.log(binarySearch(sortedArray, 6)); // Output: -1
