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
	//	INIT
	// 	===========================================		

	init();
	
});