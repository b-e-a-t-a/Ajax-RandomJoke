var url = 'http://api.icndb.com/jokes/random';
getJoke();

var button = document.getElementById('get-joke');
button.addEventListener('click', function() {
  getJoke();
});

var paragraph = document.getElementById('joke');

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){ //nasłuchiwanie na odp z serwera
    var response = JSON.parse(xhr.response); //w callbacku zmienna response
    paragraph.innerHTML = response.value.joke; //treść =wartość w odp z serwera
  });
  xhr.send();
}


//jQuery method:
/*
var url = 'http://api.icndb.com/jokes/random';

var $button = $('#get-joke').click(function(){
  getJoke();
});

var $paragraph = $('#joke');

function getJoke() {
  $.ajax ({
    url: url,
    method: 'GET',
    success: function(res){
      $paragraph.text(res.value.joke);
    }
  });
}

*/