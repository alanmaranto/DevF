var multiplicarPor = 1

const tablaDeMultiplicar = (numero) => {
    for (i = 0; i <= 100; i++){
    var resultado = numero * i;
        console.log(`${numero} * ${i} = ${resultado}`)
    }
}

tablaDeMultiplicar(multiplicarPor)