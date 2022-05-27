function objectToArray(obj) {
	let array = []
	for (property in obj) {
		const keyValuePair = [property, obj[property]];
		array.push(keyValuePair)
	}
	return array
}
