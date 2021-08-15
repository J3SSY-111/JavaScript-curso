// let numeroDeEstudiantes = prompt("Cuantos estudiantes son?")
// let estudiantes = [];
// for(i = 0; i < numeroDeEstudiantes; i++) {
//     estudiantes[i] = [prompt("Nombre de estudiante " + (i + 1)), 0];
// }
// const asistencia = (nombre, presente) => {
//     let presencia = prompt(nombre).toUpperCase();
//     if(presencia == "P") {
//         estudiantes[presente][1]++;
//     }
// }
// for(i = 0; i < 5; i++) {
//     for(estudiante in estudiantes) {
//         asistencia(estudiantes[estudiante][0], estudiante)
//     }
// }

// for(estudiante in estudiantes) {
//     let resultado = `${estudiantes[estudiante][0]} <br>
//     Presentes: <b>${estudiantes[estudiante][1]}</b><br> 
//     Ausencias: <b>${5 - parseInt(estudiantes[estudiante][1])}</b>`;
//     if(5 - estudiantes[estudiante][1] >= 1) {
//         resultado+= "<b style= 'color: red' > HA SIDO REPROBADO POR AUSENCIAS</b><br><br>";
//     } else {
//         resultado+= "<br><br>";
//     }
//     document.write(resultado);
// } 


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




// let numeroDeAlumnos = prompt("Cantidad de estudiantes:");
// let alumnosTotales = [];
// for (i = 0; i < numeroDeAlumnos; i++) {
//     alumnosTotales[i] = [prompt("Nombre de estudiante " + (i + 1)), 0];
// }

// const asistencia = (nombre, p) => {
//     let presencia = prompt(nombre).toUpperCase();
//     if (presencia == "P") {
//         alumnosTotales[p][1]++;
//     }
// }

// for (i = 0; i < 30; i++) {
//     for (alumno in alumnosTotales) {
//         asistencia(alumnosTotales[alumno][0], alumno);
//     }
// }

// for (alumno in alumnosTotales) {
//     resultado = `${parseInt(alumno) + 1}. ${alumnosTotales[alumno][0]}: <br>
//     Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
//     Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b> `;
//     if (30 - alumnosTotales[alumno][1] > 14) {
//         resultado+= "<b style = 'color: red' >HA SIDO REPROBADO POR AUSENCIAS</b> <br><br>";
//     } 
//     else {
//         resultado+= "<br></br>";
//     }
//     document.write(resultado);
// }
