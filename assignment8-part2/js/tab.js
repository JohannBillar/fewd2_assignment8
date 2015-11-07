$(function(){
	$('#tabNav a').click(function(e){
		var tabChoice = $(this).attr("href");
		e.preventDefault();
		if(e != this){
			$('a').css({
			color: "#515b1e"
		})};
		if(this){
			$(this).css({
			color: "#333"
		})};
		if(tabChoice === "#1"){
			$(this).parent('li').addClass("selected").siblings().removeClass("selected");
			$(tabChoice).removeClass("hidden").siblings().addClass("hidden");
		}else if(tabChoice === "#2"){
			$(this).parent('li').addClass("selected").siblings().removeClass("selected");
			$(tabChoice).removeClass("hidden").siblings().addClass("hidden");
		}else if(tabChoice === "#3"){
			$(this).parent('li').addClass("selected").siblings().removeClass("selected");
			$(tabChoice).removeClass("hidden").siblings().addClass("hidden");
		}
	}); // end click
}); // end ready