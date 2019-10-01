// crear objeto que ocntenga 4 propiedades: nombre,apellido,edad y peso

// la consola les devuelva el nombre y cuanto pesa 

var alan = {
    nombre: 'alan',
    apellido: 'maranto',
    edad: 24,
    peso: 75,
}

console.log(`Al inicio del año ${alan.nombre} pesa ${alan.peso} kg`)

// definan los dias del año en una variable
const DiasA = 365

// definan una variable que sea el incremento de peso (este solo puede estar entre 0 y 1)
const incrementoPeso = 0.2

// Crear una funcion que aumente de peso a la persona utilizando arrow function 
const aumentarPeso = persona => persona.peso += incrementoPeso

// const aumentarPeso = ({ peso }) => peso += incrementoPeso

// Crear una funcion que adelgace de peso a la persona utilizando arrow function
const adelgazar = ({ peso }) => alan.peso -= incrementoPeso

for (var i = 1; i <= DiasA; i++){
    var random = Math.random()
    if (random < 0.25){
        adelgazar(alan)
    }else if (random < 0.5){
        aumentarPeso(alan)
    }
}

// imprima en consola el peso al final de año
console.log(`Al final del año ${alan.nombre} pesa ${alan.peso.toFixed(2)} kg`)