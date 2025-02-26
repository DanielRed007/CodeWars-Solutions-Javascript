
// 1. Find Pair with Given Sum (Sorted Array)
// Problem: Given a sorted array of integers and a target sum, find a pair of numbers that add up to the target sum.
// Example:
// Input: arr = [1, 2, 3, 4, 6], target = 6
// Output: [1, 3] (since arr[1] + arr[3] = 2 + 4 = 6)
// Approach: Use two pointers, left starting from the beginning and right from the end of the array. Move the pointers based on the sum comparison.

function findPairWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

console.log(findPairWithSum([1, 2, 3, 4, 6], 6)); // Output: [1, 3]

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
    }
    return arr.slice(0, j + 1);
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]


// 3. Valid Palindrome Check
// Problem: Check if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.
// Example:
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Approach: Use two pointers, one starting at the beginning and the other at the end of the string. Move towards the center, comparing characters.

function isValidPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) left++;
        while (left < right && !isAlphanumeric(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

function isAlphanumeric(char) {
    return /[a-z0-9]/i.test(char);
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isValidPalindrome("race a car")); // Output: false

// 4. Container with Most Water
// Problem: Given an array of non-negative integers where each represents the height of a line on the x-axis, find two lines that together with the x-axis form a container that holds the most water.
// Example:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Approach: Use two pointers at the beginning and end of the array, moving towards each other to maximize the area.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49


// The two-pointer technique is a common and efficient strategy used in solving a wide range of problems, 
// especially those involving arrays and strings. I'll provide a progression of examples using this technique, 
// starting with easier problems and moving to more difficult ones.

// Easy Examples
// 1. Find Pair with Given Sum (Sorted Array)
// Problem: Given a sorted array of integers and a target sum, find a pair of numbers that add up to the target sum.
// Example:
// Input: arr = [1, 2, 3, 4, 6], target = 6
// Output: [1, 3] (since arr[1] + arr[3] = 2 + 4 = 6)
// Approach: Use two pointers, left starting from the beginning and right from the end of the array. Move the pointers based on the sum comparison.
// javascript

function findPairWithSum(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === target) {
            return [left, right];
        } else if (currentSum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}

console.log(findPairWithSum([1, 2, 3, 4, 6], 6)); // Output: [1, 3]

// 2. Remove Duplicates from Sorted Array
// Problem: Given a sorted array, remove duplicates in-place such that each element appears only once.
// Example:
// Input: arr = [1, 1, 2, 2, 3, 3, 4]
// Output: [1, 2, 3, 4]
// Approach: Use two pointers, one for iterating (i) and one for maintaining the position of the unique element (j).
// javascript

function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let j = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[j]) {
            j++;
            arr[j] = arr[i];
        }
    }
    return arr.slice(0, j + 1);
}

console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]

// Medium Examples
// 3. Valid Palindrome Check
// Problem: Check if a given string is a palindrome, considering only alphanumeric characters and ignoring cases.
// Example:
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Approach: Use two pointers, one starting at the beginning and the other at the end of the string. Move towards the center, comparing characters.
// javascript

function isValidPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) left++;
        while (left < right && !isAlphanumeric(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

function isAlphanumeric(char) {
    return /[a-z0-9]/i.test(char);
}

console.log(isValidPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isValidPalindrome("race a car")); // Output: false


// 4. Container with Most Water
// Problem: Given an array of non-negative integers where each represents the height of a line on the x-axis, find two lines that together with the x-axis form a container that holds the most water.
// Example:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Approach: Use two pointers at the beginning and end of the array, moving towards each other to maximize the area.
// javascript


function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const area = width * minHeight;
        maxArea = Math.max(maxArea, area);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49

// Hard Examples
// 5. Three Sum (Finding Triplets that Sum to Zero)
// Problem: Given an array of integers, find all unique triplets that sum up to zero.
// Example:
// Input: nums = [-1, 0, 1, 2, -1, -4]
// Output: [[-1, -1, 2], [-1, 0, 1]]
// Approach: Sort the array and use a fixed pointer with two other pointers to find pairs that sum to the negative of the fixed element.

function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
}

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1, -1, 2], [-1, 0, 1]]

// 6. Longest Substring with At Most Two Distinct Characters
// Problem: Given a string, find the length of the longest substring that contains at most two distinct characters.
// Example:
// Input: "eceba"
// Output: 3 (The longest substring is "ece")
// Approach: Use two pointers to maintain a sliding window over the string while counting characters.