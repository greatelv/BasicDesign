var page = (function(){
	
	var	elem = {
		items : $('#items > .item')
	}
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
	var bindHandler = function(){
		$('#items .item').on('vclick', function(){
			var target = $(this).attr('target');
			location.href='page/'+target+'.html';
			
			/*$.mobile.changePage( '../page/'+target+'.html', { 
				transition: "slideup", 
				changeHash: true,
				pageContainer : '.page',
				reloadPage  : true
			});*/
		})
	};
	
	return {
		init : function(){

			bindHandler();

		}	
	}
	
})();
