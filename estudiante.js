class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.calificaciones = []
    }
    agregarCalificacion(calificacion) {
        this.calificaciones.push(calificacion);
    }
    calcularPromedio() {
        let suma = 0;
        for (let i = 0; i < this.calificaciones.length; i++) {
        // dentro de for
        }
    }
}

module.exports = { Estudiante };