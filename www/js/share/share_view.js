var page = (function(){
	
	var	elem = {
		photo : $('.photo-view'),
		content : $('#content'),
		comment : $('.comment')
	}
	var seq = 0;
	
	var bindHandler = function(){
		$('#return').on('click', function(){
			location.replace('../share.html');
		})

		$('.submit').on('click', function(){
			module.request($HOST+'comment', 'POST', JSON.stringify({
				'photo_seq' : seq,
				'writer' : window.device.model,
				'comment' : elem.content.val()
			}), function(){
				window.location.href=window.location.href;
			},{
				'Content-Type': 'application/json',
				'Accept': 'application/json'
			})
		})
	};

	var initPate = function(){
		seq = getParameterByName('seq') || 0;

		module.request($HOST+'photo/'+seq, 'GET', null	, function(res){
			elem.photo.css('background-image', 'url('+res.photo_url+')');
			elem.photo.find('.date').text(res.regdate.substr(0, 10));
			elem.photo.find('.writer').text(res.writer);
			elem.photo.find('.desc').text(res.description);



			module.request($HOST+'comment/photo/'+seq, 'GET', null, function(res){
				$.each(res, function(idx, item){
					var item = 
						'<li seq="'+item.seq+'">'+
		                    '<div class="date">'+item.regdate.substr(0, 10)+'</div>'+
		                    '<div class="writer ellipsis">'+item.writer+'</div>'+
		                    '<div class="comment">'+item.comment+'</div>'+
		                '</li>';

		            elem.comment.find('ul').append(item);

		            
				})
			});
		});

		

		//setTimeout(function(){
		//	window.ActivityIndicator && ActivityIndicator.hide();
		//}, 1500);

	}
	
	return {
		init : function(){
			initPate();
			bindHandler();
		}	
	}
	
})();
