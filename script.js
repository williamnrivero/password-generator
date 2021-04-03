//create arrays
var characterNumeric = [0,1,2,3,4,5,6,7,8,9]
var characterLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var characterUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var characterSpecial = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","{","|","}","~"]

//Pushes possible outcomes into array
function generatePassword() {
  var length = prompt("How many characters do you want in your password? (Please only choose between 8 and 128 characters)");
  console.log(length)

  var characterLowercase = confirm("Do you want to use lower case letters?");
  console.log(characterLowercase)

  var characterUppercase = confirm("Do you want to use upper case letters?");
  console.log(characterUppercase)

  var characterNumeric = confirm("Do you want to use numbers?");
  console.log(characterNumeric)

  var characterSpecial = confirm("Do you want to use special characters?");
  console.log(characterSpecial)

}

//create new function that grabs all the password functions



// Get references to the #generate element
 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
