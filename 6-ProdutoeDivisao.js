let input, number1, number2, operator, result;
const regexInput = /^([0-9]) *([*/])/

const doMath = {
  '/': (a, b) => {
    a = Number(a)
    b = Number(b)
    return parseFloat(a / b)
  },
  '*': (a, b) => {
    if (Number(a) * Number(b) >= Number.MAX_SAFE_INTEGER) {
      a = BigInt(a)
      b = BigInt(b)
      return a * b
    }
    return a * b
  }
}

while (true) {
  
 


 


}