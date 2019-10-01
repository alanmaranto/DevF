var persona = {
    nombre: 'Alan',
    apellido: 'Maranto',
    edad:18,
    peso: 75,
}

console.log(`Al inicio de año ${persona.nombre} pesa ${persona.peso} kg`)

const DiasA = 365
const incrementoPeso = 0.2

const aumentarPeso = persona => persona.peso += incrementoPeso
const adelgazar = persona => persona.peso -=incrementoPeso
const comeDemasiado = () => Math.random() < 0.6
const hacerDeporte = () => Math.random() < 0.7
var dia = 0
const meta = persona.peso-3

while (persona.peso > meta) {
    if(comeDemasiado()){
        aumentarPeso(persona)
    }if(hacerDeporte()){
        adelgazar(persona)
    }
    dia += 1
}

console.log(`Pasaron ${dia} dias hasta que ${persona.nombre} adelgazo 3 kilos`)