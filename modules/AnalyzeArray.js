const isClean = function (arr) {
  const countNaN = arr.filter((val) => {
    if (typeof val !== "number") {
      return true;
    }
  });
  if (countNaN.length > 0) {
    return false;
  }
  return true;
};

const getMin = function (arr) {
  return arr.sort()[0];
};
const getMax = function (arr) {
  return arr.sort()[arr.length - 1];
};

const average = function (arr) {
  let sum = 0;
  arr.forEach((val) => {
    sum += val;
  });
  return sum / arr.length;
};

const length = function (arr) {
  return arr.length;
};

const annalyzeArray = function (arr) {
  if (isClean(arr)) {
    return {
      min: getMin(arr),
      max: getMax(arr),
      average: average(arr),
      length: length(arr),
    };
  }
  return null;
};
export { isClean, getMin, getMax, average, length, annalyzeArray };
