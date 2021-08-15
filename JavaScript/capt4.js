// /* CAPITULO 4
// Metodos de cadenas 
// Esta seccion de metodos busca dentro de las cadena lo que le pidamos:
// - concat() = junta dos o mas cadenas y retorna una nueva 
// - startsWith() = si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve false.
// - endsWith() = si una cadena termina con los caracteres de otra cadena, devuleve true, sino devuelve false.
// - includes() = si una cadena pude encontrarse dentro de otra cadena, devuelve true, sino devuelve false. 
// - indexOf() - devuelve el indice del primer caracter de la cadena, sin no existe, devuleve -1
// - lastIndexOf() - devuleve el ultimo indice del primer caracter de la cadena, si no existe, devuelve -1 
// */
// let cadena = new String("cadena de prueba"); // un string es un objeto que contiene un string, por eso lo podemos escribir de esta manera y es lo mismo
// let cadena2 = "cadena";
// resultado = cadena.concat(" hola"); // concat es para concatenar de una manera diferente
// document.write(resultado + "<br>");

// resultado = cadena.startsWith(cadena2); // startsWith() = cadena con cadena
// document.write(resultado + "<br>");

// cadena2 = "prueba";
// resultado = cadena.endsWith(cadena2); // endsWith() = prueba con prueba
// document.write(resultado + "<br>");

// cadena = "sigo a dalto en instagram";
// cadena2 = "dalto"
// resultado = cadena.includes(cadena2); // includes() = busca cadenas en cualquier parte
// document.write(resultado + "<br>");

// cadena = "pedro es un tarado inmaduro";
// resultado = cadena.indexOf("tarado"); // es lo mismo que includes(), pero no devuelve true ni false, sino la posicion de la letra (tarado la encontramos a partir de la posicion 12)
// document.write(resultado + "<br>");
// resultado = cadena.indexOf("boom"); // devuelve -1 porque no se encuentra
// document.write(resultado + "<br>");

// cadena = "pedro es un tarado tarado tarado tarado tarado";
// resultado = cadena.lastIndexOf("tarado"); // la diferencia a indexOf() es que agarra el ultimo valor que encuentra 
// document.write(resultado + "<br>");



// /* Esta seccion de metodos completa las cadenas al espacio que querramos y con lo que querramos:
// padStart() [propuesta de Estandar] - Rellenar cadena al princicipio con los caracteres deseados. 
// padEnd() [propuesta de ECMA] - Rellenar cadena al final con los caracteres deseados. 
// repeat() - Devuelve la misma cadena pero repetida la cantidad que le indiquemos.*/

// cadena = "abc";
// resultado = cadena.padStart(10, "1"); // rellena la cadena al principio de 1 hasta que llegue a 10 de caracteres 
// document.write(resultado + "<br>");

// resultado = cadena.padEnd(10, "1"); // rellena la al final de 1 hasta que llegue a 10 de caracteres 
// document.write(resultado + "<br>");

// cadena = "123 ";
// resultado = cadena.repeat(10); // repite la cadena que escojamos las veces que querramos
// document.write(resultado + "<br>");



// /* split() - Divide la caden como le pidamos
// - substring() = Nos retorna un pedazo de la cadena que seleccionamos 
// - toLowerCase() = convierte una cadena a minuscula
// - toUpperCase() = Convierte una cadena a mayuscula
// - toString() = metodo devuelve una cadena que representa al objeto especificado
// - trim() = elimina los espacios en blanco al principio y al final de una cadena
// - trimEnd() = eliminia los espacios en blanco al final de una cadena
// - trimStart() = eliminia los espacios en blanco al comienzo de una cadena
// - valueOf() = retorna el valor primitivo de un objeto string */

// cadena = "Hola como estas";
// resultado = cadena.split(" ") // divide la cadena en cada espacio, convitiendola en una especie de array.
// document.write(resultado + "<br>");
// document.write(resultado[0] + "<br>");  
// document.write(resultado[1] + "<br>"); 
// document.write(resultado[2] + "<br>"); 

// resultado = cadena.split("como"); // el como actua como el espacio en el ejemplo anterior, asi que quedaria separado cuando se encuentre con como.
// document.write(resultado + "<br>");

