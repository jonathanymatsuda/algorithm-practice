function afterNYears(names, n) {
	for (const property in names) {
		names[property] += Math.abs(n)
	}
	return names
}
