var page = (function(){
	
	var	elem = {
		items : $('#items > .item')
	}
	
	var isTouchMoving = false;
	var isOpenHeaderMenu = false;
	
	
	var bindHandler = function(){
		$('#items .item').on('vclick', function(){
			var target = $(this).attr('target');

			if(target == 'photo'){

				navigator.camera.getPicture(onSuccess, onFail, { 
					quality: 100,
    				destinationType: Camera.DestinationType.FILE_URI,
    				allowEdit : false,
    				encodingType: Camera.EncodingType.PNG,
    				saveToPhotoAlbum: true,
    				targetWidth: 570,
  					targetHeight: 800
				});

				function onSuccess(imageData) {
					alert(imageData);
					alert(JSON.stringify(imageData));

					navigator.notification.confirm(
					    '갤러리에 사진이 저장되었습니다. 실습할 사진을 선택하시겠습니까?', // message
					    function(){
					    	alert('imageData : '+imageData);
					    },            
					    '안내',           // title
					    ['실습','메인으로']     // buttonLabels
					);


				    /*var image = document.getElementById('myImage');
				    image.src = "data:image/jpeg;base64," + imageData;*/
				}

				function onFail(message) {
				    navigator.notification.alert(
					    '사진찍기 기능이 취소되었습니다.',  // message
					    function(){},         // callback
					    '안내',            // title
					    '확인'                  // buttonName
					);
				}

				return false;
			}


			location.href='page/'+target+'.html';
			
			/*$.mobile.changePage( '../page/'+target+'.html', { 
				transition: "slideup", 
				changeHash: true,
				pageContainer : '.page',
				reloadPage  : true
			});*/
		})
	};
	
	return {
		init : function(){

			bindHandler();

		}	
	}
	
})();
