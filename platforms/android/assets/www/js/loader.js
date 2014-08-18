/*$(function() {

	var loader = function(){
		console.log('help1');
		
		var elem = {
			splash : $('#splash'),
			app : $('#app')
		};
		
		return {
			initialize : function(){
				
				var splash = setTimeout(function(){
					$.mobile.changePage( "#nextPage.html", {
					    transition: "slide",
					    reverse: true
					});
					console.log('help');
					elem.splash.fadeOut(300);
					app.initialize();
				}, 3000);
				
			}
		}
		
	}();
	
	console.log('help0');
	loader.initialize();
	
});

*/