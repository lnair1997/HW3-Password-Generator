// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  // if (password===undefined) {
  //   return writePassword();
  
  // }
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Variables in the random generate password
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numbers = '0123456789'.split('');
var specialChara = '~`!@#$%^&*()-_=+'.split('');
var userPassword = [];
var charaSets = [];

// Generate random password function

function generatePassword() {
  charaNumber = prompt('How many characters would you like? \nPick a number between 8 and 128.');
  var psLength = parseInt(charaNumber) //turns Input into an integer

  if (psLength >= 8 && psLength <= 128 && Number.isInteger(psLength)) {


    var confirmUpper = confirm('Do you want upper case letter?');
    var confirmLower = confirm('Do you want lower case letters?');
    var confirmNumber = confirm('Do you want numbers?');
    var confirmSpecial = confirm('Do you want special characters?');

    if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
      alert('You must choose atleast one character set!');
    }

    if (confirmUpper) {
      charaSets = charaSets.concat(upperCase);
      // userPassword = userPassword.concat(upperCase[Math.floor(Math.random() * upperCase.length)]);
      userPassword += upperCase[Math.floor(Math.random() * upperCase.length)];

    }

    if (confirmLower) {
      charaSets = charaSets.concat(lowerCase);
      userPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];

    }

    if (confirmNumber) {
      charaSets = charaSets.concat(numbers);
      userPassword += numbers[Math.floor(Math.random() * numbers.length)];
    }

    if (confirmSpecial) {
      charaSets = charaSets.concat(specialChara);
      userPassword += specialChara[Math.floor(Math.random() * specialChara.length)];

    }

    psLength = psLength - userPassword.length;

    for (var i = 0; i < psLength; i++) {
      // Generate a random decimal number between 0 and length of array
      var num = Math.random();
      var wholeNum = Math.floor(num * charaSets.length)

      charaSets[wholeNum] 

      userPassword += charaSets[wholeNum] 
    }

    
  return userPassword;

  } else {
    alert('Password needs to be between 8 and 128.');
  }
 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
