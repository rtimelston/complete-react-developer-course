const square = (x) => {
  return x * x
}

console.log('square', square(36))

const expressionSquare = (x) => x * x

console.log('expressionSquare', expressionSquare(9))

const fullName = 'Mickey Mouse'

const getFirstName = (fullName) => fullName.split(' ')[0]

console.log('first name:', getFirstName(fullName))
