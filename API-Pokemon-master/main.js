$(document).ready(function(){

  wheel = new wheelnav('wheelDiv');
  wheel.wheelRadius = 175;
  wheel.centerX = 200;
  wheel.centerY = 180;
  wheel.colors = colorpalette.hotaru;
  wheel.createWheel(["Random", "Color", "Name", "ID"]);
  wheel.navItems[0].navigateFunction = function () {
    $('#result').empty()
    $('#buttons').empty().append('<div class="btn btn-success" id="random" onclick="randomPoke();">Give me a random Pokemon!</div>')
    // '<div class="btn btn-success hidden" id="random" onclick="randomPoke();">Give me a random Pokémon!</div>'
  }; // Random
  wheel.navItems[1].navigateFunction = (function () {
    $('#result').empty()
    $('#buttons').empty().append('<select class="dropdown"> <option value="Choose a color below">Choose a color below</option> <option value="red">red</option> <option value="blue">blue</option> <option value="yellow">yellow</option> <option value="green">green</option> <option value="black">black</option> <option value="brown">brown</option> <option value="purple">purple</option> <option value="gray">gray</option> <option value="white">white</option> <option value="pink">pink</option> </select>')
    $('#buttons').append('<div class="btn btn-success" id="random-color" onclick="colorPoke();">Give me a Pokemon by color!</div>')
  }); // Color
  wheel.navItems[2].navigateFunction = (function () {
    $('#result').empty()
    $('#buttons').empty().append('<form name="pokemon-name"> <input id="poke-name" placeholder="Enter a pokemon name. You Pokemon Master you." type="text"> </form>')
    $('#buttons').append('<div class="btn btn-success" id="search-name" onclick="namePoke();">Let us find this pokemon by name!</div>')
  }); // Name
  wheel.navItems[3].navigateFunction = (function () {
    $('#result').empty()
    $('#buttons').empty().append('<form name="pokemon-name"> <input id="poke-id" placeholder="ID" type="number" min="0" max="721"> </form>')
    $('#buttons').append('<div class="btn btn-success" id="search-id" onclick="idPoke();">Find your pokemon by ID!</div>')
  }); // ID
})

// random Pokemon
function randomPoke() {
  var random = Math.floor(Math.random() * 721) + 1;
  var $xhr = $.getJSON('http://pokeapi.co/api/v2/pokemon/' + random);

  $xhr.done(function(data) {
      if ($xhr.status !== 200) {
          return;
      }

      // Display a pokemon's name, height, weight, and image
      $('#result').empty()
      $('#result').append('<p>Pokemon: ' + data['name'] + '</p>')
      $('#result').append('<p>Height: ' + data['height'] + '</p>')
      $('#result').append('<p>Weight: ' + data['weight'] + '</p>')
      $('#result').append('<p>ID: ' + data.id + '</p>')
      $('#result').append('<img src="' + data.sprites.front_default + '" />')
  });

  $xhr.fail(function(err) {
      console.log(err);
  });
}

// give 10 pokemon by color
function colorPoke() {
  var value = $('select').val()
  var $xhr = $.getJSON('http://pokeapi.co/api/v2/pokemon-color/' + value);

  $xhr.done(function(data) {
      if ($xhr.status !== 200) {
          return;
      }

      // Display a Pokemon by color group
      $('#result').empty()
      $('#result').append('<ul id="result-color"></ul>')
      for (i = 0; i < 10; i++) {
        $('#result-color').append('<li>' + data['pokemon_species'][i]['name'] + '</li>')
      }
  });

  $xhr.fail(function(err) {
      console.log(err);
  });
}

// Search pokemon by name
function namePoke() {
  var value = $('#poke-name').val().toLowerCase()
  var $xhr = $.getJSON('http://pokeapi.co/api/v2/pokemon/' + value);

  $xhr.done(function(data) {
      if ($xhr.status !== 200) {
          return;
      }

      // Display a Pokemon by it's name
      $('#result').empty()
      $('#result').append('<p>Pokemon: ' + data['name'] + '</p>')
      $('#result').append('<p>Height: ' + data['height'] + '</p>')
      $('#result').append('<p>Weight: ' + data['weight'] + '</p>')
      $('#result').append('<p>ID: ' + data.id + '</p>')
      $('#result').append('<img src="' + data.sprites.front_default + '" />')
  });

  $xhr.fail(function(err) {
      console.log(err);
  });
}

// Search pokemon by ID
function idPoke() {
  var value = $('#poke-id').val()
  var $xhr = $.getJSON('http://pokeapi.co/api/v2/pokemon/' + value);

  $xhr.done(function(data) {
      if ($xhr.status !== 200) {
          return;
      }

      // Display a Pokemon by it's name
      $('#result').empty()
      $('#result').append('<p>Pokemon: ' + data['name'] + '</p>')
      $('#result').append('<p>Height: ' + data['height'] + '</p>')
      $('#result').append('<p>Weight: ' + data['weight'] + '</p>')
      $('#result').append('<p>ID: ' + data.id + '</p>')
      $('#result').append('<img src="' + data.sprites.front_default + '" />')
  });

  $xhr.fail(function(err) {
      console.log(err);
  });
}
