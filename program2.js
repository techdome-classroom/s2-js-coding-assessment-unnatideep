/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Mapping of Roman numerals to their integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    let prevValue = 0;
    
    // Iterate over the Roman numeral string in reverse
    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = romanMap[s[i]];
        
        // Determine if we should add or subtract the current value
        if (currentValue < prevValue) {
            total -= currentValue; // Subtract if the current value is less than the previous
        } else {
            total += currentValue; // Otherwise, add it
        }
        
        prevValue = currentValue; // Update the previous value
    }
    
    return total;
};

module.exports = { romanToInt };
