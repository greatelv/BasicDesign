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
					quality: 50,
    				destinationType: Camera.DestinationType.DATA_URL
				});

				function onSuccess(imageData) {
				    var image = document.getElementById('myImage');
				    image.src = "data:image/jpeg;base64," + imageData;
				}

				function onFail(message) {
				    alert('Failed because: ' + message);
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
