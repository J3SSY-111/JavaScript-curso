// CAPITULO 3
// Programacion orientada a objetos (POO) (Desde aqui todo se tiene que correr por secciones, todo lo demas se comenta y solo se corre lo que estamos trabajando para que funcione)
/* Conceptos basicos de POO
Clase - es como una receta, una plantilla que se crea para poder crear objetos
Objetos = son los resultados de las clases
Metodo - son las cosas que puede hacer nuestro objeto
Constructor - es una particularidad que tienen las clases, cuando creamos una clase tenemos que crear un constructor que nos va a construir las propiedades de un objeto 
Instanciacion - cuando finalizamos todo podemos decir que la clase esta instaciada */

// class Animal {
//     constructor(especie, edad, color) {
//         this.especie = especie; // = es como decirle que estamos creando una propiedad llamada especie, que va a contener el parametro especie
//         this.edad = edad;
//         this.color= color
//         this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
//     } 
//     // Lo siguiente es un metodo:
//     verInfo() { // los metodos no pueden ser funciones flechas, porque no se pueden escribir funciones flecha dentro de las clases
//         document.write(this.info + "<br>");
//     }
// }

// const perro = new Animal("perro", 5, "marron"); // new es para empezar una clase e instanciar un objeto
// document.write(perro);
// console.log(perro);

// document.write(perro.color); // para verificar la propiedad del objeto podemos usar perro.edad, perro.color, perro.especie; perro es igual a this (this.propiedad)
// document.write("<br>" + perro.info + "<br>");

// const gato = new Animal("gato", 2, "negro"); 
// const pajaro = new Animal("pajaro", 1, "verde"); 
// document.write(gato.info + "<br>");
// document.write(pajaro.info + "<br>")

// perro.verInfo(); // = Optimizamos el codigo aplicandolo por metodos
// gato.verInfo();
// pajaro.verInfo();


/* Caracteristicas de la POO
- Abstraccion = supongamos que tenemos un auto y tiene muchas caracteristicas, pero en la abstraccion intentamos resumir todo
- Modularidad = es la capacidad de resolver un problema grande resolviendolo por partes (Estilo Gerencia de Proyectos)
- Encapsulamiento = basicamente consiste en hacer que todos los datos esten privados. 
- Polimorfismo = la capacidad que tiene un objeto para comportarse distinto pot sus propiedades */ 


// class Animal {
//     constructor(especie, edad, color) {
//         this.especie = especie; 
//         this.edad = edad;
//         this.color= color
//         this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
//     } 
//     verInfo() { 
//         document.write(this.info + "<br>");
//     }
//     ladrar() {
//         if (this.especie == "perro") {
//             document.write("Waw!");
//         } else {
//             document.write("Es un " + this.especie + ", asi que no puede ladrar.");
//         }
//     }
// }

// perro.ladrar();
// gato.ladrar();
// pajaro.ladrar();



/* Otros conceptos de POO
- Herencia 
- Metodos estaticos 
- Metodos Accesores (Getters, Setters) */ 

// Herencia 

// class Animal {
//     constructor(especie, edad, color) {
//         this.especie = especie; // = es como decirle que estamos creando una propiedad llamada especie, que va a contener el parametro especie
//         this.edad = edad;
//         this.color= color
//         this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
//     } 
//     // Lo siguiente es un metodo:
//     verInfo() { // los metodos no pueden ser funciones flechas, porque no se pueden escribir funciones flecha dentro de las clases
//         document.write(this.info + "<br>");
//     }
// }

// class Perro extends Animal {
//     constructor(especie, edad, color, raza) {
//         super(especie, edad, color)
//         this.raza = raza; 
//     }
//     ladrar(){
//         alert("WAU!");
//     }
// }

// const perro = new Perro("perro", 5, "marron", "doberman");
// const gato = new Animal("gato", 2, "negro"); 
// const pajaro = new Animal("pajaro", 1, "verde");

// perro.verInfo();
// gato.ladrar();



// Metodos estaticos = es un metodo que no necesita que la clase se defina para poder ser creado

// class Animal {
//     constructor(especie, edad, color) {
//         this.especie = especie; // = es como decirle que estamos creando una propiedad llamada especie, que va a contener el parametro especie
//         this.edad = edad;
//         this.color= color
//         this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
//     } 
//     // Lo siguiente es un metodo:
//     verInfo() { // los metodos no pueden ser funciones flechas, porque no se pueden escribir funciones flecha dentro de las clases
//         document.write(this.info + "<br>");
//     }
// }

// class Perro extends Animal {
//     constructor(especie, edad, color, raza) {
//         super(especie, edad, color)
//         this.raza = raza; 
//     }
//     static ladrar(){ // como el metodo ladrar no depende de las propiedades, se puede convertir en un metodo static 
//         alert("WAU!");
//     }
// }

