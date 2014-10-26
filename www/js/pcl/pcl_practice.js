/**
 * pcl Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_pcl_practice');
	var	elem = {
		canvas : $('#paper'),
		eraser : $('#eraser > span'),
		sidebar: $('#sidebar'),
		icns : 	 $('#icn_ctn')
	}

	var pclId = null;
	var skts = null;

	var pic = {
		p1 : [1, 2],
		p2 : [1, 2],
		p3 : [1, 2],
		p4 : [1, 2]
	};

	var picIdx = 1;

	
	var bindHandler = function(){
		elem.icns.find('.eraser_old').on('click', function(){
			var canvs = $('#paper')[0]
			var canvO = canvs.getContext('2d');
			skts.sketch().action = null;
			skts.sketch().actions = [];
			canvO.clearRect(0, 0, canvs.width, canvs.height);
   		});

		elem.icns.find('.other').on('click', function(){
			elem.icns.find('.eraser_old').trigger('click');
			chagePic();
		});

		elem.icns.find('.answer').on('click', function(){
			location.replace("pcl_practice_result.html?pcl="+pclId+"&picIdx="+picIdx);
		});
	};

	var initPage = function(){
		pclId = getParameterByName('pcl');
		picIdx = parseInt(getParameterByName('picIdx')); //From Practice Return Page
		fromResult = getParameterByName('fromResult'); //From Practice Return Page

		_this.attr('pcl', pclId);

		fromResult && chagePic();

		//Pic(문제) 랜덤 추출
		picIdx = _.sample(pic[pclId]);
		elem.canvas.css('background-image', 'url(../../img/pcl/pcl_practice/'+pclId+'/'+picIdx+'.png)');
		skts = 	elem.canvas.sketch();
	}

	var chagePic = function(){
		elem.icns.find('.eraser_old').trigger('click');
		picIdx = _.sample(_.without(pic[pclId], picIdx)) ;
		elem.canvas.css('background-image', 'url(../../img/pcl/pcl_practice/'+pclId+'/'+picIdx+'.png)');
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
