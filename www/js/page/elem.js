var page = (function(){
	
	var	elem = {
		
	}
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
	var bindHandler = function(){
		$('#icns li').on('vclick', function(){
			var target = $(this).attr('class');

			location.href="elem/elem_info.html?elem="+target;
		});
	};
	
	return {
		init : function(){
			bindHandler();

		}
	}
	
})();
