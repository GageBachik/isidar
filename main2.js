$(document).on('ready', function() {
	$('.package').css('display', 'none');
	var packages = $('.package');

	for (var i = packages.length - 1; i >= 0; i--) {
		$(packages[i]).fadeIn(750*(i+1));
	};

	if(location.search === "?bronze"){
		console.log('worked');
		$('.buy-bronze').bPopup({
			speed: 450,
			transition: 'slideDown',
		}); 
	}	if(location.search === "?silver"){
		console.log('worked');
		$('.buy-silver').bPopup({
			speed: 450,
			transition: 'slideDown',
		}); 
	}	if(location.search === "?gold"){
		console.log('worked');
		$('.buy-gold').bPopup({
			speed: 450,
			transition: 'slideDown',
		}); 
	}

	$(document).on('click', 'a', function(event){
		event.preventDefault();
		if ($(this).is('#buy-bronze')){
			$('.buy-bronze').bPopup({
				speed: 450,
				transition: 'slideDown'
			});   
		} else if ($(this).is('#buy-silver')){
			$('.buy-silver').bPopup({
				speed: 450,
				transition: 'slideDown',
			}); 
		} else if ($(this).is('#buy-gold')){
			$('.buy-gold').bPopup({
				speed: 450,
				transition: 'slideDown',
			}); 
		}
	});
});