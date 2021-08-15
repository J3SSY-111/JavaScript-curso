// CAPITULO 5

/* Console 
Funciones de registro:
- assert() = Aparece un mensaje de error en la consola si la afirmacion es falsa. Si la afirmacion es verdadera, no aparecera nada (NO ESTANDAR)
- clear() = limpia la consola 
- error() = Muestra un mensaje de error en la consola web
- info() = Emite un mensaje informativo a la Consola Web. En Firefox y Chrome, se muestra un pequeno icono "i" junto a estos elementos en el registro de la consola web
- log() = Muestra un mnesaje en la consola web (o del interprete JavaScript)
- table() = Esta funcion toma un argumento obligatorio: data, que debe ser un array o un objeto, y un parametro adicional: columns y nos muestra una tabla en consola
- warn() = Imprime un mensaje de advertencia en la consola web 
- dir() = Despliega una lista interactiva de las propiedades del objeto JavaScript especificado [NO ESTANDAR] */

// // se supone que si lo escribimos aqui tambien salga en consola, pero por alguna razon no me esta saliendo
// console.assert(5 < 4); // se supone que diga que es failed, pero ya nos e usa
// console.clear() // borra todo lo que se encuentra en la consola
// console.error("Wo, que hiciste???") // asi establecemos lo que queremos que salga cuando haya un error por consola
// console.info("Muy bien tu trabajo, pero eso ya no se usa"); // es lo mismo que el console.log(), pero se ve en pantalla con el proposito de informar
// console.table([2,3,4,5,6,7,8,9,7,6,5,4,3,3,2,3,4,4,]); // nos tira una tabla de posiciones y valores
// console.warn("wo, venis bien, pero cuidao' papi"); // muestra una advertencia
// console.dir([5,4,3,2,1,0]); // es lo mismo que console.log, pero muestra la informacion diferente




// /* Funciones de conteo
// - count() = Registra el numero de veces que se llama a count(). Esta funcion toma como argumento opcional una etiqueta.
// - countReset() = Resetea el contador console.count() */
// function sumar(num1, num2) {
//     document.write(num1 + num2);
//     console.count(); // se supone que cuente las veces que se inicializa la funcion y lo muestre en pantalla
// }

// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// console.countReset(); // inicia una vez mas la cuenta de count de la funcion sumar()
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);




// /* Funciones de agrupacion: 
// - group() = Crea un nuevo grupo en linea en el registro de la consola web
// - groupEnd() = Remueve un grupo en linea en el registro de la consola web
// - groupCollapsed() = Crea un grupo en linea, pero contraido, el usuario debe expandirlo para verlo
//  */

// console.group("Frutas"); // abre un grupo de datos que podemos abrir o cerrar, como pasa en el codigo con los bloques
// console.groupEnd("Frutas"); // cierra los grupos 
// console.groupCollapsed("Frutas"); // es lo mismo que el console.group(), pero arranca cerrado, y se cierra de la misma manera
// let hora = "8:00 p. m.";
// console.log(hora);



// /* Funciones de temporizacion:
// - time() = inicia un temporizador
// - timeEnd() = Registra el valor actual de un temporizador 
// - timeLog() = Detiene un temporizador */

// // esto lo usamos dentro del codigo, pero a mi no me funciones
// console.time(); // empieza a contar el tiempo desde que escribimos esta funcion
// console.timeLog(); // muestra el tiempo total de console.time()
// console.timeEnd();

// // Ejemplo: 
// console.time(); 
// function sumar(num1, num2) {
//     document.write(num1 + num2);
//     console.timeLog();
// }
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);
// sumar(2,4);

// console.timeEnd();



// Modificar estilo del texto
// console.log("%cRancio", "color: #fff; background: black; padding: 20px 100px; border: 3px solid blue;"); // Al escribir en el principio del texto %c podemos cambiarlo en la siguiente linea como en el ejemplo




// /* A) Termino el primer semestre y cofla no sabe aprobara o no las materias, para lograrlo necesitara: contar con al menos el 90% de asistencia. 
// El promedio por materia debe ser de al menos 7 / 10.
// Debe tener al menos del 75% de los trabajos practicos entregados.
// Crear soluciones: 
// - Solicitar los datos y decirle si aprueba o no. 
// - Mostrar todo esto con colores representativos en consola (ej: no aprobar en rojo)
// - Todo esto estructurado como tabla */

// const materias = {
//     fisica: [90, 6, 4, "Fisica"],
//     matematicas: [84, 8, 2, "Matematicas"],
//     logica: [92, 8, 4, "Logica"],
//     quimica: [96, 8, 4, "Quimica"],
//     calculo: [91, 6, 3, "Calculo"],
//     programacion: [79, 7, 4, "Programacion"],
//     biologia: [75, 9, 2, "Biologia"],
//     bbdd: [98, 9, 1, "Bbdd"],
//     algebra: [100, 10, 4, "Algebra"]
// }

// const aprobo = () => {
//     for(materia in materias) {
//         let asistencias = materias[materia][0];
//         let promedio = materias[materia][1]
//         let trabajos = materias [materia][2]
//         console.log(`${materias[materia][3]}:`);
//         if(asistencias >= 90) {
//             console.log("%c   Asistencias en orden ", "color:green");
//         }
//         else {
//             console.log("%c   Falta de asitencias ", "color:red");
//         }
//         if (promedio >= 7) {
//             console.log('%c   Promedio en orden', "color:green")
//         }
//         else {
//             console.log('%c   Promedio desaprobado', "color:red")
//         }
//         if (trabajos >= 3) {
//             console.log('%c   Trabajos Practicos en orden', "color:green")
//         }
//         else {
//             console.log(`%c Faltan trabajos practicos`, "color:red")
//         }
//     }
// }
// aprobo();




// /* Cofla esta sufriendo un poco... ya que, a pesar de que cree contar con el 90% de asistencias y tener un promedio mayor a 7 / 10,
// no cree entregar el 75% de trabajos practicos entregados ya que necesita dividir las tareas que hara semanalmente, cofla debe,
// trabajar 8 horas por dia durante 2 semanas entre las cuales tiene que: 24 horas estudiar, 24 horas hacer trabajos practicos,
// 56 horas de trabajar y 8 horas de hacer las cosas de la casa
// Crear soluciones: 
// - Organizar las actividades diariamente 
// - Utilizar la consola para organizar todo. 
// - El tiempo por tarea no debe superar las 4 horas */ 

// let trabajo = "240 minutos de trabajo";
// let estudio = "100 minutos de estudio"; 
// let tp = "100 minutos hacer trabajos practicos";
// let homework = "30 minutos de cosas de la casa";
// let descanso = "10 minutos de descanso";

// console.log("TAREAS");
// for( i = 0; i < 14; i++) {
//     if(i == 0) {
//         console.groupCollapsed("semana 1")
//     }
//     console.groupCollapsed("dia " + (i + 1));
//     console.log(trabajo);
//     console.log(descanso);
//     console.log(estudio);
//     console.log(tp);
//     console.log(homework);
//     console.groupEnd();
//     if(i == 6) {
//             console.groupEnd();
//             console.groupCollapsed("semana 2")
//     }
// }

