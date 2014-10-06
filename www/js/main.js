var main = (function(){
	
	var	elem = {
		items : $('#items > .item')
	}
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
	var bindHandler = function(){
		/*$( "#items .item" ).on("vclick", function(){
			if(isTouchMoving){
				isTouchMoving = false;
				return false;
			}

			location.href="#page_upload";

			$(document).on('vmousemove', function(){
				isTouchMoving = true;
			});
		});
		
		$(document).on('scrollstop', function(){
			isTouchMoving = false;
		});
*/
		//헤더 메뉴 드로어 토글 이벤트
/*		$('.header_menu_button').on('vclick', function(){
			if(!isOpenHeaderMenu){
				$('.dim').show().addClass('show');
				$('.header_menu').addClass('open');
				disable_scroll(); 
				isOpenHeaderMenu = true;
			}else{
				$('.dim').removeClass('show').hide();
				$('.header_menu').removeClass('open');
				enable_scroll();
				isOpenHeaderMenu = false;
			}
		});

		$('.dim').on('vclick', function(){
			$(this).attr('data-icon', 'arrow-d');
			$('.dim').removeClass('show').hide();
			$('.header_menu').removeClass('open');
			enable_scroll();
			isOpenHeaderMenu = false;
		});*/
		console.log('HANDLER!!');
		$('.menu-btn').on('vclick', function(){
			if($('#menus').hasClass('open')){
				$('#menus').fadeOut(100, function(){
					$(this).removeClass('open')
					$('#layer').hide();
				})
				
			}else{
				$('#menus').fadeIn(200, function(){
					$(this).addClass('open')
					$('#layer').show();
				})
			}
		})

		$('#layer').on('vclick', function(){
			if($('#menus').hasClass('open')){
				$('.menu-btn').trigger('vclick')
			}
		})
		console.log('HANDLER!!');
	};
	
	return {
		init : function(){
			bindHandler();

			//Page Manager
			/*$('#items').pagify({
		        'pages': ['index', 'element', 'fundamental', 'search', 'self', 'upload'],
		        'animation': 'fadeIn',
		        'default' : 'index',
		        'basePagePath': './page/'
	    	});*/
		    
		}
	}
	
})();
