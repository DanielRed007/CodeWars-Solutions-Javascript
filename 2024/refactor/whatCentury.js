function whatCentury(year = ""){
    let century = Math.ceil(parseInt(year) / 100).toString();
    
    if(parseInt(century) === 3 || (century.length > 1 && century[1] === "3" && century !== "13")){
        return century += "rd";
    }
    
    if(parseInt(century) === 2 || (century.length > 1 && century[1] === "2" && century !== "12")){
        return century += "nd";
    }
    
    if(parseInt(century) === 1 || (century.length > 1 && century[1] === "1" && century !== "11")){
        return century += "st";
    } else {
        return century += "th";
    } 
}

whatCentury("1999"); //, "20th", "With input '1999' solution produced wrong output");
whatCentury("2011"); //, "21st", "With input '2011' solution produced wrong output");
whatCentury("2154"); //, "22nd", "With input '2154' solution produced wrong output");
whatCentury("2259"); //, "23rd", "With input '2259' solution produced wrong output");
whatCentury("1234"); //, "13th", "With input '1234' solution produced wrong output");
whatCentury("1023"); //, "11th", "With input '1023' solution produced wrong output");
whatCentury("2000"); //, "20th", "With input '2000' solution produced wrong output");
whatCentury("3001"); //, "20th", "With input '2000' solution produced wrong output");
whatCentury("3301"); //, "20th", "With input '2000' solution produced wrong output");
whatCentury("200"); //, "20th", "With input '2000' solution produced wrong output");
whatCentury("221"); //, "20th", "With input '2000' solution produced wrong output");
whatCentury("66"); //, "20th", "With input '2000' solution produced wrong output");
whatCentury("301"); //, "20th", "With input '2000' solution produced wrong output");