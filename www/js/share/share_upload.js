var page = (function(){
	
	var	elem = {}
	var img = null;
	var isPic = false;

	var bindHandler = function(){
		$('#return').on('vclick', function(){
			history.back();
		})

		$('div.btn.upload').on('vclick', function(){
			navigator.camera.getPicture(function(imageData){
				img = imageData;
				$('.photo-info').text(img.substr(img.lastIndexOf('/')+1)+'.png');
				isPic = true;
			}, function(){
				navigator.notification.alert(
				    '사진을 가져오는데 실패했습니다.',  // message
				    function(){},         // callback
				    '안내',            // title
				    '확인'                  // buttonName
				);
			}, { 
				quality: 100,
				sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
				destinationType: Camera.DestinationType.FILE_URI,
			});
		})

		$('#submit').on('vclick', function(){
			if(!$('form_writer').val() || !isPic){
				navigator.notification.alert(
				    '비워진 필드를 채워주세요.',  // message
				    function(){},         // callback
				    '알림',            // title
				    '확인'                  // buttonName
				);
			}else{

			    var options = new FileUploadOptions();

			    options.fileKey="file";
			    options.fileName=img.substr(img.lastIndexOf('/')+1)+'.png';
			    options.mimeType="text/plain";
			    options.params = {
			    	desc : 	 $('form_desc').val || '',
			    	writer : $('form_writer').val || 'BasicDesignUser'
			    }

			    var ft = new FileTransfer();
			    ft.upload(img, encodeURI("http://localhost:8080/rest/photo"), function(res){
				    console.log("Code = " + res.responseCode);
				    console.log("Response = " + res.response);
				    console.log("Sent = " + res.bytesSent);
				}, function(error){
					alert("An error has occurred: Code = " + error.code);
				    console.log("upload error source " + error.source);
				    console.log("upload error target " + error.target);
			    }, options);
			}
		});
	};
	
	return {
		init : function(){

			bindHandler();

		}	
	}
	
})();
