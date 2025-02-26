function persistence(num = 0) {
  let counter = 0;
  let list = num.toString();

  while (list.length > 1) {
    let temp = list.split("").map((v) => +v);
    let val = temp.reduce((a, b) => a * b, 1);
    list = val.toString();
    counter++;
  }
  return counter;
}

persistence(39); //,3);
persistence(4); //,0);
persistence(25); //,2);
persistence(999); //,4);
