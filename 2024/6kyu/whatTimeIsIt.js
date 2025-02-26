function formatToString(value = 0){
    let toStr = value.toString();
    return toStr.length === 1 ? "0" + toStr : toStr;
}

function whatTimeIsIt(angle = 0){
    let hour;
    let minutes = (angle / 360) * 12;

    if(angle < 30){
        hour = 12;
    } else {
        hour = Math.floor((angle / 360) * 12);
    }

    if(Number.isInteger(minutes)){
        minutes = "00";
    } else {
        const int = Math.floor(minutes);
        const deci = +(minutes - int) * 60;

        const top = Math.ceil(deci);

        if(Math.abs(top - deci) < 0.001){
            minutes = Math.ceil(deci);
        } else {
            minutes = Math.floor(deci);
        }
    }

    return formatToString(hour) + ":" + formatToString(minutes);
}

whatTimeIsIt(0) // "12:00");
whatTimeIsIt(90) // "03:00");
whatTimeIsIt(180) // "06:00");
whatTimeIsIt(270) // "09:00");
whatTimeIsIt(360) // "12:00"); 
whatTimeIsIt(210) // "07:00");    
whatTimeIsIt(28.91971271681733) // 12:57;
whatTimeIsIt(40) // '01:20';
whatTimeIsIt(45) // '01:30';
whatTimeIsIt(193.19950448088514) // 06:26;
whatTimeIsIt(100.36373520984327) // 03:20     