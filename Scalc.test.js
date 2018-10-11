//test for Scalc.js
const add = require('./Scalc');

it("Should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("Should return the same number as inserted if n = 1", () => {
	expect(add("4")).toBe(4);
});

it("Should return the sum of 2 numbers when n = 2", () => {
	expect(add("5,4")).toBe(9);
});
