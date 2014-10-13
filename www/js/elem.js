var page = (function(){
	
	var	elem = {
		
	}
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
	var bindHandler = function(){
		$('#icns li').on('click', function(){
			var target = $(this).attr('class');
			location.href="elem/elem_info.html?elem="+target;
		});

		$(window).on("navigate", function (event, data) {
		  var direction = data.state.direction;
		  if (direction == 'back') {
		    location.replace('../index.html');
		  }
		});
	};
	
	return {
		init : function(){
			bindHandler();

		}
	}
	
})();
