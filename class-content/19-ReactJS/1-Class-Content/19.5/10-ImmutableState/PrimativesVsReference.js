// In JS we have Primative types and Reference types

// Primative types will be:
1
'test'
true

// Reference types are:

{name: 'alex'}
[1,4,7,8,4]

// Primative types are their own variable and piece of data
// Reference types create references

// Example 1
var a = 1
var b = a
b = 3

// a = 1
// b = 3

// ^^^^ They are will their own piece of data

// Example 2
var a = {name: 'alex'}
var b = a
b.name = 'test'

// a.name = 'test'
// b.name = 'test'

// ^^^^ a and b both point to the same piece of data

// Example 3
var a = {name: 'alex', hairColor: 'greenish/teal'}
var b = Object.assign({}, a, {name: 'john'})

// a = {name: 'alex', hairColor: 'greenish/teal'}
// b = {name: 'john', hairColor: 'greenish/teal'}

// ^^^^ a and b are different pieces of data (^_^)

// ES6 Spread Operator shorthand!
var b = Object.assign({}, a, {name: 'john'})
// Becomes
var b = { ...a, name: 'john' }

// Example 4
var a = [1,2,3,4]
var b = a.concat(5)

// a = [1,2,3,4]
// b = [1,2,3,4,5]

// We can also use filter

var a = [1,2,3,4]
var b = a.filter((val) => val !== 4)
// In filter we Return true to keep the element, false otherwise

// a = [1,2,3,4]
// b = [1,2,3]

// Example 5
var a = {name: 'alex', stuff: [1,2,3]}
var b = Object.assign({}, a, {name: 'john'})

b.things.push(4)

// b.things = [1,2,3,4]
// a.things = [1,2,3,4]

// ^^^^^ THIS IS BAD!!!!!!!!!! The array is still referenced!

// Lets try again!
var a = {name: 'alex', stuff: [1,2,3]}
var b = Object.assign({}, a, {name: 'john'})

b.things.concat(4)

// b.things = [1,2,3,4]
// a.things = [1,2,3]


// In short

// We use Object.assign to return to us a brand new Object

// We use methods like concat, filter, map, and reduce to return to us a brand new array
