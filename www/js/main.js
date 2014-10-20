var page = (function(){
	
	var	elem = {
		items : $('#items > .item')
	}
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
	var bindHandler = function(){
		$('#items .item').on('click', function(){
			var item = $(this);
			var target = item.attr('target');

			item.find('img').fadeOut('fast', function(){
				$(this).attr('src', 'img/'+target+'_txt_eng.png').fadeIn('fast', function(){
					if(target != 'photo'){
						location.href='page/'+target+'.html';
					}else{

						navigator.camera.getPicture( function(imageData) {
							console.log('onSuccess imageData :'+imageData);
							navigator.notification.confirm(
							    '갤러리에 사진이 저장되었습니다. 촬영한 사진으로 실습을 할까요?', // message
							    function(buttonIndex){
							    	if(buttonIndex == 1){
							    		location.href="page/render.html?img="+imageData;	
							    	}	
							    },            
							    '안내',           // title
							    ['실습','취소']     // buttonLabels
							);
						}, function(message) {
							console.log('onFail message :'+message);
						    navigator.notification.alert(
							    '사진찍기 기능이 취소되었습니다.',  // message
							    function(){},         // callback
							    '안내',            // title
							    '확인'                  // buttonName
							);
						}, { 
							quality: 100,
		    				destinationType: Camera.DestinationType.FILE_URI,
		    				allowEdit : false,
		    				encodingType: Camera.EncodingType.PNG,
		    				saveToPhotoAlbum: true,
		    				targetWidth: 570,
		  					targetHeight: 800,
		  					correctOrientation : false
						});
					}		
				});
			})

			
		})
	};
	
	return {
		init : function(){
			bindHandler();
			/*module.alert(cordova.file.applicationStorageDirectory);
			module.alert(JSON.stringify(cordova.file));*/
		}	
	}
	
})();
