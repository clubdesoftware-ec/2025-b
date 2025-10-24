// Declarar una clase
class Rectangulo {
    // member functions
    constructor(palabra1, palabra2) {
        this.ancho = palabra1;
        this.alto = palabra2;
        this.cantidad = 7;
    }

    // Method to calculate area
    obtenerArea() {
        return this.ancho * this.alto;
    }

    // Method to calculate perimeter
    obtenerPerimetro() {
        return 2 * (this.ancho + this.alto);
    }
}

// Example usage
// intanciar un objecto
let xy = 5
let z = 7
xy = 9
// rect es un objecto 
// objeto significa una variable que es un conjunto de variables y funciones
let rect = new Rectangulo(10, 5); // instanciar
rect.nueva = 34;
let cp = new Rectangulo(99, 66);

console.log("rect Area:", rect.obtenerArea()); // Output: Area: 50
console.log("cp area:", cp.obtenerArea());
console.log("cp perimetro:", cp.obtenerPerimetro());
console.log("rect Perimeter:", rect.obtenerPerimetro()); // Output: Perimeter: 30