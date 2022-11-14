const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const caesarCipher = function (text, shift) {
  let ciphered = "";
  text.split("").forEach((letter) => {
    let index = alphabet.indexOf(letter.toLowerCase()) + shift;
    let cipheredLetter;
    if (index >= alphabet.length) {
      index -= alphabet.length;
    }
    if (isUpper(letter)) {
      cipheredLetter = alphabet[index].toUpperCase();
    } else {
      cipheredLetter = alphabet[index];
    }
    ciphered += cipheredLetter;
  });
  return ciphered;
};

const isUpper = function (text = "") {
  return text === text.toUpperCase();
};

export { caesarCipher };
