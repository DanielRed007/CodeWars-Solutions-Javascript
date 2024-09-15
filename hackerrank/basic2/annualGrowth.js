
function utopianTree(n = 0) {
    
    // a variable growth will keep tack of the increasing values

    // create an iteration to apply the rules n times

    // in each iteration growth var doubles its current value , and adds 1

    // return the result

    let growth = 0;

    for(let x = 0; x <= n; x++){
        if(x % 2 === 0){
            growth = (growth + 1)
        } else {
            growth = (growth * 2)
        }
    }

    return growth;
}

/* Period  Height
    0          1
    1          2
    2          3
    3          6
    4          7
    5          14 */


function generateHashtag (text = "") {
    

    // const formattedWord = text.trim().split(" ").map((word) => {
    //     const newCap = word[0].toUpperCase();
    //     const rest = word.slice(1,word.length)
    //     return newCap + rest;
    // });
    const wordFormat = text.trim();

    if(wordFormat.length === 0) return false;

    const wordList = wordFormat.trim().split(" ").map(w => w.trim());

    console.log(wordList)

    const formattedWord = wordFormat.trim().split(" ").map(w => w.trim()).map((word) => word[0].toUpperCase() + word.slice(1,word.length)).join("")

    return formattedWord.length < 140 ? "#" + formattedWord : false;
}

// function generateHashtag (text = "") {
//     if(text === "") return false;

//     const textFormat = text.trim();

//     if(textFormat.length === 0) return false;

//     console.log(textFormat.length)
// }

generateHashtag("Do We have A Hashtag")
generateHashtag(""); // false;
generateHashtag(" ".repeat(200)); // false, "Still an empty string"
// generateHashtag("Do We have A Hashtag"); // "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
// generateHashtag("Codewars"); // "#Codewars", "Should handle a single word."
// generateHashtag("Codewars Is Nice"); // "#CodewarsIsNice", "Should remove spaces."
// generateHashtag("Codewars is nice"); // "#CodewarsIsNice", "Should capitalize first letters of words."
// generateHashtag("code" + " ".repeat(140) + "wars"); // "#CodeWars"
// generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"); // false, "Should return false if the final word is longer than 140 chars."
// generateHashtag("a".repeat(139)); // "#A" + "a".repeat(138), "Should work"
// generateHashtag("a".repeat(140)); // false, "Too long"