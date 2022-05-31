function sumOfCubes(nums) {
	if (nums.length === 0) {
		return 0
	};
	const arrayCubed = nums.map(num => Math.pow(num, 3));
	const sum = 0;
	return arrayCubed.reduce((prev,cur) => prev + cur, sum)
}
