// arguments object - no longer bound in arrow functions

const add = function (a, b) {
  // any additional arguments show up in log
  console.log(arguments)
  return a + b
}
console.log(add(4, 5))
console.log(add(4, 5, 1000))

const add2 = (a, b) => {
  // 'arguments' not defined
  // console.log(arguments)
  return a + b
}
console.log(add2(5, 5))
// a third arg can be passed but it's not used
console.log(add2(5, 5, 5))


// this keyword - no longer bound in arrow functions

const user = {
  name: 'Mickey',
  cities: ['Orlando', 'Hollywood', 'Anaheim'],
  printPlacesLived: function () {
    console.log(this.name)
    console.log(this.cities)
    const that = this // note this workaround

    this.cities.forEach(function(city) {
      console.log(`${that.name} has lived in ${city}`)
    })
  }
}

user.printPlacesLived()

const user2 = {
  name: 'Mickey',
  cities: ['Orlando', 'Hollywood', 'Anaheim'],
  printPlacesLived: function () {
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach(city => {
      console.log(`${this.name} has lived in ${city}`) // note that 'this.name' is in scope inside arrow function
    })
  }
}

user2.printPlacesLived()

// const user3 = {
//   name: 'Mickey',
//   cities: ['Orlando', 'Hollywood', 'Anaheim'],
//   printPlacesLived: () => {
//     // 'this' is not bound inside this arrow function
//     console.log(this.name)
//     console.log(this.cities)

//     this.cities.forEach(city => {
//       console.log(`${this.name} has lived in ${city}`) // note that 'this.name' is in scope inside arrow function
//     })
//   }
// }
// // This will fail
// user3.printPlacesLived()

const user4 = {
  name: 'Mickey',
  cities: ['Orlando', 'Hollywood', 'Anaheim'],
  printPlacesLived () {
    // 'this' is not bound inside this arrow function
    console.log(this.name)
    console.log(this.cities)

    this.cities.forEach(city => {
      console.log(`${this.name} has lived in ${city}`) // note that 'this.name' is in scope inside arrow function
    })
  }
}
// This will succeed
user4.printPlacesLived()

// Map version
const user5 = {
  name: 'Mickey',
  cities: ['Orlando', 'Hollywood', 'Anaheim'],
  placesLived () {
    // 'this' is not bound inside this arrow function
    console.log(this.name)
    console.log(this.cities)

    return this.cities.map(city => `${this.name} has lived in ${city}!`)
  }
}
console.log(user5.placesLived())

// Challenge

const multiplier = {
  numbers: [0, 1, 2, 3, 4],
  multiplyBy: 5,
  multiply () {
    return this.numbers.map(x => x * this.multiplyBy)
  }
}
console.log(multiplier.multiply())
