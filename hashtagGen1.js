function generateHashtag (text) {
    const trimText = text.trim();

    if(!trimText) return false;

    const formattedText = trimText.split(" ").map((char) => {
        return char ? char[0].toUpperCase() + char.substring(1,char.length) : null;
    }).filter(val => val).join("");
    
    return formattedText.length > 139 || !formattedText ? false : `#${formattedText}`
}

generateHashtag(" Hello there thanks for trying my Kata");
generateHashtag("");
generateHashtag(" ".repeat(200));