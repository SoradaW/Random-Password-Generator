// Password criteria
var passwordCriteria = {
  // Array of special characters to be included in password
  specialCharacters: [
    '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
  ],// 23 characters
  // Array of numeric characters to be included in password
  numericCharacters: [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ],// 10 characters
  // Array of lowercase characters to be included in password
  lowerCasedCharacters: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  // Array of uppercase characters to be included in password
  upperCasedCharacters: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ],
  passwordLenght: 0,
}
// Initialise characters
passwordCriteria.passwordLenght = 0;
// Varible declaration to collect input from user prompts
var confirmLength = 0;
var confirmSpecialCharacters;
var confirmNumericCharacters;
var confirmLowerCasedCharacters;
var confirmUpperCasedCharacters;
// Hold the password to be generated upon condition
var confirmChoices = "";


//! Function to prompt user for password options, confirm lenght and characters
function getPasswordOptions() {
  var confirmLength = prompt("How many characters of password would you like? \nChoose between 10 and 64");
    // Loop if answer is outside parameters
    // The 'while' loop, loops through a block of code as long as a specified condition is true
    while (confirmLength < 10 || confirmLength > 64 || !confirmLength){
    alert ("Please choose between 10 and 64 characters \nTry again!");
    // Try again!
    var confirmLength = (prompt("How many characters of password would you like? \nChoose between 10 and 64"));
    }
    // Confirm back the answer of how many characters that user will have
    alert ("Your password length is " + confirmLength + " characters");

      // If user click cancel
      if (confirmLength === null){
        return;
      }
      else {
        // Checking if user enter an integer? using isFinite object
        if (!isFinite(confirmLength)){
          alert("You did not enter a number \nTry again!");
          return;
        }
        else {
          // Call prompts Try again! using internal function to show prompt
          showPrompts();
          // Keep adding password criteria until passwordLength = length that user choosen
          while (passwordCriteria.passwordLenght < confirmLength){
            // Loop if answer is outside parameters
            // By using ! will return false same as === false
            if (!confirmSpecialCharacters && !confirmNumericCharacters && confirmLowerCasedCharacters === false && confirmUpperCasedCharacters === false) {
            alert ("At least one character type should be selected \nTry again!")
            showPrompts();
            }
            else {
              // If only 1 option have been selected
              if (confirmSpecialCharacters === true && passwordCriteria.passwordLenght < confirmLength) {
                var spcChar = passwordCriteria.specialCharacters[Math.floor(Math.random() * 23)]
                confirmChoices = confirmChoices + spcChar;
                passwordCriteria.passwordLenght++;
              } 
              if (confirmNumericCharacters === true && passwordCriteria.passwordLenght < confirmLength) {
                var numChar = passwordCriteria.numericCharacters[Math.floor(Math.random() * 23)]
                confirmChoices = confirmChoices + numChar;
                passwordCriteria.passwordLenght++;
              }  
              if (confirmLowerCasedCharacters === true && passwordCriteria.passwordLenght < confirmLength) {
                var lowChar = passwordCriteria.lowerCasedCharacters[Math.floor(Math.random() * 23)]
                confirmChoices = confirmChoices + lowChar;
                passwordCriteria.passwordLenght++;
              }  
              if (confirmUpperCasedCharacters === true && passwordCriteria.passwordLenght < confirmLength) {
                var upChar = passwordCriteria.upperCasedCharacters[Math.floor(Math.random() * 23)]
                confirmChoices = confirmChoices + upChar;
                passwordCriteria.passwordLenght++;
              }   
            }
          }
        }
      }  
    
  // Calling function to return back password
  return confirmChoices;

  // Function to prompt the user criteria
      // Determine characters of password 
      function showPrompts() {
      confirmSpecialCharacters = confirm("Would you like to include \nSpecial characters?" );
      confirmNumericCharacters = confirm("Would you like to include \nNumeric characters?" );
      confirmLowerCasedCharacters = confirm("Would you like to include \nLowercase characters?" );
      confirmUpperCasedCharacters = confirm("Would you like to include \nUppercase characters?" );
      }
    } 

   // var passwordTest = "";
    //for (let i = 0; i < confirmLength; i ++){
    //  passwordTest += getPasswordOptions[Math.floor(Math.random() * getPasswordOptions.length)]
   // }
   // return passwordTest;}

  //console.log(confirmLength);

// Call the function
getPasswordOptions();

//! Function for getting a random element from an array
function getRandom(specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters) {
  //return specialCharacters[Math.floor(Math.random() * specialCharacters.length)], 
 // numericCharacters[Math.floor(Math.random() * numericCharacters.length)], 
 // lowerCasedCharacters[Math.floor(Math.random() * lowerCasedCharacters.length)],
 // upperCasedCharacters[Math.floor(Math.random() * upperCasedCharacters.length)];
}
getRandom();

//! Function to generate password with user input
function generatePassword() {
 
}
    
// Targeting all necessary HTML elements using unique identifiers
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