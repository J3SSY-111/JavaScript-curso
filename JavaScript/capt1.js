// /* CAPITULO 1 */ 
// // multiples variables 
// let numero = 23, numero2 = 39, boom = "hosting"; 

// /* undefined es un error (la variable esta declarada, pero no inicializada)
// null es una variable vacia, pero es aproposito, la declaramos vacia
// naN es "no es un numero"  es cuando se intenta hacer una operacion con algo que no es un numero */

// /* el scope de una variable es el alcance que tiene 
// hosting es lo que dice como funcionan las cosas en el lenguaje*/ 

// // prompt es como un alert, pero te da la opcion de escribir lo que quieras en el mismo alert)
// let nombreDeAutor = prompt("Digame su nombre:");
// alert("Hola " + nombreDeAutor);
// console.log(nombreDeAutor);

// /* Operadores aritmeticos
// Toman valores numericos ( ya sean literales o variables)
// como sus operandos y retornan un valor numerico unico
// Datos Primitivos - son los tipos de datos (string, number, boolean), casos especiales (undefined, null, naN) */

// // adicion 

// numero1 = 10;
// numero2 = 5;
// let resultado = numero1 + numero2; 
// alert(resultado);
// console.log(resultado);

// // decremento

// numero1 = 10;
// numero2 = 5;
// numero1--; //primero se define y despues se asigna
// resultado = numero1--; 
// alert(resultado);
// console.log(resultado);

// //division 

// numero1 = 10;
// numero2 = 5;
// resultado = numero1 / numero2; 
// alert(resultado);
// console.log(resultado);

// // exponencializacion 

// numero1 = 10;
// numero2 = 5;
// resultado = numero1**numero2; 
// alert(resultado);
// console.log(resultado);

// //incremento

// numero1 = 10;
// numero2 = 5;
// numero1++; 
// resultado = numero1++; 
// alert(resultado);
// console.log(resultado);

// //multiplicacion

// numero1 = 10;
// numero2 = 5;
// resultado = numero1 * numero2; 
// alert(resultado);
// console.log(resultado);

// // remainder

// numero1 = 11;
// numero2 = 5;
// resultado = numero1&numero2; 
// alert(resultado);
// console.log(resultado);

// //resta o subtraction 

// numero1 = 10;
// numero2 = 5;
// resultado = numero1 - numero2; 
// alert(resultado);
// console.log(resultado);

// // unary negation o negacion unaria 

// numero1 = 10;
// numero2 = 5;
// resultado = -numero1; 
// alert(resultado);
// console.log(resultado);

// // unary plus

// numero1 = 10;
// numero2 = 5;
// resultado = +numero1; 
// alert(resultado);
// console.log(resultado);

// /* Operadores de asignacion
// Asigna un valor al operando de la izquierda basado en el valor del operando de la derecha.*/

// /* Asignacion 
// abreviaciones - x = y 
// significado - x = y */

// /* Asignacion de adiccion 
// abreviaciones - x += y 
// significado - x = x + y */ 

// let number = 10; 
// number += 5;
// document.write(number);

// /* Asignacion de sustraccion 
// abreviaciones - x -= y 
// significado - x = x - y */ 

// numberTwo = 10; 
// numberTwo -= 5;
// document.write(numberTwo);

// /* Asignacion de multiplicacion 
// abreviaciones - x *= y 
// significado - x = x * y */ 

// numberThree = 10; 
// numberThree *= 5;
// document.write(numberThree);

// /* Asignacion de division 
// abreviaciones - x /= y 
// significado - x = x / y */

// numberFour = 10; 
// numberFour /= 5;
// document.write(numberFour);

// /* Asignacion de resto 
// abreviaciones - x %= y 
// significado x = x % y */ 

// let numberFive = 10; 
// numberFive %= 5;
// document.write(numberFive);

// /* Asignacion de exponenciacion 
// abreviaciones x **= y 
// significado x = x ** y */ 

// let numberSix = 10; 
// numberSix **= 5;
// document.write(numberSix);

// /* Asignacion de desplazamiento a la izquierda 
// abreviaciones x <<= y 
// significado x = x << y */ 

// let numberSeven = 10; 
// numberSeven <<= 5;
// document.write(numberSeven);

// /* Asignacion de desplazamiento a la derecha 
// abreviaciones x >>= y 
// significado x = x >> y */ 

// let numberEight = 10; 
// numberEight >>= 5;
// document.write(numberEight);

// /* Asignacion sin signo de desplazamiento a la derecha 
// abreviaciones x >>>= y 
// significado x = x >>> y */ 

// let numberNine = 10; 
// numberNine >>>= 5;
// document.write(numberNine);

// /* Asignacion AND 
// abreviaciones x &= y 
// significado x = x & y */ 

// let numberTen = 10; 
// numberTen &= 5;
// document.write(numberTen);

// /* Asignacion XOR  
// abreviaciones x ^= y 
// significado x = x ^ y */ 

// let numberEleven = 10; 
// numberEleven ^= 5;
// document.write(numberEleven);

