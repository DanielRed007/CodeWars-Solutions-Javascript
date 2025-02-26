
function transpose(matrix) {
    let reflex = Array.from({length: matrix[0].length}, () => []);

    matrix.forEach((list,i) => {
        list.forEach((val,j) => {
            reflex[j].push(val);
        })
    });

    return reflex;
}

transpose([[1,2,3],[4,5,6]]);