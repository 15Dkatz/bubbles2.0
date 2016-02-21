//commit!!

var colorCollection = ["#fff", "#fff", "#fff", "#fff", "#e91e63", "#2196f3", "#fff", "#fff", "#fff", "#03a9f4", "#ffeb3b", "#ef5350"]

//generate multiple children.
var generateBubble = function(x, y, color, size) {
	console.log("blowing a bubble!");
	var bubble = document.createElement('div');

	// var randColor = colorCollection[Math.floor(Math.random()*colorCollection.length)];
	bubble.style.background = color;
	bubble.style.left = x;
	bubble.style.top = y;
	bubble.className = "bubble";
	

	if (size===undefined) {
		size=10;
	}
	bubble.style.width=size;
	bubble.style.height=size;
	bubble.style.left = x-size/2;
	bubble.style.top = y-size/2+1;

	$("#bubbleParent").append(bubble);
	setTimeout(function(){bubble.style.display = "none"}, 950);

}


$(document).ready(function() {
	var randColor, stableColor;
	var mouseX=0, mouseY=0;
	var stableX=0, stableY=0;
	var blow;
	var colorLim=0;

	$(document)
	.mousedown(function(f) {
		limit=0;
		var bubbleSize;
		stableColor = "#fff";
		mouseX=f.pageX;
		mouseY=f.pageY;
		//change X and Y in random directions
		
		var blowBub = function() {
			limit+=1;
			if (limit>100) {
				// console.log("colorLim breached");
			}
			
			//new spot every 10 ms
			if (limit%10===0) {
				var randX=Math.floor(Math.random()*20)-10;
				var randY=Math.floor(Math.random()*20)-10;

				mouseX = f.pageX+randX;
				mouseY = f.pageY+randY;	
			}
			if (limit%25===0&&limit>30) {
				stableColor = colorCollection[Math.floor(Math.random()*colorCollection.length)];

			}
			bubbleSize= (30/(limit/100)+1);

			if (bubbleSize>30) {
				bubbleSize=30;
			} else if (bubbleSize<10) {
				bubbleSize=10;
			}



			generateBubble(mouseX, mouseY, stableColor, bubbleSize);
		}
		blow = setInterval(blowBub, 10);


	})
	.mousemove(function(e) {
		randColor = colorCollection[Math.floor(Math.random()*colorCollection.length)];
		mouseX=e.pageX;
		mouseY=e.pageY;

		if ((Math.abs(mouseX-stableX)>100)&&(Math.abs(mouseY-stableY)>100)) {
			generateBubble(mouseX, mouseY, randColor);
		}
	})
	.mouseup(function() {
		clearInterval(blow);
	})
});




//create divs, append to bubbleParent,
//id = bubbleChild[1]