/********************************
* Variables and data types
*/

// console.log('Hello World');

// var firstName = 'Igor';
// var lastName = 'Posunko';
// var fullName = firstName + ' ' + lastName;
// console.log(fullName);

// age = 29;
// fullAge = true;
// console.log(fullAge);

// var job;
// job = 'worker';
// console.log(job);

// var $ffdf = 29;
// var _3dfd = 4;
// var if = 23;

/********************************
* Variable mutation and type coercion
*/

var firstName = 'Igor';
var age = 29;
// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'driver';
age = 'twenty eight';
isMarried = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation

job = 'worker';
age  = 29;
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?')
console.log(firstName + ' ' + lastName);