var main = (function(){
	
	var	elem = {
		items : $('#items > .item')
	}
	
	var isTouchMoving = false;
	
	
	var bindHandler = function(){
		$( "#items .item" ).on("vclick", function(){
			console.log('isTouchMoving  : '+isTouchMoving);
			if(isTouchMoving){
				isTouchMoving = false;
				return false;
			}

			$(document).on('vmousemove', function(){
				isTouchMoving = true;
			});
			
			var item = $(this);
			elem.items.children('.over').hide();
			item.children('.over').fadeIn(200);
		});
		
		$(document).on('scrollstop', function(){
			isTouchMoving = false;
		});
	};
	
	return {
		init : function(){
			bindHandler();
		}
	}
	
})();
