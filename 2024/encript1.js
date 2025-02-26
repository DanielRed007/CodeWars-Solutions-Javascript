function encrypt(text, n) {

    // null check
    if(text === ""){
      return "";
    }
    
    if(text === null){
      return null;
    }
    
    // hold temporal result
    let chars = text;

    // repeat n times from parameters
    for(let x = 0; x < n; x++){
        // hold partial results as iteration grows
        let partial = ["", ""];
        // for every iteration split chars according to index even/odd 
        for(let i = 0; i < chars.length; i++){
            if(i % 2 == 0){
                partial[1] += chars[i]; 
            } else {
                partial[0] += chars[i];
            }
        }

        // join array results
        const step = partial.join("");
        // rewrite temporal results
        chars = step;
    }
    
    // return results
    encrypted = chars;
    return chars;
}

function decrypt(encryptedText, n) {
    // nullcheck
    if(encryptedText === ""){
      return "";
    }
  
    if(encryptedText === null){
      return null;
    }

    // hold temporal result
    let chars = encryptedText;

    // iterate encryption n times according to parameter
    for(let x = 0; x < n; x++){
        // hold partial result
        let partial = ""; 
        // split encrypted in half
        const half1 = chars.slice(0,chars.length / 2);
        const half2 = chars.slice(chars.length / 2,chars.length);
        // reorder according even/odd
        for(let i = 0; i < half2.length; i++){
            if(half1[i]){
                partial += half2[i] + half1[i];
            } else {
                partial += half2[i];
            }
        }
        // rewrite partial result
        chars = partial;
    }
    // Eureka!!
    return chars;
}

// encrypt("012345", 1); //  =>  "135024"
// encrypt("012345", 2); //  =>  "135024"  ->  "304152"
// encrypt("012345", 3); //  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1); //  =>  "13024"
// encrypt("01234", 2); // =>  "13024"  ->  "32104"
// encrypt("01234", 3); // =>  "13024"  ->  "32104"  ->  "20314"

// encrypt("This is a test!", 0); // "This is a test!"
// encrypt("This is a test!", 1); // "hsi  etTi sats!"
// encrypt("This is a test!", 2); // "s eT ashi tist!"
// encrypt("This is a test!", 3); // " Tah itse sits!"
// encrypt("This is a test!", 4); // "This is a test!"
// encrypt("This is a test!", -1); // "This is a test!"
// encrypt("This kata is very interesting!", 1); // "hskt svr neetn!Ti aai eyitrsig"

// decrypt("This is a test!", 0); // "This is a test!"
decrypt("hsi  etTi sats!", 1); // "This is a test!"
decrypt("s eT ashi tist!", 2); // "This is a test!"
// decrypt(" Tah itse sits!", 3); // "This is a test!"
// decrypt("This is a test!", 4); // "This is a test!"
// decrypt("This is a test!", -1); // "This is a test!"
// decrypt("hskt svr neetn!Ti aai eyitrsig", 1); // "This kata is very interesting!"

  