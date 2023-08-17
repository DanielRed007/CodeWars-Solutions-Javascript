function whatTimeIsIt(angle = ""){
    const getHours = Math.floor(((angle / 360) * 24) / 2);
    const hours = getHours > 0 ? getHours : 12;

    const minutes = Math.floor(((angle / 360) * 1440) / 2);

    console.log(hours);
    console.log(minutes);
    return "12:00";
}


whatTimeIsIt(0) // "12:00");
whatTimeIsIt(90) // "03:00");
whatTimeIsIt(180) // "06:00");
whatTimeIsIt(270) // "09:00");
whatTimeIsIt(360) // "12:00");    
whatTimeIsIt(28.91971271681733) // 12:57;      