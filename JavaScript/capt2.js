// // CAPITULO 2
// /* Arrays o arreglos
// Definicion: Es un contenedor de diferentes tipos de elementos que pueden ser de diferentes tipos de datos 
// (los arrays ya no son un dato primitivo, sino un objeto) */

// let variable = "contenido"; 
// let arrays = ["Jessy", 20, "Cabo Rojo"];
// let frutas = ["banana", "manzana", "pera"];
// console.log(frutas);
// console.log(frutas[0]); 
// console.log(arrays[1]); // llamando por posicion o indice

// // Arrays asociativos
// let pc1 = {
//     nombre: "JessyPC",
//     procesador: "Intel Core 17",
//     ram: "16GB",
//     espacio: "1TB"
// }; // array asociativo

// // VS 

// let pc2 = ["JessyPC", "Intel Core 17", "16GB", "1TB"]; // el array que conocemos
// console.log(pc2[1])
// console.log(pc1["nombre"]) // para llamar un elemento en los arrays asociativos se tiene que poner entre comillas el nombre asociado

// let nombrepc = pc1["nombre"];
// let procesador = pc1["procesador"];
// let ram = pc1["ram"];
// let espacio = pc1["espacio"];

// frase = `<br>El nombre de mi PC es: <b>${pc1["nombre"]}</b> <br>
//          El procesador es: <b>${procesador}</b> <br>
//          La memoria RAM es: <b>${ram}</b> <br>
//          El espacio en disco es de <b>${espacio}</b> <br>`; // al usar los acentos graves se puede escribir codigo html y concatenar de esta manera

// document.write(frase);

// /* Bucles e Iteraciones 
// Definicion: los bucles son como las condiciones solo que se repiten constantemente */
// numero = 0; 
// if (numero < 10) {
//     numero++ 
//     console.log(numero);
// }

// // VS 

// numero1 = 0;

// document.write("<br>");

// while (numero1 < 6) {
//     numero1++;
//     document.write(numero1 + "<br>"); // while se pregunta si la condicion se cumple todo el tiempo y responde todo el tiempo hasta que no se cumpla como en el ejemplo
// }

// // do while 
// // primero se ejecuta y despues se pregunta si se cumple la condicion

// document.write("<br>");

// do {
//     document.write(numero1 + "<br>"); //primero se escribe en pantalla y se le suma uno antes de preguntarse si se cumple la condicion o no
//     numero1++;
// }

// while (numero1 <= 6);

// // break 
// // termina la sentencia de un while

// while(numero < 100) {
//     numero++; 
//     console.log(numero)
//     if(numero == 10) {
//         break; // deja de buscar o de preguntarse la condicion
//     } // el que aparezca el 10 depende de si el if lo escribimos antes o despues
// }

// // for
// // Es lo mismo que el while, pero es un bucle determinado (al while no le decimos cuantas vueltas va a dar, al for si)
// /* Partes de for: 
// 1) declaracion e inicializacion 
// 2) condicion 
// 3) aumento o decremento */ 

// document.write("<br>");

// for(let i = 0; i < 6; i++) { // se pueden tener 2 variables llamadas iguales adentro y afuera porque let es una variable limitada y se define por bloques
//     document.write(i + "<br>")
// }

// // o

// document.write("<br>");

// for(let i = 6; i >= 0; i--) {
//     document.write(i + "<br>")
// }

// // o

// document.write("<br>");

// let i = 6; // se puede declarar la variable afuera y referirse a ella dentro del bloque de for
// for(i; i >= 0; i--) {
//     document.write(i + "<br>")
// }

// //continue 
// // salta una vuelta (como un numero) y sigue con las demas

// document.write("<br>");

// for(let i = 10; i >= 0; i--) {
//     if(i == 3) {
//         continue;
//     }
//     console.log(i)
    
// }

// /* for in (devuelve indice o posicion) */

// document.write("<br>");

// let animales = ["gato", "perro", "tiranosauriorex" ];
// animales.edad = 20;

// for (animal in animales) {
// document.write(animal + "<br>");
// }

// document.write("<br>");

// for (animal in animales) {
//     document.write(animales[animal] + "<br>");
// }

// document.write("<br>");

// // for of (devuelve valor)

// for (animal of animales) {
//     document.write(animal + "<br>");
//     }

