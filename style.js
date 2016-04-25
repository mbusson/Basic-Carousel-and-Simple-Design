$(document).ready(function(){

// --- PRE-LOADER ---
 
    setTimeout(function(){
        $('body').addClass('loaded');
    }, 100);

// --- LOGO ANIM ---

	var altern= true;

	$("#logo").mouseleave(function(){
		if (altern) {
			$(this).attr('class', 'tiltR');
			$(this).removeClass('tilt');
			altern= false;
			console.log(altern);
		} else {
			$(this).attr('class', 'tilt');
			$(this).removeClass('tiltR');
			altern= true;
			console.log(altern);
		}

	}); 

// --- MENU ANIM ---

	$('.hoverMenu').hover(function() {
		$(this).children('span').stop(true, true).slideToggle();
	});   

// --- OVERLAY ---

	$('#cred').click(function() {
		$('#overlay').animate({
	    	height : '310px'
		}, 400);
	}); 
	$('#close-ol').click(function() {
		$('#overlay').animate({
	    	height : '0'
		}, 400);
	}); 

});