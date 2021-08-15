// CAPITULO 6
/* DOM - el dom es document object model, es como una interfaz que contiene todos los objetos estandares que nos permiten representar un documento html y qu3e a su vez tiene otra interfaz que nos permite representar un documento html 
Nodo = un nodo en el DOM es cualquier etiqueta del cuerpo, como un parrafo, el mismo body o incluso las etiquetas de una lista.
- Document: el nodo document es el nodo raiz, a partir del cual derivan el resto de nodos
- Element: nodos definidos por etiquetas html
- Text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto)
- Attribute: los atributos de las etiquetas definen nodos, (en JavaScript no los veremos como nodos, sino como informacion asociada al nodo de tipo element)
- Comentarios y otros: los comentarios y otros elementos como las declaracion doctype en cabecera de los documentos HTML generan nodos.*/



// /* Document - Metodos de Seleccion de elementos 
// - getElementById() = Selecciona un elemento por ID 
// - getElementsByTagName() = Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada
// - querySelector(* = Devuelve el primer elemento que coincida con el grupo especificado de selectores
// - querySelectorAll() = Devuleve todos los elementos que coincidan con el grupo esspecificado de selectores */ 

// // getElementById(): 
// let parrafo = document.getElementById("parrafo");
// document.write("<br>" + parrafo + "<br>");

// // getElementsByTagName():
// parrafo = document.getElementsByTagName("p");
// document.write(parrafo[1] + "<br>" /* son objetos */); // seleccion el segundo elemento parrafo (no es un array, es una lista de elementos)

// // querySelector(): 
// parrafo = document.querySelector(".parrafo");
// document.write(parrafo + "<br>");

// parrafo = document.querySelector("#rancio"); // se puede seleccionar por id de esta manera, pero el getEelementById() es mas optimo
// document.write(parrafo + "<br>");

// // querySelector():
// parrafo = document.querySelectorAll(".parrafo");
// document.write(parrafo + "<br>");
// document.write(parrafo[1] + "<br>");



// /* Metodos para definir, obtener y eleminar valores de atributos
// - setAttribute() = Modifica el valor de un atributo 
// - getAttribute() = Obtiene el valor de un atributo 
// -removeAttribute() = Revmueve el valor de un atributo */

// // setAttribute(): 
// const rangoEtario = document.querySelector(".rangoEtario");
// rangoEtario.setAttribute("type", "text"); // el primer valor es el atributo que queremos modificar y el segundo valor es para cambiarlo a lo que querramos 

// // getAttribute():
// valorDelAtributo = rangoEtario.getAttribute("type");
// document.write(valorDelAtributo);

// // removeAttribute(): 
// valorDelAtributo = rangoEtario.removeAttribute("type"); // el atributo desaparece (lo podemos ver en consola, en elements)



// /* Atributos globales 
// - class = lista de clases del elemento separadas por espacios 
// - contentEditable = indica si el elemento puede ser modificable por el usuario (bool)
// - dir = indica la direccionalidad del texto 
// - hidden = indica si el elmento aun no es, o ya no es, relevante 
// - id = define un identificador unico 
// - style = contiene declaraciones de estilo CSS para ser aplicadas al elemento 
// - tabindex = indica si el elemento puede obtener un focus de input
// - title = contiene un texto con informacion relacionada al elemento al que pertenece */ 

// // no vamos a editar class y id porque ya los conocemos 

// // contenteditable:
// const titulo = document.querySelector(".titulo");
// titulo.setAttribute("contentEditable", "true"); // podemos editar elemento que elijamos dentro de la pagina web (bien cool)

// // dir: 
// titulo.setAttribute("dir", "ltr"); // ltr (left to right) es el normal;
// // titulo.setAttribute("dir", "rtl"); // rtl (right to left) es para otros idiomas que se escriban al reves

// // hidden: 
// titulo.removeAttribute("hidden", "true"); // el atributo hidden fue inicializado en html dentro del elemento y aqui lo quitamos

// // style lo vamos a dejar para el final

// // tabindex: 
// titulo.setAttribute("tabindex", "3"); // es igual al focus y lo podemos comprobar dando tab

// // title:
// titulo.setAttribute("title", "dimelo papiii"); // podemos modificar el atributo title, que muestra un texto cuando dejamos el cursor encima del elemento



/* Atributos de Inputs 
- className 
- value
- type 
- accept 
- form 
- minLength
- placeholder
- required */ 

// // className: 
// const input = document.querySelector(".input-normal");
// document.write(input.className + "<br>"); // nos muestra el nombre de class

// // value: 
// document.write(input.value + "<br>"); // nos devuelve el valor del elemento

// // type: 
// input.type = "file"; // cambia la propiedad type

// // accept: 
// input.accept = "image/png"; // el accept es para el atributo type = "file", nos dice lo que el input va a aceptar

