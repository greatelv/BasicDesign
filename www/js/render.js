/**
 * Elem Info
 * @return {[type]} [description]
 */
var page = (function(){
	
	var _this = $('#page_render');
	var	elem = {
		canvas : $('#paper'),
		eraser : $('#eraser > span'),
		sidebar: $('#sidebar'),
		icns : 	 $('#icn_ctn')
	}

	var img = null;

	var elemId = null;
	var skts = null;
	var canvO = null;
	var canv = null;
	var baseImage = null;
	
	var bindHandler = function(){
		elem.icns.find('.eraser').on('click', function(){
			skts.sketch().action = null;
			skts.sketch().actions = [];
			canvO.clearRect(0, 0, canvs.width, canvs.height);
			initCanvas();
   		});

		
		elem.icns.find('.save').on('click', function(){
			saveCanvas();
		});

		elem.icns.find('.share').on('click', function(){
			window.canvas2ImagePlugin && window.canvas2ImagePlugin.saveImageDataToLibrary(
		        function(path){
		            location.replace('share/share_upload.html?file='+path);
		        },
		        function(err){
		        	alert(err);
		        },
		        document.getElementById('paper')
		    );
		});
	};

	var initCanvas = function(){
		//canvO.fillStyle ="#ffffff";
		//canvO.fillRect(0, 0, canvs.width, canvs.height);
		baseImage = new Image();
		if(img){
			baseImage.src = img;
		}else{
			window.navigator.camera && navigator.camera.getPicture(function(imageData){
				img = imageData;
				baseImage.src = img;
			}, function(){
				navigator.notification.alert(
				    '사진을 가져오는데 실패했습니다.',  // message
				    function(){
				    	history.back();
				    },         // callback
				    '안내',            // title
				    '확인'                  // buttonName
				);
			}, { 
				quality: 100,
				sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
				destinationType: Camera.DestinationType.FILE_URI,
				targetWidth: 570,
  				targetHeight: 800,
  				correctOrientation : false
			});
		}

		//baseImage.src = 'http://cfs7.tistory.com/upload_control/download.blog?fhandle=YmxvZzgyMzM1QGZzNy50aXN0b3J5LmNvbTovYXR0YWNoLzAvMDYwMDAwMDAwMDAwLmpwZw%3D%3D';

		console.log(baseImage.src);
		
		baseImage.onload = function(){
			canvO.drawImage(this, 0, 0, 285, 400);	
			skts = 	elem.canvas.sketch({
				backgroundImage : baseImage.src//baseImage
			});
		};
		
	}

	var initPage = function(){

		img = getParameterByName('img');
		canvs = $('#paper')[0]
		canvO = canvs.getContext('2d');
	};

	var saveCanvas = function(){
		window.canvas2ImagePlugin && window.canvas2ImagePlugin.saveImageDataToLibrary(
			function(msg){
	            navigator.notification.alert(
				    '실습한 결과물이 갤러리에 저장되었습니다.'+msg,  // message
				    function(){},         // callback
				    '안내',            // title
				    '확인'                  // buttonName
				);
	        },
	        function(err){
	            navigator.notification.alert(
				    '실습 결과물을 저장중 문제가 발생했습니다.'+err,  // message
				    function(){},         // callback
				    '안내',            // title
				    '확인'                  // buttonName
				);
	        },
	        document.getElementById('paper')
	    );
	}

	return {
		init : function(){
			initPage();
			initCanvas();
			bindHandler();
		}
	}
	
})();
