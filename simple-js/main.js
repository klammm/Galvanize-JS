// JavaScript Document



// Use JS to add header text into 'main-header' without button click.
document.getElementById("main-header").innerHTML = "<h1>JS Practice</h1>";



// Use JS to add paragraph text into 'action1-message' with button click from 'action1-btn'. -->
document.getElementById("action1-btn").addEventListener("click", function(){
    document.getElementById("action1-message").innerHTML = "Action #1 Button was Clicked!";
});

// Use JS to add an h2 into 'heading2' with button click.
// The HTML has been created, this is your chance to add JS.
document.getElementById("header2-btn").addEventListener("click", function(){
  document.getElementById("header2-message").innerHTML = "Action #2 Button is now Clicked! Bless KD";
});

// Create 3 examples of JS being added to the HTML page immediately.
// You'll need to create both the HTML and JS for this.
document.getElementById("steph-button").addEventListener("click", function(){
  document.getElementById("steph-button-message").innerHTML = "The baby-faced assassin says hello <img src=\"https://upload.wikimedia.org/wikipedia/commons/3/36/Stephen_Curry_dribbling_2016_(cropped).jpg\">";
});

document.getElementById("kd-button").addEventListener("click", function(){
  document.getElementById("kd-button-message").innerHTML = "Golden State Warriors welcome the Durantula <img src=\"http://images.performgroup.com/di/library/sporting_news/83/11/illo-kevin-durant-warriors-ftr-111715_vvc3jvn6tmis1hbhoy14qrj1b.jpg?t=366550457\">";
})

document.getElementById("klay-button").addEventListener("click", function() {
  document.getElementById("klay-button-message").innerHTML = "Winner of 2015-2016 All Star 3-point contest <img src=\"http://www.hoopsjunction.com/wp-content/uploads/2015/12/klay-thompson-120815-usnews-getty-ftr_1i3luyzpfxx7411oac9f8a1i1s.jpg\">";
})
// Create 3 examples of JS being added to the HTML page based on button clicks.
// You'll need to create both the HTML and JS for this.
