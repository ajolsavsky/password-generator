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

////

// Create empty string for character confirmations to push into if validated
var characterArray = [];


// Password Generator Function
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
var uppercase = confirmUppercase();

// Lowercase validation
var lowercase = confirmLowercase();

// Numeric validation
var numeric = confirmNumeric();

// Special characters
var specialCharacters = confirmSpecialCharacters();

// Create alert if all four cases were negative, return to top of function
if(uppercase === false && lowercase === false && numeric === false && specialCharacters === false){
  alert('Error: No characters were selected. Please click "OK" for at least 1 of the following: Uppercase, Lowercase, Numeric, Special Characters')
  characterValidationSeries();
}

// Convert existing array into single string of characters with no spaces
var characterArrayText = characterArray.join("");

//Function to call to make an id at random from the string (converted from array)
  var result = '';
  var characters = characterArrayText;
  var charactersLength = characters.length;
  for (var i=0; i < userCharLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// Uppercase function
function confirmUppercase() {
  var uppercase = window.confirm("Should we include uppercase letters?")

  if(uppercase){
    alert("YES - we will include uppercase letters.")
    characterArray[0] = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
  }
  
  else{
    alert("NO - we will not include uppercase letters.")
    uppercase = false;
  }
  
  console.log("the value of uppercase is " + uppercase);
  return uppercase;
};

// Lowercase function
function confirmLowercase() {
  var lowercase = window.confirm("Should we include lowercase letters?")

  if(lowercase){
    alert("YES - we will include lowercase letters.")
    characterArray[1] = ["abcdefghijklmnopqrstuvwxyz"]
  }

  else{
    alert("NO - we will not include lowercase letters.")
    lowercase = false;
  }

  return lowercase;

};

// Numeric function
function confirmNumeric() {
  var numeric = window.confirm("Should we include numeric values?")

  if(numeric){
    alert("YES - we will include numeric values.");
    characterArray[2] = ["0123456789"]
  }

  else{
    alert("NO - we will not include numeric values.")
    numeric = false;
  }

  return numeric;
};

// Special characters function
function confirmSpecialCharacters() {
  var specialCharacters = window.confirm("Should we include special characters?")

  if(specialCharacters){
    alert("YES - we will include special characters.");
    characterArray[3] = ["!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"]
  }

  else{
    alert("NO - we will not include special characters.")
    specialCharacters = false;
  }

  return specialCharacters;
};

function characterValidationSeries() {
  var uppercase = confirmUppercase();
  var lowercase = confirmLowercase();
  var numeric = confirmNumeric();
  var specialCharacters = confirmSpecialCharacters();

  return uppercase, lowercase, numeric, specialCharacters;
}

