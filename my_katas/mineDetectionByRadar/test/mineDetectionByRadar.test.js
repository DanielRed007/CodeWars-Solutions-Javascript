
const chai = require("chai");
const assert = chai.assert;

const { mineDetectionByRadar } = require("../mineDetectionByRadar");

function randomDataGenerator(){
  let data = [];

  for(let x = 0; x < 100; x++){
      const arrayLength = Math.floor(Math.random() * 20)
      const testData = Array.from({length: arrayLength}).map(() => []);

      const randomInput = testData.map(array => {
          const vibration = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
          const anomalies = ["0","(","X","#","*"];
          const anomalyIndex = Math.floor(Math.random() * anomalies.length);

          array.push(vibration);
          array.push(anomalies[anomalyIndex]);

          return array;
      });

      data.push(randomInput);
  }

  return data;
}

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

  it('Random Tests', async() => {
    const randomData = randomDataGenerator();
    const randomResults = randomData.map(data => mineDetectionByRadar(data));

    await randomData.forEach((data,index) => {
      assert.deepEqual(
        mineDetectionByRadar(data), 
        randomResults[index]
      );
    });

  });
});
