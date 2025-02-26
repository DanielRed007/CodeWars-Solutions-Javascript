function findShort(text = "") {
  return text.split(" ").sort((a, b) => a.length - b.length)[0].length;
}
