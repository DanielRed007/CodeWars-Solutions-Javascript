
function bump(text = ""){
    console.log(text.split("").filter(char => char !== "_"));
    return text.split("").filter(char => char !== "_").length <= 15 ? "Woohoo!" : "Car Dead";
}

bump("n") // "Woohoo!");
bump("__nn_nnnn__n_n___n____nn__nnn") // "Woohoo!");
bump("nnn_n__n_n___nnnnn___n__nnn__") // "Woohoo!");
bump("_nnnnnnn_n__n______nn__nn_nnn") // "Car Dead");
bump("______n___n_") // "Woohoo!");