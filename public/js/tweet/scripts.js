jQuery(function($){
		
		var FEED = window.FEED || {};	
		
		//------ TWEETS ------//
			
		FEED.TWEET = function() {					
			$('.tweets_feed').twittie({
				template: 
				'<div class="tweet_user">'+
					'<span class="icon-twitter"><i class="fa fa-twitter"></i></span> '+
					'<span class="username">{{screen_name}}</span>'+
				'</div>'+
				'<div class="tweet_text">'+
					'{{tweet}}'+
				'</div>'+
				'<div class="tweet_time">'+
					'<a href="{{url}}">{{date}}</a>'+
				'</div>'
				,
			}, function(){
				$(".tweets_feed").owlCarousel({
					dots : true,
					nav : false,
					autoplay: true,
					loop:1,
					singleItem:true,
					items:4,
					margin:30,
					responsive:{
						0:{
							items: 1
						},
						767:{
							items: 2
						},
						1023:{
							items: 4
						}
					}
				});
			});
		}
		

		
		  $(document).ready(function(){
				FEED.TWEET();
			});
	
	});
	 