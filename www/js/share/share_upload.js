var page = (function(){
	
	var	elem = {}
	var img = null;
	var fileName = '';

	var bindHandler = function(){
		$('#return').on('click', function(){
			history.back();
		})

		$('#submit').on('click', function(){
			if(!$('#form_writer').val() || !$('#file').val()){
				navigator.notification.alert(
				    '비워진 필드를 채워주세요.',  // message
				    function(){},         // callback
				    '알림',            // title
				    '확인'                  // buttonName
				);
			}else{
				
				var formData = new FormData($('form')[0]);

				module.request($HOST+'photo', 'POST', formData, function(){
					module.alert('사진이 정상적으로 공유되었습니다.', function(){
		         		location.replace('../share.html');
		         	});  
				})
			}
		});
	};
	
	return {
		init : function(){

			bindHandler();

		}	
	}
	
})();
