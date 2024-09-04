function staircase(n = 0) {
    let result = "";

    for(let x = 1; x <= n; x++){
        const char = String(" ").repeat(n - x) + String("#").repeat(x)
        result+= char + "\n"
    }

    return result
}

staircase(4);