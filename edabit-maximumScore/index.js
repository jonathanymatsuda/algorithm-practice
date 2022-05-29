function maximumScore(tileHand) {
	let maxScore = 0;
	for (let i = 0; i < tileHand.length; i++) {
		maxScore += tileHand[i].score
	}
	return maxScore
}
