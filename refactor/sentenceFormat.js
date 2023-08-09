
function formatWords(words = []){
    let filteredList = words && words.filter(wrd => wrd !== "");
    let format = ""

    if(!filteredList || filteredList.length === 0){
        return "";
    }
    
    if(filteredList.length === 1){
        return filteredList[0];
    }

    if(filteredList.length === 2){
        return filteredList[0] + " and " + filteredList[1];
    } else {
        for(let x = 0; x < filteredList.length; x++){
            if(x === filteredList.length - 1){
                format += " and " + filteredList[x];
            }
            
            if(x === filteredList.length - 2){
                format += filteredList[x];
            }

            if(x < filteredList.length - 2){
                format += filteredList[x] + ", ";
            }
        }
    }
    
    return format;
}

formatWords(['one', 'two', 'three', 'four']); // 'one, two, three and four', "formatWords(['one', 'two', 'three', 'four'] should return 'one, two, three and four'")
formatWords(['one']); // 'one', "formatWords(['one']) should return 'one'")
formatWords(['one', '', 'three']); // 'one and three', "formatWords(['one', '', 'three']) should return 'one and three'")
formatWords(['', '', 'three']); // 'three', "formatWords(['', '', 'three']) should return 'three'")
formatWords(['one', 'two', '']); // 'one and two', "formatWords(['one', 'two', '']) should return 'one and two'")
formatWords([]); //'', 'formatWords([]) should return ""')
formatWords(null); // '', 'formatWords(null) should return ""')
formatWords(['']); // '', 'formatWords([""]) should return ""')