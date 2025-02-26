
function invert(arr = []) {
    return arr.map(val => val > 0 ? Math.abs(val) * -1 : Math.abs(val) * 1);
}