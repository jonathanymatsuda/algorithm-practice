function countVowels(str) {
	const vowels = 'aeiouAEIOU'
	let counter = 0;
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			counter++
		}
	}
	return counter
}
