function solution(inputString) {
    while(inputString.includes('(')) {
        const endBracket = inputString.indexOf(')')
        const startBracket = inputString.lastIndexOf('(', endBracket)
        const substring = inputString.slice(startBracket + 1,endBracket)
        const substringReversed = substring.split('').reverse().join('')
        inputString = inputString.slice(0, startBracket) + substringReversed + inputString.slice(endBracket + 1)
    }
    return inputString
}
