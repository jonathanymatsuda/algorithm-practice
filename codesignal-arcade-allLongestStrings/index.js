function solution(inputArray) {
    if (inputArray.length === 1) {
        return inputArray
    };
    let longestArrayLength = inputArray[0].length;
    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i].length > longestArrayLength) {
            longestArrayLength = inputArray[i].length
        }
    };
    return inputArray.filter(longestWord => longestWord.length === longestArrayLength)
}
