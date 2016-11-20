
$(document).ready(function(){

	var socket=io();

	socket.on('update_scoreboard', function(newScore){
      _Home= newScore.local;
      _Guest = newScore.visitante;
      $("#homescore").text(_Home);
      $("#guestscore").text(_Guest);
    });

    var _Home = $("#homescore").text();

	parseInt(_Home);
	$("#addhomescore").click(function(){
		socket.emit('local_goal');
	});
	$("#minushomescore").click(function(){
		socket.emit('local_goal_m');
	});

	
	var _Guest = $("#guestscore").text();

	parseInt(_Guest);
	$("#addguestscore").click(function(){
		socket.emit('notlocal_goal');
	});
	$("#minusguestscore").click(function(){
		socket.emit('notlocal_goal_m');
	});
	//CREACIÓN DE UN OBJETO QUE ENGLOBE LAS DOS VARIABLES HOME Y GUEST.
});

