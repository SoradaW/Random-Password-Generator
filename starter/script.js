// Password criteria
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
// Function to generate password with user input
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

  // Confirm password length
  while (confirmLength < 10 || confirmLength > 64){
    confirmLength = prompt("How many characters of password would you like? \nChoose between 10 and 64");

    // If user click cancel
    if (confirmLength === null){
      alert("Try again!");
      return "Your secure password";
    }
    else {
      // Checking if user enter an integer by using isFinite object
      if (!isFinite(confirmLength)){
        alert("You did not enter a number \nTry again!");
        return "Your secure password";
      }
      else {
        // Checking if password length met the criteria? 
        if (confirmLength < 10 || confirmLength > 64) {
          alert ("Please choose between 10 and 64 characters \nTry again!");
          return "Your secure password";
          }
        else {
          // Call prompts to try again by using internal function to show prompt
          showPrompts(); // Declared fuction below

          // Keep adding password criteria until confirmLength =length that user input
          while (pwdCriteria.pwdLenght < confirmLength){
            // Loop if answer is outside parameters (by using ! will return false same as === false)
            if (!confirmSpecialChar && !confirmNumericChar && confirmLowerCasedChar === false && confirmUpperCasedChar === false) {
            alert ("At least one character type should be selected \nTry again!")
            showPrompts();
            }
            else {
              // If only 1 option have been selected then randomly added characters up to =length
              if (confirmSpecialChar === true && pwdCriteria.pwdLenght < confirmLength) {
                var speChar = pwdCriteria.pwdSpecialChar[Math.floor(Math.random() * 23)]
                pwdResult = pwdResult + speChar;
                pwdCriteria.pwdLenght++;
              } 
              if (confirmNumericChar === true && pwdCriteria.pwdLenght < confirmLength) {
                var numChar = pwdCriteria.pwdNumericChar[Math.floor(Math.random() * 10)]
                pwdResult = pwdResult + numChar;
                pwdCriteria.pwdLenght++;
              }  
              if (confirmLowerCasedChar === true && pwdCriteria.pwdLenght < confirmLength) {
                var lowChar = pwdCriteria.pwdLowerCasedChar[Math.floor(Math.random() * 26)]
                pwdResult = pwdResult + lowChar;
                pwdCriteria.pwdLenght++;
              }  
              if (confirmUpperCasedChar === true && pwdCriteria.pwdLenght < confirmLength) {
                var upChar = pwdCriteria.pwdUpperCasedChar[Math.floor(Math.random() * 26)]
                pwdResult = pwdResult + upChar;
                pwdCriteria.pwdLenght++;
              }   
            }
          }
        }
      }  
    }
    // Calling function to return back the password
    return pwdResult;

    // Function to prompt the user criteria to determine characters of password 
    function showPrompts() {
      confirmSpecialChar = confirm("Would you like to include \nSpecial characters?" );
      confirmNumericChar = confirm("Would you like to include \nNumeric characters?" );
      confirmLowerCasedChar = confirm("Would you like to include \nLowercase characters?" );
      confirmUpperCasedChar = confirm("Would you like to include \nUppercase characters?" );
    }
  } 
}
    
// Targeting all necessary HTML elements using unique identifiers
// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // Set passwordText to the test area on.HTML with the ID of password
  var passwordText = document.querySelector('#password');
  // Update the text area with the new password
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);