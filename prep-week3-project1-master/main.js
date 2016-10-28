/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/
document.getElementById('q0').innerHTML = "JS Page Connected Properly!";
document.getElementById('q0').classList.add('status-good');


// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

function joke() {
  document.getElementById('q1').innerHTML = "<img src=\"https://heavyeditorial.files.wordpress.com/2016/07/screenshot_2016-07-04_at_2-4.jpg?quality=65&strip=all&w=735\">"
}

document.getElementById('joke').addEventListener('click', function() {
  joke();
})

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.

function divideByTwo(number) {
  return number / 2
};


document.getElementById('divide-button').addEventListener("click", function() {
  var userValue = document.getElementById('user-number').value;
  var x = Number(userValue);
  document.getElementById('q2').innerHTML = divideByTwo(x);
})

// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.

function greeting(person1, person2) {
  return "Hello " + person1 + " and " + person2 + " . How are both of your days? I am here to serve."
}

document.getElementById("greeting-button").addEventListener('click', function() {
  var greeting1 = document.getElementById("first-name").value;
  var greeting2 = document.getElementById("second-name").value;
  document.getElementById("q3").innerHTML = greeting(greeting1, greeting2);
})

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.

function average(x, y, z, a, b, c) {
  var total = x + y + z + a + b + c
  return total / 6
}

document.getElementById('average-button').addEventListener("click", function() {
  var number1 = document.getElementById("first-number").value;
  var number2 = document.getElementById("second-number").value;
  var number3 = document.getElementById("third-number").value;
  var number4 = document.getElementById("fourth-number").value;
  var number5 = document.getElementById("fifth-number").value;
  var number6 = document.getElementById("sixth-number").value;

  var x = Number(number1);
  var y = Number(number2);
  var z = Number(number3);
  var a = Number(number4);
  var b = Number(number5);
  var c = Number(number6);

  document.getElementById('q4').innerHTML = average(x, y, z, a, b, c);
})


// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.

function cashewPrice(price) {
  return price * 6
}

document.getElementById('price-button').addEventListener("click", function() {
  var priceValue = document.getElementById('price-value').value;
  document.getElementById('q5').innerHTML = cashewPrice(priceValue)
})


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function areaOfRectangle(width, height) {
  return width * height
}

function perimeterOfRectangle(width, height) {
  return 2 * width + 2 * height
}

document.getElementById('area-button').addEventListener("click", function() {
  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;

  document.getElementById('q6').innerHTML = areaOfRectangle(width, height);
})

document.getElementById('perimeter-button').addEventListener("click", function() {
  var width = document.getElementById('width').value;
  var height = document.getElementById('height').value;

  document.getElementById('q6').innerHTML = perimeterOfRectangle(width, height);
})





// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

function quarter(number) {
  return number / 4
}

document.getElementById('quarter-button').addEventListener("click", function() {
  var quarterNumber = document.getElementById('quarter').value;

  document.getElementById('q7').innerHTML = quarter(quarterNumber);
})



// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

var cheekyComment = "";
function sleepings(hours) {
  if (hours >= 8) {
    cheekyComment = "It seems you've gotten enough rest, but be sure not to oversleep.";
  } else {
    cheekyComment = "Oh you look tired. Maybe you should get some more rest.";
  };

  return cheekyComment
}

document.getElementById('sleep-button').addEventListener('click', function() {
  var sleepHours = document.getElementById('sleep-hours').value;

  document.getElementById('q8').innerHTML = sleepings(sleepHours);
})



// 9. Develop a function that determines a person's age by asking them for their birth year.

function ageFinder(birth_year) {
  var age = 2016 - birth_year

  if (age < 35) {
    return "You are " + age + " years old. You're still young. Live it up while you can!"
  } else if (age > 35 && age < 60) {
    return "You are " + age + " years old. You're reaching the middle point of your life. How do you like your life so far?"
  } else {
    return "You are " + age + " years old. You're probably relishing in old age so just kick back and relax now!"
  };
}

