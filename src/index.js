const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  String.prototype.removeLeftPadding = function (padChar) {
    if (padChar === undefined || !padChar.toString) {
      return this.toString();
    }
    const regex = RegExp(`^[${padChar.toString()}]*`);
    return this.replace(regex, "");
  };

  const bin2Morse = (seq) => {
    let morseChar = seq.match(/[\d]{2}/g).map((b) => (b === "10" ? "." : "-")).join("");
    return MORSE_TABLE[morseChar];
  };

// debugger;  // by the way, debug of chaining methods was inconvenient

  let words = expr.split("**********").map((w) =>
    w.match(/[\d]{10}/g).map((chr) => {
      let unpaddedChar = chr.removeLeftPadding("0");
      let morseChar = bin2Morse(unpaddedChar);
      return morseChar;
    }).join("")
  );

  return words.join(" ");

}

module.exports = {
  decode,
};
