
$(document).ready(function(){
	var _Home = $("#homescore").text();
	parseInt(_Home);
	$("#addhomescore").click(function(){
		_Home++;
		$("#homescore").text(_Home);
	});

	$("#minushomescore").click(function(){
		_Home--;
		$("#homescore").text(_Home);
	});
	var _Guest = $("#guestscore").text();
	parseInt(_Guest);
	$("#addguestscore").click(function(){
		_Guest++;
		$("#guestscore").text(_Guest);
	});
	$("#minusguestscore").click(function(){
		_Guest--;
		$("#guestscore").text(_Guest);
	});

	//CREACIÓN DE UN OBJETO QUE ENGLOBE LAS DOS VARIABLES HOME Y GUEST.

	var resultado_final={
		local: _Home,
		visitante:_Guest

	};


});

