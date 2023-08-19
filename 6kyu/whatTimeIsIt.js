function whatTimeIsIt(angle = ""){
    let hours = Math.floor(angle / 30) > 0 ? Math.floor(angle / 30).toString() : "12"; 

    const minAngle = Math.floor(angle);
    const multi = ((angle - minAngle) * 60).toString();
    let minutes = 0;

    if(multi === "0"){
        minutes = multi;
    } else {
        minutes = Math.floor((angle / 30) * 60).toString();
    }

    hours = hours.length === 1 ? "0" + hours : hours;
    minutes = minutes.length === 1 ? "0" + minutes : minutes; 

    return hours + ":" + minutes; 
}


whatTimeIsIt(0) // "12:00");
whatTimeIsIt(90) // "03:00");
whatTimeIsIt(180) // "06:00");
whatTimeIsIt(270) // "09:00");
whatTimeIsIt(360) // "12:00"); 
whatTimeIsIt(210) // "07:00");    
whatTimeIsIt(28.91971271681733) // 12:57;      