// $(document).ready(function () {
// 	//christmass balls
// 	$('.ball a').click(function () {
// 		$(this).toggleClass('open');
// 	});
// });

jQuery(document).ready(function(){
	//christmass balls
	$('.ball-c a').click(function () {
		$(this).toggleClass('open');
	});

	const documentHeight = window.innerHeight;
	$.fn.snowit({

		// min size of snowflake
		minSize : 10,
	  
		// max size of snowflake
		maxSize : 50,
	  
		// the number of flakes generated
		total : 30,
	  
		// speed of flakes when fall down
		speed: documentHeight / 105,
	  
		// color of snowflake
		// flakeColor : "#DE0603"
		flakeColor : "#fff"
		
	  });
	
});
