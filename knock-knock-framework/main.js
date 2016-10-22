// Knock Knock Joke JS Code:


// Hide everything in HTML
document.getElementById("joke-part2").classList.add("hide");
document.getElementById("button2").classList.add("hide");
document.getElementById("joke-part3").classList.add("hide");
document.getElementById("button3").classList.add("hide");
document.getElementById("joke-part4").classList.add("hide");
document.getElementById("conclusion-button").classList.add("hide");
document.getElementById("joke-part5").classList.add("hide");



// This is button 1 click trigger.
document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("joke-part2").classList.add("show");
    document.getElementById("button2").classList.add("show");
    document.getElementById("joke-part1").classList.add("hide-replace");
    document.getElementById("button1").classList.add("hide-replace");
});


// This is button 2 click trigger.
document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("joke-part3").classList.add("show");
    document.getElementById("button3").classList.add("show");
    document.getElementById("button2").classList.add("hide-replace");
    document.getElementById("joke-part2").classList.add("hide-replace");
});


// This is button 3 click trigger.
document.getElementById("button3").addEventListener("click", function() {
  document.getElementById("joke-part4").classList.add("show");
  document.getElementById("conclusion-button").classList.add("show");
  document.getElementById("joke-part3").classList.add("hide-replace");
  document.getElementById("button3").classList.add("hide-replace");
});

// This is conclusion button click triggeer.
document.getElementById("conclusion-button").addEventListener("click", function() {
  document.getElementById("joke-part5").classList.add("show");
  document.getElementById("joke-part4").classList.add("hide-replace");
  document.getElementById("conclusion-button").classList.add("hide-replace");
});
