/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_elem_practice');
	var	elem = {
		canvas : $('#paper'),
		eraser : $('#eraser > span'),
		sidebar: $('#sidebar'),
		icns : 	 $('#icn_ctn'),
		colors : $('#color_ctn')
	}

	var elemId = null;
	var skts = null;
	var fromResult = false;

	var pic = {
		e1 : [1, 2, 3],
		e2 : [1, 2, 3],
		e3 : [1, 2],
		e4 : [1, 2],
		e5 : [1, 2],
		e6 : [1, 2]
	};

	var picIdx = 1;

	
	var bindHandler = function(){
		elem.icns.find('.eraser_old').on('click', function(){
			var canvs = $('#paper')[0]
			var canvO = canvs.getContext('2d');
			skts.sketch().action = null;
			skts.sketch().actions = [];
			canvO.clearRect(0, 0, canvs.width, canvs.height);
			canvO.clearRect(0, 0, canvs.width, canvs.height);
   		});

		elem.icns.find('.other').on('click', function(){
			/*elem.sidebar.find('.arrow-btn').trigger('click');*/
			elem.icns.find('.eraser_old').trigger('click');
			chagePic();
		});

		elem.icns.find('.answer').on('click', function(){
			location.replace("elem_practice_result.html?elem="+elemId+"&picIdx="+picIdx);
		});

		elem.colors.children('li').on('click', function(){
			var color = $(this).attr('class');
		});
	};

	var initPage = function(){
		elemId = getParameterByName('elem');
		picIdx = getParameterByName('picIdx') ? parseInt(getParameterByName('picIdx')) : 1; //From Practice Return Page
		fromResult = getParameterByName('fromResult'); //From Practice Return Page

		_this.attr('elem', elemId);

		fromResult && chagePic();

		elem.canvas.css('background-image', 'url(../../img/elem/elem_practice/'+elemId+'/'+picIdx+'.png)');
		skts = 	elem.canvas.sketch();
	}

	var chagePic = function(){
		elem.icns.find('.eraser_old').trigger('click');
		picIdx = _.sample(_.without(pic[elemId], picIdx)) ;
		elem.canvas.css('background-image', 'url(../../img/elem/elem_practice/'+elemId+'/'+picIdx+'.png)');
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