// cadena = "Hola, 123, 1, 4as, f, 33";
// resultado = cadena.split(",");
// document.write(resultado + "<br>");
// document.write(resultado[3] + "<br>");

// cadena = "ABCDEFG";
// resultado = cadena.substring(0, 3); // crea una sub cadena desde la posicion inicial de caracteres que pongamos hasta la final que pongamos (la final no la muestra) 
// document.write(resultado + "<br>");

// resultado = cadena.toLowerCase(); // convierte la cadena en minusculas
// document.write(resultado + "<br>");

// cadena = "abcdefg";
// resultado = cadena.toUpperCase(); // convierte la cadena en mayusculas
// document.write(resultado + "<br>");

// cadena = 354; 
// resultado = cadena.toString(); // convierte los valores en cadenas

// cadena = "   pedro   "; 
// document.write(cadena.length + "<br>");
// resultado = cadena.trim(); // remueve los espacios 
// resultado1 = cadena.trimEnd(); // remueve los espacios del final
// resultado2 = cadena.trimStart(); // remueve los espacios del principio
// document.write(resultado.length + "<br>");
// document.write(resultado1.length + "<br>");
// document.write(resultado2.length + "<br>");


// /* Metodos de Arrays
// - pop() = elimina el ultimo elemento de un array y lo devuelve 
// - shift() = elimina el primer elemento de un array y lo devuelve
// - push() = agrega un elemento al array al final de la lista
// - reverse() = invierte el orden de los elementos de un array
// - unshift() = agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array
// - soft() = ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado
// - splice() = cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos */

// let nombres = ["pedro", "maria", "jorge"];
// document.write("<br><br>" + "Array original: <b>" + nombres + "</b><br>");
// resultado = nombres.pop(); // elimina el ultimo elemento del array y despues lo muestra
// document.write("Elemento removido: <b style = 'color: red'>" + resultado + "</b><br>");
// document.write("Resultado: <b>" + nombres + "</b><br>");

// nombres = ["pedro", "maria", "jorge"];
// document.write("Array original: <b>" + nombres + "</b><br>");
// resultado = nombres.shift(); // elimina el primero elemento del array y despues lo muestra
// document.write("Elemento removido: <b style = 'color: red'>" + resultado + "</b><br>");
// document.write("Resultado: <b>" + nombres + "</b><br>");

// nombres = ["pedro", "maria", "jorge"];
// document.write(nombres + "<br>")
// resultado = nombres.push("juancito", "robert"); // push() nos muestra la cantidad de elementos que ahora hay en el arreglo  
// document.write(resultado + "<br>");
// document.write(nombres + "<br>"); // para poder ver el arreglo hay que escribirlo en el documento una vez mas

// let numeros = [1,2,3,4,5];
// document.write(numeros + '<br>');
// numeros.reverse(); // nos devuelve el arreglo al reves
// document.write(numeros + '<br>');

// numeros = [1,2,3,4,5];
// document.write(numeros + '<br>');
// resultado = numeros.unshift(1, 3); // agrega uno o mas elementos al inicio del array
// document.write(resultado + "<br>")
// document.write(numeros + '<br>');

// numeros = [8,3,4,5,1,2,9];
// document.write(numeros + '<br>');
// resultado = numeros.sort(); // devuelve los elementos en orden 
// document.write(resultado + "<br>")

// nombres = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
// document.write(nombres + "<br>");
// nombres.splice(1, 3, "roberto", "carmen", "yei"); // arranca en la posicion 1, elimina 3 elementos y despues agrega roberto, carmen y yei empezando en la misma posicion en la que empezo a eliminar los elementos pasados
// document.write(nombres + "<br>");



// /* Accesores 
// - join() = une todos los elementos de una matriz (u objeto similar) en una cadena y la devuelve 
// - slice() = devuelve una parte del array dentro de un nuevo aray empezando por inicio hasta fin (fin no incluido) 
// - Metodos ya vistos en cadenas: toString(), indexOf(), lastIndexOf(), includes() */

