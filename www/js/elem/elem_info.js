/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_elem_info');
	var	elem = {
		next : $('#next > img ')
	}

	var elemId = null;
	
	var bindHandler = function(){
		elem.next.on('click', function(){
			 location.replace("elem_practice.html?elem="+elemId);
		})
	};

	var initPage = function(){
		elemId = getParameterByName('elem');
		_this.attr('elem', elemId);
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
