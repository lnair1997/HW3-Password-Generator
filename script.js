// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Variables in the random generate password
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var numbers = '0123456789'.split('');
var specialChara = '~`!@#$%^&*()-_=+'.split('');
var userPassword = [];
var charaSets= [];
// Generate random password function

function generatePassword() {
  charaNumber = prompt('How many characters would you like? \nPick a number between 8 and 128.');
  var pslength = parseInt(charaNumber) //turns Input into an integer
 
  if (pslength >= 8 && pslength <= 128 && Number.isInteger(pslength)) {
    

    var confirmUpper = confirm('Do you want upper case letter?');
    var confirmLower = confirm('Do you want lower case letters?');
    var confirmNumber = confirm('Do you want numbers?');
    var confirmSpecial = confirm('Do you want special characters?');

    if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
      alert('You must choose atleast one character set!');
    }

    if (confirmUpper) {
      charaSets= charaSets.concat(upperCase);
    }

    if (confirmLower) {
      charaSets= charaSets.concat(lowerCase);
      
    }

    if (confirmNumber) {
      charaSets= charaSets.concat(numbers);
    }

    if (confirmSpecial) {
      charaSets= charaSets.concat(specialChara);
      console.log(charaSets);
    }

  } else {
    alert('Password needs to be between 8 and 128.');
  }
  
}





  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
