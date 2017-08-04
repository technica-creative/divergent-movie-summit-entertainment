function loadResident(resident, obj) {
	$('.resident-member').hide();
	$('#' + resident).fadeIn( 1000, function() {
		$( "span" ).fadeIn( 100 );
	});

	$('#resident-list li').removeClass('active');
	$(obj).parent().addClass('active');
}

function loadHub(hub, obj) {
	$('#about-the-hub-popup').removeClass('about-divergent');
	$('#about-the-hub-popup').removeClass('see-the-hub');
	$('#about-the-hub-popup').removeClass('gallery');
	$('#about-the-hub-popup').removeClass('the-history');
	$('#about-the-hub-popup').addClass(hub);
	
	$('.about-the-hub').hide();
	$('#' + hub).show();

	$('#hub-list li').removeClass('active');
	$(obj).parent().addClass('active');
}

function loadHubTypes(src, obj) {
	$('#clip-frame').attr('src', src);
}

function tweetShareVideos(href,obj){
	$('#share-video').attr('href', href);
}

function loadShareVideoFB(href,obj){
	$('.pop-facebook').attr('href',href);	
}
function loadShareVideoTW(href,obj){
	$('.pop-twitter').attr('href',href);	
}
function loadShareVideoGG(href,obj){
	$('.pop-google').attr('href',href);	
}
function loadShareVideoTU(href,obj){
	$('.pop-tumblr').attr('href',href);	
}


$(document).ready(function(){
	
	// back to top click
	$('.back-to-top').click(function(){
    	$('html,body').animate({scrollTop: 0}, 1500);
	});
	
	// popup display
	$('#about-hub').colorbox({
		inline : true,
		width : "100%"
	});
	$('#current-resident').colorbox({
		inline : true,
		width : "100%"
	});
	
	// set left for slider 
    var widthScreen = $(window).width();
    if(widthScreen < 1280) {
        widthScreen = 1280;
    }
    var leftPadding = (widthScreen - 1800) / 2;
    $('.callbacks_container').css('left', leftPadding + "px"); 
    $('.wrap').css('width', widthScreen + "px"); 
    
    $(window).resize(function(){
       if($(this).width() != widthScreen){
        widthScreen = $(window).width();
        if(widthScreen < 1280) {
            widthScreen = 1280;
        }
        var leftPadding = (widthScreen - 1800) / 2;
        $('.callbacks_container').css('left', leftPadding +"px"); 
	    if(leftPadding < 0) {
	       $('.callbacks_container .prev').css('left', Math.abs(leftPadding) +"px"); 
	       $('.callbacks_container .next').css('right', Math.abs(leftPadding) +"px"); 
	    } else {
	        $('.callbacks_container .prev').css('left', "0px");
	        $('.callbacks_container .next').css('right', "0px");
	    }
        $('.wrap').css('width', widthScreen +"px"); 
       }
    });
});   