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
/*
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
*/
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
/*
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
*/
/*****************************
* Functions
*/
/*
function calculateAge(birthYear) {
  return 2019 - birthYear;
}

var ageIgor = calculateAge(1990);
var ageJane = calculateAge(1984);
var ageJohn = calculateAge(1988);

console.log(ageIgor, ageJane, ageJohn);

function yearUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  console.log(firstName + ' retires in ' + retirement + ' years');
}

yearUntilRetirement(1990, 'Igor');
yearUntilRetirement(1984, 'Jane');
yearUntilRetirement(1988, 'John');
*/
/*****************************
* Functions statements and expressions
*/
/*
//funcrion declaration
// function whatDoYouDo(job, firstName) {}

// Function expression
var whatDoYouDo = function(job, firstName) {
  switch(job) {
    case 'teacher':
    return firstName + ' is a teacher';
    case 'designer':
    return firstName + ' is a designer';
    case 'programmer':
    return firstName + ' is a programmer';
    default:
    return firstName + ' does something else';
  }
}

console.log(whatDoYouDo('designer', 'Igor'));
*/
/*****************************
* Arrays
*/
/*
var names = ['Igor', 'John', 'Jane'];
var years = new Array(1990, 1988, 1984);

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Lucy';
console.log(names);

// Different data types

var user = ['Igor', 'Posunko', 1990, 'worker', true];
user.push('blue');
user.unshift('Mr.');

user.pop();
user.pop();
user.shift();

console.log(user);

console.log(user.indexOf('worker'));
var isWorker = user.indexOf('worker') === -1 ? 'Igor is not worker' : 'Igor is worker';
console.log(isWorker);
*/
/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is 
less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
var allTips = [];
var finalAmount = [];

var tipCalculator =  function(bill) {

  if(bill < 50) {
    var tips = bill * 0.2;
  } else if(bill >= 50 && bill <= 200) {
    var tips = bill * 0.15;
  } else {
    var tips = bill * 0.1;
  }

  return tips;
}


var finalTips =  function(bill) {

  if(bill < 50) {
    var tips = bill + (bill * 0.2);
  } else if(bill >= 50 && bill <= 200) {
    var tips = bill + (bill * 0.15);
  } else {
    var tips = bill + (bill * 0.1);
  }

  return tips;
}

allTips.push(Math.round(tipCalculator(124)));
allTips.push(Math.round(tipCalculator(48)));
allTips.push(Math.round(tipCalculator(268)));

finalAmount.push(finalTips(124));
finalAmount.push(finalTips(48));
finalAmount.push(finalTips(268));

console.log(finalAmount);
console.log(allTips);
*/
/*****************************
* Objects and properties
*/
/*
// Object literal
var igor = {
  firstName: 'Igor',
  lastName: 'Posunko',
  birthYear: 1990,
  job: 'worker',
  family: ['Kristina', 'Oleg', 'Irina'],
  isMarried:  true
};

console.log(igor.firstName);
console.log(igor['lastName']);
var x = 'birthYear';
console.log(igor[x]);

igor.job = 'programmer';
igor['isMarried'] = false;
console.log(igor);

// new object syntax

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane.birthYear = 1994;

console.log(jane);
*/
/*****************************
* Objects and methods
*/
/*
var igor = {
  firstName: 'Igor',
  lastName: 'Posunko',
  birthYear: 1990,
  job: 'worker',
  family: ['Kristina', 'Oleg', 'Irina'],
  isMarried:  true,
  calcAge: function(birthYear) {
    this.age = 2019 - this.birthYear;
  }
};

igor.calcAge();
console.log(igor);
*/
/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*
var igor = {
  firstName: 'Igor',
  mass: 69,
  height: 1.86,
  calcBMI: function(mass, height) {
    this.BMI = this.mass / Math.pow(this.height, 2);
    return this.BMI;
  }
};

var john = {
  firstName: 'John',
  mass: 65,
  height: 1.76,
  calcBMI: function(mass, height) {
    this.BMI = this.mass / Math.pow(this.height, 2);
    return this.BMI;
  }
}

igor.calcBMI();
john.calcBMI();

console.log(igor, john);

if (igor.BMI > john.BMI) {
  console.log('Igor\'s BMI higher than John\'s')
} else if (igor.BMI < john.BMI) {
  console.log('John\'s BMI higher than Igor\'s')
} else {
  console.log('BMI is equall')
}
*/
/*****************************
* Loops and itteration
*/
/*
// for loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

var user = ['Igor', 'Posunko', 1990, 'worker', true, 'blue'];

for(var i = 0; i < user.length; i++) {
  console.log(user[i]);
}

// while loop
var i = 0;
while (i < user.length) {
  console.log(user[i]);
  i++;
}

// continue and break statements

for(var i = 0; i < user.length; i++) {
  if (typeof(user[i]) !== 'string') {
    continue
  }
  console.log(user[i]);
}

for(var i = 0; i < user.length; i++) {
  if (typeof(user[i]) !== 'string') {
    break
  }
  console.log(user[i]);
}

for(var i = user.length - 1; i >= 0; i--) {
  console.log(user[i]);
}
*/
/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each 
iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number
 of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/
/*
var john = {
  bills: [124, 48, 268, 180, 42],
  calcTip: function() {

    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bills.length; i++) {

      var percentage;
      var bill = this.bills[i];

      if(bill < 50) {
        percentage = 0.2;
      } else if(bill >= 50 && bill <= 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + (bill * percentage);
    }
  }
}

john.calcTip();
console.log(john);

var mark = {
  bills: [77, 375, 110, 45],
  calcTip: function() {

    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bills.length; i++) {

      var percentage;
      var bill = this.bills[i];

      if(bill < 50) {
        percentage = 0.2;
      } else if(bill >= 50 && bill <= 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }

      this.tips[i] = bill * percentage;
      this.finalValue[i] = bill + (bill * percentage);
    }
  }
}

mark.calcTip();
console.log(mark);

var calcAVG = function(tips) {
  var total = 0;
  for (var i = 0; i < tips.length; i++) {
    total += tips[i];
  }
  return total / tips.length;
}

var avgMarkTips = calcAVG(mark.tips);
var avgJohnTips = calcAVG(john.tips);

console.log(avgMarkTips);
console.log(avgJohnTips);

if (avgMarkTips > avgJohnTips) {
  console.log('Mark has highest tips than John with ' + avgMarkTips + '$');
} else {
  console.log('John has highest tips than Mark with ' + avgJohnTips + '$');
}
*/

/*****************************
* Hoisting
*/

// Function
calculateAge(1990);

function calculateAge(year) {
  console.log(2019 - year);
}

// retirement(1990);

var retirement = function(year) {
  console.log(65 - (2019 - year));
}

// Variables

console.log(age);
var age = 23;
console.log(age);

function foo() {
  var age = 65;
  console.log(age);
}

foo();
console.log(age);

///////////////////////////////////////
// Lecture: Scoping

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        third();
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

function third() {
  var d = 'John';
  console.log(a + d);
}

///////////////////////////////////////
// This keyword

// console.log(this);

function calculateAge(year) {
  console.log(2019 - year);
  console.log(this);
}

calculateAge(1990);

var jonh = {
  name: 'John',
  birthYear: 1922,
  calcAge: function() {
    console.log(this);
    console.log(2019 - this.birthYear);
  }
}

jonh.calcAge();

var mark = {
  name: 'Mark',
  birthYear: 1889,
}

mark.calcAge = jonh.calcAge;
mark.calcAge();

function up() {
  return 42;
}

up.going = 'hello world';

typeof(4);