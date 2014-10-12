var page = (function(){
	
	var	elem = {
		
	}
	
	var bindHandler = function(){
		$('#upload').on('vclick', function(){
			location.href="share/share_upload.html";
		});
	};
	
	return {
		init : function(){

			bindHandler();

		}	
	}
	
})();
