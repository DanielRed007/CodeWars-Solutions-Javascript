
function evaporator(content, evap_per_day, threshold){
    let days = 0;
    
    const limit = (threshold / 100) * content;
    const evapPerDay = evap_per_day / 100;

    while(content > limit){
        content = (content - (content * evapPerDay));
        days++
    }

    return days;
}

evaporator(10,10,10); // 22
evaporator(10, 10, 5);  // 29