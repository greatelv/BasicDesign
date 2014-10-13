var page = (function(){
	
	var	elem = {
		photo : $('.photo-view')
	}
	
	var bindHandler = function(){
		$('#return').on('click', function(){
			history.back();
		})

		$('.submit').on('click', function(){
			
		})
	};

	var initPate = function(){
		var seq = getParameterByName('seq') || 0;

		module.request($HOST+'photo/'+seq, 'GET', {}, function(res){
			elem.photo.css('background-image', 'url('+res.photo_url+')');
		});
	}
	
	return {
		init : function(){
			initPate();
			bindHandler();
		}	
	}
	
})();
