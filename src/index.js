const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  const result = [];
  const words = expr.split('**********');

  words.map(word => {
    word.match(/.{1,10}/g).map(letter => {
      const tempLetter = letter.replace(/00/g, '');
      let str = '';
      for (let i = 0; i < tempLetter.length; i += 2) {
        `${tempLetter[i]}${tempLetter[i + 1]}` === '11'
          ? (str += '-')
          : (str += '.');
      }

      result.push(MORSE_TABLE[str]);
    });

    result.push(' ');
  });

  return result.join('').trim();
}

module.exports = {
  decode,
};
