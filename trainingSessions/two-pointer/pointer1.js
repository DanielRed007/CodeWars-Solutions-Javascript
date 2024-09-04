// 2. Remove Duplicates from Sorted Array
// Problem: Given a sorted array, remove duplicates in-place such that each element appears only once.
// Example:
// Input: arr = [1, 1, 2, 2, 3, 3, 4]
// Output: [1, 2, 3, 4]
// Approach: Use two pointers, one for iterating (i) and one for maintaining the position of the unique element (j).

function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i];
        }
        console.log(arr)
    }
    // console.log(arr)
    return arr.slice(0, j + 1);
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]