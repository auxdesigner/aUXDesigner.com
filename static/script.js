$(function(){
	var i = -1;
	var j = -1;
	var words = [ 
					'never says never',
					'thinks before she mocks',
					'should know how to prototype',
					'is empathetic',
					'respect platform pattern',
					'does not ignore business goals',
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
					'c3'				
				];

	$('#go').click(function(){
		
		$("#quote").animate({ 
        	opacity: "0",  
        	
     	}, 500 );

     	
		setTimeout(function() {
      		
			i = (i+1)%words.length;
         	$('#quote').text(words[i]);

      		//var siteNumber = Math.floor(Math.random()*words.length);
		
			$("#quote").css({ 'marginTop': '-0.2em' });  
		}, 600);


		setTimeout(function() {


      		$("#quote").animate({ 
	        	opacity: "1",
	        	marginTop: "0em",  
	     	}, 500 );
		}, 700);

		j = (j+1)%colors.length;
		
		$('body').removeClass();
		$('body').addClass(colors[j]);
		
		
	}).click();
});
