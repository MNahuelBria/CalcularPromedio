

// funcion que genera aleatoriamente los numeros del vector.
const Numeros = () => {
    let Cantidad = prompt('ingrese cuanta cantidad de numeros quiere en el arreglo: ');
    let VectorNumeros = [];

    for(let i = 0; i < Cantidad; i++) {
        let NumeroRandom = Math.round(Math.random()* 100);
        VectorNumeros.push(NumeroRandom);
    }

    return VectorNumeros;
}


// funcion que calcula el promedio del arreglo de numeros pasado como parametro.
const CalcularPromedio = (numeros) => {
    let suma = 0;

    for(let valor = 0; valor < numeros.length; valor++) {
        suma += numeros[valor];
    }

    let Promedio = Math.round(suma / numeros.length);

    console.log('el promedio final es: ' + Promedio);
}

// ejecución por consola
let arreglo = Numeros();
console.log('el arreglo es:[ ' + arreglo + ']');
let PromedioFinal = CalcularPromedio(arreglo);