const stringLength = require("./string.js");

test("stringLength returns the correct length of a string", () => {
  expect(stringLength("hello")).toBe(5);
});

test("stringLength throws an error for strings with length greater than 10", () => {
  expect(() => {
    stringLength("jukjnkune afniuaefd ajnfema");
  }).toThrow("string length is greater than 10");
});

test("stringLength throws an error for strings with length less than 1", () => {
  expect(() => {
    stringLength("");
  }).toThrow("string length is less than 1");
});


