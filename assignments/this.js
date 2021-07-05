/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.

* 1. when in the global scope the value of this will be the window / console object. 
* My words: displays JS window log 

* 2. whenever a function is called by a preceding dot, the object left of the dot gets this. 
* My words: tis = value of the object to the left of the "."

* 3. whenever a constructor function is used this refers to the specific instance of the object that is created and returned by the constructor function. 
* My words: this = the function the obhect created 

* 4. whenever JS call or apply method is used this is expicitly defined. 
* My words: this = this within the object 

* write out a code example of each explanation above
*/

// Principle 1 -- Global Binding
// code example for Window Binding
function sayName(name) {
  console.log(this); 
  return name; 
}
sayName("Dannie"); 

// Principle 2 -- Implicit Binding
// code example for Implicit Binding
const myObj = {
  greeting: 'Hello', 
  sayHello: function(name) {
    console.log(`${this.greeting} my name is ${name}`); 
    console.log(this); 
  }
}; 
myObj.sayHello('Jane'); 

// Principle 3 -- New Binding 
// code example for New Binding
function CordialPerson(greeter) {
  this.greeting = 'Hello'; 
  this.greeter = greeter; 
  this.speak = function() {
    console.log(this.greeting + this.greeter); 
    console.log(this); 
  };
}
const jerry = new CordialPerson('Newman'); 
const newman = new CordialPerson('Jerry'); 

jerry.speak(); 
newman.speak(); 

// Principle 4
// code example for Explicit Binding
function CordialPerson(greeter) {
  this.greeting = 'Hello'; 
  this.greeter = greeter; 
  this.speak = function() {
    console.log(this.greeting + this.greeter); 
    console.log(this); 
  };
}
const jerry = new CordialPerson('Newman'); 
const newman = new CordialPerson('Jerry'); 

jerry.speak.call(newman); 
newman.speak.apply(jerry); 

newman.speak(); 
jerry.speak(); 