function calculateTip(amount = 0, rating = "") {
  let multiplier = 0;
  const formatRating = rating.toUpperCase();
  const ratingList = ["TERRIBLE", "POOR", "GOOD", "GREAT", "EXCELLENT"];

  const isValidRating = ratingList.find((r) => r === formatRating);

  if (!isValidRating) {
    return "Rating not recognised";
  }

  switch (formatRating) {
    case ratingList[0]:
      multiplier = 0;
      break;
    case ratingList[1]:
      multiplier = 0.05;
      break;
    case ratingList[2]:
      multiplier = 0.1;
      break;
    case ratingList[3]:
      multiplier = 0.15;
      break;
    case ratingList[4]:
      multiplier = 0.2;
      break;
  }

  return Math.ceil(amount * multiplier);
}

console.log(calculateTip(20, "Excellent")); //, 4);
console.log(calculateTip(26.95, "good")); //, 3);
console.log(calculateTip(20, "Excesdfsdfllent")); //, 4);
console.log(calculateTip(26.95, "gosdfsfod")); //, 3);