// // for label 
// // continue on 3 horas

// let array1 = ["maria", "josefa", "roberta"];
// let array2 = ["pedro", "marcelo", array1, "josefina"];

// document.write("<br>");

// forJessy:
// for(let array in array2) {
//     if (array == 2) {
//         for (let array of array1) {
//             document.write(array + "<br>");
//         }
//     } else {
//         document.write(array2[array] + "<br>");

//     }
// }

// // practica 

// document.write("<br>");
// let lenguajes1 = ["japones", "ingles", "frances", "italiano", "coreano"];
// let lenguajes2 = ["java", "javascript", "c#", "c++", lenguajes1, "python"];

// forLenguajes:
// for(let lenguaje in lenguajes2) {
//     if (lenguaje == 4) {
//         for(let lenguaje of lenguajes1) {
//             if(lenguaje != "coreano") {
//                 continue;
//             }
//             document.write(lenguaje + "<br>");
//         }
//     } else {
//         if(lenguaje != 1) {
//             continue;
//         }
//         document.write("Estos son los lenguajes en los que estoy interesado: " + lenguajes2[lenguaje] + " y ");
//     }
// }

// /* Funciones 
// Es una porcion de codigo que se crea poniendole nombre para poder identificarlo y poder reutilizarlo mas a delante llamandolo por el nombre de referencia, sino tendriamos que reescribir todo el codigo de vuelta 
// Las funciones se crean y se llaman, tenemos que tener en cuenta que al crear una funcion despues tenemos que llamarla porque sino no va a funcionar*/ 

// function saludar() {
//     let respuesta = prompt("Hola Lucas! Como fue tu dia?").toLowerCase();
//     if (respuesta == "bien") {
//     alert("Me alegro");
//     } else {
//     alert("Que pena");
//     }
// }

// saludar()

// // o 

// let hola = function() {
//     respuesta = prompt("Hola Lucas! Como fue tu dia?").toUpperCase();
//     if (respuesta == "BIEN") {
//         alert("Me alegro");
//     } else {
//         alert("Que pena");
//     }
// }

// // return

// function prueba() {
//     alert("hola");
//     return "La funcion se ejecuto correctamente"; // los return no tienen parentesis y son los que terminan la funcion (igual que el break)
// }

// let ejecucion = prueba(); // ejecucion = prueba porque el valor de la variable es el valor de la funcion, que es lo que la variable retorna
// document.write(ejecucion);

// // parametros
// // son variables que se declaran y crean en una funcion



// function suma() {
//     num1 = 32;
//     num2 = 12; 
//     let res = num1 + num2;
//     document.write("<br>" + res + "<br>");

// }

// suma();

// // vs 

// function suma1(num1, num2) { // esta funcion es la misma que la de arriba, pero con parametros. Declaramos las variables num1 y num2 dentro de la funcion (con uso solo dentro de la funcion) y le damos valor al llamarlas (suma1(22, 44))
//     res = num1 + num2; 
//     return res;
// }

// resultado = suma1(22, 44);
// document.write(resultado + "<br>");

// function saludar2(nombre) {
// let frase = `Hola ${nombre}! Como estas? `;
// document.write(frase)
// }

// saludar2("Yei Ann");

// // Scope 
// // las funciones tienen un scope global y las variables que se crean en las funciones tienen un scope local
// // las funciones se pueden llamar desde cualquier parte de nuestro documento, mientras que las variables creadas dentro de una funcion no funcionan en el exterior de la funcion (let)


// // Funciones flecha 

// const saludar3 = (apellidos) => {
//     let frase = `Hola ${apellidos}! Como estas? `;
//     document.write(frase);
// }

// saludar3("Andujar");

// const saludar4 = apellidos => document.write(`Hola ${apellidos}`); // si es solo un parametro se puede escribir sin parentesis y si es solo una linea de bloque se puede escribir sin los corchetes
// saludar4("Cruz");

// /* Crear soluciones 2.0 
// A) Un joven muy afortunado logro ganar el primer premio de la loteria... exacto, estamos hablando del pobre al que cofla le dio una mano, este pobre decide hacer una fiesta para festejar que salio de la pobreza con este millonario compro una maquina que deja pasar solamente a los mayores de edad, entre otras cosas... 
//     - Dejar pasar solo a los mayores de edad 
//     - La primer persona que entre despues de las 2 AM, no paga */ 

