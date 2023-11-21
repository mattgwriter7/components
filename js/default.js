$(function() {
	
	// 	===========================================	
	//	MAIN FUNCTIONS
	// 	===========================================		

	
	function init() {
		
		//	thward any bots trying to harvest my contact info
		thwartEmailBots();

		return;
	}

	//	thwartEmailBots() replaces any "***" with "416" in 
	//	#contact_box of my footer.
	function thwartEmailBots() {
		let contact_box = $( '#contact_box').html(),
		my_new_string = contact_box.replaceAll( '***', '416' );
		$( '#contact_box').html(my_new_string);
		return;
	}

	// 	===========================================	
	//	EVENT HANDLERS (non-delegated)
	// 	===========================================	
	
	//	click "show me!" button to show a Panel
	//	WILLFIX: If there is a need for more than
	//		one type of button this will need refactoring...
	$( 'button.show_me' ).click(function(){
		var panel = $(this).attr('data-panel'),
				sticky = $(this).attr('data-sticky');
		//	update spinner
		$( '#' + panel + ' .spinner' ).addClass('active');
		$( '#' + panel + ' .spinner_mssg' ).text('fetching...');
		if( sticky != undefined ) {
			//	hide the sticky ( not all buttons will do this )
			$( '#' + sticky ).fadeOut();
		}

		setTimeout(() => {
			//	load the panel content
			//	WILLFIX: ?? make this full on AJAX so I can
			//	add a slideDown ?? maybe, maybe not...
			$( '#' + panel ).load( './' + panel + '.htm',function(data){
				
			});			
		}, 2000);		
	});
	
	// 	===========================================	
	//	INIT
	// 	===========================================		

	init();
	
});