function likes(names = []) {
  const total = names.length;

  switch (total) {
    case 0:
      return "no one likes this";
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${
        names.length - 2
      } others like this`;
  }
}

console.log(likes([])); // 'no one likes this');
console.log(likes(["Peter"])); // 'Peter likes this');
console.log(likes(["Jacob", "Alex"])); // 'Jacob and Alex like this');
console.log(likes(["Max", "John", "Mark"])); // 'Max, John and Mark like this');
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // 'Alex, Jacob and 2 others like this');
console.log(likes(["Alex", "Jacob", "Mark", "Max", "Drusus"])); // 'Alex, Jacob and 3 others like this');
