$(function(){

	var sites = [ 
					'never says never',
					'thinks before she mocks',
					'should know how code works',
					'is empathetic',
					'is obsessed with details',
					'loves sticky notes',
					'has a big heart',
					'asks a lot of questions',
					'picks the right battle',
					'is persistent',
					'should be on Twitter',
					'does not design with Lorem Ipsum',
					'knows Photoshop is only a tool',
					'tells stories with no bullshit',
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
        	
     	}, 500 );

     	

		setTimeout(function() {
      		var siteNumber = Math.floor(Math.random()*sites.length);
			$('#quote').text(sites[siteNumber]);
			$("#quote").css({ 'marginTop': '-0.2em' });  
		}, 600);


		setTimeout(function() {
      		$("#quote").animate({ 
	        	opacity: "1",
	        	marginTop: "0em",  
	     	}, 500 );
		}, 700);


		var colorNumber = Math.floor(Math.random()*colors.length);
		$('body').removeClass();
		$('body').addClass(colors[colorNumber]);
		
		
	}).click();
});
