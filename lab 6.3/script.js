/*$( document).ready(function(){

	var pos=0;
	function render(){
		var canvas=document.getElementById("mycanvas");
		var ctx=canvas.getContext("2d");
		ctx.clearRect(0,0,canvas.width,canvas.height);
		/*ctx.fillStyle="#336699";
		ctx.fillRect(10+pos,10+pos,100,100);
		pos=(pos+5) %100;
		console.log(pos)*



	};

	setInterval(render,100);
	
});*/

var timer = 60;

var interval = setInterval(function() {
    timer--;
    $('.timer').text(timer);
    if (timer === 0) clearInterval(interval);
}, 1000);


$( document).ready(function(){
	var canvas=document.getElementById("mycanvas");
	var ctx=canvas.getContext("2d");
	ctx.clearRect(0,0,canvas.width,canvas.height);
	

	function playground(){
	//TERRENO DE JUEGO VERDE
		var green = document.getElementById("image")
	    var pattern = ctx.createPattern(green, "repeat");
	    ctx.rect(0, 0, canvas.width,canvas.height);
	    ctx.fillStyle = pattern;
	    ctx.fill();

	};

	setInterval(playground,100);
	
});
