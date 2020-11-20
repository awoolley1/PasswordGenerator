// Assign object - potential characters
const characters = {
  low: 'abcdefghijklmnopqrstuvwxyz',
  up: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  num: '0123456789',
  sym: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Assign initializer button and text output
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("password");

// Add event listener to generate button
generateBtn.addEventListener("click", selectProperties) 

// var assignment
var length;
var lowerCase; 
var upperCase; 
var numeric; 
var special; 
var password;

// Build password with prompts & confirms for properties
function selectProperties() {
  var length = Number(prompt("Enter desired password length"));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be between 8 and 128 characters. Please enter again."));

  var lowerCase = confirm("Would you like password to include 'Lower Case' characters?");
  var upperCase = confirm("Would you like password to include 'Upper Case' characters?");
  var numeric = confirm("Would you like password to include 'Numeric' characters?");
  var special = confirm("Would you like password to include 'Special' characters?");

  while (!lowerCase && !upperCase && !numeric && !special) {
    alert("You must select at least one character type!");
    lowerCase = confirm("Would you like password to include 'Lower Case' characters?");
    upperCase = confirm("Would you like password to include 'Upper Case' characters?");
    numeric = confirm("Would you like password to include 'Numeric' characters?");
    special = confirm("Would you like password to include 'Special' characters?");
  }
  }
  
// Generate once conditons met
  if ((!isNaN(length) && !length < 8 && !length > 128) && (lowerCase || upperCase || numeric || special)) {
  
    function generatePassword() {
    
        if (lowerCase) {
          password += characters.low
        };
        if (upperCase) {
          password += charcters.up
        };
        if (numeric) {
          password += charcters.num
        };
        if (special) {
          password += charcters.sym
        };

        for (var i = password.length; i < length; i++) {
          password += characters[Math.floor(Math.random() * characters.length)]    
      }
    }
    
    //call function
    generatePassword

    // Input text
    passwordText.textContent = password;
  }