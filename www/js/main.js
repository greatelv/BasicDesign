var main = (function(){
	
	var	elem = {
		items : $('#items > .item')
	}
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
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
			elem.items.children('.over').removeClass('focus');
			item.children('.over').addClass('focus');
			
		});
		
		$(document).on('scrollstop', function(){
			isTouchMoving = false;
		});

		//헤더 메뉴 드로어 토글 이벤트
		$('#header_menu_button').on('vclick', function(){
			if(!isOpenHeaderMenu){
				$('#dim').show().addClass('show');
				$('#header_menu').addClass('open');
				disable_scroll(); 
				isOpenHeaderMenu = true;

			}else{
				$('#dim').removeClass('show').hide();
				$('#header_menu').removeClass('open');
				enable_scroll();
				isOpenHeaderMenu = false;
			}
		});

		$('#dim').on('vclick', function(){
			$(this).attr('data-icon', 'arrow-d');
			$('#dim').removeClass('show').hide();
			$('#header_menu').removeClass('open');
			enable_scroll();
			isOpenHeaderMenu = false;
		});
	};
	
	return {
		init : function(){
			bindHandler();
		}
	}
	
})();
