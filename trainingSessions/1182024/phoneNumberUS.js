
function createPhoneNumber(numbers = []){
  const numSequence = (num1,num2) => numbers.slice(num1,num2).join("")

  return `(${numSequence(0,3)}) ${numSequence(3,6)}-${numSequence(6,10)}`;
}

console.table(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))