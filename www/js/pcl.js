var page = (function(){
	
	var	elem = {
		
	}
	
	var bindHandler = function(){
		$('#icns li').on('click', function(){
			var target = $(this).attr('class');

			location.href="pcl/pcl_info.html?pcl="+target;
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
