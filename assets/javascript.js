// create arrays of special, uppercase, and lowercase characters whose indeces can be used to create random character combinations
var specCharArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var numSpecArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]
var numUpperArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numLowerArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specUpperArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var specLowerArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperLowerArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numSpecUpperArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numUpperLowerArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var specUpperLowerArr = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var numSpecUpperLowerArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


// triggered by clicking "generate password" button in html doc
function generatePassword() {
    
// confirm user preferences for password criteria
    var passLength = prompt("Your password must be between 8 and 128 characters. How long would you like your password to be? (please enter the number only, i.e., '8' or '22', etc.)");
    // convert passLength into number
    var passLengthNum = parseInt(passLength);
    // account for possibility of illegitimate password length request
    if (passLengthNum < 8 || passLengthNum > 128) {
        alert("Please enter a number between 8 and 128");
        generatePassword();
    } else {
    var passCharTypesLower = confirm("Your password must contain: lowercase, uppercase, numeric, and/or special characters. Would you like lowercase letters? ('OK' = yes; 'Cancel' = no)");
    var passCharTypesUpper = confirm("Would you like uppercase letters? ('OK' = yes; 'Cancel' = no)");
    var passCharTypesNum = confirm("Would you like numbers? ('OK' = yes; 'Cancel' = no)");
    var passCharTypesSpec = confirm("Would you like special characters? ('OK' = yes; 'Cancel' = no)");
    }



// create and store functions in variables that randomly generate characters of one type
    var getRandSpecChar = function() {
        return specCharArr[Math.floor(Math.random() * specCharArr.length)];
    }
    var getRandLowerChar = function() {
        return lowerArr[Math.floor(Math.random() * lowerArr.length)];
    }
    var getRandUpperChar = function() {
        return upperArr[Math.floor(Math.random() * upperArr.length)];
    }
    var getRandNum = function() {
        return numArr[Math.floor(Math.random() * 9)];
    }

// create and store functions in variables that randomly generate characters of two types
    var getRandNumSpec = function() {
        return numSpecArr[Math.floor(Math.random() * numSpecArr.length)];
    }
    var getRandNumUpper = function() {
        return numUpperArr[Math.floor(Math.random() * numUpperArr.length)];
    }
    var getRandNumLower = function() {
        return numLowerArr[Math.floor(Math.random() * numLowerArr.length)];
    }
    var getRandSpecUpper = function() {
        return specUpperArr[Math.floor(Math.random() * specUpperArr.length)];
    }
    var getRandSpecLower = function() {
        return specLowerArr[Math.floor(Math.random() * specLowerArr.length)];
    }
    var getRandUpperLower = function() {
        return upperLowerArr[Math.floor(Math.random() * upperLowerArr.length)];
    }

// create and store functions in variables that randomly generate characters of three types
    var getRandNumSpecUpper = function() {
        return numSpecUpperArr[Math.floor(Math.random() * numSpecUpperArr.length)];
    }
    var getRandNumUpperLower = function() {
        return numUpperLowerArr[Math.floor(Math.random() * numUpperLowerArr.length)];
    }
    var getRandSpecUpperLower = function() {
        return specUpperLowerArr[Math.floor(Math.random() * specUpperLowerArr.length)];
    }

// create and store functions in variables that randomly generate characters of all four types
    var getNumSpecUpperLowerArr = function() {
        return numSpecUpperLowerArr[Math.floor(Math.random() * numSpecUpperLowerArr.length)]
    }

    var buildPassword = '';

// create conditionals for:
// all 4 character types
    if (passCharTypesNum === true && passCharTypesSpec === true && passCharTypesUpper === true && passCharTypesLower === true) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getNumSpecUpperLowerArr();
        }
    }

// 3 character types
    if (passCharTypesSpec === true && passCharTypesUpper === true && passCharTypesLower === true && passCharTypesNum === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandSpecUpperLower();
        }
    }

    if (passCharTypesNum === true && passCharTypesUpper === true && passCharTypesLower === true && passCharTypesSpec === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandNumUpperLower();
        }
    }

    if (passCharTypesNum === true && passCharTypesSpec === true && passCharTypesUpper === true && passCharTypesLower === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandNumSpecUpper();
        }
    }

// 2 character types
    if (passCharTypesUpper === true && passCharTypesLower === true && passCharTypesSpec === false && passCharTypesNum === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandUpperLower();
        }
    }

    if (passCharTypesSpec === true && passCharTypesLower === true && passCharTypesUpper === false && passCharTypesNum === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandSpecLower();
        }
    }

    if (passCharTypesSpec === true && passCharTypesUpper === true && passCharTypesLower === false && passCharTypesNum === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandSpecUpper();
        }
    }

    if (passCharTypesNum === true && passCharTypesLower === true && passCharTypesUpper === false && passCharTypesSpec === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandNumLower();
        }
    }

    if (passCharTypesNum === true && passCharTypesUpper === true && passCharTypesLower === false && passCharTypesSpec === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandNumUpper();
        }
    }

    if (passCharTypesNum === true && passCharTypesSpec === true && passCharTypesLower === false && passCharTypesUpper === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandNumSpec();
        }
    }

// 1 character type
    if (passCharTypesLower === true && passCharTypesNum === false && passCharTypesSpec === false && passCharTypesUpper === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandLowerChar();
        }
    }

    if (passCharTypesUpper === true && passCharTypesNum === false && passCharTypesSpec === false && passCharTypesLower === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandUpperChar();
        }
    }

    if (passCharTypesSpec === true && passCharTypesNum === false && passCharTypesLower === false && passCharTypesUpper === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandSpecChar();
        }
    }

    if (passCharTypesNum === true && passCharTypesSpec === false && passCharTypesLower === false && passCharTypesUpper === false) {
        for (i = 0; i < passLengthNum; i++) {
            buildPassword += getRandNum();
        }
    }
    document.getElementById("passwordLabel").innerHTML = ("Your password is: ");
    document.getElementById("password").innerHTML = (buildPassword);
    console.log(buildPassword.length);
}