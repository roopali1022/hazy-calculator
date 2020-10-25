function calculate(value) {
  for (let i = 0; i < value.length; i++) {
    const element = value[i]

    if ((typeof (element)) === 'string') {
      if (!isNaN(element)) {
        value[i] = parseInt(element)
      }
    }
  }
  function getNumsAndOperators(element) {
    if (element === '') {
      return false
    }

    return !isNaN(element) || element === '+' || element === '-' || element === '*' || element === '/'
  }
  value = value.filter(getNumsAndOperators)
  const val1 = value[0]
  const operand = value[1]
  const val2 = value[2]

  switch (operand) {
    case '+':
      return (val1 + val2)
    case '-':
      return (val1 - val2)
    case '*':
      return (val1 * val2)
    case '/':
      return (val1 / val2)
    default:
      return NaN
  }
}
module.exports = calculate





