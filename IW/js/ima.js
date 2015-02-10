// movimiento de imagenes

var humo = new Array();

humo[0] = "img/Smoke1.png";
humo[1] = "img/Smoke2.png";
humo[2] = "img/Smoke3.png";

var delay = 1000;
var count = 1;

var imaMovimiento = new Array();
for (i=0;i<humo.length;i++) {
	imaMovimiento[i] = new Image();
	imaMovimiento[i].src = humo[i];
}

function moviendo () {
	if (window.createPopup) 
		humeante.filters[0].apply();
		document.images.humeante.src = imaMovimiento[count].src;
	
	if (window.createPopup) 
		humeante.filters[0].play();
		count++;
	
	if (count==imaMovimiento.length) 
		count = 0;
		setTimeout("moviendo()",delay);
	
}

window.onload = new Function("setTimeout('moviendo()',delay)");
