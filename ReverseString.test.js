const reverseString = require("./ReverseString.js");

test("Reverse a string", () => {
  expect(reverseString("boy")).toEqual("yob");
});
