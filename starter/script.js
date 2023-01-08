// Password criterianumericChar
var pwdCriteria = {
  // Array of special characters to be included in password
  pwdSpecialChar: [
    '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
  ],// 23 characters
  // Array of numeric characters to be included in password
  pwdNumericChar: [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
  ],// 10 characters
  // Array of lowercase characters to be included in password
  pwdLowerCasedChar: [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ],
  // Array of uppercase characters to be included in password
  pwdUpperCasedChar: [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
  ],
  pwdLenght: 0,
}

// Function to handle the operations to generate a new password
//! Function to generate password with user input
function generatePassword() {
  // Initialise characters
  pwdCriteria.pwdLenght = 0;

  // Varible declaration to collect input from user prompts
  var confirmLength = 0;
  var confirmSpecialChar;
  var confirmNumericChar;
  var confirmLowerCasedChar;
  var confirmUpperCasedChar;
  // Hold the password to be generated upon condition and return
  var pwdResult = "";


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
          while (pwdCriteria.pwdLenght < confirmLength){
            // Loop if answer is outside parameters
            // By using ! will return false same as === false
            if (!confirmSpecialChar && !confirmNumericChar && confirmLowerCasedChar === false && confirmUpperCasedChar === false) {
            alert ("At least one character type should be selected \nTry again!")
            showPrompts();
            }
            else {
              // If only 1 option have been selected
              if (confirmSpecialChar === true && pwdCriteria.pwdLenght < confirmLength) {
                var spcChar = pwdCriteria.pwdSpecialChar[Math.floor(Math.random() * 23)]
                pwdResult = pwdResult + spcChar;
                pwdCriteria.pwdLenght++;
              } 
              if (confirmNumericChar === true && pwdCriteria.pwdLenght < confirmLength) {
                var numChar = pwdCriteria.pwdNumericChar[Math.floor(Math.random() * 23)]
                pwdResult = pwdResult + numChar;
                pwdCriteria.pwdLenght++;
              }  
              if (confirmLowerCasedChar === true && pwdCriteria.pwdLenght < confirmLength) {
                var lowChar = pwdCriteria.pwdLowerCasedChar[Math.floor(Math.random() * 23)]
                pwdResult = pwdResult + lowChar;
                pwdCriteria.pwdLenght++;
              }  
              if (confirmUpperCasedChar === true && pwdCriteria.pwdLenght < confirmLength) {
                var upChar = pwdCriteria.pwdUpperCasedChar[Math.floor(Math.random() * 23)]
                pwdResult = pwdResult + upChar;
                pwdCriteria.pwdLenght++;
              }   
            }
          }
        }
      }  
    
  // Calling function to return back password
  return pwdResult;

  // Function to prompt the user criteria
      // Determine characters of password 
      function showPrompts() {
      confirmSpecialChar = confirm("Would you like to include \nSpecial characters?" );
      confirmNumericChar = confirm("Would you like to include \nNumeric characters?" );
      confirmLowerCasedChar = confirm("Would you like to include \nLowercase characters?" );
      confirmUpperCasedChar = confirm("Would you like to include \nUppercase characters?" );
      }
    } 

   // var passwordTest = "";
    //for (let i = 0; i < confirmLength; i ++){
    //  passwordTest += getPasswordOptions[Math.floor(Math.random() * getPasswordOptions.length)]
   // }
   // return passwordTest;}

  //console.log(confirmLength);

// Call the function
//getPasswordOptions();

//! Function for getting a random element from an array
function getRandom(specialChar, numericChar, lowerCasedChar, upperCasedChar) {
  //return specialChar[Math.floor(Math.random() * specialChar.length)], 
 // numericChar[Math.floor(Math.random() * numericChar.length)], 
 // lowerCasedChar[Math.floor(Math.random() * lowerCasedChar.length)],
 // upperCasedChar[Math.floor(Math.random() * upperCasedChar.length)];
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