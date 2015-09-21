# Introduction to JavaScript
- JavaScript is a versatile language that can be run on the front-end or back-end.
- JavaScript is a non-blocking language, implementing a call-stack and process-queue structure.
- Let's look at some of the building blocks of the language.

##Functions
- Functions allow you to write code that will be executed at a later time.
- They encapsulate logic regarding certain operations.
- Functions help you to not repeat yourself as often and reuse code.

##Defining a Function

- There are three general ways to define a function.
- Function naming:

```javascript
function functionName() { }
```

- Function as a variable:

```javascript
var functionName = function() { }
```

- Function in an object:

```javascript
var object = {
	myFunction: function() { }
}
```

##Calling a Function

- In order to invoke a function, we need to "call" it.
- This is how we do it for each type:

```javascript
functionName();

object.myFunction();
```

##Function Arguments

- Arguments allow you to pass data into functions.
- You can think of them as "temporary" variables that can only be used in that function.
- Arguments are passed in at the time of calling the function.

#####The Setup:

```javascript
function addTwo(number1, number2) {
	return number1 + number2;
}
```

#####The Call:

```javascript
addTwo(1, 2);
```

##Function Scope

- Data within functions stay within functions.

```javascript
function defineVar() {
	var phrase = "Hello World!";
}

defineVar();

console.log(phrase);
```

- The variable "phrase" cannot be passed outside of the function.

##Return

- In order to get data outside of a function, it must be returned.
- This doesn't mean that your variables are now accessible; rather, resulting values are passed outside. Consider:

```javascript
function addTwo(number1, number2) {
	number1 + number2;
}
```

- No data would result from this function unless it is "returned" out.
- How would we rewrite this?

##Self-Calling Functions

- Sometimes you want to have a function execute as soon as it is stored into memory.
- Self-calling functions are similar to `$(document).ready()` in jQuery.

```javascript
(function() {
	//Your code here
})();
```

##JS Function Lab 1

Forget how old you are? Calculate it.
- Write a function called calculateAge that:
	- Takes 2 arguments: birth year, current year
	- Calculates the 2 possible ages based on those years
	- Outputs the result to the screen like so: "You are either NN or NN"
- Call the function three times with different sets of values.
- Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

##Control Flow in JavaScript
- Often times you want to make sure certain blocks of code get activated under specific circumstances.
- Control flow structures help you specify when you want blocks of code to run based on a number of true/false conditions.

##Conditionals

- Standard `if, else` blocks
- Slightly more advanced `if, else if, else` blocks

##Comparison Operators

- AND `&&`, OR `||`
- `>`, `<`, `>=`, `<=`

## Exercise #1: The Marathon Runner

- Create a prompt that asks the user what their best marathon time was.
- If their time was between 4 to 5 hours, alert the user that their time was average.
- if the time was between 2 to 4 hours, alert the user that their time was excellent.
- If the time was greater than 4 hours, alert the user that they need to speed up!

## For loop

```javascript
  var mixed = [1, "two", "three", true];
  
  console.log("For Loop:")
  
  // Most common mistake is using commas instead of "semicolons" inside the loop declaration.
  
  for(var i = 0; i < mixed.length; i++) {
    console.log("The element at index " + i + " is: " + mixed[i]); 
  }
```
  
## While loop

```javascript 
var a = [1,2,3,4];
var b = [1,2,3,4];

console.log("While Loop:");
  
var i = 0;
  
while(i < a.length) {
	console.log("The element at index " + i + " is: " + a[i]);
	i++; 
}
```
  
##Infinite Loops

- While writing a loop it is possible to create a loop that will go until infinity.
- Obviously we try to avoid this while coding.

```javascript
for (var i = 0; i > 0; i++) {
	console.log(i);
}
```

## Control Flow Exercise: 
- Write a for loop that will iterate from 0 to 20. 
- For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
- Do this using a `FOR` and a `WHILE` loop.

## Game Lab: Memory
- We will be developing the classic game of memory.
- Download the project files [here](https://github.com/arsood/Memory).
- You will be working on js/beginner.js. Your task is to look at the comments (in gray) and follow the instructions to complete the game.
- When all steps are completed your game should run in the browser!

## JavaScript Objects

####Object Notation

```javascript
var myObject = {
	firstName: "Arun",
	lastName: "Sood",
	role: "Instructor"
};
```

####Accessing Objects

```javascript
myObject.firstName

myObject.lastName

myObject.role
```

####Objects can have multiple data types

```javascript
var myObject = {
	firstName: "Arun",
	lastName: "Sood",
	sayName: function() {
		alert(this.firstName + " " + this.lastName);
	},
	age: 27
};
```

####`this` keyword

- `this` refers to the current object scope.
- In the case of `myObject` above, the current scope is `myObject`.
- I could have simply referred to it by `myObject`, but `this` is very DRY.
- You will see this syntax very often in "MVC"-type JavaScript frameworks such as Backbone.js.

##Object Exercises

Do the object exercises from [this repo](https://github.com/litterbox-sf-fall/notes/blob/master/week_01_fundamentals/day_3_intro_to_javascript/dusk_control_flow_and_functions/primitives_lab.md).

##Object Initialization

- `var myObject = {};` is basically the equivalent of var `myObject = new Object();`
- What happened here? We created a new instance of an object.

####Functions are objects too...

```javascript
function Car(make, model, year) {
	this.make = make;
	this.model = model;
	this.year = year;
}

var myCar = new Car("Honda", "Civic", 2004);

console.log(myCar.make);
console.log(myCar.model);
console.log(myCar.year);
```

- What we've done is basically create a generic way to spit out objects containing the make, model, and year properties of any given car.
- This is very similar to the MODEL part of the MVC pattern of coding you will see later in the course.

##Object Exercise

####The Recipe Card

- Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
- On separate lines (one console.log statement for each), log the recipe information so it looks like:
	- Mole
	- Serves: 2
	- Ingredients:
	- Cinnamon
	- Cumin
	- Cocoa

##AJAX
- AJAX is a powerful way to create server requests and get responses without having to reload the page.
- AJAX stands for Asynchronous JavaScript and XML.
- Here is how it can be accomplished:

```javascript
function reqListener () {
	console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "[Endpoint Here]", true);
oReq.send();
```

- XMLHttpRequest is an object that contains the methods to send AJAX requests.
- The most important method here is `.open`, which takes three parameters:
	- Type of request
	- URL endpoint
	- Asynchronous true or false
- `.send` submits the request.

##AJAX Exercise
- Let's make a request out to `http://daretodiscover.herokuapp.com/users`.
- We can evaluate how we can get data into the console about each user.

##AJAX Lab
- Make a GET request call out to `http://daretodiscover.herokuapp.com/wines`.
- Take the returned data and create a simple HTML template to show the data for each wine.