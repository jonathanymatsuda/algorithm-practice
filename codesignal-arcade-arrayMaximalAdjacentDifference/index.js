function solution(inputArray) {
    const tempStorage = []
    for (let i = 0; i < inputArray.length - 1; i++) {
        let subtractedValue = inputArray[i] - inputArray[i + 1]
        tempStorage.push(Math.abs(subtractedValue))
    }
    return Math.max(...tempStorage)
}
