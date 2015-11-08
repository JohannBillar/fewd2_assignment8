$(function(){	
	// select navigation
	$('.tabs a').click(function(e){
		var tabChoice = $(this).attr("href");
		var parentLi = $(this).parent('li');
		e.preventDefault();
		// helper function
		function tabSwitch(){
			parentLi.addClass("selected").siblings().removeClass("selected");
			$(tabChoice).removeClass("hidden").siblings().addClass("hidden");
		}
		// tab logic
		if(tabChoice === "#tab-1"){
			tabSwitch();
		}else if(tabChoice === "#tab-2"){
			tabSwitch();
		}else if(tabChoice === "#tab-3"){
			tabSwitch();
		}
	}); // end click
}); // end ready