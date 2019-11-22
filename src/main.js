import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Name } from './lookup.js';
import { Feeling } from './feelings.js';

$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();
    let numberInput = $('input#numberInput').val();
    let feelingInput = $('input#feelingInput').val();

    (async () => {
      let name = new Name();
      const response = await name.getNameByNumber(numberInput);
      getElements(response);
    })();

    (async () => {
      let feeling = new Feeling();
      const response2 = await feeling.getFeeling(feelingInput);
      getfeelingElements(response2);
    })();

    function getElements(response) {
      $(".output").text(`The person you are creeping on is named ${response.belongs_to[0].name}`);
    }
    function getfeelingElements(response2) {
      console.log(response2.gfycats[0].max2mbGif);
      // $("#picture").append(`<img src="${response2.gfycats[0].max2mbGif}">`);
      // document.getElementById("stupidpicture").src = response2.gfycats[0].max2mbGif;
      $('.output2').html('<img id="stupidpicture" src="' + response2.gfycats[0].max2mbGif + '" alt="">' )
    }
  });
});
