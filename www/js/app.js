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

			$('#menus > li').click(function(){
				var idx = $(this).index();

				switch (idx){
					case 0 :
						module.alert(
							'BASIC DESIGN은 기초디자인 교육을 목적으로 만들어졌습니다. \n'+
							'중학생 1학년을 기준으로 내용을 구성하였으며 학교 수업 내에서 자율적으로 사용가능합니다. \n' +
							'또한 중학생이 아니더라고 디자인에 관심이 있다면 그 누구든 쉽게 기초디자인에 접할 수 있습니다. \n'+
							'BASIC DESIGN을 통해 디자인과 친해져 보는 기회를 가지세요 - 2014.10.', '서비스 소개');
						break;
					case 2 :
						module.alert(
							'1. 요소&원리 \n'+
							'해당 페이지에서는 요소 및 원리에 관한 정보를 접하게 됩니다.  각 요소 및 원리 별 설명 페이지에서 그에 관한 내용을 습득 후 실습을 진행하게 됩니다.\n\n'+
							'2. 찍기 \n'+
							'각 스마트기기에 내장 된 카메라와 연동되어 사진을 찍을 수 있습니다.\n\n'+
							'3. 그리기 \n'+
							'그림판에 사진을 불러와서 요소 및 원리를 찾아 그리거나 표시하는 응용학습을 진행합니다.\n\n'+
							'4. 공유하기\n'+
							'본 애플리케이션의 게시판에 각자의 응용학습 결과물을 올리고 상대방의 결과물을 공유해봅니다.\n\n', '사용법');
						break;
					case 4 :
						module.alert(
							'1. 디자인 요소와 원리 내용 참고 \n'+
							'1-1.기초디자인(김상구)  : 미진사\n'+
							'1-2.중학교미술(연혜경 외 2인) : 천재교과서\n\n'+
							'2. 사진출처\n'+
							'2-1. Twenty-First Century Design : CARLTON \n'+
							'2-2. www.leklint.com\n'+
							'2-3. 디자인의이해 : 서울특별시·서울특별시교육청\n', '정보');
						break;		
				}
			});
		}, false);
	}
};

var $HOST = 'http://ec2-54-64-252-231.ap-northeast-1.compute.amazonaws.com:8080/rest/';



var module = {
	alert : function(txt, title, callback){
		navigator.notification.alert(
		    txt || '',  // message
		    callback || function(){},         // callback
		    title || '알림',            // title
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
	        	window.ActivityIndicator && ActivityIndicator.hide();
	        },
	        error: function(jqXHR, textStatus, errorThrown){
	            module.alert('서버 요청중 문제가 발헁했습니다.', null, function(){});     
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

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

