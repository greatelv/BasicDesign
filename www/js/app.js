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
				location.replace('file:///android_asset/www/index.html');
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
							'BASIC DESIGN을 통해 디자인과 친해져 보는 기회를 가지세요 - 2014.10.', '애플리케이션 소개');
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
							'본 애플리케이션의 게시판에 각자의 응용학습 결과물을 올리고 상대방의 결과물을 공유해봅니다.\n\n', '사용방법');
						break;
					case 4 :
						module.alert(
							'1. 요소와 원리 정보 참고 출처\n'+
							'요소와 원리의 정보페이지의 경우 단행본 기초디자인(김상구/미진사)와 \n'+
							'중학미술교과서(연혜경 외/천재교과서)의 내용을 참고하여 재구성 한 것입니다. \n\n'+
							'2. 사진출처\n'+
							'* 전통보자기: 디자인의 이해/서울특별시·서울특별시교육청\n'+
							'* Tide(Stuart Haygarth): Twenty-First Century Design/CARLTON\n'+
							'* LE KLINT 172B(Poul Christiansen): www.leklint.com', '애플리케이션 정보');
						break;		
					case 6 :
						module.alert(
							'다음은 퀴즈를 진행하면서 참고해야 할 정보입니다.\n\n'+
							'1. 요소 \n\n'+
							'1-1. 점 \n\n'+
							'· 책: 책은 여러 장의 종이를 겹쳐 우리가 접하고 싶은 방대한 정보를 담고 있는 일상용품이다. 이때 이 사진에서 발견할 수 있는 점은 선과 선이 만나 90도 직각을 이루는 모서리를 만들며 생기게 되는데 눈에 직관적으로 보이지는 않는다. 이를 통해 선과 선이 교차하는 지점에 점이 생김을 알 수 있도록 한다. 또한 점의 위치는 책의 크기와 두께를 가늠 해 볼 수 있도록 하고 어떠한 책들은 펼쳤을 때 중앙이 넓게 펴지면서 모서리가 사라져 점이 보이지 않게 된다.\n\n'+
							'· 리모컨: 리모컨은 거리가 있는 기계를 어디서나 손쉽게 작동 할 수 있도록 돕는 기기로 누구나 한 번 쯤 사용한 경험이 있는 일상용품이다. 리모컨 버튼은 눈으로 쉽게 인지 할 수 있는 점이다. 각 버튼은 고유 기능을 갖고 있고 버튼의 위치, 크기 및 색은 중요도나 사람의 사용 경험을 고려하여 배치되어 있다.\n\n'+
							'· 필통: 운동화에서는 조밀하게 모여 있는 작은 점의 요소를 찾아 볼 수 있다. 이것은 운동화의 숨구멍으로 신발안의 열이나 습기를 배출하도록 하는 기능을 갖고 있다. \n\n'+
							'1-2. 선\n\n'+
							'· 와인잔: 와인잔은 액체를 그 안에 담아 사람의 입에 닿아 마시는 행위를 하게하는 일상용품이다. 그렇기 때문에 우선 손으로 들 수 있어야 하며 잎으로 닿는 것을 고려해야 한다. 와인잔의 손잡이 부분은 곡선의 원기둥 형태의 선을 확인 할 수 있는데, 직선이나 각진 기둥보다 잡기에 편하다. 또한 대부분의 컵이 그렇듯이 입이 닿는 잔의 가장자리는 곡선으로 처리되어 있어 입에 닿았을 때 방해받는 요소를 최소화 한다. \n\n'+
							'· 필통: 필통은 필기구를 넣을 수 있도록 한 상자이다. 해당 사진에서 선의 요소를 통해 필통의 두께와 필기구가 들어가는 공간 등 입체적 모양을 확인 해 볼 수 있다. 또한 필통이 닫혔을 때의 상황도 생각해 보게 하여 형태 및 선의 요소의 변화를 인지시켜 줄 수 있을 것이다.\n\n'+
							'· 책: 책은 점의 예제에서 보았던 것과 같이 펼쳐지는 속성이 있기 때문에 상황에 따라 요소가 다르게 보일 수 있다. 사진처럼 닫혀 있을 때의 외곽의 선을 통해 두께 등 입체적인 형태를 가늠해 볼 수 있고, 펼쳤을 때 생길 선의 변화를 가상으로 생각해보거나 직접 실습해 보는 것도 좋을 것이다. \n\n'+
							'1-3. 면\n\n'+
							'· 책: 면은 선들이 모여 모서리가 닫힌 것으로 선의 요소의 연장선상에 있다. 면의 요소를 통해 책의 면적과 두께를 가늠해 볼 수 있다. 앞선 선의 요소 예제와 함께 비교하여 생각해보도록 하여 요소들 간의 속성을 파악하도록 한다. \n\n'+
							'· 필통: 필통에서의 면의 요소를 통해 필통의 굵기와 비례 등을 외관의 모습을 더욱 명확하게 알 수 있다. 또한 사진에서 보이던 입체적 형태가 보이지 않기 때문에 또 다른 관점으로 물체를 바라 볼 수 있도록 하며 해당 예제 또한 앞선 선의 요소와 함께 비교하며 보도록 한다.\n\n'+
							'1-4. 형 \n\n'+
							'· 연필: 연필의 경우 사람의 손으로 잡고 글씨를 쓸 수 있게 하는 필기구의 한 종류로 사람이 손으로 잡았을 경우 일차적으로 편한 사용감을 느끼도록 해 주어야 하기 때문에 긴 원기둥형을 일반적으로 갖고 있다. 또한 잡는 손의 모양을 본을 따서 고안한 형태로 둥근 삼각기둥 모양을 하고 있는 연필 또한 주변에서 쉽게 찾아 볼 수 있다. 더 나아가 해당 사진의 연필에는 손에서 미끄러지지 않도록 외벽에 수많은 볼록한 점들을 확인 할 수 있다. \n\n'+
							'· 필통: 필통의 경우 직육면체 형의 요소를 찾아 볼 수 있다. 필통이 닫혔을 경우 하나의 직육면체가 되며, 열었을 경우에는 두 개의 직육면체로 나누어진다. 나누어진 직육면체 내부에서는 또 직육면체 형으로 빈 공간이 형성되어 그 부분에 필기구를 넣을 수 있다. \n\n'+
							'1-5. 명암 \n\n'+
							'· 와인잔: 와인잔은 온도에 영향을 덜 주고 와인의 색감을 잘 볼 수 있도록 유리잔으로 만들어 진다. 유리는 빛이 잘 통과하는 물질로 명암의 요소 관점에서 보았을 경우 다양한 빛의 변화를 살펴 볼 수 있다. 빛을 많이 받는 곳은 밝은 하얀색으로 극명하게 눈에 보이며, 빛을 받지 않거나 그림자의 부분에서는 어두운 그림자를 확인 할 수 있다.  \n\n'+
							'· 전등: 사진 속의 전등은 디자이너 폴 크리스티얀센(Poul Christiansen)의 작품인 LE KLINT 172 시리즈(1969)의 전등으로 긴 시간 사랑받고 있는 제품이다. 면의 굴곡으로 다양한 곡선이 층을 이루게 됨으로써 빛을 받거나 받지 못하는 부분이 생기게 된다. 이는 명암으로 확인해 볼 수 있다.\n\n'+
							'1-6. 질감\n\n'+
							'· 수건: 수건은 우리의 몸에 직접 닿아 이물질을 닦아주는 용도로 쓰인다. 이 일상용품은 살에 직접 접촉해야하기 때문에 감촉이 좋은 천이나 면으로 만들어져 부드럽고 따뜻한 질감을 갖고 있다. \n\n'+
							'· 와인잔: 와인잔은 유리재질로 이루어진 일상용품이다. 유리는 앞서 명암 예제에서도 보았듯이 빛이 극명하게 보이는 특성을 갖고 있다. 이러한 빛의 모습은 재질의 특성을 보여주기도 하는데 이 경우에는 광택이 나는 투명한 유리임을 보여준다. 유리는 매끄럽고 차가운 재질이며 눈으로도 쉽게 그 질감을 확인 할 수 있다. \n\n'+
							'2. 정보 \n\n'+
							'2-1. 조화\n\n'+
							'· 전통 조각보: 한국 전통 조각보는 조상의 미적 감각을 엿볼 수 있는 일상용품이다. 조각보는 바느질로 일일이 자투리 천을 연결한 것으로 밥상의 그릇을 덮어 놓는 용도로 쓰이는 것이 일반적이었다. 다양한 색과 의도하지 않은 비례의 원리까지 살펴 볼 수 있는데 이러한 전반적인 요소 및 원리의 집합을 통해 조화라는 원리를 느껴 볼 수 있다.\n\n'+
							'· 전등: 스튜어트 헤이가스(Stuart Haygarth)의 작품 Tide(2005)로 수백 개의 폐품을 재배치하여 만든 전등이다. 다양하고 서로 이질적인 폐품들을 한데 모아 명도와 채도에 변화를 느낄 수 있도록 하여 조화로운 하나의 작품을 완성시켰다. 이 밖에도 폐품들의 다양한 크기와 모양에서 오는 조화도 또한 느껴 볼 수 있다. \n\n'+
							'2-2. 균형\n\n'+
							'· 가정용 미용 기계: 가정용 미용 기계인 레이저는 피부에 빛을 쬐게 해주어 치료의 목적을 갖고 있는 일상용품이다. 이 레이저는 사람이 손으로 잡아 사용하는 것으로 손이 잡히는 부분 양쪽을 곡면으로 처리하였고 세워서 보관하기 쉽게 안정적인 형태를 하고 있다. 중앙을 중심으로 나누어 보았을 때 좌우 대칭적 균형을 찾아 볼 수 있다. \n\n'+
							'· 가위: 가위는 손가락을 끼워 넣어 사용하는 일상용품으로 엄지손가락이 들어가는 부분은 둥글게 검지와 중지가 들어가는 부분은 길게 고안한 형태로 손가락이 들어가는 구멍의 모양과 크기에서 차이를 보인다. 이러한 모습에서 서로 다른 차이점을 찾을 수 있지만 전체적인 형태는 안정적인 모습을 보이는 비대칭적 균형을 찾아 볼 수 있다. \n\n'+
							'2-3. 율동\n\n'+
							'· 전등: 사진 속의 전등에서 면의 굴곡과 층을 이룬 모습을 통해 역동적인 느낌을 받을 수 있다. 이러한 곡선의 이미지는 율동의 원리를 느끼게 하여 마치 한 노래의 리듬을 따와 만든 것 같기도 한 모습이 흥미롭다.\n\n'+
							'· 쌓인 종이컵: 종이컵이 여러 개가 포개져 쌓였을 때 입이 닿는 부분에 주목하면 반복되는 완만한 곡선을 확인 할 수 있다. 이러한 반복적인 패턴 또한 율동의 원리를 느낄 수 있도록 한다. 더 나아가 컵이 쌓이는 스테킹(stecking)의 특성을 통해 공간을 효율적으로 사용할 수 있도록 하였다.\n\n'+
							'2-4. 변화\n\n'+
							'· 연필: 해당 사진에서의 연필은 우선적으로 배치에서 변화의 원리를 쉽게 찾아 볼 수 있다. 비슷한 간격을 갖고 일렬로 나열 된 연필과 달리 마지막 연필은 넓은 간격에 살짝 비스듬히 세워져 있다. 또한 연필 자체에서도 변화를 볼 수 있는 부분은 끝에 달린 지우개이다. 연필로서의 용도로만 사용되는 것이 아니라 지울 수 있는 용도까지 더해진 사진 속의 연필은 변화의 원리를 사용한 사례이다.\n\n'+
							'· 운동화 끈: 해당 사진 속 운동화에서는 운동화 끈을 통해 3가지의 변화 원리를 찾아 볼 수 있다. 첫 번째는 끈이 시작하는 지점이다. 이후 규칙성을 갖고 묶이다가 신발의 혀라 불리는 설포 부분과 고정시키기 위한 고리를 통과하게 되는 두 번째 지점을 볼 수 있다. 마지막으로 길게 늘어져 리본을 묶기 전의 지점이다. 이러한 변화는 신발의 모양을 잡고 사용자의 발에 알맞게 형태를 변형할 수 있도록 하는 용도이며 이중 가장 크게 변화의 모습을 보이는 곳은 리본을 묶는 지점이다.', '학습 정보');
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
	        	window.ActivityIndicator && ActivityIndicator.hide();
	            module.alert('서버 요청중 문제가 발헁했습니다.', null, function(){});     
	        },
	        complete: function(){
	        	//window.ActivityIndicator && ActivityIndicator.hide();
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

