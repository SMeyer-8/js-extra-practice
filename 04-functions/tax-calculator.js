// Tax Caclulator
// Define a function taxCalculator that accepts the price of an item and a state.
// taxCalculator should return the after-tax cost of the item, assuming NY's tax is 4% and NJ's sales tax is 6.625%.
// Example:
// taxCalculator(100, 'NY'); // => 104
// taxCalculator(100, 'NJ'); // => 106.625

// YOUR CODE BELOW
function taxCalculator(price, state) {
    let tax = state === 'NY' ? 0.04 : 0.06625;
    return price + price * tax;
}
// Do not change the code below
module.exports = { taxCalculator };
