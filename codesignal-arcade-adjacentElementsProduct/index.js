// Manual solution
function solution(inputArray) {
  const productPairs = [];
  let placeholderValue = 0;
  for (let i = 0; i < inputArray.length - 1; i++) {
    placeholderValue = 0;
    placeholderValue += inputArray[i];
    let productPair = placeholderValue * inputArray[i + 1];
    productPairs.push(productPair);
  }
  return Math.max(...productPairs)
}
