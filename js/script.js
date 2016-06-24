$(function() {

	//configuration
	var width = 720;
	var animationSpeed = 1000;
	var pause = 3000;
	var currentSlide = 1;
	
	//cache DOM
	var $slider = $('#slider');
	var $slideContainer = $slider.find('.slides');
	var $slides = $slideContainer.find('.slide');

	setInterval(function() {
		$slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function(){
			currentSlide++;
			if(currentSlide === $slides.length) {
				currentSlide = 1;
				$slideContainer.css('margin-left', 0);
			}
		});
	}, pause);
	//setInterval
	//animate margin-left
	//if last slide, go to position 1
	//listen for when cursor is on carousel
	//resume when cursor is not on carousel




});