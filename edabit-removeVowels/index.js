function removeVowels(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	const strToArray = str.split('');
	for (let i = 0; i < strToArray.length; i++) {
		if (vowels.includes(strToArray[i])) {
			strToArray.splice(i, 1);
			i--
		}
	}
	return strToArray.join('')
}
