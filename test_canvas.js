var can = document.getElementById('logo');
var ctx=can.getContext("2d");
ctx.lineWidth = "12"; //epaisseur du cercle

//cercle
ctx.beginPath();
ctx.arc(100, 100,90,0,Math.PI*2, true);
ctx.strokeStyle="rgb(6, 160, 208)"; // couleur du cercle

// deux points
ctx.fillStyle="rgb(6, 160, 208)";
ctx.fillRect(85,60, 30,30);
ctx.fillStyle="rgb(46,87,2187)";
ctx.fillRect(85,110, 30,30);

ctx.stroke();
