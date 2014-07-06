$(document).on('ready', function() {
  $(".center-container").velocity("transition.slideUpIn", 1250).delay(750).velocity({ opacity: 0 }, 750)
});