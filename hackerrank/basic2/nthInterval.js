// With one argument, every(array) returns every element of the array.

// With two arguments, every(array, interval) it returns every intervalth element.

// With three arguments, every(array, interval, start_index) returns every intervalth element starting at index start_index.

function every(list = [], interval, start = 0){
    if(!interval && !start){
        return list;
    }

    let result = [];

    for(let x = start; x < list.length; x += interval){
        result.push(list[x])
    }

    return result;
}

every([0,1,2,3,4]); // [0,1,2,3,4])
every([0,1,2,3,4],1); // [0,1,2,3,4])
every([0,1,2,3,4],2); // [0,2,4])
every([0,1,2,3,4],3); // [0,3])
every([0,1,2,3,4],3,1); // [1,4])

// ------------------------------------------ Array Extension ------------------------------------ //

// With no arguments, array.every it returns every element of the array.
// With one argument, array.every(interval) it returns every intervalth element.
// With two arguments, array.every(interval, start_index) it returns every intervalth element starting at index start_index

// ----------------------------------------- Trilingual Democracy ------------------------------- //

// Trilingual democracy
// Switzerland has four official languages: German, French, Italian, and Romansh.1

// When native speakers of one or more of these languages meet, they follow certain regulations to choose a language for the group.2 Here are the rules for groups of exactly three3 people:4

// When all three are native speakers of the same language, it also becomes their group's language.5a

// When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.5b

// When native speakers of three different languages meet, they eschew these three languages and instead use the remaining of the four official languages.5c

// The languages are encoded by the letters D for Deutsch, F for Français, I for Italiano, and K for Rumantsch.6

// Your task is to write a function that takes a list of three languages and returns the language the group should use.7 8

// Examples:9

// The language for a group of three native French speakers is French: FFF → F

// A group of two native Italian speakers and a Romansh speaker converses in Romansh: IIK → K

// When three people meet whose native languages are German, French, and Romansh, the group language is Italian: DFK → I

function trilingualDemocracy1(group = "") {
    const langs = ['D','F','I','K'];
    let langCounter = {};

    for(let x = 0; x < group.length; x++){
        const langChar = group[x];
        if(langCounter[langChar] > 0){
            langCounter[langChar]++;
        } else {
            langCounter[langChar] = 1;
        }
    }

    for(let y in langCounter){
        if(langCounter[y] === 3) return y;

        if(langCounter[y] === 2){
            const lang = Object.keys(langCounter).filter(val => val !== y)[0]
            return lang
        }
    }

    const multiLang = Object.values(langCounter).every(val => val === 1);

    if(multiLang){
        const lang = Object.keys(langCounter);
        const validate = langs.filter(val => !lang.includes(val))[0]
        return validate
    }
}

function trilingualDemocracy(group = "") {
    // create a counter object in zeroes
    // use array reduce to populate the object
    // use it to complete the requirements
    const langCounter = {
        F: 0,
        D: 0,
        K: 0,
        I: 0
    };
    
    group.split("").forEach((val) => {
        langCounter[val]++
    })

    for(let y in langCounter){
        if(langCounter[y] === 3) return y;

        if(langCounter[y] === 2){
            const lang = Object.keys(langCounter).filter(val => val !== y)[0]
            return lang
        }
    }

    const multiLang = Object.values(langCounter).every(val => val === 1);

    if(multiLang){
        const lang = Object.keys(langCounter);
        const validate = langs.filter(val => !lang.includes(val))[0]
        return validate
    }
}

const exampleTests = [["FFF", "F"], ["IIK", "K"], ["DFK", "I"]];

console.log(trilingualDemocracy("FFF")); // F
console.log(trilingualDemocracy("IIK")); // K
console.log(trilingualDemocracy("DFK")); // I
