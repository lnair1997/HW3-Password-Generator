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

function generatePassword() {
  charaNumber= prompt('How many characters would you like? \nPick a number between 8 and 128.');

  if (charaNumber< 8 || charaNumber > 128 || charaNumber=='') {
    alert('Password needs to be between 8 and 128.')

} else {
  var confirmUpper = confirm('Do you want upper case letter?');
  var confirmLower = confirm('Do you want lower case letters?');
  var confirmNumber= confirm('Do you want numbers?');
  var confirmSpecial= confirm('Do you want special characters?');
}}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
