function narcissistic(value) {
  if (value > 0 && value < 10) return true;

  const strVal = value.toString().split("");
  const power = strVal.length;

  let segments = strVal.map((num) => Math.pow(parseInt(num), power))
    .reduce((num1, num2) => num1 + num2);

  return segments === value;
}
