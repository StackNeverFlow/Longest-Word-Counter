// Please enter the name of the file you want to use as your wordlist
var wordlist = ""

var fs = require("fs");
var words = fs.readFileSync(wordlist).toString();
words = words.split("\n");


var longestWord = "";

for(var testWord of words) {
    if(testWord.length <= longestWord.length) {
        continue;
    }

    longestWord = testWord;
}

console.log(longestWord);
console.log(longestWord.length - 1);