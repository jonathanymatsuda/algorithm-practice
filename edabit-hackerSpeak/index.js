function hackerSpeak(str) {
	var replacementValues = {
		a: 4,
		e: 3,
		i: 1,
		o: 0,
		s: 5
	};

	Object.freeze(replacementValues);

	const strToArray = str.split('')
	for (let i = 0; i < strToArray.length; i++) {
		if (Object.keys(replacementValues).includes(strToArray[i])) {
			strToArray[i] = replacementValues[strToArray[i]]
		}
	}
	return strToArray.join('')
}
