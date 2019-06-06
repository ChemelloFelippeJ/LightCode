const alphabetUppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const alphabetLowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encrypt() {
    const text = document.getElementById('text').value;
    const textArray = text.split("");
    const moves = parseInt(document.getElementById('select').value);
    let position;
    let textEncrypt = "";

    textArray.forEach(function (char, index, array) {
        if (alphabetLowercase.includes(char)) {
            position = alphabetLowercase.indexOf(char);
            textEncrypt += alphabetLowercase[position + moves];
        } else if (alphabetUppercase.includes(char)) {
            position = alphabetUppercase.indexOf(char);
            textEncrypt += alphabetUppercase[position + moves];
        } else {
            textEncrypt += array[index];
        }
    });

    document.getElementById('text-return').innerHTML = textEncrypt;
}

function decrypt() {
    const text = document.getElementById('text').value;
    const textArray = text.split("");
    const moves = parseInt(document.getElementById('select').value);
    let position;
    let textEncrypt = "";

    textArray.forEach(function (char, index, array) {
        if (alphabetLowercase.includes(char)) {
            position = alphabetLowercase.indexOf(char);
            textEncrypt += alphabetLowercase[position - moves + 26];        //26 number of letters in brazilian alphabet
        } else if (alphabetUppercase.includes(char)) {
            position = alphabetUppercase.indexOf(char);
            textEncrypt += alphabetUppercase[position - moves + 26];
        } else {
            textEncrypt += array[index];
        }
    });

    document.getElementById('text-return').innerHTML = textEncrypt;

}