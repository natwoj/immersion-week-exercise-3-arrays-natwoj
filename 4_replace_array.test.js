const replaceArray = require("./4_replace_array");

test("Replace Array (1)", () => {
  expect(replaceArray(["banana", "suit", "hammer"])).toBe([
    "banana",
    "suit",
    "HAMMER",
  ]);
});

test("Replace Array (2)", () => {
  expect(replaceArray(["Hello", "there"])).toBe(["HELLO", "there"]);
});

test("Replace Array (3)", () => {
  expect(replaceArray(["Hey!", "hey..."])).toBe(["HEY!", "HEY..."]);
});
