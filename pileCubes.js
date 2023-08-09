
function frame(list, char){
    const wordList = list.slice();
    const longest = list.sort((a,b) => b.length - a.length)[0];
    const frame = Array(longest.length + 4).fill(char).join("");
    
    const newFrame = wordList.map((val,idx) => {
        const blank = longest.length - val.length;
        const newWord = val + Array(blank).fill(" ").join("");

        return char + " " + newWord + " " + char + "\n";
    });

    newFrame.unshift(frame + "\n");
    newFrame.push(frame);

    return newFrame.join("");
}

frame(['This is a very long single frame'], "-");
frame(['Create','this','kata'], "+");
frame(['Small','frame'], "~");
frame([ ' Create a frame!',
'          __     __',
'         /  \\~~~/  \\',
'   ,----(     ..    )',
'  /      \\__     __/',
' /|         (\\  |(',
'^  \\  /___\\  /\\ |',
'   |__|   |__|-..' ],"*");
frame([ 'IQNfB',
'RLTXjsr',
'l',
'YkSDzo',
'VWFa,osFN',
',vF!mdsfq',
'wrnqZcYanS',
'HKjELpGp',
'VXB' ],"r");