
const chai = require("chai");
const assert = chai.assert;

const { mineDetectionByRadar } = require("../mineDetectionByRadar");

describe('Using assert', () => {
  it('Basic Tests', () => {
    assert.deepEqual(
      mineDetectionByRadar([[2,"X"],[4,"X"],[5,"("],[2,"*"],[1,"*"]]), 
      [ 1, 2, 3 ]
    );

    assert.deepEqual(
      mineDetectionByRadar([[5,"X"],[1,"*"],[2,"("],[3,"#"],[5,"*"],[3,"0"],[5,"#"]]), 
      [ 0, 3, 4, 6 ]
    );

    assert.deepEqual(
      mineDetectionByRadar([[4, "X"], [5, "#"], [1, "0"], [2, "X"], [3, "0"], [4, "*"], [5, "#"], [1, "("], [2, "X"], [3, "#"], [4, "*"], [5, "("], [1, "0"], [2, "X"], [3, "#"], [4, "*"], [5, "X"]]), 
      [ 0, 1, 5, 6, 9, 10, 11, 14, 15, 16]
    );

    assert.deepEqual(
      mineDetectionByRadar([[2, "X"], [3, "#"], [4, "0"], [2, "#"], [5, "("], [3, "0"], [1, "*"]]), 
      [ 1, 4 ]
    );

    assert.deepEqual(
      mineDetectionByRadar([[5, "#"], [1, "X"], [2, "0"], [3, "("], [4, "#"], [5, "X"], [1, "*"], [2, "0"], [3, "("], [4, "X"], [5, "#"]]), 
      [ 0, 4, 5, 9, 10 ]
    );

    assert.deepEqual(
      mineDetectionByRadar([[4, "#"], [5, "X"], [1, "0"], [2, "X"], [3, "0"], [4, "*"], [5, "#"]]), 
      [ 0, 1, 5, 6 ]
    );

    assert.deepEqual(
      mineDetectionByRadar([[3, "#"], [4, "X"], [5, "#"], [1, "0"], [2, "X"], [3, "0"], [4, "*"], [5, "#"], [1, "("], [2, "X"], [3, "#"], [4, "*"], [5, "("], [1, "0"], [2, "X"], [3, "#"]]), 
      [ 0, 1, 2, 6, 7, 10, 11, 12, 15]
    );

  });
});
