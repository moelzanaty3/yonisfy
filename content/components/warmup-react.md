---
title: "Warm up Before React"
showMetadata: true
editable: true
showToc: true
order: 2
---

<iframe width="100%" height="600" src="https://www.youtube.com/embed/w3ZwgdgCigM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Var, let and const

- **Scope**

  - A variable’s scope is the context in which the variable exists. The scope specifies from where you can access a variable and whether you have access to the variable in that context.
  - Before ES6 (2015), JavaScript had only Global Scope and Function Scope.
  - ES6 introduced two important new JavaScript keywords: `let` and `const`. These two keywords provide **Block Scope** in JavaScript.
  - JavaScript has 3 types of scope:-

```javascript
/* Block Scope */

{
  let x = 2;
}
// x can NOT be used here

// Variables declared with the var keyword can NOT have block scope.
// Variables declared inside a { } block can be accessed from outside the block.

// ___________________
/* Function scope */

// Each function creates a new scope.
// Variables defined inside a function are not accessible (visible) from outside the function.

function sayHello() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

  console.log(i); //( will log) 11
}

sayHello();

// ___________________
/* Global scope */
// A variable declared outside a function, becomes GLOBAL.

let name = 'Mohammed Elzanaty';
// code here can use name

function myFunction() {
  // code here can also use name
}
```

- Summary:
  _-_ var:- the variable defined is visible in the entire function.
  _-_ let:- the variable defined is visible only in the block it is defined in.
  _-_ const:- makes the variable a constant, Use const over let and let over var wherever possible

## Objects

- JavaScript has one complex data type, the Object data type, and
- it has five simple data types: Number, String, Boolean, Undefined, and Null.
- Property names can be a string or a number, but if the property name is a number, it has to be accessed with the bracket notation.
- It is best to avoid using numbers as property names.
  — Object Literals
  => let homeObj = {}
  => let bagObj = {id: 0, name: "bag"}
  — Object Constructor
  => A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.
  => let person = new Object()
  => animal.color = 'white'
  => animal.age = 12

```javascript
const person = {
  // objects in js are collections of key value pairs.
  name: 'Mohammed Elzanay',
  eat() {}, // this is another way defining a method member in an object is: `eat: function() {} //not recommended`
  thank() {},
};

// to access an existing property The syntax is: object.property = value.
```

- Above is an object with 1 property and 2 methods.
- Invoking method of an object: `person.eat()`
- Accessing property of object:-

  - When the property is known in advance: `person["name"]`, `person.name`
  - When the property is not known in advance:-

  ```javascript
  const propertyName = 'age';
  // when the property’s name is not known in advance or the name is an invalid variable identifier
  // The syntax is: object['property'] = value.
  person[propertyName] = '10';
  ```

## The this Keyword

- `this` keyword refers to the object it belongs to

```javascript
const person = {
  firstName: 'Mohammed',
  lastName: 'Elzanay',
  fullName: function() {
    return this.firstName + ' ' + this.lastName
  },
  eat() { // same as "sayHi: function(){...}"
    console.log('Eat....')
    return this // this is a simple keyword in js which confuse a lot of js developer bcoz it doesn't behave same other programming languages like java ... in js  this always return a reference for the current object
  },
  thank(actionOne, actionTwo, actionThree) {
    return `As ${this.fullName()}, I want to thank you for watching and Please Don't Forget to ${actionOne}, ${actionTwo} and ${actionThree} 🥇`
  },
};

//.. It has different values depending on where it is used:-

/* 1. this in a Method */
    //- In an object method, this refers to the "owner" of the method.
    //- so now this refers to the person object.
    //- The value of this is the object “before dot”, the one used to call the method.
    const fullName = person.fullName()
    fullName // -> "Mohammed Elzanay"

/* 2. this in a Function */
    //- the value of this is determined by how the function is called
      // 1. if you called the function as an method in an object it will always return a reference to that object
      person.eat() // {firstName: "Mohammed", lastName: "Elzanay", fullName: ƒ, eat: ƒ, talk: ƒ}
      // 2. if you called the function as a standalone object or outside if an object this will return
            // IT DEPEND
                // without strict mode will return the global object which is the window object in browser  the owner of the function is the default binding for this.
                const personEat = person.eat
                personEat() // -> "[object Window]"
                // with strict mode will return undefined bcoz In a JavaScript function with strict mode, JavaScript does not allow default binding.
                "use strict";
                const personEatStrictMode = person.eat
                personEatStrictMode() // -> "undefined"
                 // how to fix the issue for wrong binding
                 // this lead us to

