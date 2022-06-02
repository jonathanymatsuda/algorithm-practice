function cardHide(card) {
	const cardArray = card.split('');
	for (let i = 0; i < cardArray.length - 4; i++) {
		cardArray[i] = '*'
	}
	return cardArray.join('')
}
