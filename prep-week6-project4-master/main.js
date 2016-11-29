$(document).ready(function() {
  // #1
  $('#submitBtn').click(function() {
    var contents = $('#textInput').val();
    $("<h3>" + contents + "</h3>").insertAfter(this)
  })

  // #2
  $('.chex').click(function() {
    $('h2').toggleClass('hidden')
  })

  // #3
  $('tbody:last-child').append('<tr><td>Momo</td><td>12.5</td><td>Hangry</td></tr>')

  // #4
  $('td').each(function() {
    if ($(this).text() === "Hangry") {
      this.style.color = "red"
    } else if ($(this).text() === "Content") {
      this.style.color = "green"
    }
  })

  // #5
  $('#fat-cats').click(function() {
    $('tr').each(function() {
      if ($(this).children(':nth-child(2)').text() < 10) {
        $(this).remove()
      }
    })
  })

  // #6 (I get an error )
  $('#big-names').click(function() {
    $('tr').each(function() {
      var text = $(this).children(':first').text()
      $(this).children(':first').text(text.toUpperCase())
    })
  })

  // #7
  $('#hide-table').click(function() {
    $('table').toggleClass('hidden')
  })

  // #8
  $('#disableUs input').prop('disabled', true);
  $('a').click(function(event) {
    event.preventDefault()
  })

  // #9
  $('select.dropdown').change(function() {
    $('select.dropdown :selected').appendTo('#9-answer')
  })

  // #10
  $('#alert10').click(function() {
    var counter = 0;
    $('#alertList li').each(function() {
      counter++
    })
    alert("There are " + counter + " items in the list")
  })

  // #11: create
  $('#create10').click(function() {
    var input = $('#create-item').val();
    $('#alertList').append('<li>' + input + '</li>')
    var count = 0;
    $('#alertList li').each(function() {
      count++
    })
    $('#displayList12').text(count)
  })

  // #11: remove
  $('#remove10').click(function() {
    $('#alertList li:last').remove()
    var count = 0;
    $('#alertList li').each(function() {
      count++
    })
    $('#displayList12').text(count)
  })

  // #12: just place this block of code within #11
  // var count = 0;
  // $('#alertList li').each(function() {
  //   count++
  // })
  // $('#displayList12').append(count)
})
