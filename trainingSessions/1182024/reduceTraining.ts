function reduceEx1(list: number[]) {
  return list.reduce((acc, curr) => acc + curr, 0);
}

console.table(reduceEx1([1, 2, 3]));

interface Stats {
  even: number;
  odd: number;
}

function reduceEx2(list: number[]) {
  return list.reduce(
    (acc: { even: number; odd: number }, val) => {
      console.log({ val, acc });
      if (val % 2 === 0) {
        acc.even++;
      }

      if (val % 2) {
        acc.odd++;
      }

      return acc;
    },
    { even: 0, odd: 0 }
  );
}

console.log(reduceEx2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));
