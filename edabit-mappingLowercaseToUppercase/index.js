function mapping(letters) {
	const letterObject = {};
	for (let i = 0; i < letters.length; i++) {
		letterObject[letters[i]] = letters[i].toUpperCase()
	}
	return letterObject
}
