function solution(inputArray) {
    let moves = 0
    for (let i = 0; i < inputArray.length; i++) {
        while (inputArray[i] >= inputArray[i + 1]) {
            inputArray[i + 1]++
            moves++
        }
    }
    return moves
}
