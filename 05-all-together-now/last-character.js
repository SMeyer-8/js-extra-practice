// Last Character
// Define a function lastCharacter that accepts two strings as arguments.
// lastCharacter should return true if both strings end with the same character.
// Otherwise, lastCharacter should return false.

// Example:
// lastCharacter('apples', 'pumpkins'); // => true
// lastCharacter('marker', 'pen'); // => false

// YOUR CODE BELOW
function lastCharacter(str, str2) {
    let last1 = str[str.length - 1];
    let last2 = str2[str2.length - 1];
    return last1 === last2;
}
// Do not change the code below
module.exports = { lastCharacter };
