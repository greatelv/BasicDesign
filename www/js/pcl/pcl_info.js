/**
 * pcl Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_pcl_info');
	var	pcl = {
		next : $('#next > img ')
	}

	var pclId = null;
	
	var bindHandler = function(){
		pcl.next.on('click', function(){
			 location.replace("pcl_practice.html?pcl="+pclId);
		})
	};

	var initPage = function(){
		pclId = getParameterByName('pcl');
		_this.attr('pcl', pclId);
	}
	
	return {
		init : function(){
			initPage();
			bindHandler();
		}
	}
	
})();
