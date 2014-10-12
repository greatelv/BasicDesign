var page = (function(){
	
	var	elem = {}
	var img = null;
	var fileName = '';
	var isPic = false;

	var bindHandler = function(){
		$('#return').on('vclick', function(){
			history.back();
		})

/*		$('div.btn.upload').on('vclick', function(){
			navigator.camera.getPicture(function(imageData){
				img = imageData;
				fileName = imageData.substr(imageData.lastIndexOf('/')+1)+'.png';
				$('.photo-info').text(fileName);
				isPic = true;

				console.log('img : '+img);
				console.log('fileName : '+fileName);
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
		})*/

		$('#submit').on('vclick', function(){
			if(!$('#form_writer').val() || !$('#file').val()){
				navigator.notification.alert(
				    '비워진 필드를 채워주세요.',  // message
				    function(){},         // callback
				    '알림',            // title
				    '확인'                  // buttonName
				);
			}else{
				ActivityIndicator.show()
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
			        	ActivityIndicator.hide();
			        }
			    });

			    /*var options = new FileUploadOptions();

			    options.fileKey="file";
			    options.fileName=fileName;
			    options.mimeType="text/plain";
			    options.params = {
			    	desc : 	 $('form_desc').val || '',
			    	writer : $('form_writer').val || 'BasicDesignUser'
			    }

			    var ft = new FileTransfer();
			    ft.upload(img, encodeURI("http://192.168.0.13:8080/rest/photo"), function(res){
				    
				}, function(error){
					
			    }, options);*/


			}
		});
	};
	
	return {
		init : function(){

			bindHandler();

		}	
	}
	
})();
