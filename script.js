//Create arrays
var characterNumeric = [0,1,2,3,4,5,6,7,8,9]
var characterLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var characterUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var characterSpecial = ["!","#","$","%","&","(",")","*","+","-",".","/",":",";","<","=",">","?","@","[","\",","{","|","}","~"]

var generate = [];

//Pushes possible outcomes into array
function generatePassword() {
  var pwLength = prompt("How many characters do you want in your password? (Please only choose between 8 and 128 characters)");
  console.log(pwLength)

  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)=== true ){
    alert("Please enter a number between 8 and 128 characters")
    return;
  }

  var numeric = confirm("Do you want to use numbers?");
  var lowercase = confirm("Do you want to use lower case letters?");
  var uppercase = confirm("Do you want to use upper case letters?");
  var special = confirm("Do you want to use special characters?");
  

  if (numeric) {
    generate = generate.concat(characterNumeric)
  }


  if (lowercase) {
    generate = generate.concat(characterLowercase)
  }

  if (uppercase) {
    generate = generate.concat(characterUppercase)
  }

  if (special) {
    generate = generate.concat(characterSpecial)
  }

  console.log(generate)

  var password = [];

  for (var i = 0; i < pwLength; i++) {
    var choices = generate[Math.floor(Math.random() * generate.length)];
    password.push(choices);
  }

  return password.join("");

}

//Create new function that grabs all the password functions




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
