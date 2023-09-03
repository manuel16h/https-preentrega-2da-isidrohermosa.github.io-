//Isidro Manuel HERMOSA

/*simulador basico de estado de cursada de cada alumno de la materia JavaScript, 
basandose en dos parciales, un integrador y la asistencia minima de 10 para la aprobacion*/

alert("Nuevo Sitema de notas de Alumnos de JavaScript")

let num = 0;  //para ordenar los alumnos al imprimir por consola

//objeto de datos sobre cada nota de alumnos
class DatoAlumno {

    constructor(alumno, nota1, nota2, integrador, asistencia) {
        this.alumno = alumno;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.integrador = integrador;
        this.asistencia = asistencia;
    }

    //estado de cursada
    resultado() {
        let promedioDeNotas = Math.round((this.nota1 + this.nota2 + this.integrador) / 3);
        num += 1;

        if (promedioDeNotas >= 6 && this.asistencia >= 11) {
            return `${num}) ${this.alumno} \n NOTAS:\n Primer nota: ${this.nota1}\n Segunda nota: ${this.nota2}\n Integrador: ${this.integrador}\n Promedio: ${promedioDeNotas} \n Asistencia: ${this.asistencia} \n APROBADO\n \n`;
        }

        else {
            return `${num}) ${this.alumno} \n NOTAS:\n Primer nota: ${this.nota1}\n Segunda nota: ${this.nota2}\n Integrador: ${this.integrador}\n Promedio: ${promedioDeNotas}\n Asistencia: ${this.asistencia} \n DESAPROBADO, !DEBERÁ RENDIR EL EXAMEN FINAL! \n \n`;
        }
    }

}

//Agregando personas a lista/ arreglo
class ListaDeAlumnos {
    constructor() {
        this.alumnadoss = [];
    }

    agregar(alumno) {
        this.alumnadoss.push(alumno);
    }

    imprimir() {
        let promedio = "";

        this.alumnadoss.forEach(alumno => {
            promedio = promedio + alumno.resultado() + "\n";
        })

        alert(promedio);
    }
}

//Ingresar datos de notas
const alumnadoss = new ListaDeAlumnos();

do {
    let alumno = prompt("Nombre y Apellido");
    let nota1 = Number(prompt("Primera nota"));
    let nota2 = Number(prompt("Segunda Nota"));
    let integrador = Number(prompt("Trabajo Integrador"));
    let asistencia = Number(prompt("Presentes (de un tatoal de 20 clases)"));

    if ((alumno !== "") && (nota1 >= 0 && nota1 <= 10) && (nota2 >= 0 && nota2 <= 10) && (integrador >= 0 && integrador <= 10) && (asistencia >= 0 && asistencia <= 20)) {
        const nuevoAlumno = new DatoAlumno(alumno, nota1, nota2, integrador, asistencia);
        alumnadoss.agregar(nuevoAlumno);

    } 
    
    else {
        alert("DATOS INVALIDOS, intentar nuevamente");
        break; //finaliza en caso de error
    }

    continuar = confirm("Ingresar nuevo alumno"); //si presiona cancelar, el Do While termina

} while (continuar);

//imprimir en consola
alumnadoss.imprimir();