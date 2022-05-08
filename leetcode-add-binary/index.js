var addBinary = function (a, b) {
  var lenA = a.length;
  var lenB = b.length;
  var max = Math.max(lenA, lenB);
  var result = '';
  var carry = 0;
  var valueInBase10 = 0;

  for (let i = 0; i < max; i++) {
    valueInBase10 = Number(a[lenA - 1 - i] || 0) + Number(b[lenB - 1 - i] || 0) + carry
    carry = Math.floor(valueInBase10 / 2)
    result = (valueInBase10 % 2) + result
  }

  if (carry)
    result = 1 + result;

  return result
};
