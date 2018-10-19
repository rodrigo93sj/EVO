// Menu toggle-button
$(document).ready(function() {
	$('#menu-toggle').click(function() {
		$('.menu').toggleClass('show');
		$('#menu-toggle').toggleClass('times');
	})

	$('.scrollTo').click(function() {
		$('.menu').removeClass('show')
		$('#menu-toggle').removeClass('times')
	})
})

// Scrolling div effect
$(document).on("scroll", function() {
	if($(document).scrollTop()) {
		$('nav').addClass('header-black')
	} else {
		$('nav').removeClass('header-black')
	}
})

// popup whatsapp
$(document).ready(function() {
	window.setTimeout( function() {
		$("#box-info").fadeIn('slow');
	}, 5000);
});
function closeBox() {
    $('#box-info').fadeOut('slow');
}

// Scrolling anchor
$(document).ready(function() {
	$('.scrollTo').click(function() {
		var getElem = $(this).attr('href');
		var targetDistance = 40;
		if ($(getElem).length) {
			var getOffset = $(getElem).offset().top;
			$('html,body').animate({
				scrollTop: getOffset - targetDistance
			}, 800);
		}
		return false;
	});
});