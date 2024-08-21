// Were gonna compare twos arrays, which in every level must be compare one with the other
// We have to comparators and the result is another array of numbers, we compare and if one value is higher than the other
// We increase the result array position by one, at the end we return the result with the increadsed values

function compareTriplets(a: number[], b: number[]): number[] {
  const result = [0, 0];

  for (let val = 0; val < a.length; val++) {
    if (a[val] > b[val]) {
      result[0]++;
    }

    if (a[val] < b[val]) {
      result[1]++;
    }
  }

  return result;
}
