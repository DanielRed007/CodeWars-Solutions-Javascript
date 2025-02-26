const MORSE_CODE = {
  "-.-.--": "!",
  ".-..-.": '"',
  "...-..-": "$",
  ".-...": "&",
  ".----.": "'",
  "-.--.": "(",
  "-.--.-": ")",
  ".-.-.": "+",
  "--..--": ",",
  "-....-": "-",
  ".-.-.-": ".",
  "-..-.": "/",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  "..--..": "?",
  ".--.-.": "@",
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "..--.-": "_",
  "...---...": "SOS",
};

const decodeMorse = function (morseCode = "") {
  return morseCode
    .split("   ")
    .map((v, i) => {
      const word = v.split(" ").map((xv, xi) => {
        return MORSE_CODE[xv];
      });

      return word.join("");
    })
    .join(" ")
    .trim();
};

decodeMorse(".... . -.--   .--- ..- -.. .");

function reduceMorseList() {
  const rdxList = Object.keys(MORSE_CODE).reduce(
    (counter, morse) => {
      const code = morse.split("");

      code.forEach((val) => {
        if (val === "-") counter["-"]++;
        if (val === ".") counter["."]++;
      });

      return counter;
    },
    { "-": 0, ".": 0 }
  );

  return rdxList;
}

reduceMorseList();
