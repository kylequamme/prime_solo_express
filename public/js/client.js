$(function(){
  $('.btn').on('click', function(){
    $('.balance').remove();
    $.get('/balance').then(function(response){
      // console.log(response);
      $('main').append('<div class="balance"><h1>' +
      response.text + '</h1>' + '<h2>' + response.money
      + '</h2></div>');
      $('.balance').fadeIn('slow');
    })
  })

})
