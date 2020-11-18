// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 


function generatePassword() {
  var length = prompt("Enter desired password length")
  var lowerCase = confirm("Would you like password to include 'Lower Case' characters?")
  var upperCase = confirm("Would you like password to include 'Upper Case' characters?")
  var numeric = confirm("Would you like password to include 'Numeric' characters?")
  var special = confirm("Would you like password to include 'Special' characters?")
  }
 