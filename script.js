$(document).ready(function(){
    
var $carousel = $('#carousel'),
    $img = $('#carousel .imgCar'),
    totalImages = $img.length - 1,
    i = 0,
    $currentOne = $img.eq(i),
    timeOutCar;

// initialized var, now hiding all images but the current one

    $img.css('display', 'none');
	$currentOne.fadeIn("slow");

// listening to click on controls and in/decrementing index accordingly, then refreshing current image

$('#nextCar').click(function(){ 
	i++;
    window.clearTimeout(timeOutCar);
    if( i <= totalImages ){
        $currentOne.fadeOut("slow", function(){
            $currentOne = $img.eq(i);
            $currentOne.fadeIn("slow");
        });
    }
    else{
        i = -1;
    }
    sliderCarousel();
});


$('#prevCar').click(function(){
    i--;
    window.clearTimeout(timeOutCar);
    if( i >= 0 ){
        $currentOne.fadeOut("slow", function(){
            $currentOne = $img.eq(i);
            $currentOne.fadeIn("slow");
        });
    }
    else{
        i = totalImages;
    }
    sliderCarousel();
});
    
// creating timed slider

function sliderCarousel(){
    timeOutCar = window.setTimeout(function(){
        if(i < totalImages){
    	    i++;
    	}
    	else{
    	    i = 0;
    	}

    $currentOne.fadeOut("slow", function(){
        $currentOne = $img.eq(i);
        $currentOne.fadeIn("slow");
    });

	sliderCarousel();
    }, 5000);
}

sliderCarousel();

});
