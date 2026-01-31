function caesarCipher(str, shift) {
    return str.split('').map(char => {
        const code = char.charCodeAt(0);
        let shiftedCode = code;

        if (code >= 65 && code <= 90) {
            shiftedCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
        } else if (code >= 97 && code <= 122) {
            shiftedCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
        }

        return String.fromCharCode(shiftedCode);
    }).join('');
}

export default caesarCipher; 