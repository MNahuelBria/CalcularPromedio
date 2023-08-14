// Creando la funcion CalcularPromedio para obtener el promedio de un arreglo de numeros.
const CalcularPromedio = (numeros) => {
    
    // inicializar la variable suma en cero.
    let suma = 0;
    
    // generamos un ciclo iterativo que vaya iterando en cada vuelta un numero distinto.
    for (let i; i < numeros.length; i++) {
        // sumar cada numero en la variable suma.
        suma += numeros[i]
    }

    // crear la constante promedio.
    const promedio = suma / numeros.length;

    // retornar el promedio para ser utilizado fuera de la funcion.
    return promedio;
}

// generamos el arreglo de numeros que va a utilizarse para calcular el promedio.
let ArregloNumeros = [15, 28, 37, 72, 104, 9, 215];
// invocamos a la funcion CalcularPromedio y guardamos su valor en una constante PromedioCalculado
const PromedioCalculado = CalcularPromedio(ArregloNumeros);

// retornamos el valor del promedio por pantalla.
console.log("El promedio de los numeros del arreglo es: " + PromedioCalculado);