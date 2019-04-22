/////////////////////////////
// Lecture: Function constructor

// var igor = {
//   name: 'Igor',
//   birthYear: 1990,
//   job: 'worker'
// }

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