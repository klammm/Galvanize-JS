/*
=======================================================

** Week 3 - Project 2 **
*** More Functioning ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be logged to the console.

In order to make the results easy to read,
please use console.log("Question #") to declare the
problem number being solved followed by console.log(yourAnswer) after each question.

For any methods that we didn't cover, please refer to the Functions Documentation.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

BASIC TRACK: 1-9
ADVANCED TRACK: 10-13
=======================================================
*/

document.getElementById('q0').innerHTML = "I am connected now!"
document.getElementById('q0').classList.add('status-good')

// 1. Without using Math.min(), write a function called minimum(),
//    that takes two numbers from a user,
//    and outputs the smaller number into the HTML page.

function minimum(x, y) {
  if (x < y) {
    return x
  } else {
    return y
  }
}

document.getElementById('minimum-button').addEventListener("click", function() {
  var minimumFirst = document.getElementById('minimum-first').value;
  var minimumSecond = document.getElementById('minimum-second').value;

  document.getElementById('q1').innerHTML = "The smaller number is....(drumroll)... " + minimum(minimumFirst, minimumSecond)
})



// 2. Create a new function called minimum3(),
//    to find the smallest of three numbers,
//    input by a user,
//    and the smallest displayed within the HTML page.

function minimum3(x, y, z) {
  if (x <= y && x <= z) {
    return x
  } else if (y <= z && y <= x) {
    return y
  } else {
    return z
  }
}

document.getElementById('minimum3-button').addEventListener("click", function() {
  var minimumFirst = document.getElementById('minimum3-first').value;
  var minimumSecond = document.getElementById('minimum3-second').value;
  var minimumThird = document.getElementById('minimum3-third').value;

  document.getElementById('q2').innerHTML = "The smaller number is....(drumroll)... " + minimum3(minimumFirst, minimumSecond, minimumThird)
})


// 3. Declare a function called sum() that takes an array of numbers as an argument adds them together and displays the result within the HTML page.
//    i.e. sum([1, 2, 3, 4]) should return 10.

function sum(array) {
  var sum = 0;

  // assuming the array only contains numbers as values
  for (i = 0; i < array.length; i++) {
    sum += array[i]
  }

  return sum
}

var array = [1, 2, 3, 4];

document.getElementById('q3').innerHTML = "This is an example of the sum array. Here's the sum: " + sum(array)

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together.
//    i.e. multiply([1, 2, 3, 4]) should return 24.

function multiply(array) {
  var product = 1;

  // assuming the array only contains numbers as values
  for (i = 0; i < array.length; i++) {
    product *= array[i]
  }

  return product
}

document.getElementById('q4').innerHTML = "This is an example of the product array. Here's the product: " + multiply(array)



// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(array) {
  var result = [];

  for (i = 0; i < array.length; i++) {
    if (array[i].length >= 6) {
      result.push(array[i])
    }
  }

  return result
}

document.getElementById('q5').innerHTML = "This is our new array: " + filterSixPlus(words)



// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.
//    HINT: You may need to use parseFloat to convert the user's string input to a float.

function celsiusToFahrenheit(temp) {
  var floatTemp = parseFloat(temp)
  return (floatTemp * 1.8) + 32
}

document.getElementById('celsius-button').addEventListener("click", function() {
  var celsiusValue = document.getElementById('celsius-value').value;

  document.getElementById('q6').innerHTML = celsiusToFahrenheit(celsiusValue) + " degrees Fahreinheit"
})



// 7. Adding to the code in #6, ask the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius
//    or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F".
//    Display an error if they do not follow the rules.

function flexibleTemperatureConvert(string, temp) {
  var floatTemp = parseFloat(temp);
  var downcaseString = string.toLowerCase();

  if (downcaseString === "f to c") {
    return (floatTemp - 32) / 1.8 + " degrees."
  } else if (downcaseString === "c to f") {
    return (floatTemp * 1.8) + 32 + " degrees."
  } else {
    return "Error. Please enter either \"F to C\" or \" C to F\". Nothing is going to happen if you type something else."
  }
}

document.getElementById('temp-button').addEventListener("click", function() {
  var tempValue = document.getElementById('temp-value').value;
  var convertValue = document.getElementById('converter').value;

  document.getElementById('q7').innerHTML = flexibleTemperatureConvert(convertValue, tempValue)
})


// 8. Write a function countBs() that takes a string as its only argument and returns
//    a number that indicates how many uppercase “B” characters are in the string.
//    HINT: Google charAt()

function countBs(string) {
  var count = 0;

  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === "B") {
      count++
    }
  }

  return count
}

document.getElementById('b-button').addEventListener('click', function() {
  var string = document.getElementById('b-value').value;

  document.getElementById('q8').innerHTML = "There are exactly " + countBs(string) + " B's."
})


// 9. http://games.usvsth3m.com/javascript-under-pressure/
//    Have fun with these!
//    Get as far as you can and record your progress and time.
//    We'll try this again in a few weeks!

document.getElementById('q9').innerHTML = "<a href=\"http://games.usvsth3m.com/javascript-under-pressure/\">You try going to this link and see what happens. I don't even know anymore.</a>"





// ADVANCED TRACK
// 10. Write a function called countChars() that behaves like countBs(), except it takes a
//     second argument that indicates what character is to be counted.

function countChars(string, letter) {
  var count = 0;

  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === letter) {
      count++
    }
  }

  return count
}



document.getElementById('count-chars-button').addEventListener("click", function() {
  var sentenceValue = document.getElementById('count-chars-value').value;
  var letterValue = document.getElementById('count-letters-value').value;

  document.getElementById('qa').innerHTML = "There are exactly " + countChars(sentenceValue, letterValue) + " " + letterValue + "'s."
})

// 11. Declare a function called ohZero that replaces all of the o's in a string with 0's.

function ohZero(string) {
  var result = "";
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === "o" || string.charAt(i) === "O") {
      result += "0"
    } else {
      result += string[i]
    }
  }

  return result
}

document.getElementById('ohzero-button').addEventListener("click", function() {
  var zeroValue = document.getElementById('ohzero-value').value;

  document.getElementById('qb').innerHTML = "Here's your new string. Your welcome: " + ohZero(zeroValue) + " ."
})

// 12. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.

function beerBottles() {
  var answer = "";
  for (i = 99; i >= 0; i -= 1) {
    var lyrics = "<div>" + i + " Bottles of Beer on the Wall </div>" ;
    answer += lyrics
  }

  return answer
}

// Press the button and we get the lyrics.
document.getElementById('beer-button').addEventListener("click", function() {
  document.getElementById('qc').innerHTML = beerBottles()
})


// 13. Create a 'Guessing Game'. The game starts by picking a random number.
//     It then prompts the user to guess the number. If the user's number is lower/higher,
//     it will prompt the user to enter another guess and tell the user if the guess was
//     too high or too low. This continues until the correct guess is entered.
//     When the correct guess is entered the user is given a success message with the correct number.

var guessNumber = Math.floor((Math.random() * 10) + 1)

function guessGame(guess) {
  if (guess < guessNumber) {
    return "Your guess was too low. Try again."
  } else if (guess > guessNumber) {
    return "Your guess was too high. Try again."
  } else {
    return "Correct. It's about time you guessed right."
  }
}

document.getElementById('guess-button').addEventListener("click", function() {
  var guessValue = document.getElementById('guess-value').value;

  document.getElementById('qd').innerHTML = guessGame(guessValue)
})
