// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];
// Array of numeric characters to be included in password
var numericCharacters = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Varible declaration
var confirmLength = "";
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;

// Function to prompt user for password options confirm lenght and characters
function getPasswordOptions() {
  var confirmLength = (prompt("How many characters of password would you like? \nChoose between 10 up to 64"));
  // Loop if answer is outside parameters
  // The 'while' loop, loops through a block of code as long as a specified condition is true
  while(confirmLength <=10 || confirmLength >= 64) {
  alert("Password length must be between 10-64 characters \nTry again!");
  // Try again!
  var confirmLength = (prompt("How many characters of password would you like? \nChoose between 10 up to 64"));
  }
  // Confirm back the answer of how many characters that user will have
  alert("Your password length is " + confirmLength + " characters");

  // Determine characters of password 
  var confirmSpecialCharacters = confirm("Would you like to include \nSpecial characters?" );
  var confirmNumericCharacters = confirm("Would you like to include \nNumeric characters?" );
  var confirmLowerCasedCharacters = confirm("Would you like to include \nLowercase characters?" );
  var confirmUpperCasedCharacters = confirm("Would you like to include \nUppercase characters?" );
  // Loop if answer is outside parameters
  while(confirmSpecialCharacters === false && confirmNumericCharacters === false && confirmLowerCasedCharacters === false && confirmUpperCasedCharacters === false) {
    alert ("At least one character type should be selected \nTry again!");
    // Try again!
    var confirmSpecialCharacters = confirm("Would you like to include \nSpecial characters?" );
    var confirmNumericCharacters = confirm("Would you like to include \nNumeric characters?" );
    var confirmLowerCasedCharacters = confirm("Would you like to include \nLowercase characters?" );
    var confirmUpperCasedCharacters = confirm("Would you like to include \nUppercase characters?" );
  }
  return getPasswordOptions; //Optional
}

    // Assign an action to the password parameters
    var passwordCharacters = []
    if (confirmSpecialCharacters) {
      passwordCharacters = passwordCharacters.concat(specialCharacters)
    }
    if (confirmNumericCharacters) {
      passwordCharacters = passwordCharacters.concat(numericCharacters)
    }
    if (confirmLowerCasedCharacters) {
      passwordCharacters = passwordCharacters.concat(lowerCasedCharacters)
    }
    if (confirmUpperCasedCharacters) {
      passwordCharacters = passwordCharacters.concat(upperCasedCharacters)
    }
    // Logs password characters
    console.log (passwordCharacters)

    // Empty string, to be fill base on for loop selected random characters from array
    var randomPassword = ""

    for (var i = 0; i < confirmLength; i++) {
      randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];

      console.log(randomPassword)
    }

//  return randomPassword;

// Call getPasswordOptions function
getPasswordOptions();

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);