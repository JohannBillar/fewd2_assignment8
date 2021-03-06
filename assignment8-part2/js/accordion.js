$(function(){
	// helper function close accordion
	function closeSection(){
		$('.accordion a').removeClass("minus");
		$('.accordion div').slideUp(800).removeClass("open");
	}	
	// click capture
	$('.accordion a').click(function(e){
		e.preventDefault();
		var selection = $(this).attr("href");		
		// accordion magic 
		if($(e.target).is(".minus")){
			closeSection();
		}
		else{
			closeSection();
			$(this).addClass("minus");
			$('.accordion ' + selection).slideDown(800).addClass("open");
		}
	}); // end click
}); // end ready