
function timeConversion(date = "") {

    const result = "";
    const dateFormat = date.replace(/[A-Za-z]+/,"");
    
    if(date.includes("PM")){

    } else {
        result = dateFormat;
    }

    console.log(result);
    return result;
}

timeConversion("07:05:45PM"); // 19:05:45