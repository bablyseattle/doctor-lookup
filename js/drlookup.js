export class DrLookup{
	constructor(){}

	listDoctors(state, city, condition){
		$.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=${state}-${city}&skip=0&limit=10&user_key=58eefaa257c26e003a35de37308e601f`).then(function(response){
			let listOfDoctors = response.data;
			listOfDoctors.forEach(function(doctor){
        	$('.showDoctors').append('<li>' + doctor.profile.first_name + '</li>');
        	
      });
		});
	}
}