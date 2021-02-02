//Global array for outside funtion.
var lowerArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialArray = ["~","@", "!", "#", "$", "%", "^", "&", "*", "-", "_", "/", ".", ">", "<", "[", "]"];
var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Crate a funtuon Generate password
// I hava a length and he can me smaller then 8 and biger then 129 caracters
// A return button at the end, if the number is less than 8 or greater than 128.

function generatePassword() {
    var lenght = prompt("Choose a password");
    if (lenght < 8 || lenght > 128) {
        alert("The password must be between 8 to 128 characters");
        return;
    }
    // User validation will ask and alert you if you are agree whit this options, if the answer will be yes at the end you will have a password
    // if the answer will be no the funcion will return at the beginning
    var lowerCase = confirm("password contains Lowercases, do you agree?");
    var upperCase = confirm("Password contains uppercase letters, do you agree?");
    var numeric = confirm("Password contains nummbers, do you agree?");
    var specialCharacters = confirm("Password contains special caracters, do you agree?");
    if (lowerCase === false && upperCase === false && numeric === false && specialCharacters === false) {
        alert("Let's start!");
        return;

    }

    // The concat () method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
    var options = [];
    var results = [];
    if (lowerCase === true) {
        options = options.concat(lowerArray);
    }
    if (upperCase === true) {
        options = options.concat(upperArray);
    }
    if (numeric === true) {
        options = options.concat(numericArray);
    }
    if (specialCharacters === true) {
        options = options.concat(specialArray);
    }

    // The Math.floor() function returns the largest integer less than or equal to a given number.
    // The password can be rondom becouse  Match.rondom
    for (var i = 0; i < lenght; i++) {
        results.push(options[Math.floor(Math.random() * options.length)])
    }
    return results.join("");

}
// 
// <button id="generate" class="btn">Generate Password</button>
// I can press the button and he will generete me password imput
var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
// The EventTarget method addEventListener() sets up a function that will be called whenever the specified event is delivered to the target. 
// Add generate button.
generateBtn.addEventListener("click", writePassword);


