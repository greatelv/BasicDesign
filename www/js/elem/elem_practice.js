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
		icns : 	 $('#icn_ctn')
	}

	var elemId = null;
	var skts = null;

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

		/*elem.sidebar.find('.arrow-btn').on('click', function(){
			if(elem.sidebar.hasClass('open')){
				elem.sidebar.removeClass('open');
				$('#layer').hide();	
			}else{
				elem.sidebar.addClass('open');
				$('#layer').show();	
			}
		});*/
		

		elem.icns.find('.other').on('click', function(){
			/*elem.sidebar.find('.arrow-btn').trigger('click');*/
			elem.icns.find('.eraser_old').trigger('click');
			chagePic();
		});

		elem.icns.find('.answer').on('click', function(){
			location.replace("elem_practice_result.html?elem="+elemId+"&picIdx="+picIdx);
		});
	};

	var initPage = function(){
		elemId = getParameterByName('elem');
		_this.attr('elem', elemId);

		//Pic(문제) 랜덤 추출
		picIdx = _.sample(pic[elemId]);
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
