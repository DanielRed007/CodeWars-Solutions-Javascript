// 2. Longest Palindromic Substring
// Problem: Write a function longestPalindromeSubstring(str) that finds the longest palindromic substring within a given string.
// Example: longestPalindromeSubstring("babad") should return "bab" or "aba".

// ----------------------- MY VERSION -------------------------------

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

isPalindrome("Deified")
isPalindrome("Sagas");
isPalindrome("noon");

function validatePalindrome(text = ""){
    let str = "";
    // create a function that iterates like this: 
    // take a letter then go to the oposite side of the string to find another equal, 
    // if found validate if the string is a plaindrome
    const palins = [];

    for(let i = 0; i < text.length; i++){
        const char = text[i]
        // for every char make a reverse iteration, if find an equal take the substring
        const lastTextIndex = text.lastIndexOf(char);
        if(i !== lastTextIndex){
            const palindromeCheck = text.slice(i,lastTextIndex + 1);
            if(isPalindrome(palindromeCheck)){
                palins.push(palindromeCheck);
            }
        }
    }

    return palins;
}

function longestPalindromeSubstring(text = ""){
    // iterate the whole string, letter by letter adding another one per every new index,
    // every time it finds a aplindrome, store it in a list
    // when it's done, extract the longest one
    let substring = "";
    const stringList = [];

    for(let x = 0; x < text.length; x++){
        const char = text[x];
        substring += char;
        stringList.push(substring);
    }

    const palindromes = [];
    
    // with the list done, extract any palindrome into a new list
    for(let y = 0; y < stringList.length; y++){
        // for any index, validate if is a string ot contains a string
        const check = validatePalindrome(stringList[y]);
        palindromes.push(check);
    }
    
    const flattened = palindromes.reduce((acc,val) => acc.concat(val),[]);
    const filterFlat = [...new Set(flattened)]

    console.log(filterFlat[filterFlat.length - 1]);
    return filterFlat[filterFlat.length - 1]
}

longestPalindromeSubstring("racecar");
longestPalindromeSubstring("babad");
longestPalindromeSubstring("cbbd");
longestPalindromeSubstring("forgeeksskeegfor");

// ---------------------------- OPTIMIZED VERSION ------------------------------

function longestPalindromeSubstring(text = "") {
    if (text.length < 2) {
        return text;
    }

    let longest = "";

    // Helper function to expand around the center and find the longest palindrome
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < text.length && text[left] === text[right]) {
            left--;
            right++;
        }
        // Return the longest palindrome found
        return text.slice(left + 1, right);
    }

    for (let i = 0; i < text.length; i++) {
        // Check for odd-length palindromes
        const oddPalindrome = expandAroundCenter(i, i);
        if (oddPalindrome.length > longest.length) {
            longest = oddPalindrome;
        }

        // Check for even-length palindromes
        const evenPalindrome = expandAroundCenter(i, i + 1);
        if (evenPalindrome.length > longest.length) {
            longest = evenPalindrome;
        }
    }

    return longest;
}

// Test cases
console.log(longestPalindromeSubstring("racecar")); // Output: "racecar"
console.log(longestPalindromeSubstring("babad"));   // Output: "bab" or "aba"
console.log(longestPalindromeSubstring("cbbd"));    // Output: "bb"
console.log(longestPalindromeSubstring("forgeeksskeegfor")); // Output: "geeksskeeg"
console.log(longestPalindromeSubstring("abaxyzzyxf")); // Output: "xyzzyx"
