function mauriceWins(mSnails, sSnails) {
	let mauriceDubs = 0;
	let steveDubs = 0;
	mSnails[0] > sSnails[2] ? mauriceDubs++ : steveDubs++;
	mSnails[1] > sSnails[0] ? mauriceDubs++ : steveDubs++;
	mSnails[2] > sSnails[1] ? mauriceDubs++ : steveDubs++;
	return mauriceDubs > steveDubs ? true : false
}
