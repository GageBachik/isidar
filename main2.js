$(document).on('ready', function() {
	$('.package').css('display', 'none');
	var packages = $('.package');

	for (var i = packages.length - 1; i >= 0; i--) {
		$(packages[i]).fadeIn(750*(i+1));
	};
});