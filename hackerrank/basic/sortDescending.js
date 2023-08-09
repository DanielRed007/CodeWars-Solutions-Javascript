function sortTheInnerContent(words = ""){
    return words.split(" ").map(word => {
        const inner = word.slice(1,word.length - 1).split("").sort((a,b) => b.localeCompare(a)).join("");
        return word.length > 3 ? word[0] + inner + word[word.length - 1] : word;
    }).join(" ");
};

sortTheInnerContent("sort the inner content in descending order"); // "srot the inner ctonnet in dsnnieedcg oredr");
// sortTheInnerContent("wait for me"); // "wiat for me");
// sortTheInnerContent("this kata is easy"); // "tihs ktaa is esay");
sortTheInnerContent("mgmfth jun h fic avujr qbsbx bkxfn"); // mtmgfh jun hh fic avujr qsbbx bxkfn