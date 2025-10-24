# Problema: Sistema de Gestión de Estudiantes

Crea un programa que modele un sistema básico de gestión de estudiantes utilizando clases. El programa debe incluir lo siguiente:

1. Una clase llamada Estudiante que tenga las siguientes propiedades:

nombre (cadena de texto)
edad (número)
calificaciones (arreglo de números)

2. La clase debe incluir los siguientes métodos:

agregarCalificacion(calificacion): Agrega una calificación al arreglo de calificaciones.
calcularPromedio(): Calcula y devuelve el promedio de las calificaciones.
esMayorDeEdad(): Devuelve true si el estudiante tiene 18 años o más, de lo contrario, devuelve false.

3. Crea una clase llamada Grupo que represente un grupo de estudiantes. Esta clase debe incluir:

Una propiedad estudiantes (arreglo de objetos de tipo Estudiante).
Un método agregarEstudiante(estudiante) que agregue un estudiante al grupo.
Un método obtenerPromedioGrupo() que calcule y devuelva el promedio de calificaciones de todos los estudiantes en el grupo.

4. Escribe un programa que:

Cree varios objetos de tipo Estudiante con diferentes nombres, edades y calificaciones.
Agregue estos estudiantes a un objeto de tipo Grupo.
Calcule y muestre el promedio de calificaciones del grupo.
Determine si cada estudiante es mayor de edad.

## Instrucciones para correr
### Instalar jest
npm install --save-dev jest
### Correr
npx jest