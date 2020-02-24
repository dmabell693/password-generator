// create arrays of special, uppercase, and lowercase characters whose indeces can be used to create random character combinations
var specCharArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// triggered by clicking "generate password" button in html doc
function generatePassword() {
    
    var passLength = prompt("Your password must be between 8 and 128 characters. How long would you like your password to be? (please enter the number only, i.e., '8' or '22', etc.)");

    var passCharTypesLower = confirm("Your password must contain: lowercase, uppercase, numeric, and/or special characters. Would you like lowercase letters? ('OK' = yes; 'Cancel' = no)");

    var passCharTypesUpper = confirm("Would you like uppercase letters? ('OK' = yes; 'Cancel' = no)");

    var passCharTypesNum = confirm("Would you like numbers? ('OK' = yes; 'Cancel' = no)");

    var passCharTypesSpec = confirm("Would you like special characters? ('OK' = yes; 'Cancel' = no)");

    var passLengthNum = parseInt(passLength);
    var randSpecCharArr = specCharArr[Math.floor(Math.random() * specCharArr.length)];
    var randLowerArr = lowerArr[Math.floor(Math.random() * lowerArr.length)];
    var randUpperArr = upperArr[Math.floor(Math.random() * upperArr.length)];
    var randNum = Math.floor(Math.random() * 9);

    var optionsArr = [randSpecCharArr, randLowerArr, randUpperArr, randNum];

    // function generateChar() {
    //     return optionsArr[Math.floor(Math.random() * optionsArr.length)][Math.floor(Math.random() * randSpecCharArr.length)];
    // }
    // console.log(generateChar);
    if (passCharTypesLower === true && passCharTypesUpper === true && passCharTypesNum === true && passCharTypesSpec === true) {
        alert("Your password is: " + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)] + optionsArr[Math.floor(Math.random() * optionsArr.length)]);

        // for (i = 0; i < passLengthNum; i++) {
        //     generateChar;
        // }
    }

}

console.log(specCharArr.length);
console.log(lowerArr.length);
console.log(upperArr.length);