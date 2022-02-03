const averageMinMax = require("./3_average_min_max");

test("Average Min Max (1)", () => {
  expect(averageMinMax([-42, 0, 42])).toBe("Min: -42 Max: 42 Average: 0");
});

test("Average Min Max (2)", () => {
  expect(averageMinMax([30, 20, 100])).toBe("Min: 20 Max: 100 Average: 50");
});

test("Average Min Max (3)", () => {
  expect(averageMinMax([-23, -4, -12])).toBe("Min: -23 Max: -4 Average: -13");
});
