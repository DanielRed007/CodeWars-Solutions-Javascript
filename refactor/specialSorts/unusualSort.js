
function unusualSort(charSet = []){
    const alphaRgx = /[A-Za-z]/;
    const numRgx = /[0-9]/;
    const alpha = charSet.filter(v => alphaRgx.test(v)).sort();
    const nums = charSet
        .filter(v => numRgx.test(v) || Number.isInteger(v))
        .sort((a,b) => {
            if(a < b) return a - b;
        });
    
    // console.log(alpha);
    console.log(alpha.concat(nums));
    return alpha.concat(nums);
}


unusualSort("0981726354".split('')); // "0123456789".split(''))
// unusualSort("321cba".split('')); // "abc123".split(''))
// unusualSort("x1y2z3".split('')); // "xyz123".split(''))
unusualSort("cba950XYZ".split('')); // "XYZabc059".split(''))
// unusualSort([3,"3","2",2,"2","1",1,"a","b","c"]);// (["a","b","c",1,"1",2,"2","2",3,"3"],"should sort 'digits' after 'same-digit-numbers'");
// unusualSort(["Z","c",3,"Y",0,"B","E","G","J","L","R","S","T","U","W","X","a","b","g","j","m","p","s","t","u","v","w","y",1,"I","N","V","n","1","2","5"]); 
// ["B","E","G","I","J","L","N","R","S","T","U","V","W","X","Y","Z","a","b","c","g","j","m","n","p","s","t","u","v","w","y",0,1,"1","2",3,"5"]

// Random

unusualSort(["s",5,3,0,"E","q","r","a","P","n","j","G","T","W","d","2","f","Q","1","0","V","x","D",1,"i","N","C",4,"4","Y"]);
// ["C","D","E","G","N","P","Q","T","V","W","Y","a","d","f","i","j","n","q","r","s","x",0,"0",1,"1","2",3,4,"4",5]