// nombres = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
// document.write("<br><br>Array: "+ nombres + "<br>");
// resultado = nombres.join(); // une todos los elementos y los convierte en una cadena 
// document.write("String: " + resultado + "<br>"); // la diferencia de join() con toString() es que con join() podemos poner el separador que querramos
// document.write("Comprobacion de cadena: " + resultado[0] + "<br>");

// nombres = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
// document.write(nombres + "<br>");
// resultado = nombres.slice(0, 2); // nos muestra los elementos desde el inicio hasta el elemento que querramos, sin incluir el final
// document.write(resultado + "<br>");

// // Los metodos de cadena tienen la misma funcion para los arrays



// /* De Repeticion
// - filter() = crea un nuevo array con todos los elementos que cumplan la condicion
// - forEach() = ejecuta la funcion indicada una vez por cada elemento del array */

// nombres = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
// resultado = nombres.filter(nombre => nombre.length > 5); // filter contiene una funcion con un parametro que simboliza cada uno de los elementos (parecido a for(nombre in nombres)) que cumplan con la condicion estipulada 
// document.write("<br><br>Filter: " + resultado + "<br>");

// nombres = ["abecedario", "manzana", "pedro", "dedo", "bobo"];
// document.write("ForEach: ")
// resultado = nombres.forEach(nombre => { // forEach contiene una funcion con un parametro que simboliza cada uno de los elementos (parecido a for(nombre in nombres)) 
//     document.write(nombre + "<br>")
// }); 




// /* Objeto Math - Basico 
// Metodos: 
// - sqrt() = Devuelve la raiz cuadrada positiva de un numero 
// - cbrt() = Devuelve la raiz cubica de un numero 
// - max() = Devuelve el mayor de cero o mas numeros 
// - min() = Devuelve el mas pequeno de cero o mas numeros 
// - random() = Devuelve un numero pseudo-aleatorio entre 0 y 1
// - round() = Devuelve el valor de un numero redondeado al numero entero mas cercanio 
// - fround() = Devuelve la representacion flotante de precision simple mas cercana de un numero 
// - floor() = Devuelve el mayor entero menor que o igual a un numero
// - trunc() = Devue3lve la parte entera del numero x, la eliminacion de los digitos fraccionarios */ 

// numero = Math.sqrt(25); // busca la raiz cuadrada del numero que querramos
// document.write("<br><br>Raiz cuadrada de 25: " + numero + "<br>");

// numero = Math.cbrt(27); // busca la raiz cubica del numero que querramos
// document.write("Raiz cubica de 27: "+ numero + "<br>");

// numero = Math.max(4,1,6,12,63,243,90); // coge el numero mas grande y lo muestra 
// document.write(numero + "<br>");

// numero = Math.min(4,1,6,12,63,243,90); // coge el numero mas pequeno y lo muestra 
// document.write(numero + "<br>");

// numero = Math.random(); // escoge un numero random de 0 a 1
// document.write(numero + "<br>");

// numero = Math.random()*100; // escoge un numero random de 0 a 100
// numero = Math.round(numero); // asi redondeamos cualquiera que sea el numero random que salga para que no nos de decimales, el unico problema es que anade el 0 y el 100
// document.write(numero + "<br>");

// numero = Math.random()*99; // escoge un numero random de 0 a 99
// numero = Math.floor(numero + 1); // redondeamos hacia abajo cualquiera que sea el numero (3.9 a 3), y le sumamos uno para que no nos de 0, y los multiplicamos por 99 en vez de por 100 para que no anada el 100 tampoco
// document.write(numero + "<br>"); // ahora se mostrara en pantalla un numero random de 1 al 99

// numero = Math.fround(2.34567654555647645553456577777777777777); // no entendi, pero redondea el numero a decimales con 15 numeros despues del . (algo asi)
// document.write(numero + "<br>");

// numero = Math.trunc(9.9); // simplemente quita los decimales y devuelve el numero entero solo
// document.write(numero + "<br>");



