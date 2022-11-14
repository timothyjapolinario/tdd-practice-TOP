import {
  isClean,
  getMin,
  getMax,
  average,
  length,
  annalyzeArray,
} from "./AnalyzeArray.js";
test("check all value in array is number type", () => {
  const dirtyArray = [1, 2, "b", "a"];
  const cleanArray = [1, 2, 3, 4];
  expect(isClean(dirtyArray)).toBe(false);
  expect(isClean(cleanArray)).toBe(true);
});

test("get min value", () => {
  expect(getMin([4, 2, 8, 3, 1])).toBe(1);
});

test("get max value", () => {
  expect(getMax([4, 2, 8, 3, 1])).toBe(8);
});

test("get average value", () => {
  expect(average([4, 2, 8, 3, 1])).toBe(3.6);
});

test("get length of arr", () => {
  expect(length([4, 2, 8, 3, 1])).toBe(5);
});

test("get object with array information", () => {
  expect(annalyzeArray([4, 2, 8, 3, 1])).toEqual({
    min: 1,
    max: 8,
    average: 3.6,
    length: 5,
  });
});
