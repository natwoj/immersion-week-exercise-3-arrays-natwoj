const displayFullName = require("./1_display_full_name");

let consoleSpy;

beforeEach(() => {
  consoleSpy = jest.spyOn(console, "log");
});

afterEach(() => {
  consoleSpy.mockClear();
});

test("Greet James Bond", () => {
  displayFullName("James Bond");

  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith("My name is Bond, James Bond");
});

test("Greet Ada Lovelace", () => {
  displayFullName("Ada Lovelace");

  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith("My name is Lovelace, Ada Lovelace");
});

test("Greet Salvador Dalí", () => {
  displayFullName("Salvador Felipe Jacinto Dalí");

  expect(consoleSpy).toHaveBeenCalledTimes(1);
  expect(consoleSpy).toHaveBeenCalledWith(
    "My name is Dalí, Salvador Felipe Jacinto Dalí"
  );
});
