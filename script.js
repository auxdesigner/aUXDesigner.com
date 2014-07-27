$(function(){

	var sites = [ 
					'never says never',
					'thinks before she mocks',
					'should learn how code works',
					'is empathetic',
					'asks a lot of questions',
					'picks the right battle',
					'does more than pushing pixels'
				];

	var colors = [ 
					
					
					'c1',
					'c2',
					'c3',
					'c4'
					
				];

	$('#go').click(function(){
		
		$("#quote").animate({ 
        	opacity: "0",  
        	marginTop: "0.1em",    
     	}, 500 );

     	

		setTimeout(function() {
      		var siteNumber = Math.floor(Math.random()*sites.length);
			$('#quote').text(sites[siteNumber]);
		}, 500);

		setTimeout(function() {
      		$("#quote").animate({ 
	        	opacity: "1",
	        	marginTop: "-0.1em",  
	     	}, 500 );

	     	

		}, 500);


		var colorNumber = Math.floor(Math.random()*colors.length);
		$('body').removeClass();
		$('body').addClass(colors[colorNumber]);
		
		
	}).click();
});
