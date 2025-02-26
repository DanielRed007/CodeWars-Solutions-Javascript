
function getTimeSecondsFormat(timeList = []){
    const seconds = timeList[2];
    const minutes = timeList[1] * 60;
    const hours = timeList[0] * 3600;

    return hours + minutes + seconds;
}

function formatDifference(diff = 0){
    const hours = Math.floor(diff / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((diff - (3600 * hours)) / 60).toString().padStart(2, '0');
    const seconds = ((diff - (3600 * hours)) - (Math.floor((diff - (3600 * hours)) / 60) * 60)).toString().padStart(2, '0');

    return [hours,minutes,seconds].join("|");
}

function getTimeRange(statList = []){
    const lowest = statList[0];
    const highest = statList[statList.length - 1];

    let difference = getTimeSecondsFormat(highest) - getTimeSecondsFormat(lowest);

    return formatDifference(difference);
}

function getTimeAverage(statList = []){
    const totalTime = statList.map(stt => getTimeSecondsFormat(stt)).reduce((stt1,stt2) => stt1 + stt2, 0);
    const difference = Math.floor(totalTime / statList.length);

    return formatDifference(difference);
}

function getTimeMedian(statList = []){
    const middleIndex = Math.floor(statList.length / 2);

    if(statList.length % 2){
        return statList[middleIndex].map(int => int.toString().padStart(2, '0')).join("|");
    } else {
        const middle = [statList[middleIndex - 1],statList[middleIndex]].map(stt => getTimeSecondsFormat(stt)).reduce((stt1,stt2) => stt1 + stt2, 0);
        const difference = Math.floor(middle / 2);
        
        return formatDifference(difference);
    }
}

function stat(statString = "") {

    if(!statString) return "";

    const statList = statString.split(", ").map(stt => {
        return stt.split("|").map(t => parseInt(t));
    });

    const statSort = statList.sort((sttA,sttB) => {
        return getTimeSecondsFormat(sttA) - getTimeSecondsFormat(sttB);
    });

    return `Range: ${getTimeRange(statSort)} Average: ${getTimeAverage(statList)} Median: ${getTimeMedian(statSort)}`;
}

console.log(stat("01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17")); // "Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"
console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17")); // "Range: 01|01|18 Average: 01|38|05 Median: 01|32|34"
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|17|17, 2|22|00, 2|31|41")); // "Range: 00|31|17 Average: 02|26|18 Median: 02|22|00"
console.log(stat("02|15|59, 2|47|16, 02|17|20, 2|32|34, 2|32|34, 2|17|17")); // "Range: 00|31|17 Average: 02|27|10 Median: 02|24|57"

// stat("07|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"); // "XXXXXXXXXX"