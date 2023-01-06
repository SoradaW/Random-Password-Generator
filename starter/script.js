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

// Function to prompt user for password options confirm lenght
function getPasswordOptions() {
  var confirmLength = (prompt("How many characters of password would you like? Choose between 10 up to 64"));
  // Loop if answer is outside parameters
  // The 'while' loop, loops through a block of code as long as a specified condition is true
  while(confirmLength <=10 || confirmLength >= 64) {
  alert("Password lenght must be between 10-64 characters. Try again!");
  var confirmLength = (prompt("How many characters of password would you like? Choose between 10 up to 64"));
  }
  // Repeat back user answer // option
  alert("Your password will be ${confirmLenght} characters");
}
  // Determine parameters of password 
  var confirmSpecialCharacters = confirm("Would you like to include special characters?" );
  var confirmNumericCharacters = confirm("Would you like to include numeric characters?" );
  var confirmLowerCasedCharacters = confirm("Would you like to include lower case characters?" );
  var confirmUpperCasedCharacters = confirm("Would you like to include upper case characters?" );
  // Loop if answer is outside parameters
  while(confirmSpecialCharacters === false && confirmNumericCharacters === false && confirmLowerCasedCharacters === false && confirmUpperCasedCharacters === false) {
    alert ("At least one character type should be selected")
  }





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