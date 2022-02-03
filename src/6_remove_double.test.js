const removeDouble = require("./6_remove_double");

test("Remove Double (1)", () => {
  const stuff = ["suit", "clock", "butter", "suit"];
  removeDouble(stuff);

  expect(stuff).toBe(["clock", "butter", "suit"]);
});

test("Remove Double (2)", () => {
  const stuff = ["hello", "hello", 23, -3, 23, "hello"];
  removeDouble(stuff);

  expect(stuff).toBe([-3, 23, "hello"]);
});
