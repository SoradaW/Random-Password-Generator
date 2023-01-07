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
var confirmChoices;

//! Function to prompt user for password options, confirm lenght and characters
function getPasswordOptions() {
  var confirmLength = parseInt(prompt("How many characters of password would you like? \nChoose between 10 up to 64"));
  // Loop if answer is outside parameters
  // The 'while' loop, loops through a block of code as long as a specified condition is true
  while(confirmLength < 10 || confirmLength > 64 || !confirmLength){
    alert("Please choose between 10-64 characters \nTry again!");
    // Try again!
    var confirmLength = parseInt(prompt("How many characters of password would you like? \nChoose between 10 up to 64"));
    }
  // Confirm back the answer of how many characters that user will have
  alert("Your password length is " + confirmLength + " characters");

  // Determine characters of password 
  var confirmSpecialCharacters = confirm("Would you like to include \nSpecial characters?" );
  var confirmNumericCharacters = confirm("Would you like to include \nNumeric characters?" );
  var confirmLowerCasedCharacters = confirm("Would you like to include \nLowercase characters?" );
  var confirmUpperCasedCharacters = confirm("Would you like to include \nUppercase characters?" );
  // Loop if answer is outside parameters
  // using ! will return false same as === false
  while(!confirmSpecialCharacters && !confirmNumericCharacters && confirmLowerCasedCharacters === false && confirmUpperCasedCharacters === false) {
    alert ("At least one character type should be selected \nTry again!");
    // Try again!
    var confirmSpecialCharacters = confirm("Would you like to include \nSpecial characters?" );
    var confirmNumericCharacters = confirm("Would you like to include \nNumeric characters?" );
    var confirmLowerCasedCharacters = confirm("Would you like to include \nLowercase characters?" );
    var confirmUpperCasedCharacters = confirm("Would you like to include \nUppercase characters?" );
  }

  // If statement for user input prompts to determine choices
  // If 4 positive options
  if (confirmSpecialCharacters && confirmNumericCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters){
    confirmChoices = specialCharacters.concat(numericCharacters, lowerCasedCharacters, upperCasedCharacters);
  }
  // Else if 3 positive options
  else if (confirmSpecialCharacters && confirmNumericCharacters && confirmLowerCasedCharacters){
    confirmChoices = specialCharacters.concat(numericCharacters, lowerCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmNumericCharacters && confirmUpperCasedCharacters){
    confirmChoices = specialCharacters.concat(numericCharacters, upperCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters){
    confirmChoices = specialCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  else if (confirmNumericCharacters && confirmLowerCasedCharacters && confirmUpperCasedCharacters){
    confirmChoices = numericCharacters.concat(lowerCasedCharacters, upperCasedCharacters);
  }
  // Else if 2 positive options
  else if (confirmSpecialCharacters && confirmNumericCharacters){
    confirmChoices = specialCharacters.concat(numericCharacters);
  }
  else if (confirmSpecialCharacters && confirmLowerCasedCharacters){
    confirmChoices = specialCharacters.concat(lowerCasedCharacters);
  }
  else if (confirmSpecialCharacters && confirmUpperCasedCharacters){
    confirmChoices = specialCharacters.concat(upperCasedCharacters);
  }
  else if (confirmNumericCharacters && confirmLowerCasedCharacters){
    confirmChoices = numericCharacters.concat(lowerCasedCharacters);
  }
  else if (confirmNumericCharacters && confirmUpperCasedCharacters){
    confirmChoices = numericCharacters.concat(upperCasedCharacters);
  }
  else if (confirmLowerCasedCharacters && confirmUpperCasedCharacters){
    confirmChoices = lowerCasedCharacters.concat(upperCasedCharacters);
  }
  // Else if only 1 option
  else if (confirmSpecialCharacters){
    confirmChoices = specialCharacters;
  }
  else if (confirmNumericCharacters){
    confirmChoices = numericCharacters;
  }
  else if (confirmLowerCasedCharacters){
    confirmChoices = lowerCasedCharacters;
  }
  else if (confirmUpperCasedCharacters){
    confirmChoices = upperCasedCharacters;
  }
}
// Call the function
getPasswordOptions();

//! Function for getting a random element from an array
// Empty array in placeholder to be filled, base on user selected characters
var randomPassword = [];

// Start random selecting arrays and Loop through the selected array
// Using Math to generate a random password
//function getRandom(arr) {}
 // for (var i = 0; i <= confirmLength; i++) {
    //var randomPassword = randomPassword + passwordCharacters [Math.floor(Math.random() * passwordCharacters.length)];
    //confirmLength += confirmLength.substring(randomPassword, randomPassword +1);
    //console.log(arr[i]);
    //console.log(randomPassword)
   // }
   // return randomPassword;
   // console.log("here is password ");
  


//getRandom();

//! Function to generate password with user input
function generatePassword() {}
    
  

//showing password in the input box by using ID password and set a constant of the ID
//document.getElementById("password").value = password;

//! Get references to the #generate element
var generateBtn = document.querySelector('#generate');

//! Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

//! Add event listener to generate button
generateBtn.addEventListener('click', writePassword);