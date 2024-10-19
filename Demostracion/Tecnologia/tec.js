let sWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let sHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
const mover = (o) =>{
    o.style.top = `${100 + Math.floor(Math.random() * 500)}px`;
    o.style.left = `${Math.floor(Math.random() * sWidth)}px`;
    o.style.rotate = `${Math.floor(Math.random() * 360)}deg` 
}
const cuadros = []
for (let i = 0; i < 10; i++){
    cuadros.push(document.getElementById("zona-movimiento").appendChild(document.createElement("div")));
    cuadros[i].classList.add("cuadrado");
    cuadros[i].style.top = `${100 + Math.floor(Math.random() * 500)}px`;
    cuadros[i].style.left = `${Math.floor(Math.random() * sWidth)}px`;
}
zona = document.getElementById("zona-movimiento");
const oPantalla = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const emf = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            mover(entry.target);
        }
    });
};

let atencion = true;
const f = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            atencion = false;
        }
    });
};
const t = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            atencion = true;
        }
    });
};
const para = new IntersectionObserver(f, oPantalla);
const sigue = new IntersectionObserver(t, oPantalla);
sigue.observe(zona);
para.unobserve(zona);
document.getElementById("zona-movimiento").children
const intervalId = setInterval(() => {
    if (atencion) {
        Array.from(document.getElementById("zona-movimiento").children).forEach(i => {
            mover(i);
        });
    } else {
        clearInterval(intervalId); // Stop the interval when atencion is false
    }
}, 5000);