// /* Asignacion OR  
// abreviaciones x |= y 
// significado x = x | y */ 

// let numberTwelve = 10; 
// numberTwelve |= 5;
// document.write(numberTwelve);

// //Concatenacion 

// let saludo = " Hola pedro!"; 
// let pregunta = " Como estas?"; 
// let frase = saludo + pregunta; 
// document.write(frase);

// numero1 = 53; 
// numero2 = 8; 
// frase = "" + numero1 + numero2; // tambien se puede hacer con el concat
// document.write(frase); 

// numero1 = "53"; 
// numero2 = 8; 
// frase = numero1.concat(numero2); // para utilizar el concat tenemos que tener un string
// document.write(frase);

// name = 'Jessy Andujar';
// frase = " Soy " + name + " y estoy caminando";
// document.write(frase);

// frase = ` Soy ${name} y estoy caminando`; //los acentos graves "`" se utilizan para escribir codigo html dentro del codigo javascript 
// document.write(frase);

// // un ejemplo de concatenacion es cuando las paginas web dicen "bienvenido Jessy"
// // el bienvenido es un string unido a let nombreDeUsuario

// // Operadores intermedios 
// // 1) Operadores de comparacion 
// // Los operadores de comparacion comparan dos expresiones y devuelven un valor boolean que representa la relacion de sus valores 

// // equality o es igual
// numero = 23; 
// numero2 = 13; 
// console.log(numero == numero2);

// // inequality o no es igual

// numero = 23; 
// numero2 = 13; 
// console.log(numero != numero2);

// // identity o identidad (estrictamente igual)

// numero = 23; 
// numero2 = 13; 
// console.log(numero === numero2);

// // non-identity (estrictamente diferentes) 

// numero = 23; 
// numero2 = 13; 
// console.log(numero !== numero2);

// // greater than 

// numero = 23; 
// numero2 = 13; 
// console.log(numero > numero2);

// // greater than or equal 

// numero = 23; 
// numero2 = 13; 
// console.log(numero >= numero2);

// // less than 

// numero = 23; 
// numero2 = 13; 
// console.log(numero < numero2);

// // less than or equal

// numero = 23; 
// numero2 = 13; 
// console.log(numero <= numero2);

// // Operadores logicos 
// // los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion, su resultado es booleano, y sus operandos son valores logicos o asimilables a ellos 

// // Operador AND (&&) logico 
// //Uso - expr1 && expr2 
// // Descripcion - Regresa expr1 si tal puede convertirse a false, de lo contrario, regresa expr2. De esta forma, cuando se usa con valores boolean, && regresa true si ambos operandos son verdaderos, de lo contrario regresa false 

// let valor = true; 
// let valor2 = true; 
// resultado = valor && valor2; 
// // let resultado = true; si las 2 son ciertas o las 2 son falsas te devuelve true, si una de las 2 es falsa devuelve false
// console.log(resultado); // 

// // Operador OR (||) logico 
// // Uso - expr1 || expr2 
// // Descripcion - Regresa expr1 si tal puede convertirse a true, de lo contrario, regresa expr2. De esta forma, cuando se usa con valores boolean, || regresa true si cualquier operando es verdadero, pero si ambos son falsos regresa "false"

// valor = true; 
// valor2 = true; 
// let resultado2 = valor || valor2; 
// // let resultado = true; si una de las 2 condiciones es verdadera devuelve true, solo si las dos son falsas es que devuelve false  
// console.log(resultado2);

// let num1 = 12; 
// let num2 = 24; 
// console.log(num1 < num2 || num1 == num2);

// // Operador NOT (!) logico 
// // Uso - !expr 
// // Descripcion - Regresa false si su unico operando puede convertise a true; de lo contrario, regresa true

// valor = true; 
// valor2 = true; 
// let resultado3 = !valor; 
// // let resultado = false; le cambia el valor, asi que nos daria false 
// console.log(resultado3);

// // mezclando operaciones 
// num1 = 12; 
// num2 = 24; 
// let num3 = 25; 
// let num4 = 92;
// let num5 = 91; 
// let op = num1 < num2 || num2 < num3 && !(num1 != num2) && num5 != num3;
// op = true || true && false && true;
// op = true && false;
// op = false;

// let op2 = num5 > num2 && num4 > num3 || !(num1 === num2) || num3 != num3;
// op2 = true && true || true || false;
// op2 = true || true; 
// op2 = true; 
// console.log(op);
// console.log(op2);

// // Camel Case 
// // Ejemplo: palabra1Palabra2 & decimeAlgoPorFavor

// // Condicionales 
// // Definicion: los condicionales existen para hacer que los bloques de ejecuten si una condicion se cumple

// if (false) {
//     alert("hola") // no se ejecuta porque es false
// }

// let nombre2 = 'Jessy';

// if (nombre2 == null) {
//     console.log("hola"); // se ejecuta porque la ecuacion es cierta
// }
// else if (nombre2 == "Jessy") {
//     console.log("tu nombre es " + nombre); // si no se cumple la condicion anterior ejecutamos esto
// }
// else {
//     console.log("tu nombre es otro"); // si ninguna de las condiciones anteriores se cumple se ejecuta esto
// }

