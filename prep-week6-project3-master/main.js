/*
=======================================================

 ** Week 4 - Project 3 **
***   jQuery Mania II  ***



=======================================================
*/


$(document).ready(function() {



// Question #1
  $('.changeColor').click(function() {
    $('li:nth-child(3)').css('color', 'gold');
  })


// Question #2
  $('li:nth-child(4)').click(function() {
    $('li:nth-child(4)').append("<li>Pow! Right in the kisser!</li>")
  })

// Question #3
  $('#removeLi').click(function() {
    $('li:nth-child(2)').remove()
  })

// Question #4
  $('li:last').click(function() {
    $('li:last').animate({
      fontSize: "40px"
    })
    $('li').not(':last').remove();
  })

// Question #5
  $('img.cute').click(function() {
    $(this).clone(true).appendTo('div.clones')
  })

// Question #6

  $(document).dblclick(function() {
    $('#makeSquare').css('width', '120px');
    })


// Question #7

  $('.swatch').click(function() {
    $('body').css('background', $(this).css('background'))
  })


  // Question #8
  $('#hover').mouseenter(function() {
    $('#hover').css('background-color', 'red');
  })
  $('#hover').mouseleave(function() {
    $('#hover').css('background-color', '#39B7CD')
  })
  $('#hover').click(function() {
    $('#hover').addClass('green');
    $('#hover').click(function() {
      $('#hover').removeClass('green');
    })
  })




});
