function solution(n) {
    const numberString = n.toString();
    const firstHalf = numberString.slice(0, numberString.length / 2);
    const secondHalf = numberString.slice(numberString.length / 2, numberString.length);
    let firstHalfSum = 0;
    let secondHalfSum = 0;
    for (let i = 0; i < firstHalf.length; i++) {
        firstHalfSum += Number(firstHalf[i])
        secondHalfSum += Number(secondHalf[i])
    }

    return firstHalfSum === secondHalfSum ? true : false
}
