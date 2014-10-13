/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
	
	initialize: function() {
		document.addEventListener('deviceready', function(){
			page.init();
			//헤더 버튼 핸들러
			$('.menu-btn').on('click', function(){
				if($('#menus').hasClass('open')){
					$('#menus').fadeOut(100, function(){
						$(this).removeClass('open')
						$('#layer').hide();
					})
				}else{
					$('#menus').fadeIn(200, function(){
						$(this).addClass('open')
						$('#layer').show();
					})
				}
			})

			$('#layer').on('click', function(){
				if($('#menus').hasClass('open')){
					$('.menu-btn').trigger('click')
				}

				if($('#sidebar').size() && $('#sidebar').hasClass('open')){
					$('#sidebar').removeClass('open');
					$('#layer').hide();	
				}
			})

			$('#header .title').on('click', function(){
				location.replace('/index.html');
			});

			$('body').addClass('loaded')
		
		}, false);
	}
};

var $HOST = 'http://localhost:8080/rest/';



var module = {
	alert : function(txt, callback){
		navigator.notification.alert(
		    txt || '',  // message
		    callback || function(){},         // callback
		    '알림',            // title
		    '확인'                  // buttonName
		);
	},
	request : function(url, method, param, callback, headers){
		window.ActivityIndicator && ActivityIndicator.show();

		$.ajax({
	        url : url,
	        type: method,
	        data : param,
	        cache: false,
	        headers: headers || {},
			dataType: 'json',
			processData: false, // Don't process the files
			contentType: false, // Set content type to false as jQuery will tell the server its a query string request
	        success: function(data, textStatus, jqXHR){
	        	callback && callback(data);
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            module.alert('서버 요청중 문제가 발헁했습니다.', function(){});     
	        },
	        complete: function(){
	        	window.ActivityIndicator && ActivityIndicator.hide();
	        }
    	});
	}
}







// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
    for (var i = keys.length; i--;) {
        if (e.keyCode === keys[i]) {
            preventDefault(e);
            return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disable_scroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
  document.onkeydown = keydown;
}

function enable_scroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = document.onkeydown = null;  
}

/**
 * get QueryParam
 */
function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

