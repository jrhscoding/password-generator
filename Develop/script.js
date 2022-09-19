// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var password = '';
  var passwordLength = Number(prompt('How many characters would you like your password to be?'));
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