/* 3. Object Method Binding */
    //- we know that function in js is an object so if you
    const personEat = person.eat. //- will appear drop down with all the member of the eat object and we use these methods to bind a function to an specific object so when we call
    person.eat.bind(/* what you pass here as an argument will determine the value of this so if i pass the person object here the bind method will return a new instance of eat function with and set this to point to this person object. so now when we call eat function we will see this person object*/)
    const personEatBind = person.eat.bind(person) //-> {firstName: "Mohammed", lastName: "Elzanay", fullName: ƒ, eat: ƒ, talk: ƒ}

    // Ok Great but if we need to call the thank method from peron object with different parameter
    // in this case we use methods predefined in javascript like call, apply
      // 1. call
          // call is a method take a first argument and sets the "this" value, which is the object, on which the function is invoked upon. In this case, it's the "person" object above.
          // The rest of the parameters are the arguments to the actual function.
    person.thank.call(person, 'Like', 'Comment', 'Subscribe');  // Will return "As Mohammed Elzanay, I want to thank you for watching and Please Don't Forget to Like, Comment and Subscribe 🥇"
      // 2. apply
          // Similarly to call() method the first parameter, set it to this value
          // the only difference of apply, call method is the second parameter of apply method. accepts the arguments as an array
    person.thank.apply(person, ['Like', 'Comment', 'Subscribe']); // Will return "As Mohammed Elzanay, I want to thank you for watching and Please Don't Forget to Like, Comment and Subscribe 🥇"
    // Recap
    //- Call and Apply execute the current function immediately.
    //- Bind is a bit different. It returns a new function and allows you to set the this value now while allowing you to execute the function in the future.

/* 4. this Alone */
    //- When used alone, the owner is the Global object, so this refers to the Global object.
    let x = this
    this // -> "[object Window]"

/* 5. this in Event Handlers */
    //- In HTML event handlers, this refers to the HTML element that received the event:
    <button onclick="this.style.display='none'">
      Click to Remove Me!
    </button>
```

## Arrow Functions

- is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
  Different ways of declaring functions:

```javascript
const square = function (number) {
  return number * number;
};
// this is the old js starting from es6 we have a cleaner way to write the same code
// one parameter remove ()
// without parameter so put it like ()
const square = number => {
  return number * number;
};
const square = number => number * number;

// let see a real example assume we have an array of products
const products = [
  { id: 1, title: 'Fjallraven - Foldsack Fits 15 Laptops', price: 109.95 },
  { id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3 },
  { id: 3, title: 'Mens Cotton Jacket', price: 55.99 },
  { id: 4, title: 'Mens Casual Slim Fit', price: 15.99 },
  { id: 5, title: "John Hardy Women's Legends N", price: 695 },
  { id: 6, title: 'Solid Gold Petite Micropave ', price: 168 },
  { id: 7, title: 'White Gold Plated Princess', price: 9.99 },
];

products.filter(function (product) {
  return product.price > 20;
});
//  1. Remove the word "function" and place arrow between the argument and opening body bracket
products.filter(product => {
  return product.price > 20;
});
// 2. Remove the body braces and word "return" -- the return is implied.
products.filter(product => product.price > 20);
// 3. Remove the argument parentheses
products.filter(product => product.price > 20);
```

## Arrow Functions and this

```javascript
const person = {
  eat() {
    setTimeout(function () {
      console.log('this', this)
    }, 1000)
  }
}

person.eat() // -> "[object Window]" bcoz callback function is not part of any object  it's a standalone function so return global object as we mention before

// so to solve this in old days we use to
eat() {
    // create a variable hold the value of this
    let self = this;
    setTimeout(function () {
      console.log('self', this)
    }, 1000)
  }
// but with arrow functions we don't need to do this as it will inherit the context of the code defined
setTimeout( () => {
      console.log('self', this)
}, 1000)
```

## Array functions Map and filter

```javascript

//- Each one of these methods will iterate over an array and perform a transformation or computation
//- Each will return a new array based on the function

// 1. Map
  // The map() method is used for creating a new array from an existing one
  // applying function to each element of the array
  // In the callback, only the array element is required
  map([🌽, 🐮, 🐔], cook)
  => [🍿, 🍔, 🍳]

  // Example
  const numbers = [1, 2, 3, 4];
  const doubled = numbers.map(item => item * 2);
  console.log(doubled); // [2, 4, 6, 8]

