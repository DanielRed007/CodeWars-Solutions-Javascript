
function kangaroo(kang1, vel1, kang2, vel2) {
    // calculate min start point
    // let diff = x2 - x1;
    // console.log(diff);
    // // console.log(((x2 * v2) + diff) === (v1 * (diff - x1)));
    // console.log((diff * v1));

    const t = vel1 * kang2;
    return ((kang2 * vel2) + diff) === (vel1* (diff - kang1)) ? "YES" : "NO"
}

// function kangaroo(x1, v1, x2, v2) {
//     return (x1 + v1) === (x2 + v2) ? "YES" : "NO"
// }


kangaroo(0, 3, 4, 2);
kangaroo(2, 1, 1, 2);