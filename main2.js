$(document).on('ready', function() {
	$('.package').css('display', 'none');
	var packages = $('.package');

	for (var i = packages.length - 1; i >= 0; i--) {
		$(packages[i]).fadeIn(750*(i+1));
	};

	if(location.search == "?show_div=1"){
  		$('#OLD_DIV').hide();
  		$('#NEW_DIV').show();
	}

	$(document).on('click', 'a', function(){
		if ($(this).is('#buy-bronze')){
			console.log('tet');
		}
	});
});