/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_elem_info');
	var	elem = {
		
	}
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
	var bindHandler = function(){
	};

	var initPage = function(){
		var elem = getParameterByName('elem');
		_this.attr('elem', elem);
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
