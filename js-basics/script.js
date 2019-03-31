/********************************
* Variables and data types
*/
/*
console.log('Hello World');

var firstName = 'Igor';
var lastName = 'Posunko';
var fullName = firstName + ' ' + lastName;
console.log(fullName);

age = 29;
fullAge = true;
console.log(fullAge);

var job;
job = 'worker';
console.log(job);

var $ffdf = 29;
var _3dfd = 4;
var if = 23;
*/

/********************************
* Variable mutation and type coercion
*/
/*
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
*/

/********************************
* Basic operators
*/
/*
var now, yearIgor, yearJohn;
now = 2019;
ageIgor = 29;
ageJohn = 33;

// Math operators
yearJohn = now - ageJohn;
yearIgor = now - ageIgor;
console.log(yearIgor);
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);

// Logical operators
var igorOlder = ageIgor < ageJohn;
console.log(igorOlder);

// typeof operator
console.log(typeof(ageJohn));
console.log(typeof(igorOlder));
console.log(typeof('Igor is awesome'));
var x;
console.log(typeof(x));
*/

/********************************
* Operator precedence
*/
/*
var now = 2019;
var yearIgor = 1990;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearIgor >= fullAge;
console.log(isFullAge);

// Grouping
var ageIgor = now - yearIgor;
var ageJohn = 35;
var average = (ageIgor + ageJohn) / 2;
console.log(average);

//  Multiple assignment
x = y = (20 + 10) / 15 * 2;
var x = 10;
console.log(x, y);

// More operators
x *= 4;
console.log(x);
x += 5;
console.log(x);
x++;
console.log(x);
--x
console.log(x);
*/
/********************************
* Coding challenge #1
*/
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massIgor = 64;
var massJohn = 65;
var heightIgor = 1.78;
var heightJohn = 1.76;

var bmiIgor = massIgor / Math.pow(heightIgor, 2);
var bmiJohn = massJohn / Math.pow(heightJohn, 2);

var compareBMI = bmiIgor > bmiJohn;

console.log(bmiIgor);
console.log('Is Igor\'s BMI higher than John\'s' + ' ' + compareBMI);
*/
/********************************
* if / else statement
*/
/*
var firstName = 'Igor';
var civilStatus = 'married';

if (civilStatus === 'married') {
  console.log(firstName + ' is married.')
};

var civilStatus = false;
if (civilStatus) {
  console.log(firstName + ' is married.')
} else {
  console.log(firstName + ' is single.')
};

var massIgor = 69;
var massJohn = 65;
var heightIgor = 1.78;
var heightJohn = 1.76;

var bmiIgor = massIgor / Math.pow(heightIgor, 2);
var bmiJohn = massJohn / Math.pow(heightJohn, 2);

var compareBMI = bmiIgor > bmiJohn;

if(compareBMI) {
  console.log('Igor\'s BMI higher than John\'s')
} else {
  console.log('John\'s BMI higher than Igor\'s')
};
*/
/********************************
* Boolean logic
*/
/*
var firstName = 'Igor';
var age = 29;

if (age <= 13) {
  console.log(firstName + ' is a boy')
} else if (age > 13 && age < 20) {
  console.log(firstName + ' is a teenager')
} else if (age >= 20 && age < 30) {
  console.log(firstName + ' is a young man')
} else {
  console.log(firstName + ' is a man')
}
*/
/********************************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'Igor';
var age = 17;
// Ternary Operator
var drink = age >= 18 ? console.log(firstName + ' can drink beer') : console.log(firstName + ' drink juice');

var job = 'designer';
// Switch Statements
switch(job) {
  case 'worker':
  console.log(firstName + ' is worker');
  break
  case 'teacher':
  console.log(firstName + ' is teacher');
  break
  case 'designer':
  console.log(firstName + ' is designer');
  break
  case 'programmer':
  console.log(firstName + ' is programmer');
  default:
  console.log(firstName + ' does something else');
}

var age = 30;

switch(true) {
  case age <= 13:
  console.log(firstName + ' is a boy')
  break
  case age > 13 && age < 20:
  console.log(firstName + ' is a teenager')
  break
  case age >= 20 && age < 30:
  console.log(firstName + ' is a young man')
  break
  default:
  console.log(firstName + ' is a man')
}
*/
/********************************
* Truthy and Falsy Values and Equality Operators
*/

// falsy values: undefined, 0, null, '', NaN
// truthy values: NOT falsy values

var height;
height = '0';

if(height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has not been defined');
}

// Equality operators
if(height == 0) {
  console.log('Operator == does type coercion');
}

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, 
while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average 
score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same 
  average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the 
console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, 
it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

var avgJohnTeam = (300 + 94 + 123) / 3;
var avgMikeTeam = (500 + 94 + 123) / 3;
var avgMary = (500 + 134 + 105) / 3;

if (avgJohnTeam > avgMikeTeam) {
  console.log('John\'s team has highest average score');
} else if (avgMikeTeam > avgJohnTeam) {
  console.log('Mike\'s team has highest average score');
} else {
  console.log('Draw');
}

switch(true) {
  case avgJohnTeam > avgMikeTeam && avgJohnTeam > avgMary: 
  console.log('John\'s team has highest average score')
  break
  case avgMikeTeam > avgJohnTeam && avgMikeTeam > avgMary: 
  console.log('Mike\'s team has highest average score');
  break
  case avgMary > avgJohnTeam && avgMary > avgMikeTeam: 
  console.log('Mary\'s team has highest average score');
  break
  default: console.log('Draw');
}