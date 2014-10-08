/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_elem_practice_result');
	var	elem = {
		canvas : $('#paper'),
		sidebar: $('#sidebar')
	}

	var elemId = null;
	var picIdx = 1;

	
	var bindHandler = function(){
		elem.sidebar.find('.arrow-btn').on('vclick', function(){
			if(elem.sidebar.hasClass('open')){
				elem.sidebar.removeClass('open');
				$('#layer').hide();	
			}else{
				elem.sidebar.addClass('open');
				$('#layer').show();	
			}
		});

		elem.sidebar.find('.others').on('vclick', function(){
			location.replace('elem_practice.html?elem='+elemId);
			return false;
		});

		elem.sidebar.find('.return').on('vclick', function(){
			location.replace('../elem.html');
		});
	};

	var initPage = function(){
		elemId = getParameterByName('elem');
		picIdx = getParameterByName('picIdx');

		_this.attr('elem', elemId);

		elem.canvas.css('background-image', 'url(../../img/elem/elem_practice/answer/'+elemId+'/'+picIdx+'.png)');
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
