// let cantAlumnosXclase= 0;
let clasesTomadas    = 0;
let valorPaseXuna    = 800;
let valorPaseXcuatro = 3000;
let valorPaseXocho   = 5600;

class Alumno {
    constructor(nombreAlumno, apellidoAlumno, tipoDePase) {
        this.nombreAlumno   = nombreAlumno;
        this.apellidoAlumno = apellidoAlumno;
        this.tipoDePase     = tipoDePase;        
    }
}

// function tomarAsistencia () {
//     let asistencia = prompt("Estuvo presente en clase?:")
//     if(asistencia == "si"){
//         let clasesTomadas = clasesTomadas + 1;
//         return clasesTomadas;
//     }else {
//         alert( Alumno(nombreAlumno) + " no estuvo presente")
//     }
// }

function crearAlumno () {
    let nombreAlumno = prompt("Ingrese el nombre del Alumno:");
    let apellidoAlumno = prompt("Ingrese el apellido del Alumno");
    let tipoDePase = Number(prompt("Ingrese qué pase adquirió (1-Clase Suelta, 2-Pack x 4, 3-Pack x 8):"));
        switch (tipoDePase) {
            case 1:
                tipoDePase = valorPaseXuna;
                break;
            case 2:
                tipoDePase = valorPaseXcuatro;
                break;
            case 3:
                tipoDePase = valorPaseXocho;
                break;
            default:
                alert("Ingrese un pase válido");
                console.log("El valor ingresado fue " + tipoDePase)
            break 
        }    
    let alumno = new Alumno(nombreAlumno, apellidoAlumno, tipoDePase, clasesTomadas);
    return alumno;
}

let alumno = crearAlumno();
let clasesDictadas = prompt("Clases dictadas este mes:");

// let alumnosPresentes = Number(prompt("¿Cuántos alumnos asistieron en total?"));


let i = 1; 
while (i <= clasesDictadas) {
    let asistencia = prompt("Estuvo presente?")
    if(asistencia == "si"){
        clasesTomadas = clasesTomadas + 1;
    }
    i++
}


// let sueldoProfesor = () => { return clasesTomadas * alumno.tipoDePase}

function sueldoProfesor () {
    let resultadoSueldo = 0;
    if (clasesTomadas%8 == 0) {
        resultadoSueldo = clasesTomadas * (alumno.tipoDePase / 8);
    }else if (clasesTomadas%4 == 0) {
        resultadoSueldo = clasesTomadas * (alumno.tipoDePase / 4);
    }else{
        resultadoSueldo = clasesTomadas * valorPaseXuna;
    }
    return resultadoSueldo;
}
/* if la cantidad de clases es mayor al pase que eligio */
console.log(alumno);
console.log("El alumno " + alumno.nombreAlumno + " " + alumno.apellidoAlumno + " asistió a " + clasesTomadas + " clases");
// sueldoProfesor();
console.log("Al profesor le corresponden " + sueldoProfesor() + " pesos");

console.log("Fin del programa")
/*
while de clasesDictadas { 
    preguntar si asistio

    if asistio? {
        sumar 1 al contador de asistencia
    }
}

funcion calcular ingresos {
    asistencia x valor
}*/