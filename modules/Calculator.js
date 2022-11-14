const add = function (num1, num2) {
  try {
    const inputNum1 = parseInt(num1);
    const inputnum2 = parseInt(num2);
    return inputNum1 + inputnum2;
  } catch (error) {
    console.log("Input is not a number");
    return NaN;
  }
};

const subtract = function (num1, num2) {
  try {
    const inputNum1 = parseInt(num1);
    const inputnum2 = parseInt(num2);
    return inputNum1 - inputnum2;
  } catch (error) {
    console.log("Input is not a number");
    return NaN;
  }
};

const divide = function (num1, num2) {
  try {
    const inputNum1 = parseInt(num1);
    const inputnum2 = parseInt(num2);
    return inputNum1 / inputnum2;
  } catch (error) {
    console.log("Input is not a number");
    return NaN;
  }
};
const multiply = function (num1, num2) {
  try {
    const inputNum1 = parseInt(num1);
    const inputnum2 = parseInt(num2);
    return inputNum1 * inputnum2;
  } catch (error) {
    console.log("Input is not a number");
    return NaN;
  }
};

export { add, subtract, multiply, divide };