document.getElementById('year-button').addEventListener("click", function() {
  var ageValue = document.getElementById('year').value;

  document.getElementById('q9').innerHTML = ageFinder(ageValue);
})




// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.


teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

function teams(array) {
  var team1 = [];
  var team2 = [];
  for (i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      team1.push(array[i])
    } else {
      team2.push(array[i])
    }
  }
  return [team1, team2]
}

document.getElementById('q10').innerHTML = "<p> Here's team 1: " + teams(teammates)[0] + ".</p>"
document.getElementById('q10').innerHTML += "<p> Here's team 2: " + teams(teammates)[1] + ".</p>"


// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.

function digitTotal(string) {
  // assuming the user only inputs digits in their string.

  var total = 0;
  for (i = 0; i < string.length; i++) {
    var digit = string[i]
    total += Number(string[i])
  }
  return total
}

document.getElementById('digit-button').addEventListener("click", function() {
  var digitValue = document.getElementById('digit-value').value;

  document.getElementById('q11').innerHTML = digitTotal(digitValue);
  document.getElementById("q11").innerHTML += "<p> You're welcome. </p>"
})



// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

function extraChange(quarters, dimes, nickels, pennies) {
  var quarterAmount = quarters * .25
  var dimeAmount = dimes * .10
  var nickelAmount = nickels * .05
  var pennyAmount = pennies * .01
  var total = quarterAmount + dimeAmount + nickelAmount + pennyAmount

  return total.toFixed(2)
}

document.getElementById('change-button').addEventListener("click", function() {
  var quarters = document.getElementById('quarter-value').value;
  var dimes = document.getElementById('dime-value').value;
  var nickels = document.getElementById('nickel-value').value;
  var pennies = document.getElementById('penny-value').value;

  document.getElementById('q12').innerHTML = "<p> You're spare change amounts to: " + "$" + extraChange(quarters, dimes, nickels, pennies) + " . Extra beer money, in my opinion.";
})


// ADVANCED TRACK


// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

function validPhone(string) {
  if (string.length < 10 && string.length > 11) {
    return "Invalid number. Please try again"
  } else if (string.length === 10) {
    return "Great. Thank you for providing us your number. I just need it...for a friend."
  } else if (string.length === 11 && string.charAt(0) === "1") {
    var newTele = string.substring(1)
    return "We cleaned up your number for you. Here it is now: " + newTele
  } else {
    return "Invalid number. Please try again."
  }
}

document.getElementById('tele-button').addEventListener("click", function() {
  var teleValue = document.getElementById('tele-number').value;

  document.getElementById('qa').innerHTML = validPhone(teleValue);
})

// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

function isNumber(array) {
  var result = [];
  for (i = 0; i < array.length; i++) {
    if (isNaN(array[i]) === false) {
      result.push(array[i])
    }
  }
  return result
}

document.getElementById('qb').innerHTML = "New array: " + isNumber(arrayOfAllTheThings);

// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.

function dice() {
  var roll1 = Math.floor((Math.random() * 6) + 1)
  var roll2 = Math.floor((Math.random() * 6) + 1)

  return roll1 + roll2
}

document.getElementById('roll-button').addEventListener("click", function() {
  document.getElementById('qc').innerHTML = dice();
});

// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

function monopoly() {
  var complete = 0;
  var spaces = 0;
  for (i = 0; complete < 40; i++) {
    complete += dice()
    spaces++
  }
  return spaces
}

document.getElementById('qd').innerHTML = "It took you " + monopoly() + " tries to get around the monopoly board."


// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.

function leapYear(year) {
  if (year % 4 === 0 && year % 400 === 0) {
    return "Yes, you're damn right it's a leap year"
  } else if (year % 4 === 0 && year % 100 !== 0) {
    return "Yes, this is also a leap year. Go google it next time"
  } else {
    return "No, it's not a leap year. Now stop bothering me."
  }
}

document.getElementById('leap-button').addEventListener("click", function() {
  var leapValue = document.getElementById('leap-value').value;

  document.getElementById('qe').innerHTML = leapYear(leapValue);
})
