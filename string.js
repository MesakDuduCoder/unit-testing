function stringLength(string) {
  if (string.length <= 0) {
    throw new Error('string length is less than 1');
  } 
  else if (string.length > 10) {
    throw new Error('string length is greater than 10');
  }
  return string.length;
}

module.exports = stringLength;
