const CalcularPromedio = (numeros) => {
    
    let suma = 0;

    for (let i; i < numeros.length; i++) {
        suma += numeros[i]
    }

    const promedio = suma / numeros.length;

}