// /* Propiedades
// - PI = Radio de la circunferencia de un circulo respecto a su diametro, aproximadamente 3.14159
// - SQRT1_2 = Raiz cuadrada de 1/2; equivalentemente, 1 sobre la raiz cuadrad de 2, aproximadamente 0.707
// - SQRT2 = Raiz cuadrada de 2, aproximadamente 1.414
// - E = Constante de Euler, la base de los lagaritmos naturales, aproximadamente 2.718
// - LN2 = Logaritmo natural de 2, aproximadamente 0.693
// - LN10 = Logaritmo natural de 10, aproximadamente 2.303
// - LOG2E = Logaritmo natural de 10, aproximadamente 1.443 
// - LOG10E = Logaritmo de E con base 10, aproximadamente 0.434 */




// /* A) Cofla ya esta terminando el primer semestre del primer ciclo, la tarea que le debe realizar es mucho mas avanazada de la que tenia antes, ademas de suma, resta, multiplicacion y division ahora tambien necesitara calcular potencias, raices cuadrada y cubicas. 
// Crear soluciones: 
// - Perfeccionar calculadora para poder implementar las nuevas funciones */ 

// class Calculadora {
//     sumar (num1, num2) {
//         num1 = parseInt(prompt("Primer Numero"));
//         num2 = parseInt(prompt("Segundo Numero"));
//         let resultado = num1 + num2;
//         alert(resultado);
//     }
//     restar (num1, num2) {
//         num1 = parseInt(prompt("Primer Numero"));
//         num2 = parseInt(prompt("Segundo Numero"));
//         let resultado = num1 - num2;
//         alert(resultado);
//     }
//     multiplicar (num1, num2) {
//         num1 = parseInt(prompt("Primer Numero"));
//         num2 = parseInt(prompt("Segundo Numero"));
//         let resultado = num1 * num2;
//         alert(resultado);
//     }
//     dividir (num1, num2) {
//         num1 = parseInt(prompt("Primer Numero"));
//         num2 = parseInt(prompt("Segundo Numero"));
//         let resultado = num1 / num2;
//         alert(resultado);
//     }
//     potenciar(num, exp) {
//         let numero = num;
//         for(var i = 1; i < exp; i++) {
//             numero = numero * num; 
//         }
//         return numero;
//     }
//     raizCuadrada(num) {
//         return Math.sqrt(num);
//     }
//     raizCubica(num) {
//         return Math.cbrt(num);
//     }
// }

// const calculadora = new Calculadora()
// let operacion = parseInt(prompt(`${1}. sumar, ${2}. restar, ${3}. multiplicar, ${4}. dividir, ${5}. potenciacion, ${6}. raiz cuadrada, ${7}. raiz cubica` ));

// if (operacion == 1) {
//     calculadora.sumar()
// }
// else if (operacion == 2) {
//     calculadora.restar()
// }
// else if (operacion == 3) {
//     calculadora.multiplicar()
// }
// else if (operacion == 4) {
//     calculadora.dividir()
// }
// else if (operacion == 5) {
//     num1 = parseInt(prompt("Numero a potenciar: "));
//     num2 = parseInt(prompt("Exponente: "));
//     resultado = calculadora.potenciar(num1, num2);
//     alert(resultado);
// }
// else if (operacion == 6) {
//     num1 = parseInt(prompt("Raiz cuadrada de: "));
//     resultado = calculadora.raizCuadrada(num1);
//     alert(resultado);
// }
// else if (operacion == 7) {
//     num1 = parseInt(prompt("Raiz cubica de: "));
//     resultado = calculadora.raizCubica(num1);
//     alert(resultado);
// }
// else {
//     alert("Operacion no valida")
// }




/* B) La facultad de cofla esta por comenzar y ya las 12 materias de la carrera tienen asignado un profesor y todos los personas que se anotaron en dichas clases, pero necesitamos ver esto mas ordenadamente. 
Crear soluciones: 
- Crear una funcion que al pasarle como parametro la materia nos devuelva: 
    1. profesor asignado 
    2. el nombre de todos los personas 
- Crear funcion que nos diga en cuantas clases esta cofla 
- Nombrar las clases en las que esta y los profesores de cada una */ 

// const obtenerInformacion = (materia) => {
//     materias = {
//         fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
//         programacion: ["Dalto", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
//         logica: ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
//         quimica: ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"]
//     }
//     if (materias[materia] !== undefined) {
//         return [materias[materia], materia, materias];
//     } 
//     else {
//         return materias
//     }
// }

