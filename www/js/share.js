var page = (function(){
	
	var	elem = {
		photo : $('.item-ctn ul')
	}
	
	var bindHandler = function(){
		$('#upload').on('click', function(){
			location.href="share/share_upload.html";
		});

		elem.photo.on('click', 'li', function(){
			var seq = $(this).attr('seq');
			location.href="share/share_view.html?seq="+seq;
		});
	};

	var initPage = function(){
		module.request($HOST+'photo', 'GET', {}, function(res){
			$.each(res, function(idx, item){
        		var item = '<li seq="'+item.seq+'" style="background-image:url('+item.photo_url+')"></li>'	
        		elem.photo.append(item);	
        	})
		})
	}
	
	return {
		init : function(){
			bindHandler();
			initPage();

		}	
	}
	
})();
