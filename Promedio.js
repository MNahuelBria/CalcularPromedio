const CalcularPromedio = (numeros) => {
    
    let suma = 0;

    for (let i; i < numeros.length; i++) {
        suma += numeros[i]
    }

    const promedio = suma / numeros.length;

    return promedio;
}

let ArregloNumeros = [15, 28, 37, 72, 104, 9, 215];
let PromedioCalculado = CalcularPromedio(ArregloNumeros);

console.log("El promedio de los numeros del arreglo es: " + PromedioCalculado);