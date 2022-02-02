const matrixGen = require("./7_matrix_generator");

test("Remove Double (1)", () => {
  expect(matrixGen(1, 5)).toBe([[1, 2, 3, 4, 5]]);
});

test("Remove Double (1)", () => {
  expect(matrixGen(5, 4)).toBe([
    [1, 2, 3, 4],
    [2, 4, 6, 8],
    [3, 6, 9, 12],
    [4, 8, 12, 16],
    [5, 10, 15, 20],
  ]);
});

test("Remove Double (1)", () => {
  expect(matrixGen(3, 6)).toBe([
    [1, 2, 3, 4, 5, 6],
    [2, 4, 6, 8, 10, 12],
    [3, 6, 9, 12, 15, 18],
  ]);
});

test("Remove Double (1)", () => {
  expect(matrixGen(0, 0)).toBe([]);
});
