function humanReadable (seconds) {
    let hs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    let mins = Math.floor((seconds - hs * 3600) / 60).toString().padStart(2, '0');
    let secs = Math.floor((seconds - hs * 3600) - (mins * 60)).toString().padStart(2, '0');

    return hs + ":" + mins + ":" + secs;
}
console.log(humanReadable(359999));