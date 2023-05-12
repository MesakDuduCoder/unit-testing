function reverseString(string) {
    let reverse = string.split("").reverse().join("");
    console.log(reverse);
  return reverse
}
module.exports = reverseString;