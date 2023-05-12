class Calculator {
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    let num = x-y
    let result = JSON.parse(num.toFixed(2));
    return result;
  }
  divide(x, y) {
    return x / y;
  }
  multiply(x, y) {
    let num = x * y;
    let result = JSON.parse(num.toFixed(5));
    return result;
  }
}

const newCalculator = new Calculator()

module.exports=newCalculator;