Array.prototype.containsAll = function(list) {
    const array = this;
    return list.every((value,index) => array.some(l => value === l));
};

[1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([1,2,3,4,5]) // true
[1,2,3,4,5,6,7,8,9,10,11,12,13].containsAll([12,15]) // false 