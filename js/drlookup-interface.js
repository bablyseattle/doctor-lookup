import { DrLookup } from './../js/drlookup.js'

$(document).ready(function(){
  $('#drlookup').submit(function(e) {
    e.preventDefault();
    let state = $('#state').val();
    state = state.toLowerCase();
    let city = $('#city').val();
    city = city.toLowerCase();
    let condition = $('#condition').val();
    $('#state').val("");
     $('#city').val("");
     $('#condition').val("");
    let lookup = new DrLookup();
    lookup.listDoctors(state, city, condition);
  })
})