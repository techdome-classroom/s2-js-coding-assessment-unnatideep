/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Stack to keep track of opening brackets
    const stack = [];
    // Mapping of closing to opening brackets
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (bracketMap[char]) {
            // If the character is a closing bracket
            if (stack.length === 0 || stack[stack.length - 1] !== bracketMap[char]) {
                return false; // Not matching
            }
            stack.pop(); // Pop the matching opening bracket
        } else {
            // If the character is an opening bracket
            stack.push(char);
        }
    }

    // If stack is empty, all brackets matched
    return stack.length === 0;
};

module.exports = { isValid };
