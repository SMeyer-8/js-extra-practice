// Must Be Perfect
// Given a string value word, set the lastWord variable to:

// the upper-cased string stored in word if the word starts with the letter p and has a length of 7
// the unmodified string stored in word
// For example, if the word is equal to 'apples', lastWord should be equal to 'apples'.
// If the word is equal to 'perfect', 'lastWord' should be equal to 'PERFECT'.

let word = "carrots";
// let word = 'pacific';
// let word = 'perfecto';
// let word = 'perfect';

// YOUR CODE BELOW

let lastWord = word;
if(word.length === 7 && word.indexOf('p') === 0) {
    lastWord = word.toUpperCase();
} 

// Do not the the code below
module.exports = { word, lastWord };
