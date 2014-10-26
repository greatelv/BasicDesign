/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_elem_practice_result');
	var	elem = {
		canvas : $('#paper'),
		sidebar: $('#sidebar'),
		icns : $('#icn_ctn')
	}

	var elemId = null;
	var picIdx = 1;

	
	var bindHandler = function(){
		elem.icns.find('.other').on('click', function(){
			location.replace('elem_practice.html?elem='+elemId+'&picIdx='+picIdx+'&fromResult=true');
		});
		/*elem.sidebar.find('.arrow-btn').on('click', function(){
			if(elem.sidebar.hasClass('open')){
				elem.sidebar.removeClass('open');
				$('#layer').hide();	
			}else{
				elem.sidebar.addClass('open');
				$('#layer').show();	
			}
		});*/

		/*elem.sidebar.find('.others').on('click', function(){
			location.replace('elem_practice.html?elem='+elemId);
			return false;
		});

		elem.sidebar.find('.return').on('click', function(){
			location.replace('../elem.html');
		});*/
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
