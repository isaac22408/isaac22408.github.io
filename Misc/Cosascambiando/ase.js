const boton = document.getElementById("move");
const bola = document.getElementById("bola");
console.log(screen.height);
let sWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let sHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
document.getElementById("si").addEventListener("click", function(){
    sWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    sHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    console.log(`width: ${sWidth} height:${sHeight}`);
})
document.getElementById("UI").style.height = `${sHeight - 100}px`
let originalx = bola.style.top ;
const moviento = ()=>{
    let x = (540 +(Math.floor(Math.random() * (sWidth - 580))))+ "px";
let y = (140 +(Math.floor(Math.random() * (sHeight - 180))))+ "px";
console.log(`${x}, ${y}, ${bola.style.left}, ${bola.style.top}`);
bola.style.left = x;
bola.style.top  = y;
};
boton.addEventListener("click", moviento);