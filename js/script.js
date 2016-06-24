$(function() {

	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	setInterval(function() {
		$('#slider .slides').animate({'margin-left': '-='+width}, animationSpeed);
	}, pause);
	//setInterval
	//animate margin-left
	//if last slide, go to position 1
	//listen for when cursor is on carousel
	//resume when cursor is not on carousel




});