/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_elem_practice');
	var	elem = {
		canvas : $('#paper	')
	}

	var elemId = null;
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
	var bindHandler = function(){
		
	};

	var initPage = function(){
		elemId = getParameterByName('elem');
		_this.attr('elem', elemId);

		 elem.canvas.sketch();

	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
