var canvas = document.getElementById("cuadricula");
var context = canvas.getContext("2d");

// Dibujo del primer circulo
context.fillStyle = "black"; 
context.beginPath();
context.arc(100, 175, 50, 0, 2 * Math.PI);
context.fill();
// Dibujo del segundo circulo
context.fillStyle = "black";  
context.beginPath();
context.arc(100, 175, 100, Math.PI, 0);
context.fill();
// Dibujo del tercer circulo
context.fillStyle = "black";  
context.beginPath();
context.arc(100, 175, 100, 3 * Math.PI / 2, Math.PI / 2);
context.fill();
// Dibujo del cuarto circulo
context.fillStyle = "orange";  
context.beginPath();
context.arc(100, 175, 20, 0, 2 * Math.PI);
context.fill();

document.getElementById('headerImage').addEventListener('mouseover', function () {
    this.classList.add('rotating');
});

document.getElementById('headerImage').addEventListener('mouseout', function () {
    this.classList.remove('rotating');
});