// const mostrarInformacion = (materia) => {
//     let informacion = obtenerInformacion(materia);
//     if (informacion !== false) {
//         let profesor = obtenerInformacion(materia)[0][0];
//         let alumnos = obtenerInformacion(materia)[0];
//         alumnos.shift();
//         document.write(`Alumnos presentes en <b>${informacion[1]}</b>: <b style = 'color: red'>${profesor}</b><br>
//         Los alumnos son: <b style = "color: blue">${alumnos}</b><br><br>`);
//     }
// }

// const cantidadDeClases = (alumno) => {
//     let informacion = obtenerInformacion();
//     let clasesPresentes = [];
//     let cantidadTotal = 0;
//     for(info in informacion) {
//         if (informacion[info].includes(alumno)) {
//             cantidadTotal++; 
//             clasesPresentes.push(" " + info);
//         }
//     }
//     document.write(`<b style = "color: blue">${alumno}</b> esta en <b>${cantidadTotal} clases: 
//     </b> <b style = "color: green">${clasesPresentes}</b><br><br>`);
// }
// mostrarInformacion("fisica");
// mostrarInformacion("programacion");
// mostrarInformacion("logica");
// mostrarInformacion("quimica");

// cantidadDeClases("Cofla");
// cantidadDeClases("Pedro");
// cantidadDeClases("Pepito");
// cantidadDeClases("Maria");
// cantidadDeClases("Juan");




/* C) Cofla ya vio las 12 materias y se decidio en cual se va a inscribir asi que en 3 dias lo hara, el problema es que se rompio el sistema de inscripciones
Crear Soluciones: 
- Crear una funcion para preguntarle a Cofla en que materia se quiere inscribir
- Si ya hay 20 alumnos anotados en la materia negarle la inscripcion 
- Si hay menos de 20 alumnos inscribir a Cofla y anadirlo a la lista de alumnos */

// let materias = {
//         fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
//         programacion: ["Dalto", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
//         logica: ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
//         quimica: ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"]
// }

// const inscribir = (alumno, materia) => {
//     personas = materias[materia]; 
//     if (personas.length >= 21) {
//         document.write(`Lo siento ${alumno}, las clases de <b>${materia}</b> ya estan llenas<br><br>`);
//     }
//     else {
//         personas.push(alumno);
//         if (materia == "fisica") {
//             materias = {
//                 fisica: personas, 
//                 programacion: materias['programacion'],
//                 logica: materias['logica'],
//                 quimica: materias['quimica']
//             }
//         }
//         else if (materia == "programacion") {
//             materias = {
//                 fisica: materias['fisica'], 
//                 programacion: personas,
//                 logica: materias['logica'],
//                 quimica: materias['quimica']
//             }
//         }
//         else if (materia == "logica") {
//             materias = {
//                 fisica: materias['fisica'], 
//                 programacion: materias['programacion'],
//                 logica: personas,
//                 quimica: materias['quimica']
//             }
//         }
//         else if (materia == "quimica") {
//             materias = {
//                 fisica: materias['fisica'], 
//                 programacion: materias['programacion'],
//                 logica: materias['logica'],
//                 quimica: personas
//             }
//         }
//         document.write(`Felicidades ${alumno}! Te has inscrito a ${materia} correctamente.`);
//     }
// }

// document.write(materias['fisica'] + "<br>");
// inscribir("pedrito", "fisica");
// inscribir("yei", "fisica");
// inscribir("carmen", "fisica");
// inscribir("wilmer", "fisica");
// inscribir("jessy", "fisica");
// inscribir("joel", "fisica");
// inscribir("misael", "fisica");
// inscribir("wilmarie", "fisica");
// inscribir("beto", "fisica");
// inscribir("alkdf", "fisica");
// inscribir("akdjbf", "fisica");
// inscribir("akdjnf", "fisica");
// inscribir("akjdfn", "fisica");
// inscribir("akdjbf", "fisica");
// inscribir("alkdfn", "fisica");
// inscribir("aljkdfn", "fisica");
// inscribir("akjdfba", "fisica");
// inscribir("karla", "fisica");

// document.write("<br>" + materias['fisica'] + "<br>");


