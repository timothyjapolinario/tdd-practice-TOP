import { add, subtract, multiply, divide } from "./Calculator";

test("inputs are string number", () => {
  expect(add("1", "2")).toBe(3);
  expect(subtract("4", "8")).toBe(-4);
  expect(multiply(0, "1000")).toBe(0);
  expect(divide("100", 50)).toBe(2);
});

test("inputs are string characters", () => {
  expect(add("a", "b")).toBe(NaN);
  expect(subtract("a", "b")).toBe(NaN);
  expect(multiply("a", "b")).toBe(NaN);
  expect(divide("a", "b")).toBe(NaN);
});

test("add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtract two numbers", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("multiply two numbers", () => {
  expect(multiply(5, 4)).toBe(20);
});

test("divide two numbers", () => {
  expect(divide(9, 3)).toBe(3);
});
