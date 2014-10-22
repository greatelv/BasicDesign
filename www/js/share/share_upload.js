var page = (function(){
	
	var	elem = {}
	var img = null;
	var fileName = '';
	var fileParam = '';
	var isGetPic = false;

	var getFileName = function(path){
		var fn = path.substr(path.lastIndexOf('/') + 1);
		if(fn.indexOf('?') != -1){
			var fileName = fn.substr(0, fn.lastIndexOf('?'));
			fn = fileName;
		}
		return fn;
	}

	var initPage = function(){
		$('#form_writer').val(window.device && window.device.model);
		if(getParameterByName('file')){
			
			fileParam = 'file://'+getParameterByName('file');	
			img = fileParam;
			isGetPic = true;
			fileName = getFileName(img);
			
			$('.file_name').text(fileName);
			$('#form_desc').trigger('click');
		}
	};

	var bindHandler = function(){
		$('#return').on('click', function(){
			location.replace('../share.html');
		})

		$('#file').on('click', function(){
			navigator.camera.getPicture(function(imageData){
				img = imageData;
				isGetPic = true;
				fileName = getFileName(img);
				$('.file_name').text(fileName);
			
			}, function(){}, { 
			
				quality: 100,
				sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
				destinationType: Camera.DestinationType.FILE_URI,
				targetWidth: 570,
  				targetHeight: 800,
  				correctOrientation : false
			
			});
		})


		$('#submit').on('click', function(){
			if(!$('#form_writer').val() || !isGetPic){
				navigator.notification.alert(
				    '비워진 필드를 채워주세요.',  // message
				    function(){},         // callback
				    '알림',            // title
				    '확인'                  // buttonName
				);
			}else{
				/*var formData = new FormData($('form')[0]);

				module.request($HOST+'photo', 'POST', formData, function(){
					module.alert('사진이 정상적으로 공유되었습니다.', function(){
		         		location.replace('../share.html');
		         	});  
				})*/

				var formData = $('form').serializeObject();

				var options = new FileUploadOptions();
			
				options.fileKey = "photo";
				options.fileName = fileName;
				options.mimeType= "image/jpeg";
				options.params = formData;

				var ft = new FileTransfer();

				ft.upload(img, encodeURI($HOST+'photo'), function(res){
					var result = $.parseJSON(res.response);
					module.alert('사진이 정상적으로 공유되었습니다.', null, function(){
		         		location.replace('share_view.html?seq='+result.seq);
		         	}); 
				}, function(e){}, options);

			}
		});
	};
	
	return {
		init : function(){
			initPage();
			bindHandler();

		}	
	}
	
})();
