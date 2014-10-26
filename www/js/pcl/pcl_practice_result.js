/**
 * pcl Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_pcl_practice_result');
	var	elem = {
		canvas : $('#paper'),
		sidebar: $('#sidebar'),
		icns : $('#icn_ctn')
	}

	var pclId = null;
	var picIdx = 1;

	
	var bindHandler = function(){
		elem.icns.find('.other').on('click', function(){
			location.replace('pcl_practice.html?pcl='+pclId+'&picIdx='+picIdx+'&fromResult=true');
		});
		/*pcl.sidebar.find('.arrow-btn').on('click', function(){
			if(pcl.sidebar.hasClass('open')){
				pcl.sidebar.removeClass('open');
				$('#layer').hide();	
			}else{
				pcl.sidebar.addClass('open');
				$('#layer').show();	
			}
		});

		pcl.sidebar.find('.others').on('click', function(){
			location.replace('pcl_practice.html?pcl='+pclId);
			return false;
		});

		pcl.sidebar.find('.return').on('click', function(){
			location.replace('../pcl.html');
		});*/
	};

	var initPage = function(){
		pclId = getParameterByName('pcl');
		picIdx = getParameterByName('picIdx');

		_this.attr('pcl', pclId);

		elem.canvas.css('background-image', 'url(../../img/pcl/pcl_practice/answer/'+pclId+'/'+picIdx+'.png)');
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