// 2. Filter
  // The filter() method takes each element in an array and it applies a conditional statement against it.
  // If this conditional returns true, the element gets pushed to the output array.
  // If the condition returns false, the element does not get pushed to the output array.
  // The syntax for filter is similar to map, except the callback function should return true to keep the element, or false otherwise.
  // In the callback, only the element is required.
  filter([🍿, 🍔, 🍳], isVegetarian)
  =>  [🍿, 🍳]

  // Example
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter(item => item % 2 === 0);
  console.log(evens); // [2, 4]

  const products = [
    { id: 1, title: 'Fjallraven - Foldsack Fits 15 Laptops', price: 109.95 },
    { id: 2, title: 'Mens Casual Premium Slim Fit T-Shirts ', price: 22.3 },
    { id: 3, title: 'Mens Cotton Jacket', price: 55.99 },
    { id: 4, title: 'Mens Casual Slim Fit', price: 15.99 },
    { id: 5, title: "John Hardy Women's Legends N", price: 695 },
    { id: 6, title: 'Solid Gold Petite Micropave ', price: 168 },
    { id: 7, title: 'White Gold Plated Princess', price: 9.99 },
  ];

  products.filter(function (product) {
    return product.price > 20;
  });

```

[soruce](https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/)

## Object Destructuring

- The object destructuring is a useful JavaScript feature to extract properties from objects and bind them to variables.

```javascript
// problem
const moZanaty = {
  name: 'Mohammed Elzanaty',
  job: 'Software Engineer',
  bio: 'A passionate teaching-lover, developer, writer, and autodidact.',
  funFact: 'I learned programming by chance 😭',
  address: {
    city: 'Egypt',
  },
};

const name = moZanaty.name;
const job = moZanaty.job;
const bio = moZanaty.bio;

// The property moZanaty.name value is assigned to the variable name. Same way moZanaty.job value is assigned to job.
// Such a way to access properties and assign them to variables requires boilerplate code.
// By writing var name = moZanaty.name, you have to mention the name binding 2 times, and the same for realName.

// That’s where the object destructuring syntax is useful
// you can read a property or more and assign its value to a variable without duplicating the property name.

// so to refactor and apply object destructuring
const { name, job, bio } = moZanaty;

// but you will face multiple situations you find your self need this feature
// 1. Property to Variables
const { name } = moZanaty;
// 2. Multiple properties
// just enumerate as many properties as you like adding commas , in between
const { name, job, bio } = moZanaty;
// 3. Default Value
// If the destructed object doesn’t have the property specified in the destructuring assignment,
// then the variable is assigned with undefined.
const { hasDog } = moZanaty;
const { hasDog = 'Default Dog Value' } = moZanaty;
// 4. Alias
// If you’d like to create variables of different names than the properties,
// then you can use the aliasing feature of object destructuring
const { name: fullName } = moZanaty;
// 5. Deep Property
const {
  address: { city },
} = moZanaty;
// 6. Dynamic Property Name
const { [propName]: identifier } = expression;
// propName expression should evaluate to a property name (usually a string),
// the identifier should indicate the variable name created after the destructuring.
// The second expression should evaluate to the object you’d like to destructur.

// An equivalent code without object destructuring:

const identifier = expression[propName];

const prop = 'name';
const { [prop]: name } = moZanaty; //=> Mohammed Elzanaty
```

## Spread Operator

- spread operator allows you to spread out elements of an iterable object such as an array,a map, or a set.

```javascript

let fruits = ['🍎','🍌','🍊'];
let vegetables = ['🥬', '🌽', '🥒', '🥔']
let moZanaty = {
  name: 'Mohammed Elzanaty',
  job: 'Software Engineer',
  bio: 'A passionate teaching-lover, developer, writer, and autodidact.',
};

// 1. Copying an array
    // let say we need to create copy a fruits array to a new array
    let newFruitArray = [...fruits]

// 2. Concatenating / Combined arrays
    let basket = [...fruits, ...vegetables]

// 3. Spreading elements together with an individual element
    let newFruitArray = ['🍉', ...fruits]

// 4. Spread syntax for object literals
    let first = { name: 'mo'}
    let second = { tip: 'I see you not like, comment or subscribe yet' }

    const moElzanaty = {...first, ..second, job: 'Software Engineer',}
```
