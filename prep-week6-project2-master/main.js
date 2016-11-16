/*
=======================================================

** Week 4 - Project 2**
*** jQuery Mania ***


=======================================================
*/

// Add your JS here.


$(document).ready(function() {


//1.
  $('.alertme').click(function() {
     alert('You seem hella easy so far!')
   })

//2.
  $('.clickme').click(function() {
     $('.clickme').text("Ooooo boy, I got clicked! That was fun huh? Huh?!?!")
   })

//3.
  $('.addStyle').click(function() {
    $('button').addClass('buttonStyle')
  })


//4.
  $('.addDifferentStyle').click(function() {
    $('.addDifferentStyle').addClass('addUniqueStyle')
  })


//5.
  $('.removeBtn').click(function() {
    $('button').removeClass("buttonStyle addUniqueStyle")
  })

//6.
  $('.clickToggle').click(function() {
    $('button').toggleClass('buttonStyle')
  })


//7.
  $('.squareBtn').click(function() {
    $('.square').hide()
  })


//8.
  $('.circle').click(function() {
    $('.circle').hide()
  })


//9.
  $('.toggleRedSquare').click(function() {
    $('.redSquare').toggle(1500)
  })


});  // Close: $(document).ready(function() {
