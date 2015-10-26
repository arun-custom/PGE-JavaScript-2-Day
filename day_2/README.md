# Introduction to DOM Manipulation
- One of the most powerful features of JS is its ability to alter the DOM.
- You can respond to events on elements, set HTML dynamically, and perform animations.

##Selecting Elements
- Like CSS, if you want to perform some action on an element you first have to select it.
- We did this in CSS through selectors such as IDs, classes, and pseudo-selectors.
- JavaScript gives us an easy way to select elements based on the same paradigm.

####getElementById()

```
document.getElementById("my-div");
```

####getElementsByClassName()

```
document.getElementsByClassName("my-div");
```

####getElementsByTagName()

```
document.getElementsByTagName("my-div");
```

####querySelector()

```
document.querySelector("#my-div");
```

####querySelectorAll()

```
document.querySelectorAll("#my-div.my-class");
```

##Dynamically Altering Attributes
- There are many reasons why you may want to alter HTML attributes on the fly with JS.
- Changing inline CSS properties is the most common reason to alter attributes. This can be done with the `style` attribute.
- There are "getter" and "setter" methods available to work with attributes:

Getter

```
div.getAttribute("id");
```
Setter

```
div.setAttribute("style", "background-color: red;");
```

##Dealing with Classes
- In JavaScript you will often need to dynamically change HTML class attributes.
- This may be for animation work or for basic stylistic changes.
- There are a few methods you can use to accomplish this:

Add a class:

```
div.classList.add("anotherclass");
```

Remove a class:

```
div.classList.remove("foo");
```

Toggle a class:

```
div.classList.toggle("visible");
```

Check if element already contains a class:

```
div.classList.contains("foo");
```

##Handling Events
- There are many events you may want to respond to with JS including clicks, mouseovers, focuses, etc.
- Events can be listened for and responded to using `addEventListener`.

```
document.getElementById("my-div").addEventListener("click", function() {
	alert("Click worked!");
});
```

- If you need to handle an event that occurs on many elements you will need to attach event listeners to each element individually.
- This can be done by binding the event to a class. Let's take this example:

####index.html

```
<div class="my-div"></div>
<div class="my-div"></div>
<div class="my-div"></div>
```

####app.js

```
var myElements = document.getElementsByClassName("my-div");

for (var i = 0; i < myElements.length; i++) {
	myElements[i].addEventListener("click", function() {
		alert("Click worked!");
	});
}
```

##innerHTML
- When you need to replace the HTML inside of an element you can use the `innerHTML` property.

```
document.getElementById("my-div").innerHTML = "<span>New HTML here</span>";
```

##Score Keeper Lab
- We will be creating a simple score keeper application using JavaScript.
- The HTML and CSS has already been done for you [here](score_keeper_html/).
- Here are the steps you should take:
	- Step 1: Add a link to your own custom JS file before the closing body tag.
	- Step 2: Bind click events to the +5 and -5 point buttons and change the innerHTML of the score display appropriately.
	- Step 3: Bind a click event to the set score button and set the innerHTML of the score display to the score entered in the text box.
	- **Bonus:** Create a check in your code to make sure the score will not go negative.
	- **Super Bonus:** Create a function to make the changes to the score display rather than having to write your logic over and over.

## Templating with JavaScript Lab
- In this lab we will be using data returned from an API to add it to a HTML page.
- We will be using the [omdbAPI](http://www.omdbapi.com/) to get movie data.
- You will need to follow these steps:
	- Step 1: Create a simple input with a submit button to search for a movie by title.
	- Step 2: On click of the button, query the API with the title information.
	- Step 3: Show the movie data on the page via a HTML table.

HINT: To get text input that a user entered

```javascript
document.getElementById("my-input").value;
```

## Manipulating Tables with JavaScript
- In this section we will be working with a HTML document that has been already developed for you. You can find it [here](tables_example/).
- Step 1: As a first step, we need to activate the "add new wine" button. Assign a click event to this button and have it toggle the class "hide" on the #add-wine-form table.
- Step 2: Use AJAX to pull data from the /wines API and populate the table.
- Step 3: Upon filling out the form, add a new row to the table with the new wine's information.
- Step 4: Before adding a wine to the table on the previous step, perform an AJAX POST request to add the new wine to the API.
- Step 3-4 Bonus: Reset the form after submitting. You will need to lookup the .reset() function.
- Step 5: Activate the color picker. Upon selecting a value from the color picker list, change every other table row to that specific color.
- Step 6 (Hard): Activate the checkboxes. When you turn one on and off it should toggle the class "active" on the appropriate column title on the table.
- Step 6 Bonus: As a bonus, try activating the "active" class on the columns based on the text inside rather than assigning IDs or classes to them.