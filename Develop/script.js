// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var characters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789", "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]

//Password Generator Function
function generatePassword() {

  // Character Length Prompt
  var charLength = window.prompt("Enter your desired password character length (between 8-128 characters.", "ex. 8, 55, 128");
  
  // If user selects cancel, exit function
  if(!charLength){
    return;
  }

  // If user enters a numeric value between 8-128, log entry and continue to character prompts
  if(charLength >= 8 && charLength <= 128){
    console.log("user entered value between 8 and 128");
    var userCharLength = charLength;
    console.log(userCharLength);

  // If user enters value ourside of 8-128, prompt alert message and return to top of function
  } else {
    console.log("user entered value outside of 8-128");
    alert("Please enter a number between 8-128");
    generatePassword();
  }

// Uppercase validation
var uppercase = window.confirm("Should we include uppercase letters?")

if(uppercase){
  alert("YES - we will include uppercase letters.")
}

if(!uppercase){
  alert("NO - we will not include uppercase letters.")
  uppercase = false;
}

console.log("the value of uppercase is " + uppercase);

// Lowercase validation
var lowercase = window.confirm("Should we include lowercase letters?")

if(lowercase){
  alert("YES - we will include lowercase letters.")
}

if(!lowercase){
  alert("NO - we will not include lowercase letters.")
  lowercase = false;
}

console.log("the value of lowercase is " + lowercase);

// Numeric validation
var numeric = window.confirm("Should we include numeric values?")

if(numeric){
  alert("YES - we will include numeric values.")
}

if(!numeric){
  alert("NO - we will not include numeric values.")
  numeric = false;
}

console.log("the value of numeric is " + numeric);

// Special characters
var specialCharacters = window.confirm("Should we include special characters?")

if(specialCharacters){
  alert("YES - we will include special characters.")
}

if(!specialCharacters){
  alert("NO - we will not include special characters.")
  specialCharacters = false;
}

console.log("the value of specialCharacters is " + specialCharacters)

console.log("Uppercase = " + uppercase + "\nLowercase = " + lowercase + "\nNumeric = " + numeric + "\nSpecial = " + specialCharacters)

if(uppercase === false && lowercase === false && numeric === false && specialCharacters === false){
  alert('Error: No characters were selected. Please click "OK" for at least 1 of the following: Uppercase, Lowercase, Numeric, Special Characters')
  generatePassword();
}

function makeid(length) {
    var result = '';
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    var charactersLength = characters.length;
    for (var i=0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

  }

  alert("Your new password is: " + makeid(userCharLength));

}