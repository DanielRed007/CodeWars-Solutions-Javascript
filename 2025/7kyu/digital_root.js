function digitalRoot(n = 0) {
  let nums = n.toString();

  while (nums.length > 0) {
    const rdx = nums
      .split("")
      .map((v) => +v)
      .reduce((acc, val) => acc + val, 0);
    nums = rdx.toString();

    if (nums.length === 1) {
      return parseInt(nums);
    }
  }
}

digitalRoot(16); // 7
digitalRoot(942); // 6
digitalRoot(132189); // 6
digitalRoot(493193); // 2

// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
