function duplicateCount(text){
    let result = 0
    let counter = {}
    const lower = text.toLowerCase()

    for(let i = 0; i < lower.length; i++){
        const char = lower[i]
        
        if(counter[char] > 0){
            counter[char]++
        } else {
            counter[char] = 1
        }
    }

    for(let value in counter){
        if(counter[value] > 1){
            result++
        }
    }

    return result
}

duplicateCount("aabBcde");