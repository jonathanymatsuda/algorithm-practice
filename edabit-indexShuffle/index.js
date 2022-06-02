function indexShuffle(str) {
	let evenIndexed = '';
	let oddIndexed = '';
	for (let i = 0; i < str.length; i++) {
		if (i % 2 === 0) {
			evenIndexed += str[i]
		} else {
			oddIndexed += str[i]
		}
	}
	return `${evenIndexed}${oddIndexed}`
}
