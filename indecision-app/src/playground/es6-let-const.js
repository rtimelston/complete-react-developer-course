// Using var is bad because a var can be redefined, causing debugging headaches.
// var nameVar = 'Tim'
// var nameVar = 'Tim overwritten'
// console.log(nameVar)

let nameLet = 'Jenny'
// A complile error occurs if you try to redefine a let
// let firstName = 'Jenny overwritten'
// But you can reassign a let
nameLet = 'Jenny overwritten'
console.log(nameLet)

const nameConst = 'Brad'
// Cannot reassign a const; compile error
// nameConst = 'Brad overwritten'
console.log(nameConst)

const getName = () => {
  const name = 'Amanda'
  return name
}

// name will be undefined here because a var declared inside a function is scoped to the function.
getName()
// console.log(name)

if (getName()) {
  // var varString = 'global scoped'
  const constString = 'block scoped'
  let letString = 'let'
  letString = 'let is block scoped'
  console.log(constString)
  console.log(letString)
}

// var is global scoped, so is accessible here
// console.log(varString)
// const and let are block scoped, so are not accessible here
// console.log(constString)
/// console.log(letString)
