// -----------------------------------------------------------
// 1. Original Password Generation Function (No changes needed)
// -----------------------------------------------------------
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(Password length must be at least 1)`;
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

// -----------------------------------------------------------
// 2. DOM Manipulation (New code to interact with HTML)
// -----------------------------------------------------------

// Function to handle the button click
function handleGenerateClick() {
    // Get values from HTML inputs
    const passwordLength = document.getElementById('lengthInput').value;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    // Call the generator function
    const generatedPassword = generatePassword(
        Number(passwordLength), // Convert string input to number
        includeLowercase, 
        includeUppercase, 
        includeNumbers, 
        includeSymbols
    );

    // Display the result in the HTML
    const resultSpan = document.querySelector('#passwordResult span');
    resultSpan.textContent = generatedPassword;
}

// Attach the function to the button click event
document.getElementById('generateButton').addEventListener('click', handleGenerateClick);