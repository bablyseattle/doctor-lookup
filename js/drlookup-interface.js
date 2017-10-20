import { DrLookup } from './../js/drlookup.js'

$(document).ready(function(){
  $('#drlookup').submit(function() {
    let location = $('#location').val();
    let distance = $('#distance').val();
    $('#location').val("");
    $('#distance').val("");
    let bike = new Bike();
    bike.listBikeByLocation(location, distance);
  })
})