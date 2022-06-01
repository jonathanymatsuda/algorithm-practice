function countOnes(matrix) {
	let count = 0;
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				count++
			}
		}
	}
	return count
}

// Alternative way to think about it which is much faster (also uses es6)

const countOnes = matrix => matrix.flat().filter(x=> x === 1).length