// // Crear soluciones 1.0 
// //Historia de Cofla 
// /* A) 3 chicos de 23 anos perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no estan al lado de 
// cada estante con su respectivo helado. Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que... veamos como podemos ayudarlos. 

// Roberto tiene $1.5 USD  
// Pedro tiene $1.7 USD  
// Cofla tiene $3 USD 

// Los precios de helados son los siguientes: 
// Palito de helado de agua: $0.6 USD  
// Palito de haldo de crema: $1 USD 
// Bombon helado marca heladix: $1.6 USD 
// Bombon helado marca heladovich: $1.7 USD 
// Bombon helado marca helardo: $1.8 USD 
// Potecito de haldo con confites: $2.9 USD 
// Pote de 1/4 KG -> $2.9 USD 

// Crear Soluciones: 
// - Pedirles que ingresen el monto que tienen y mostrarles el helado mas caro que puedan comprar 
// - Si hay 2 o mas con el mismo precio, mostrar ambos. 
// - Cofla quiere saber cuanto es el vuelto */ 

// let dineroCofla = prompt("Cuanto dinero tienes Cofla?"); 
// let dineroRoberto = prompt("Cuanto dinero tienes Roberto?"); 
// let dineroPedro = prompt("Cuanto dinero tienes Pedro?"); 
// // parseInt es cuando queremos convertir un string en numero
// dineroCofla = parseInt(dineroCofla);

// if (dineroCofla >= 0.6 && dineroCofla < 1) {
//     alert("Cofla puede comprar el palito de helado de agua");
//     alert("Y te sobran " + (dineroCofla - 0.6))
// } else if (dineroCofla >= 1 && dineroCofla < 1.6) {
//     alert("Cofla puede comprar el palito de helado de crema");
//     alert("Y te sobran " + (dineroCofla - 1))
// } else if (dineroCofla == 1.6) {
//     alert("Cofla puede comprar el bombon helado marca heladix");
//     alert("Y te sobran " + (dineroCofla - 1.6))
// } else if (dineroCofla == 1.7) {
//     alert("Cofla puede comprar el bombon helado marca heladovich");
//     alert("Y te sobran " + (dineroCofla - 1.7))
// } else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
//     alert("Cofla puede comprar el bombon helado marca helardo");
//     alert("Y te sobran " + (dineroCofla - 1.8))
// } else if (dineroCofla >= 2.9) {
//     alert("Cofla puede comprar el potecito de helado con confites o el pote de 1/4 KG");
//     alert("Y te sobran " + (dineroCofla - 2.9))
// } else {
//     alert("Cofla no tiene lo sufieciente para comprar helado");
// }

// if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
//     alert("Roberto puede comprar el palito de helado de agua");
//     alert("Y te sobran " + (dineroRoberto - 0.6))
// } else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
//     alert("Roberto puede comprar el palito de helado de crema");
//     alert("Y te sobran " + (dineroRoberto - 1))
// } else if (dineroRoberto == 1.6) {
//     alert("Roberto puede comprar el bombon helado marca heladix");
//     alert("Y te sobran " + (dineroRoberto - 1.6))
// } else if (dineroRoberto == 1.7) {
//     alert("Roberto puede comprar el bombon helado marca heladovich");
//     alert("Y te sobran " + (dineroRoberto - 1.7))
// } else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
//     alert("Roberto puede comprar el bombon helado marca helardo");
//     alert("Y te sobran " + (dineroRoberto - 1.8))
// } else if (dineroRoberto >= 2.9) {
//     alert("Roberto puede comprar el potecito de helado con confites o el pote de 1/4 KG");
//     alert("Y te sobran " + (dineroRoberto - 2.9))
// } else {
//     alert("Roberto no tiene lo sufieciente para comprar helado");
// }

// if (dineroPedro >= 0.6 && dineroPedro < 1) {
//     alert("Pedro puede comprar el palito de helado de agua");
//     alert("Y te sobran " + (dineroPedro - 0.6))
// } else if (dineroPedro >= 1 && dineroPedro < 1.6) {
//     alert("Pedro puede comprar el palito de helado de crema");
//     alert("Y te sobran " + (dineroPedro - 1))
// } else if (dineroPedro == 1.6) {
//     alert("Pedro puede comprar el bombon helado marca heladix");
//     alert("Y te sobran " + (dineroPedro - 1.6))
// } else if (dineroPedro == 1.7) {
//     alert("Pedro puede comprar el bombon helado marca heladovich");
//     alert("Y te sobran " + (dineroPedro - 1.7))
// } else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
//     alert("Pedro puede comprar el bombon helado marca helardo");
//     alert("Y te sobran " + (dineroPedro - 1.8))
// } else if (dineroPedro >= 2.9) {
//     alert("Pedro puede comprar el potecito de helado con confites o el pote de 1/4 KG");
//     alert("Y te sobran " + (dineroPedro - 2.9))
// } else {
//     alert("Pedro no tiene lo sufieciente para comprar helado");
// }