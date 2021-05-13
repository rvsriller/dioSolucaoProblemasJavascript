let input, number1, number2, operator, result;
const regexInput = /^([0-9]) *([*/])/

const doMath = {
  '/': (a, b) => {
    a = Number(a)
    b = Number(b)
    return parseFloat(a / b)
  },
  
}

