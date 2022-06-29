/**
 * @param {string} s
 * @return {boolean}
 */
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbers = ['0','1','2','3','4','5','6','7','8','9']

var isPalindrome = function(s) {
    const lowerCase = s.toLowerCase()
    const sToArray = lowerCase.split('')

    const sToArrayFiltered = []

    for (let i = 0; i < sToArray.length; i++) {
        if (alphabet.includes(sToArray[i]) || numbers.includes(sToArray[i])) {
            sToArrayFiltered.push(sToArray[i])
        }
    }

    return sToArrayFiltered.join('') === sToArrayFiltered.reverse().join('') ? true : false
};
