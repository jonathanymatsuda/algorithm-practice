/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  const indices = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        indices.push(i, j)
      }
    }
  }
  return indices
}

// Two Pass Hash
var twoSum = function(nums, target) {
    const indicesHash = {}

    nums.forEach((number, index) => {
        indicesHash[number] = index
    })

    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        if (indicesHash[difference] !== undefined && indicesHash[difference] !== i) {
            return [i, indicesHash[difference]]
        }
    }
}
