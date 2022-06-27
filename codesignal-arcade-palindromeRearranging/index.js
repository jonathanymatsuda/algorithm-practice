function solution(inputString) {
    const stringArray = inputString.split('')
    const letterObject = {}
    let letterOddCount = 0

    for (let i = 0; i < stringArray.length; i++) {
        if (letterObject[stringArray[i]] === undefined) {
            letterObject[stringArray[i]] = 1
        } else {
            letterObject[stringArray[i]]++
        }
    }

    for (key in letterObject) {
        if (letterObject[key] % 2) {
            letterOddCount++
        }
    }

    return letterOddCount <= 1 ? true : false
}
