
function sqInRect(lng, wdth){
    if(lng === wdth) return null;

    const width = Math.max(lng,wdth);
    const height = Math.min(lng,wdth);
    console.log(width,height);

    
}

sqInRect(5, 5); // null)
sqInRect(5, 3); // [3, 2, 1, 1])
sqInRect(3, 5); // [3, 2, 1, 1])
sqInRect(20, 14); // [14, 6, 6, 2, 2, 2])