// Perro.ladrar(); // podemos usar el metodo estatico ladrar directamente aun cuando no hemos usado las propiedades, lo que sucede es que el sistema ignora las propiedades no usadas y solo se enfoca en ladrar()
// // si le quitamos el static al metodo ladrar, no funcionaria porque necesitamos inicializar el objeto con todas sus propiedades primero

// Metodos accesores 
// Getters son para obtner un valor
// Setters son para modificarlo o definirlo

// class Animal {
//     constructor(especie, edad, color) {
//         this.especie = especie; // = es como decirle que estamos creando una propiedad llamada especie, que va a contener el parametro especie
//         this.edad = edad;
//         this.color= color
//         this.info = `Soy ${this.especie}, tengo ${this.edad} y soy de color ${this.color}`
//     } 
//     // Lo siguiente es un metodo:
//     verInfo() { // los metodos no pueden ser funciones flechas, porque no se pueden escribir funciones flecha dentro de las clases
//         document.write(this.info + "<br>");
//     }
// }

// class Perro extends Animal {
//     constructor(especie, edad, color, raza) {
//         super(especie, edad, color)
//         this.raza = null; 
//     }
//     set setRaza(newName){ 
//     this.raza = newName;
//     }
//     get getRaza() {
//         return this.raza;
//     }
// }

// const perro = new Perro("perro", 5, "marron", "doberman"); // los objetos deben ser definidos con const para evitar problemas futuros en el codigo
// const gato = new Animal("gato", 2, "negro");
// const pajaro = new Animal("pajaro", 1, "verde");

// // perro.setRaza("Pedro"); // los setters no se inicializan como loe metodos comunes (si le quitamos el comment seria un error)
// perro.setRaza = "Pedro"; // se inicializan como propiedades  
// document.write(perro.getRaza); 
// // En la mayoria de los lenguajes, los getters y setters se utilizan para acceder a propiedades privadas o en caso de JavaScript, a datos encapsulados 

/* Crear soluciones 3.0 
A) Cofla entro a una tienda que vende celulares porque le parecio bastante bueno comprarse un nuevo celular. De todos los modelos que hay disponibles en esa tienda, a Cofla le llamron la atencion 3 telefonos especificamente. 
El problema eds que ningun vendedor sabe nada al respecto entonces no pueden recomendarle absolutamente nada... pero claro: 
el antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos, ahi entramos nosotros. 
- Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares. 
- Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram
- Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar */

// class Celular {
//     constructor (color, peso, tamano, rdc, ram) {
//         this.color = color;
//         this.peso = peso; 
//         this.tamano = tamano; 
//         this.resolucionDeCamara = rdc; 
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     presionarBotonEncendido(){
//         if(this.encendido == false) {
//             alert("Celular prendido");
//             this.encendido = true; 
//         } else {
//             alert ("Celular apagado")
//             this.encendido = false;
//         }
//     }
//     reiniciar() {
//         if (this.encendido == true) {
//             alert("Reiniciando celular");
//         } else {
//             alert("El celular esta apagado");
//         }
//     }
//     tomarFoto() {
//         alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
//     } 
//     grabarVideo(){
//         alert(`Grabando video en ${this.resolucionDeCamara}`)
//     }
//     mobileInfo() {
//         return `
//         Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         Tamano: <b>${this.tamano}</b><br>
//         Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
//         Memoria RAM: <b>${this.memoriaRam}</b><br>
//         `
//     }
// }

// const celular1 = new Celular("Rojo", "150g", "5'", "HD", "1GB");
// const celular2 = new Celular("Negro", "155g", "5.4'", "Full HD", "2GB");
// const celular3 = new Celular("Blanco", "146g", "5.9'", "Full HD", "2GB");

// celular1.presionarBotonEncendido();
// celular1.tomarFoto();
// celular1.grabarVideo();
// celular1.reiniciar();
// celular1.presionarBotonEncendido();

// document.write(`
// ${celular1.mobileInfo()} <br>
// ${celular2.mobileInfo()} <br>
// ${celular3.mobileInfo()} <br>
// `)


/* B) Cofla no esta satisfecho con los celulares asi que decide ir a la seccion de celulares de alta gama, donde va a poder encontrar los celulares mas caros del lugar,
 asi que al r=entrar vio dos celulares que le encantaron, estos 2 celulares de alta gama pueden hacer todo lo que podian hacer los 3 anteriores, pero tienen mejores 
 caracteristicas y ademas pueden grabar en camara super lenta, tiene reconocimiento facial y una camara extra. 
 Crear soluciones 
 - Implementar todas estar cualidades en los celulares de alta gama */

//  class Celular {
//     constructor (color, peso, tamano, rdc, ram) {
//         this.color = color;
//         this.peso = peso; 
//         this.tamano = tamano; 
//         this.resolucionDeCamara = rdc; 
//         this.memoriaRam = ram;
//         this.encendido = false;
//     }
//     presionarBotonEncendido(){
//         if(this.encendido == false) {
//             alert("Celular prendido");
//             this.encendido = true; 
//         } else {
//             alert ("Celular apagado")
//             this.encendido = false;
//         }
//     }
//     reiniciar() {
//         if (this.encendido == true) {
//             alert("Reiniciando celular");
//         } else {
//             alert("El celular esta apagado");
//         }
//     }
//     tomarFoto() {
//         alert(`Foto tomada en una resolucion de: ${this.resolucionDeCamara}`);
//     } 
//     grabarVideo(){
//         alert(`Grabando video en ${this.resolucionDeCamara}`)
//     }
//     mobileInfo() {
//         return `
//         Color: <b>${this.color}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         Tamano: <b>${this.tamano}</b><br>
//         Resolucion de video: <b>${this.resolucionDeCamara}</b><br>
//         Memoria RAM: <b>${this.memoriaRam}</b><br>
//         `
//     }
// }

// class CelularAltaGama extends Celular {
//     constructor(color, peso, tamano, rdc, ram, rdce) {
//         super(color, peso, tamano, rdc, ram);
//         this.resolucionDeCamaraExtra = rdce;
//     }
//     grabarVideoLento(){
//         alert("estas grabando en camara lenta");
//     }
//     reconocimientoFacial(){
//         alert("vamos a iniciar un reconocimiento facial");
//     }
//     infoAltaGama() {
//         return this.mobileInfo() + `Resolucion de Camara Extra: ${this.resolucionDeCamaraExtra}`;
//     }
// }

// celular1 = new CelularAltaGama("Rojo", "130g", "5.2", "4K", "3GB", "Full HD");
// celular2 = new CelularAltaGama("Negro", "142g", "6", "4K", "4GB", "HD");

// document.write(`
// ${celular1.infoAltaGama()} <br><br>
// ${celular2.infoAltaGama()} <br>
// `);

/* C) Cofla ya tiene su nuevo celular y ahora esta mirando las aplicaciones del Play Store ya que quiere jugar juegos que sean muy populares, 
que tengan buena puntauacion y que pesen poco, pero las 7 apps que llamaron su atencion son un tanto similares y sabe que si se descarga todas, 
probablemente juegue con todas, pero el se va a descargar solo 2 para tener perdidas innecesarias de tiempo jugando juegos con su celular,
pero el problema viene cuando no puede decidirse cual de todas estas aplicaciones es la que va a descargar. 
Crear soluciones:
- Crear un sistema que ayude a cofla a decidir cual app descargar. 
- La informacion de los instaladores debe contener la cantidad de descargas, la puntuacion y el peso.
- Las apps se deben poder instalar, abrir, cerrar y desinstalar. */

// class App {
//     constructor(descargas, puntuacion, peso) {
//         this.descargas = descargas;
//         this.puntuacion = puntuacion; 
//         this.peso = peso;
//         this.iniciada = false;
//         this.instalada = false; 
//     } 
//     instalar() {
//         if (this.instalada == false) {
//             this.instalada = true;
//             alert("app instalada correctamente");
//         } 
//     }   
//     desinstalar() {
//         if (this.instalada == true) {
//             this.instalada = false;
//             alert("app desinstalada correctamente");
//         }
//     }
//     abrir() {
//         if(this.iniciada == false && this.instalada == true) {
//             this.iniciada = true;
//             alert("app encendida");
//         }
//     }
//     cerrar() {
//         if (this.iniciada == true && this.instalada == true) {
//             this.iniciada = false;
//             alert("app cerrada");
//         }
//     }
//     appInfo() {
//         return `
//         Descargas: <b>${this.descargas}</b><br>
//         Puntuacion: <b>${this.puntuacion}</b><br>
//         Peso: <b>${this.peso}</b><br>
//         `
//     }
// }

// const app = new App("16.000", "5 estrellas", "900mb");
// const app2 = new App("1.000", "4 estrellas", "400mb");
// const app3 = new App("6.000", "4.5 estrellas", "100mb");
// const app4 = new App("23.000", "4.8 estrellas", "1gb");
// const app5 = new App("900", "5 estrellas", "250mb");
// const app6 = new App("17", "3.7 estrellas", "522mb");
// const app7 = new App("42.981", "2.9 estrellas", "723mb");

// // app.instalar();
// // app.abrir();
// // app.cerrar();
// // app.desinstalar();

// document.write(`
// ${app.appInfo()} <br>
// ${app2.appInfo()} <br>
// ${app3.appInfo()} <br>
// ${app4.appInfo()} <br>
// ${app5.appInfo()} <br>
// ${app6.appInfo()} <br>
// ${app7.appInfo()} <br>
// `);