// // minLength
// input.minLength = 4; // tiene que tener 4 caracteres de valor minimo para poder enviarlo
// // input.setAttribute("minLength", "4"); // otra manera de hacerlo

// // placeholder: 
// input.placeholder = "a que no me podes escribir"; // modifica la propiedad placeholder

// // required: 
// input.required = "hola"; // le dice al usuario que es necesario llenar con cualquier cosa el input, no importa lo que pongamos, siempre va pedir un caracter aunque sea



// // style: 
// const titulo = document.querySelector(".titulo");
// titulo.style.color = "#a22";
// titulo.style.backgroundColor = "black";
// titulo.style.padding = "30px";



// /* Clases, classList y Metodos de classList
//   Definicion y usos 
// - add() = Anade una clase
// - remover() = remueve una clase 
// - item() = devuelve la clase del indice especificado
// - contains() = verfifca si ese elemento porsee o no, la clase especificada
// - replace() = reemplaza una clase por otra
// - toggle() = si no tiene la clase especificada, la agrega, si ya la tiene */

// // add():
// const titulo = document.querySelector(".titulo");
// titulo.classList.add("grande"); // el add anade una clase 

// // remove():
// titulo.classList.remove("grande"); // remueve una clase

// // item():
// titulo.classList.add("grande", "rojo", "circular");
// let valor = titulo.classList.item(1); // como tenemos varias clases con item podemos elegir la clase que querramos con un numero, como si fuera un array
// document.write(valor + "<br>");

// // contains(): 
// let nombreDeClase = "grandeee";
// valor = titulo.classList.contains(nombreDeClase); // como tenemos varias clases con item podemos elegir la clase que querramos con un numero, como si fuera un array
// if (valor) {
//     titulo.classList.remove(nombreDeClase); 
// } else {
//     titulo.classList.add(nombreDeClase);
// }

// // toggle():
// valor = titulo.classList.toggle("grande"); // si tiene la clase; la elimina, si no la tiene; la agrega (es lo que esta arriba, pero resumido)
// document.write(valor + "<br>");

// // replace():
// valor = titulo.classList.replace("grande", "chico"); // si la clase grande existe; la reemplaza por chico, si no existe; nos devuelve false
// document.write(valor);



// /* Obtencion y Modificacion de Elementos 
// - textContent - devuelve el texto de cualquier nodo
// - innerText = devuelve el texto visible de un node element
// - outerText = devuelve el texto que de las etiquetas html incluidas las etiquetas

// - innerHTML = devuelve el contendido html de un elemento 
// - outerHTML = devuelve el codigo HTML completo del elemento */

// // textContent: 
// const titulo = document.querySelector(".titulo");
// let resultado = titulo.textContent; // devuelve el texto de cualquier nodo, sin incluir cualquier etiqueta html que tenga dentro
// alert(resultado);

// // innerText: no se usa, pero aqui un ejemplo
// resultado = titulo.innerText; // devuelve el codigo visible de un node element y tampoco nos muestra las etiquetas
// alert(resultado);

// // outerText existe, pero ya no se usa asi que ni lo vamos a explicar

// // innerHTML: 
// resultado = titulo.innerHTML; // al ponerlo en el alert nos muestra el elemento de html en el que se encuentra
// alert(resultado);

// // outerHTML: 
// resultado = titulo.outerHTML; // al ponerlo en el alert nos muestra la etiqueta con el elemento y todo
// alert(resultado);



/* Creacion de Elementos
- createElement()
- createTextNode()
- appendChild()
- createDocumentFragment() */ 

// // createElement():
// let contenedor = document.querySelector(".contenedor");
// let item = document.createElement("LI"); // crea una lista (siempre hay que poner los elementos que se van a anadir en mayuscula)

// // createTextNode(): (esto es un objeto texto, no tiene las misma propiedades que un texto solo)
// let textDelItem = document.createTextNode("Este es un item de la lista"); // Crea un nodo

// // appendChild(): 
// item.appendChild(textDelItem); // anade el nodo a item como hijo
// contenedor.appendChild(item); // anade item como hijo a contenedor
// console.log(item);

// // en vez de hacer todo lo de arriba, hacemos esto (esto es un texto solo, no un objeto texto, pero es practicamente lo mismo)
// contenedor = document.querySelector(".contenedor");
// item = document.createElement("LI");
// item.textContent = "Este es un item de la lista"; // directamente escribirmos el string dentro de item
// contenedor.appendChild(item);
// console.log(item);

// // createDocumentFragment(): Esto va a aparte
// contenedor = document.querySelector(".contenedor");
// let fragmento = document.createDocumentFragment(); // cuando queremos anadir varias cosas al documento usamos fragments y es mas rapido en cargas y usa menos recursos
// for (i = 0; i < 20; i++) {
//     item = document.createElement("LI");
//     item.textContent = "Este es un item de la lista";
//     fragmento.appendChild(item);
// }
// contenedor.appendChild(fragmento);



