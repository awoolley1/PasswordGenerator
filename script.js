// Assign object - potential characters
const characters = {
  low: "abcdefghijklmnopqrstuvwxyz",
  up: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  num: "0123456789",
  sym: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Assign initializer button and text output
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", selectProperties);

// var assignment
var length;
var lowerCase;
var upperCase;
var numeric;
var special;
var password = "";
var finalPassword = "";

function generatePassword() {
  if (lowerCase) {
    password += characters.low;
  }
  if (upperCase) {
    password += characters.up;
  }
  if (numeric) {
    password += characters.num;
  }
  if (special) {
    password += characters.sym;
  }
}
// Build password with prompts & confirms for properties
function selectProperties() {

  passwordText.textContent = "";
  password = "";
  finalPassword = "";

   length = Number(prompt("Enter desired password length"));
  while (isNaN(length) || length < 8 || length > 128)
    length = Number(
      prompt("Length must be between 8 and 128 characters. Please enter again.")
    );

   lowerCase = confirm(
    "Would you like password to include 'Lower Case' characters?"
  );
   upperCase = confirm(
    "Would you like password to include 'Upper Case' characters?"
  );
   numeric = confirm(
    "Would you like password to include 'Numeric' characters?"
  );
   special = confirm(
    "Would you like password to include 'Special' characters?"
  );

  while (!lowerCase && !upperCase && !numeric && !special) {
    alert("You must select at least one character type!");
    lowerCase = confirm(
      "Would you like password to include 'Lower Case' characters?"
    );
    upperCase = confirm(
      "Would you like password to include 'Upper Case' characters?"
    );
    numeric = confirm(
      "Would you like password to include 'Numeric' characters?"
    );
    special = confirm(
      "Would you like password to include 'Special' characters?"
    );
  }

    // Call function
    generatePassword();

    // Randomize 
    for (var i =0; i < length; i++) {
      finalPassword += password[Math.floor(Math.random() * password.length)];
    }
    // Display text
    passwordText.textContent = finalPassword;

   
  }

