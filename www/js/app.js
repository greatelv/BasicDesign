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
			$('.menu-btn').on('vclick', function(){
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

			$('#layer').on('vclick', function(){
				if($('#menus').hasClass('open')){
					$('.menu-btn').trigger('vclick')
				}

				if($('#sidebar').size() && $('#sidebar').hasClass('open')){
					$('#sidebar').removeClass('open');
					$('#layer').hide();	
				}
			})

			$('body').addClass('loaded')
		
		}, false);
	}
};
