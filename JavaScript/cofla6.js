const contenedor = document.querySelector(".flex-container");

const boton = document.querySelector(".send-button");
let valorAntiguo = boton.value;
boton.value = valorAntiguo.toUpperCase(); // simplemente podiamos cambiar a COMPRAR en HTML
// document.querySelector(".send-button").value = "COMPRAR"; (lo mas optimo es hacer esto)

function crearLlave(nombre, modelo, precio) {
    img = "<img class = 'llave-img' src = 'llave.png'>";
    nombre = `<h4>${nombre}</h4>`;
    modelo = `<h6>${modelo}</h6>`;
    precio = `<p>Precio: <b>${precio}</b></p>`;
    return[img, nombre, modelo, precio];
}


const changeHidden = (number) => {
    document.querySelector(".key-data").value = number;
} // esto es para poder crear el evento (es nuevo)

let documentFragment = document.createDocumentFragment();
for (i = 1; i <= 20; i++) {
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    let llave = crearLlave(`Llave ${i}`, `Modelo ${modeloRandom}`, `$${precioRandom}`);
    let div = document.createElement("DIV");
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, 'flex-item');
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);
