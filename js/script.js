var ctx;

var decalX = 300;
var decalY = 300;

var MIN_SPIR = 100;
var MAX_SPIR = 300;
var nbCercles = MIN_SPIR;
var angleDepart = 0;
var incrementAngle = Math.PI / 60;

function dessine(){
    var canvas = document.getElementById("spire_id");
    ctx = canvas.getContext("2d");
    dessineSpirale();
}

function dessineSpirale(){
    ctx.translate(decalX, decalY);
    ctx.moveTo(0, 0);
    var incrementTaille = 0.9;
    var taille = 0;
    var theta = angleDepart;
    var maxLoop = nbCercles * Math.PI;
    var k = nbCercles / MAX_SPIR;
    while (theta < maxLoop){
        ctx.lineTo(k * taille * Math.cos(theta), k * taille * Math.sin(theta));
        theta += incrementAngle;
        taille += incrementTaille;
    }
    ctx.stroke();
}