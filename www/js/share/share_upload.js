var page = (function(){
	
	var	elem = {}
	var img = null;
	var fileName = '';

	var bindHandler = function(){
		$('#return').on('vclick', function(){
			history.back();
		})

		$('#submit').on('vclick', function(){
			if(!$('#form_writer').val() || !$('#file').val()){
				navigator.notification.alert(
				    '비워진 필드를 채워주세요.',  // message
				    function(){},         // callback
				    '알림',            // title
				    '확인'                  // buttonName
				);
			}else{
				//ctivityIndicator.show()
				var formData = new FormData($('form')[0]);

				$.ajax({
			        url : $HOST,
			        type: "POST",
			        data : formData,
			        cache: false,
        			dataType: 'json',
        			processData: false, // Don't process the files
        			contentType: false, // Set content type to false as jQuery will tell the server its a query string request
			        success:function(data, textStatus, jqXHR) 
			        {
			         	module.alert('사진이 정상적으로 공유되었습니다.', function(){
			         		location.replace('../share.html');
			         	});  
			        },
			        error: function(jqXHR, textStatus, errorThrown) 
			        {
			            module.alert('사진을 업로드하지 못했습니다.', function(){});     
			        },
			        complete: function(){
			        	//ActivityIndicator.hide();
			        }
			    });
			}
		});
	};
	
	return {
		init : function(){

			bindHandler();

		}	
	}
	
})();
