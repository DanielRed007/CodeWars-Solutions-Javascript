// removing directly from str2
function scramble1(str1, str2) {
    for(let i = 0; i < str1.length; i++){
        const charIndex = str2.indexOf(str1[i]);
        if(charIndex > -1){
            str2 = str2.slice(0,charIndex) + str2.slice(charIndex + 1);
        }
    }

    return str2.length === 0;
}

// with counter object
function scramble(str1, str2) {
    // counter map
    const counterMap = {};
  
    // create counter map for str2, so you store every ocurrence in the intended word 
    for (let i = 0; i < str2.length; i++) {
      const char = str2[i];
      if(counterMap[char] >= 1){
        counterMap[char]++;
      } else {
        counterMap[char] = 1;
      }
    };
    
    // iterate to remove ocurrences from string 1 from counter object
    for(let i = 0; i < str1.length; i++){
        if(counterMap[str1[i]]){
            counterMap[str1[i]]--;
        }
    }

    // a true scramble must have reduced all its values to zero
    return Object.values(counterMap).every(val => val === 0);
}

scramble('rkqodlw','world'); // true;
scramble('cedewaraaossoqqyt','codewars'); // true;
scramble('katas','steak'); // false;
scramble('scriptjavx','javascript'); // false;
scramble('scriptingjava','javascript'); // true;
scramble('scriptsjava','javascripts'); // true;
scramble('javscripts','javascript'); // false;
scramble('jscripts','javascript'); // false;
scramble('aabbcamaomsccdd','commas'); // true;
scramble('commas','commas'); // true;
scramble('sammoc','commas'); // true;