function camelcase(text = "") {
    return text.split(/[A-Z]/).length;
}

console.log(camelcase("saveChangesInTheEditor"));