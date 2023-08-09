

function inArray(list1,list2){
    let filtered = [];

    for(let x = 0; x < list1.length; x++){
        const word1 = list1[x];
        for(let y = 0; y < list2.length; y++){
            const word2 = list2[y];
            if(word2.includes(word1)){
                filtered.push(list1[x]);
                break;
            }
        }
    }

    return filtered.sort((a,b) => a.localeCompare(b));
}

inArray(["xyz", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]);