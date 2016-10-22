/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.

var feelings = "Falling behind...quickly. P.S. I hate and love github at the same time";
document.getElementById("q2").innerHTML = feelings;






// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.

var name = "Kevin";
var message = "Konichiwa";
document.getElementById("q3").innerHTML = name + " " + message;





// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var x = 25;
var y = 10;
var addition = x + y;
var subtraction = x - y;
var multiplication = x * y;
var division = x / y;
document.getElementById("q4a").innerHTML = "Addition: " + addition;
document.getElementById("q4b").innerHTML = "Subtraction: " + subtraction;
document.getElementById("q4c").innerHTML = "Multiplication: " + multiplication;
document.getElementById("q4d").innerHTML = "Division: " + division;





// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.

var string1 = "Golden State";
var string2 = "Warriors";
var concatString = string1 + " " + string2;
document.getElementById("q5").innerHTML = concatString;





// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and briefly explain the results within the HTML page.

document.getElementById("q6a").innerHTML = "5" + "3";
document.getElementById("q6b").innerHTML = "5" - "3";
document.getElementById("q6c").innerHTML = "5" * "3";
document.getElementById("q6d").innerHTML = "5" / "3";
document.getElementById("q6note").innerHTML = "Addition concatenates the two \
number strings. Subtraction, multiplication, and division actually operates \
on the two number strings."





// 7. When a button is clicked, add content into the ID "q7".

document.getElementById("q7").classList.add("hide");

document.getElementById("callAlert").addEventListener("click", function () {
  document.getElementById("q7").classList.add("show");
})





// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.

document.getElementById("callDoubleNum").addEventListener("click", function () {
  var num = document.getElementById("doubleNum").value;
  document.getElementById("q8").innerHTML = num * 2;
})






// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1 = 5;
var num2 = 10;
if (num1 > num2) {
  document.getElementById("q9").innerHTML = "Yes, the value of num1 is greater \
  than num2";
} else {
  document.getElementById("q9").innerHTML = "No, the value of num1 is not greater \
  than num2";
};





// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.


var score = Math.floor(Math.random() * 100) + 1;
if (score > 90) {
  document.getElementById("q10").innerHTML = "Great job."
} else if (score > 60 && score < 89) {
  document.getElementById("q10").innerHTML = "Nice work, keep practicing."
} else {
  document.getElementById("q10").innerHTML = "Very bad: study more and retake the test."
};





// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//   "My name is __. I'm __ years old, and I live in __."

document.getElementById("completeSentence").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var location = document.getElementById("location").value;
  document.getElementById("qa").innerHTML = "Well this is what we learned \
  about you. Oh you know, for a friend. <br><br> Your name is " + name + ". You are " +
  age + " years old, and you live in " + location + "." + "<br> <br> Now that \
  wasn't so creepy, was it?";
});




// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.

var base = 2;
var height = 3;
var areaOfTriangle = (2 * 3) / 2;

document.getElementById("qb").innerHTML = "Suppose we have a triangle with base \
2 inches and height 3 inches. The area of this triangle is....";

document.getElementById("surprise").addEventListener("click", function() {
  document.getElementById("answer").innerHTML = areaOfTriangle + " inches";
});

// C. Collect the user's length and width input to determine the area of a rectangle and display within the HTML page the result.

document.getElementById("area").addEventListener("click", function() {
  var base = document.getElementById("base").value;
  var height = document.getElementById("height").value;
  document.getElementById("qc").innerHTML = "The area of your triangle is " +
  (base * height) / 2 + " inches.";
});

// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.

document.getElementById("nameLength").addEventListener("click", function() {
  var theirName = document.getElementById("username").value;
  document.getElementById("qd").innerHTML = "Surprise! Not really. Your name is\
   just " + theirName.length + " characters long. That's all. <br>Whoopdie-do \
   *cheap sparklers go off*"
})

// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad

document.getElementById("score-button").addEventListener("click", function() {
  var testScore = document.getElementById("test-score").value;
  if (testScore > 90) {
    document.getElementById("qe").innerHTML = "<p style=\"color: green\">Great job!</p>";
  } else if (testScore > 60 && testScore < 89) {
    document.getElementById("qe").innerHTML = "<p style=\"color: orange\">Nice work, keep practicing.</p>"
  } else {
    document.getElementById("qe").innerHTML = "<p style=\"color: red\">Very bad: study more and retake the test.</p>"
  };
});

// Warriors surprise ;)

document.getElementById("sorry").classList.add("hide");

document.getElementById("finale").addEventListener("click", function() {
  document.getElementById("you-already-know").innerHTML = "<img src=\"http://604now.com/wp-content/uploads/2016/08/Golden-State-Warriorss.jpg\">";
  document.getElementById("sorry").classList.add("show");
});



/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
