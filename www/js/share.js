var page = (function(){
	
	var	elem = {
		photo : $('.item-ctn ul')
	}
	
	var bindHandler = function(){
		$('#upload').on('click', function(){
			location.href="share/share_upload.html";
		});
	};

	var initPage = function(){
		/*ActivityIndicator.show();*/
		$.ajax({
	        url : $HOST,
	        type: "GET",
	        cache: false,
			dataType: 'json',
			processData: false, // Don't process the files
			contentType: false, // Set content type to false as jQuery will tell the server its a query string request
	        success: function(data, textStatus, jqXHR){
	        	$.each(data, function(idx, item){
	        		var item = '<li seq="'+item.seq+'" style="background-image:url('+item.photo_url+')"></li>'	
	        		elem.photo.append(item);	
	        	})
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            module.alert('호출 중 문제가 발헁했습니다.', function(){});     
	        },
	        complete: function(){
	        	//ActivityIndicator.hide();
	        }
    	});
	}
	
	return {
		init : function(){
			bindHandler();
			initPage();

		}	
	}
	
})();
