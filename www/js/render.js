/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_render');
	var	elem = {
		canvas : $('#paper'),
		eraser : $('#eraser > span'),
		sidebar: $('#sidebar'),
	}

	var elemId = null;
	var skts = null;
	
	var bindHandler = function(){
		elem.eraser.on('vclick', function(){
			skts.sketch().actions = [];
			var canvs = $('#paper')[0]
			var canvO = canvs.getContext('2d');
			
			canvO.clearRect(0, 0, canvs.width, canvs.height);
   		});

		elem.sidebar.find('.arrow-btn').on('vclick', function(){
			if(elem.sidebar.hasClass('open')){
				elem.sidebar.removeClass('open');
				$('#layer').hide();	
			}else{
				elem.sidebar.addClass('open');
				$('#layer').show();	
			}
		});

		elem.sidebar.find('.save').on('vclick', function(){
			elem.sidebar.find('.arrow-btn').trigger('vclick');
			chagePic();
		});

		elem.sidebar.find('.share').on('vclick', function(){
			location.replace("elem_practice_result.html?elem="+elemId+"&picIdx="+picIdx);
		});
	};

	var initPage = function(){
		skts = 	elem.canvas.sketch();
	};

	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
