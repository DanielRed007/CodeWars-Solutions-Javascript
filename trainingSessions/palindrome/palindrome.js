// Basic Palindrome Check
// Problem: Write a function isPalindrome(str) that checks if a given string is a palindrome. It should return true if the string is a palindrome, and false otherwise. Ignore case and non-alphanumeric characters.
// Example: isPalindrome("A man, a plan, a canal, Panama") should return true.

const shortExamples = [
    "Civic",
    "Madam",
    "Radar",
    "Deified",
    "Level",
    "Refer",
    "Rotator",
    "Sagas",
    "Racecar",
    "noon"
];

// if the string is even, cut the string in half, if odd in half plus one
// remove non alphabetic characters
function isPalindrome(text = ""){
    const filteredText = text.replace(/[^a-zA-Z]/g, '').toLowerCase();
    // create a reversed version of the string and compare, if equal return true
    return filteredText.split("").reverse().join("") === filteredText
}

function isPalindrome2(){
    
}

isPalindrome("Deified")
isPalindrome("Sagas");
isPalindrome("noon");

