let sWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
let sHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

const generate = (n) => {
    for (let i = 0; i <= n;i++){

    }
}

const mover = (o) => {
    o.style.top = `${100 + Math.floor(Math.random() * 500)}px`;
    o.style.left = `${Math.floor(Math.random() * (sWidth-95))}px`;
    o.style.rotate = `${Math.floor(Math.random() * 360)}deg`;
};

const cuadros = [];
for (let i = 0; i < 100;i++) {
    cuadros.push(document.getElementById("zona-movimiento").appendChild(document.createElement("div")));
    cuadros[i].classList.add("cuadrado");
    cuadros[i].style.top = `${100 + Math.floor(Math.random() * 500)}px`;
    cuadros[i].style.left = `${Math.floor(Math.random() * (sWidth-70))}px`;
}

const zona = document.getElementById("zona-movimiento");
const servicio = document.getElementById("servicios");

const oPantalla = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
};

let atencion = true;

const f = (entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            atencion = false;
            console.log("no");
        }
    });
};

const t = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            atencion = true;
            console.log("si");
        }
    });
};

const para = new IntersectionObserver(f, oPantalla);
const sigue = new IntersectionObserver(t, oPantalla);

sigue.observe(zona);
para.observe(zona);

const intervalId = setInterval(() => {
    if (atencion) {
        Array.from(zona.children).forEach(i => {
            mover(i);
        });
    }
}, 5000);

const Lista = document.getElementById("mover").children[1];
const bi = document.getElementById("bi");
const bd = document.getElementById("bd");
let ver = 0;
const checa = () => {
    const items = Lista.children;
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = i === ver ? 'block' : 'none';
    }
};

bi.addEventListener('click', () => {
    ver = (ver > 0) ? ver - 1 : Lista.children.length - 1;
    checa();
});

bd.addEventListener('click', () => {
    ver = (ver < Lista.children.length - 1) ? ver + 1 : 0;
    checa();
});

setInterval(() => {
    ver = (ver < Lista.children.length - 1) ? ver + 1 : 0;
    checa();
}, 5000);

checa();