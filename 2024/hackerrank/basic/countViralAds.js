
function viralAdvertising(n) {
    let viral = 0;
    let shared = 5;

    for(let day = 0; day < n; day++){
        let liked = Math.floor(shared / 2);
        shared = liked * 3;
        viral += liked;
    }

    return viral;
}

console.log(viralAdvertising(5));
console.log(viralAdvertising(3));