/* Obtencion y modificacion de Childs (Hijos)
- firstChild 
- lastChild 
- firstElementChild
- lastElementChild
- childNodes
- children */

// // firstChild: son bien importantes los espacios para que el sistema lo categorize como el primer hijo
// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.firstChild; // los espacios cuentan como nodos (salen en pantalla como text)
// console.log(primerHijo);

// // lastChild: son bien importantes los espacios para que el sistema lo categorize como el ultimo hijo
// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.lastChild;
// console.log(primerHijo);

// // firstElementChild: es lo mismo que el firstChild, pero sin la necesidad de los espacios en html
// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.firstElementChild;
// console.log(primerHijo);

// // lastElementChild: es lo mismo que el lastChild, pero sin la necesidad de los espacios en html
// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.lastElementChild;
// console.log(primerHijo);

// // childNodes: tira una lista de todos los nodos
// const contenedor = document.querySelector(".contenedor");
// const hijos = contenedor.childNodes;
// console.log(hijos);

// // children: es lo mismo que el anterior, solo que devuelve las etiquetas HTML
// const contenedor = document.querySelector(".contenedor");
// const hijos = contenedor.children;
// console.log(hijos);

// // una coleccion HTML no la podemos recorrer con forEach (con for si), los childNodes si y los children
// // ejemplos 
// const contenedor = document.querySelector(".contenedor");
// const hijos = contenedor.childNodes;

// hijos.forEach(hijo => {
//     console.log(hijo);
// });

// for (hijo in hijos) {
//     console.log(hijo);
// }

// for (hijo of hijos) {
//     console.log(hijo);
// }



/* Metodos de Childs (Hijos)
- replaceChild()
- removeChild()
- hasChildNodes() */

// // replaceChild(): reemplaza un child, primero ponemos al que queremos reemplazar y despues el que queremos cambiar como podemos ver en el ejemplo
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// parrafo.innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";
// h2_antiguo = document.querySelector(".h2");
// contenedor.replaceChild(h2_nuevo, h2_antiguo);

// // removeChild(): elimina un Child
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// parrafo.innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";
// h2_antiguo = document.querySelector(".h2");
// contenedor.removeChild(h2_antiguo);

// // hasChildNodes():
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// parrafo.innerHTML = "Parrafo";
// const h2_nuevo = document.createElement("H2");
// h2_nuevo.innerHTML = "Titulo";
// const h2_antiguo = document.querySelector(".h2");
// let respuesta = contenedor.hasChildNodes();
// if (respuesta) {
//     document.write("El elemento tiene hijos");
// } else {
//     document.write("El elemento NO tiene hijos");
// }



/* Propiedades de parents (Padres)
- parentElement
- parentNode */ 

// // parentElement(): nos muestra el padre del elemento que elijamos
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// const h2_nuevo = document.createElement("H2");
// const h2_antiguo = document.querySelector(".h2");
// console.log(h2_antiguo.parentElement);
// console.log(contenedor.parentElement);

// // parentNode(): nos muestra el padre del elemento que elijamos (es basicamente lo mismo que el parentElement(), solo cambia en situaciones especificas)
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// const h2_nuevo = document.createElement("H2");
// const h2_antiguo = document.querySelector(".h2");
// console.log(h2_nuevo.parentNode);
// console.log(h2_antiguo.parentNode);
// console.log(contenedor.parentNode);



/* Propiedades de Siblings (Hermanos)
- nextSibling
- previousSibling
- nextElementSibling
- previousElementSibling */

// // nextSibling: 
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// const h2_nuevo = document.createElement("H2");
// const h2_antiguo = document.querySelector(".h2");
// console.log(h2_antiguo.nextSibling);

// // previousSibling: 
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// const h2_nuevo = document.createElement("H2");
// const h2_antiguo = document.querySelector(".h2");
// console.log(h2_antiguo.previousSibling);

// // nextElementSibling: 
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// const h2_nuevo = document.createElement("H2");
// const h2_antiguo = document.querySelector(".h2");
// console.log(h2_antiguo.nextElementSibling);

// // previousElementSibling: 
// const contenedor = document.querySelector(".contenedor");
// const parrafo = document.createElement("P");
// const h2_nuevo = document.createElement("H2");
// const h2_antiguo = document.querySelector(".h2");
// console.log(h2_antiguo.previousElementSibling);



/* Nodos - Extras 
- closest() */

// // closest(): busca el contenedor que contenga a ese contenedor mas cercano (el padre mas cercano basicamente)
// const div = document.querySelector(".div-3");
// console.log(div.closest(".div"));



