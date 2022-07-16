function solution(inputArray) {
    inputArray = inputArray.sort((a,b) => a - b)
    const lastElement = inputArray[inputArray.length - 1]
    for (let i = 1; i <= lastElement + 1 ;i++) {
        if(inputArray.every(element => element % i !== 0)) {
            return i
        }
    }
}
