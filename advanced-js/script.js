/////////////////////////////
// Lecture: Function constructor

// var igor = {
//   name: 'Igor',
//   birthYear: 1990,
//   job: 'worker'
// }
/*
var Person = function(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

Person.prototype.calculateAge = function() {
  console.log(2019 - this.birthYear);
}

var igor = new Person('Igor', 1990, 'Worker');
var kris = new Person('Kristina', 1994, 'Freelancer');
var john = new Person('John', 2000, 'Student');

igor.calculateAge();
kris.calculateAge();

console.log(igor);
console.log(kris);
console.log(john);
*/
/*
// Object.create
var personProto = {
  calculateAge: function() {
    console.log(2019 - this.birthYear);
  }
};

var john = Object.create(personProto, {
  name: {value: 'John'},
  birthYear: {value: 1990},
  job: {value: 'Worker'}
});

// Primitives vs objects
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: 'John',
  age: 26
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions

var age = 27;
var obj = {
  name: 'Igor',
  city: 'Melitopol'
};

function change(a, b) {
  a = 30;
  b.city = 'Kyiv';
}

change(age, obj.city);

console.log(age);
console.log(obj.city);
*/