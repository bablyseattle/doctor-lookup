
var apiKey = require('./../.env').apiKey;
export class DrLookup{
	constructor(){}

	listDoctors(state, city, condition){
		$.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${state}-${city}&skip=0&limit=10&user_key=${apiKey}`).then(function(response){
			let listOfDoctors = response.data;
			listOfDoctors.forEach(function(doctor){
        	$('.showDoctors').append('<li>' + doctor.profile.first_name + '</li>');
        	
      });
		});
	}
}