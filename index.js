'use strict'

$(function() {

  const $button = $('button');
  const $title = $('input');

  const getData = function (){
    $.ajax({
      url: 'https://www.omdbapi.com/',
      method: 'GET',
      dataType: 'json',
      data: {
        t: $title.val(),
      },
    })
    .done(data => {
      console.log('Data: ', data);
      handleResponse(data);
      let $year = $('<ul>');
      $year.text(`Year: ${data.Year}`);
      let $actors = $('<ul>');
      $actors.text(`Starring: ${data.Actors}`);
      let $plot = $('<ul>');
      $plot.text(`Storyline: ${data.Plot}`);
      $('#movies').append($year);
      $('#movies').append($actors);
      $('#movies').append($plot);


    })
    .fail(err => {
      console.log('Error: ', err);
    })
  }
  const addAJAXFunction = function(){
    $('button').on('click', getData);

  };

  const appendMovie = function(name,imagePath){
    $('h5').text(name);
    $('img').attr('src', imagePath);
  };

  const handleResponse = function(movieObject){
    appendMovie(movieObject.Title, movieObject.Poster);

  };
  $button.on('click', getData);
});
