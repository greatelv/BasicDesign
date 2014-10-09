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

	var picIdx = 1;

	
	var bindHandler = function(){
		elem.eraser.on('vclick', function(){
			skts.sketch().action = null;
			skts.sketch().actions = [];
			canvO.clearRect(0, 0, canvs.width, canvs.height);
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

		elem.sidebar.find('.others').on('vclick', function(){
			elem.sidebar.find('.arrow-btn').trigger('vclick');
			chagePic();
		});

		elem.sidebar.find('.answer').on('vclick', function(){
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
		elem.eraser.trigger('vclick');
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
