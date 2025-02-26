function plusMinus(arr: number[]): void {
  let listResult: number[] = [0, 0, 0];

  for (let x = 0; x < arr.length; x++) {
    const num: number = arr[x];

    if (num > 0) {
      listResult[0]++;
    }

    if (num < 0) {
      listResult[1]++;
    }

    if (num === 0) {
      listResult[2]++;
    }
  }

  const listFormat = listResult
    .map((num, i) => {
      return (num / arr.length).toFixed(6);
    })
    .join("\n");

  console.log(listFormat);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
