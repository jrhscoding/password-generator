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
  while (passwordLength < 8) passwordLength = Number(prompt('Password must be greater than 8 characters, please select a new length'));
  while (passwordLength > 128) passwordLength = Number(prompt('Password must be less than 128 characters, please select a new length'));

  console.log(passwordLength);

  var uppercase = confirm('Include uppercase letters in your password?');
  var lowercase = confirm('Include lowercase letters in your password?');
  var numbers = confirm('Include numbers in your password?');
  var symbols = confirm('Include symbols in your password?');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
