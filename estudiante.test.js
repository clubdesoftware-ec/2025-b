const { Estudiante, Grupo } = require('./estudiante'); // Asegúrate de que las clases estén exportadas correctamente

describe('Clase Estudiante', () => {
    test('Debe crear un estudiante con nombre, edad y calificaciones vacías', () => {
        const estudiante = new Estudiante('Juan', 20);
        expect(estudiante.nombre).toBe('Juan');
        expect(estudiante.edad).toBe(20);
        expect(estudiante.calificaciones).toEqual([]);
    });

    test('Debe agregar una calificación correctamente', () => {
        const estudiante = new Estudiante('Ana', 18);
        estudiante.agregarCalificacion(90);
        expect(estudiante.calificaciones).toContain(90);
    });

    test('Debe calcular el promedio de calificaciones', () => {
        const estudiante = new Estudiante('Luis', 22);
        estudiante.agregarCalificacion(80);
        estudiante.agregarCalificacion(100);
        expect(estudiante.calcularPromedio()).toBe(90);
    });

    test('Debe determinar si el estudiante es mayor de edad', () => {
        const estudiante = new Estudiante('Carlos', 17);
        expect(estudiante.esMayorDeEdad()).toBe(false);

        const estudianteMayor = new Estudiante('Maria', 19);
        expect(estudianteMayor.esMayorDeEdad()).toBe(true);
    });
});

describe('Clase Grupo', () => {
    test('Debe agregar estudiantes al grupo', () => {
        const grupo = new Grupo();
        const estudiante = new Estudiante('Sofia', 21);
        grupo.agregarEstudiante(estudiante);
        expect(grupo.estudiantes).toContain(estudiante);
    });

    test('Debe calcular el promedio de calificaciones del grupo', () => {
        const grupo = new Grupo();
        const estudiante1 = new Estudiante('Pedro', 20);
        estudiante1.agregarCalificacion(85);
        estudiante1.agregarCalificacion(95);

        const estudiante2 = new Estudiante('Lucia', 19);
        estudiante2.agregarCalificacion(70);
        estudiante2.agregarCalificacion(80);

        grupo.agregarEstudiante(estudiante1);
        grupo.agregarEstudiante(estudiante2);

        expect(grupo.obtenerPromedioGrupo()).toBe(82.5);
    });
});