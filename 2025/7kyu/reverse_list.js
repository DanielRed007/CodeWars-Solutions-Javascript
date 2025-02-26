function spinWords(text = "") {
  return text
    .split(" ")
    .map((x) => (x.length >= 5 ? x.split("").reverse().join("") : x))
    .join(" ");
}

spinWords("Hey fellow warriors"); // Hey wollef sroirraw
spinWords("This is another test"); // This is rehtona test
