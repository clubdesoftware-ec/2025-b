// declarar o implementar
function max2(á, b) {
    if (á > b) {
        return á
    } else {
        return b
    }
}

            // 0,  1 , 2  ,  3  , 4
let numeros = [2, 342, 123, 5503, 1]; // array, list, vector
let mayor_hasta_ahora = numeros[0];

// llamar una funcion
max2(2, 342);

for (let i = 0; i < numeros.length; i++) {
    let num = numeros[i];
    // llamando
    mayor_hasta_ahora = max2(mayor_hasta_ahora, num);
}

console.log(mayor_hasta_ahora);