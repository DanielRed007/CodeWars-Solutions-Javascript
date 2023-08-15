function getGrade (s1 = 0, s2 = 0, s3 = 0) {
    const sum = (s1 + s2 + s3) / 3;

    if(sum >= 90 && sum <= 100) return "A";
    if(sum >= 80 && sum < 90) return "B";
    if(sum >= 70 && sum < 80) return "C";
    if(sum >= 60 && sum < 70) return "D";
    if(sum >= 0 && sum < 60) return "F";
}