// let free = false; 
// const validarCliente = (time)=> {
//     let edad = prompt("Cual es tu edad?");
//     if(edad > 18) {
//         if(time >= 2 && time < 7 && free == false) {
//             alert("podes pasar gratis porque eres la primera persona despues de las 2 AM");
//             free = true;
//         } else {
//             alert(`Son las ${time}:00Hs las podes pasar, pero tienes que pagar la entrada`);
//         }
//     } else {
//         alert("mira papa, eres menor de edad por ende no vas a pasar, MAQUINOLA");

//     } 
// }

// validarCliente(23);
// validarCliente(24);
// validarCliente(0.2);
// validarCliente(0.6);
// validarCliente(1);
// validarCliente(2);
// validarCliente(2.4);
// validarCliente(3);

// /* B) Cofla vuelve de la comisaria exausto y por lo cansado que estaba se fue a dormir... 
// Al otro dia comienzan las clases del ciclo basico de la universidad (porque cofla quiere ser programador y se inscribio en la facultad de ingenieria para estudiar desarrollo de software). 
// En su curso en total son 19 alumnos, pero surgio un problema que complico un poco a la facultad: 
// se rompio el sistema de registro de asistencias y durante los proximos 30 dias no se podran hacer registros de datos de ningun tipo, por ende las clases no podran comenzar hasta que esto este solucionado. 
//     - Crear mini-sistema que nos permita registrar los alumnos que estan presentes (P) y ausentes (A) en clase. 
//     - Pasados los 30 dias mostrar la situacion final de todos los alumnos (Nro total de presentes y ausentes). 
//     - Se puede tener un maximo de 10% de ausencias por semestre, si se tienen mas aclarar que esta reprobado. */

// let cantidad = prompt("Cuantos alumnos son?");
// let alumnosTotales = [];
// for (i = 0; i < cantidad; i++) {
//     alumnosTotales[i] = [prompt("Nombre del alumno " + (i + 1)), 0];
// }
// const tomarAsistencia = (nombre, p) => {
//     let presencia = prompt(nombre);
//     if (presencia == "p" || presencia == "P") {
//         alumnosTotales[i][1]++;
//     }
// }
// for (i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales) {
//         tomarAsistencia(alumnosTotales[alumno][0], alumno);
//     }
// }
// for (alumno in alumnosTotales) {
//     let resultado = `${alumnosTotales[alumno][0]}:<br>
//     Asistencias: <b>${alumnosTotales[alumno][1]}</b> <br>
//     Ausencias: <b>${30 - parseInt(alumnosTotales[alumno][1])}</b>`;
//     if(30 - alumnosTotales[alumno][1] > 18) {
//         resultado+= "<b style = 'color:red'> REPROBADO POR INASISTENCIAS</b><br><br>"
//     } else {
//         resultado+= "<br><br>"
//     } 
//     document.write(resultado);
// }


// // C) Calculadora
// let operacion = parseInt(prompt(`${1}. sumar ${2}. restar ${3}. multiplicar ${4}. dividir`));
// const sumar = (num1, num2) => {
//     num1 = parseInt(prompt("Primer Numero"));
//     num2 = parseInt(prompt("Segundo Numero"));
//     let resultado = num1 + num2;
//     alert(resultado);
// }
// const restar = (num1, num2) => {
//     num1 = parseInt(prompt("Primer Numero"));
//     num2 = parseInt(prompt("Segundo Numero"));
//     let resultado = num1 - num2;
//     alert(resultado);
// }
// const multiplicar = (num1, num2) => {
//     num1 = parseInt(prompt("Primer Numero"));
//     num2 = parseInt(prompt("Segundo Numero"));
//     let resultado = num1 * num2;
//     alert(resultado);
// }
// const dividir = (num1, num2) => {
//     num1 = parseInt(prompt("Primer Numero"));
//     num2 = parseInt(prompt("Segundo Numero"));
//     let resultado = num1 / num2;
//     alert(resultado);
// }

// if (operacion == 1) {
//     sumar()
// }
// else if (operacion == 2) {
//     restar()
// }
// else if (operacion == 3) {
//     multiplicar()
// }
// else if (operacion == 4) {
//     dividir()
// }
// else {
//     alert("Operacion no valida")
// }