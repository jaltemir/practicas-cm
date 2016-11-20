
function solveit(sit){
	switch(sit){
		case 1: document.getElementById("result").value=0;
			break;
		case 2: document.getElementById("result").value=parseFloat(document.getElementById("value1").value)+parseFloat(document.getElementById("value2").value);
			break;
		case 3: document.getElementById("result").value=parseFloat(document.getElementById("value1").value)-parseFloat(document.getElementById("value2").value);
			break;
		case 4: document.getElementById("result").value=parseFloat(document.getElementById("value1").value)*parseFloat(document.getElementById("value2").value);
			break;
		case 5: document.getElementById("result").value=parseFloat(document.getElementById("value1").value)/parseFloat(document.getElementById("value2").value);
			break;
	}
}
