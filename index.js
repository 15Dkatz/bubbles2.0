var mouseX =0, mouseY = 0;
var randSize;

var colorCollection = ["#e91e63", "#2196f3", "#fff", "#fff", "#fff", "#03a9f4", "#ffeb3b", "#ef5350"]

//generate multiple children.

$(document).ready(function() {

	var move;
	var clone;
	// var travel = function(x, y) {

	// }


	// $( ".hello" ).clone().appendTo( ".goodbye" );


	$(document).mousedown(function(e) {
		mouseX = e.pageX;
		mouseY = e.pageY;

		console.log(mouseX, mouseY);

		randSize = Math.floor(Math.random()*65)+10;
		randColor = Math.floor(Math.random()*colorCollection.length);

		var globalX = mouseX-(randSize/2), globalY = mouseY-(randSize/2);

		$(".bubbleChild").removeClass("hide");
		$(".bubbleChild").addClass("bubble");
		$(".bubbleChild").css({
			left: globalX,
			top: globalY,
			width: randSize,
			height: randSize,
			background: colorCollection[randColor],
		});


		var globalSpeed = 1;
		var changeSpeed = function() {
			// console.log("changing speed");
			globalSpeed = Math.floor(Math.random()*3)-1.5;
		}

		var globalLimit=0;

		//travel
		var travel = function() {
			// console.log("changing position");
			globalX+=globalSpeed;

			if(globalSpeed>0) {
				globalY+=1-globalSpeed;
			} else {
				globalY+=globalSpeed+1;
			}
			// console.log(globalX, "x", globalY, "y");
			$(".bubbleChild").css({
				left: globalX,
				top: globalY,
			})
			globalLimit+=10;
			console.log(globalLimit, "limit");
			if (globalLimit>800) {
				console.log("remove!");
				$(".bubbleChild").removeClass("bubble");
				$(".bubbleChild").addClass("hide");	
			}
		}

		// var clone = function() {
		// 	console.log("cloning!");
		// 	// $(".bubbleChild").clone().appendTo("#bubbleParent");
		// 	$(".bubbleChild").addClass("show");	
		// }


		move = setInterval(travel, 10);
		changeSpeed();
		// clone = setInterval(clone, 1000);

		



	})
	.mousemove(function(f) {
	    mouseX = f.pageX;
	    mouseY = f.pageY;
	    $(".bubbleChild").css({
		    left: mouseX-(randSize/2),
			top: mouseY-(randSize/2)
	    })
	})
	.mouseup(function() {
		clearInterval(move);
		// clearInterval(clone);
		$(".bubbleChild").removeClass("bubble");
		$(".bubbleChild").addClass("hide");
	}) 


});