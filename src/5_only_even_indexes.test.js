const evenIndexes = require("./5_only_even_indexes");

test("Even Indexes (1)", () => {
  expect(evenIndexes("lol")).toBe(["l", "l"]);
});

test("Even Indexes (2)", () => {
  expect(evenIndexes("You're weird")).toBe(["Y", "u", "r", " ", "e", "r"]);
});

test("Even Indexes (3)", () => {
  expect(evenIndexes("")).toBe([]);
});
