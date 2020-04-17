// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Variables in the random generate password
var upperCase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase= upperCase.toLowerCase();
var numbers= '0123456789';
var SpecialChara= '~`!@#$%^&*()-_=+';

// Generate random password function

function generatePassword()


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
