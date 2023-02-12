// My Mnemonic
// Write a function myMnemonic that accepts up to four strings. myMnemonic should return a new string of the first characters for each string argument.

// Note that the user may not pass in all four strings!

// Example:
// myMnemonic('Must', 'Accept', 'Sugar', 'Happiness'); // => MASH
// myMnemonic('We', 'Eat', 'Eggs'); // => WEE

// YOUR CODE BELOW
function myMnemonic(param1, param2, param3, param4) {
    let mnemonic = '';
    if(param1)
        mnemonic += param1[0];
    if(param2)
        mnemonic += param2[0];
    if(param3)
        mnemonic += param3[0];
    if(param4)
        mnemonic += param4[0];

    return mnemonic;
}

// Do not change the code below this line
module.exports = { myMnemonic };
