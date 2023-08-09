
function findDifference(a = [], b = []) {
    const ca = a.reduce((acc,nxt) => acc * nxt,1);
    const cb = b.reduce((acc,nxt) => acc * nxt,1);

    const min = Math.min(ca,cb);
    const max = Math.max(ca,cb);

    return max - min;
}

findDifference([3, 2, 5], [1, 4, 4]); //, 14);
findDifference([9, 7, 2], [5, 2, 2]); //, 106);
findDifference([11, 2, 5], [1, 10, 8]); //, 30);
findDifference([4, 4, 7], [3, 9, 3]); //, 31);
findDifference([15, 20, 25], [10, 30, 25]); //, 0);