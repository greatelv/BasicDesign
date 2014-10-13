/**
 * pcl Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_pcl_practice');
	var	pcl = {
		canvas : $('#paper'),
		eraser : $('#eraser > span'),
		sidebar: $('#sidebar'),
	}

	var pclId = null;
	var skts = null;

	var pic = {
		p1 : [1, 2],
		p2 : [1, 2],
		p3 : [1, 2],
		p4 : [1]
	};

	var picIdx = 1;

	
	var bindHandler = function(){
		pcl.eraser.on('click', function(){
			skts.sketch().action = null;
			skts.sketch().actions = [];
			var canvs = $('#paper')[0]
			var canvO = canvs.getContext('2d');
			
			canvO.clearRect(0, 0, canvs.width, canvs.height);
   		});

		pcl.sidebar.find('.arrow-btn').on('click', function(){
			if(pcl.sidebar.hasClass('open')){
				pcl.sidebar.removeClass('open');
				$('#layer').hide();	
			}else{
				pcl.sidebar.addClass('open');
				$('#layer').show();	
			}
		});

		pcl.sidebar.find('.others').on('click', function(){
			pcl.sidebar.find('.arrow-btn').trigger('click');
			chagePic();
		});

		pcl.sidebar.find('.answer').on('click', function(){
			location.replace("pcl_practice_result.html?pcl="+pclId+"&picIdx="+picIdx);
		});
	};

	var initPage = function(){
		pclId = getParameterByName('pcl');
		_this.attr('pcl', pclId);

		//Pic(문제) 랜덤 추출
		picIdx = _.sample(pic[pclId]);
		pcl.canvas.css('background-image', 'url(../../img/pcl/pcl_practice/'+pclId+'/'+picIdx+'.png)');
		skts = 	pcl.canvas.sketch();
	}

	var chagePic = function(){
		pcl.eraser.trigger('click');
		picIdx = _.sample(_.without(pic[pclId], picIdx)) ;
		pcl.canvas.css('background-image', 'url(../../img/pcl/pcl_practice/'+pclId+'/'+picIdx+'.png)');
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
