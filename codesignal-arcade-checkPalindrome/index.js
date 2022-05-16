function solution(inputString) {
  if (inputString.length === 1) {
    return true
  }
  let reversedInputString = '';
  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedInputString += inputString[i]
  };
  if (reversedInputString !== inputString) {
    return false
  };
  return true
}
