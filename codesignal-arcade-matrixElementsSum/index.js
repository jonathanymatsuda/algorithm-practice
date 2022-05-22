function solution(matrix) {
    let totalCost = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0 && i + 1 < matrix.length) {
                matrix[i + 1][j] = 0
            }
            totalCost += matrix[i][j]
        }
    }
    return totalCost
}
