const alumnos = [];
let sumar = 0;
let cantidadAlumnos = 0;

do {
    const alumno = {};

    alumno.nombre = prompt("Ingrese el nombre del alumno:");
    alumno.edad = Number(prompt("Ingrese la edad del alumno:"));
    alumno.materia = prompt("Ingrese la materia del alumno:");
    alumno.nota = Number(prompt("Ingrese la nota del alumno:"));
    alumno.aprobado = alumno.nota >= 6;

    sumar = sumar + alumno.nota;
    cantidadAlumnos++;

    alumnos.push(alumno);

    const continuar = prompt("¿Desea ingresar otro alumno? (Sí o No)").toLowerCase();

    if (continuar !== "si") {
        break; // Salir del bucle si la respuesta no es "si"
    }
} while (true); // Bucle infinito, se rompe con la instrucción 'break'

console.log("Información de los alumnos ingresada:");
for (const alumno of alumnos) {
    console.log("Nombre del alumno: " + alumno.nombre);
    console.log("Edad del alumno: " + alumno.edad);
    console.log("Materia: " + alumno.materia);
    console.log("Nota: " + alumno.nota);
    console.log("Aprobado: " + (alumno.aprobado ? "Sí" : "No"));
}


// Método de búsqueda por nombre
const nombreBuscado = prompt("Ingrese el nombre a buscar:");
const alumnosFiltrados = alumnos.filter(alumno => alumno.nombre === nombreBuscado);

if (alumnosFiltrados.length > 0) {
    console.log(`Resultados de la búsqueda para "${nombreBuscado}":`);
    for (const alumno of alumnosFiltrados) {
        console.log("Nombre del alumno: " + alumno.nombre);
        console.log("Edad del alumno: " + alumno.edad);
        console.log("Materia: " + alumno.materia);
        console.log("Nota: " + alumno.nota);
        console.log("Aprobado: " + (alumno.aprobado ? "Sí" : "No"));
    }
} else {
    console.log(`No se encontraron alumnos con el nombre "${nombreBuscado}".`);
}

 
function CalcularPromedioTotal (suma, cantidad){
    let promedio = suma / cantidad;
    return promedio;

}
let resultado = CalcularPromedioTotal(sumar, 5);

alert(`El promedio total de notas es:  ${resultado}`);

// Falta terminar
