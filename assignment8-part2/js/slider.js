$(function(){

	// base page styles
	$('html').css("height", "100%");
	$('body').css("min-height", "100%");
	$('main').css("margin", "0 20px");
	$('#slideNavigation').css("padding-bottom", "20%");

	//image base styles
	$('main img').css({
		width: "95%",
		margin: "0 auto",
		height: "auto",
		border: "10px solid #333",
		backgroundColor: "#333"
	});
	$('#slides img').css("display", "none");
	
	//create array of slides
	var image, imageCounter = 0, imageCache = [];
	$('#slides img').each(function(){
		image = new Image();
		image.src = $(this).attr("src");
		imageCache[imageCounter] = image;
		imageCounter ++;
	});

	// create navigation
	for(var i = 1; i <= imageCounter; i++) {
		var span = "<span>" + "0" + i + "</span>";
		$('#slideNavigation').append(span);
	};
	$('#slideNavigation span').css("padding", "0 5px");
	$('span:eq(0)').css({
		color: "#d35d72",
		fontStyle: "bold",
		fontSize: "1.5em",
		textDecoration: "underline"
	});
	
	// change text pointer into mouse hand.
	$('span').css("cursor", "pointer");
		
	// slide selection logic
	$('#slideNavigation span').on("click mouseover", function(e){
		var btnChoice = $(this).text();
		var slideNumber = parseInt(btnChoice) - 1;
		var slideSelect = imageCache[slideNumber].src;
		//sets navigation select styles
		if(e != this){$("span").css({
			color: "#000",
			fontStyle: "regular",
			fontSize: "1.25em",	
			textDecoration: "none"
		})};
		if(this){  
			$(this).css({
				color: "#d35d72",
				fontStyle: "bold",
				fontSize: "1.5em",	
				textDecoration: "underline"
		})};
		//	jQuery slide magic
		$('#slide').fadeOut(1000, function(){
			$('#slide').attr("src", slideSelect).fadeIn(1000);
		});
	}); //end click
}); // end ready