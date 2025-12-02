function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const includeLowercase = "abcdefghijklmnopqrstuvwxyz";
    const includeUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";  

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += numberChars ? numberChars : "";
    allowedChars += symbolChars ? symbolChars : "";

    if(length <= 0){
        return '';
    }
         

    return '';
}


const  passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols, )

console.log(`Generated password: ${password}`);