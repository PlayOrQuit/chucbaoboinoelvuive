// $(document).ready(function () {
// 	//christmass balls
// 	$('.ball a').click(function () {
// 		$(this).toggleClass('open');
// 	});
// });

jQuery(document).ready(function () {
	//christmass balls
	$('.ball-c a').click(function () {
		$(this).toggleClass('open');
	});

	// jQuery(".fifth a").click();
	// jQuery(".second a").click();
	

	const documentHeight = window.innerHeight;
	$.fn.snowit({

		// min size of snowflake
		minSize: 10,

		// max size of snowflake
		maxSize: 50,

		// the number of flakes generated
		total: 30,

		// speed of flakes when fall down
		speed: documentHeight / 105,

		// color of snowflake
		// flakeColor : "#DE0603"
		flakeColor: "#fff"

	});


	autoOpenCloseFirst();
	showImage();
});

const arrClass = [".third a", ".sixth a", ".first a", ".fourth a"];
let arrOpen = "";

function showImage(){
	setTimeout(function () {
		jQuery(".second img").attr("src", "images/theme2/baoboi.jpg");
		jQuery(".second img").addClass("baoboi-img");

		jQuery(".fifth img").attr("src", "images/theme2/baoboi1.jpg");
		jQuery(".fifth img").addClass("baoboi-img-1");
	}, 3000);
}

function autoOpenCloseFirst() {
	setTimeout(function () {
		jQuery(arrClass[0]).click();
		arrOpen = arrClass[0];
		autoDisplay();
	}, 5000);
}

function autoDisplay() {
	const size = arrClass.length;
	setInterval(function(){ 
		let index = arrClass.findIndex(checkString);
		console.log(index);
		jQuery(arrClass[index]).click();
		if(index == size - 1){
			index = -1;
		}

		jQuery(arrClass[index + 1]).click();
		arrOpen = arrClass[index + 1];
	}, 15000);
}

function checkString(item) {
	return item == arrOpen;
  }
