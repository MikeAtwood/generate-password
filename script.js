// Assignment code here


var passwordLength = 8;
var choiceArr = [];

var specialCharArr = ['@', '!', '#', '$', '%', '^', '&', '*', '<', '>', '/', '?', '|'];
var lowercaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
var uppercaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomValue = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomValue];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var correctPrompts = getPrompts();

  if (correctPrompts) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = newPassword;
  } else {
      passwordText.value = "";
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)



function getPrompts() {
  choiceArr = [];
  passwordLength = parseInt(prompt("How many characters do you want your password to be? (8 - 128 characters"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password Length has to be a number, betweeen 8 & 128 characters. Please try again.");
    return false;
  }

  if (confirm("Would you like your password to contain lowercase letters?")) {
    choiceArr = choiceArr.concat(lowercaseArr);
  }
  if (confirm("Would you like your password to contain uppercase letters?")) {
    choiceArr = choiceArr.concat(uppercaseArr);
  }
  if (confirm("Would you like your password to contain special characters?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like your password to contain numbers?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}