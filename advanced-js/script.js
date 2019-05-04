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
/*
// Passing function as argument

var years = [1990, 1963, 1935, 2013, 1976];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function isFullAge(el) {
  return el >= 18;
}

function calculateAge(el) {
  return 2019 - el;
}

function maxHeartRate(el) {
  if (el >=18 && el <= 81) {
    return Math.round(206.9 - (0.67 + el));
  } else {
    return -1;
  }
  
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var heartRate = arrayCalc(ages, maxHeartRate);

console.log(ages, fullAges, heartRate);
*/

// Function returning function

function interviewQuestion(job) {

  if (job === 'designer') {
    return function(name) {
      console.log('Hello, ' + name + '. Can you explain UX design to me?');
    }
  } else if (job === 'programmer') {
    return function(name) {
      console.log('Could I ask you some question about JS, ' + name + '?');
    }
  } else {
    return function(name) {
      console.log('Hello, ' + name + '! What do you do?');
    }
  }
}

var designerQuestion = interviewQuestion('designer');

designerQuestion('Piter');

interviewQuestion('programmer')('Monica');