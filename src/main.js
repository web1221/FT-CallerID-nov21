import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let numberInput = $('input#numberInput').val();

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.ekata.com/3.0/phone.json?api_key=${process.env.API_KEY}&phone.country_hint=US&phone=${numberInput}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response) {
      let body = JSON.parse(response);
      $(".output").text(`The person you are creeping on is named ${body.belongs_to[0].name}`);
    }, function(error) {
      $('.showErrors').text(`you suck: ${error.message}`);
    });
  });
});
