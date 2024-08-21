function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x) => x < pivot);
  const right = arr.filter((x) => x > pivot);
  const middle = arr.filter((x) => x === pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage
const unsortedArray = [7, 3, 1, 9, 5];
console.log(quickSort(unsortedArray)); // Output: [1, 3, 5, 7, 9]
