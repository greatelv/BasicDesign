/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_elem_practice');
	var	elem = {
		canvas : $('#paper'),
		eraser : $('#eraser > a')
	}

	var elemId = null;
	var skts = null;

	var pic = {
		e1 : [1, 2],
		e2 : [1, 2],
		e3 : [1, 2],
		e4 : [1, 2],
		e5 : [1, 2],
		e6 : [1, 2]
	};

	
	var bindHandler = function(){
		elem.eraser.on('vclick', function(){
			skts.sketch().actions = [];
			var canvs = $('#paper')[0]
			var canvO = canvs.getContext('2d');
			
			canvO.clearRect(0, 0, canvs.width, canvs.height);
   		});
	};

	var initPage = function(){
		elemId = getParameterByName('elem');
		_this.attr('elem', elemId);
		skts = 	elem.canvas.sketch();
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
