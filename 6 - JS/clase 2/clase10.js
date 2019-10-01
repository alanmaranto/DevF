var elkilian = {
    nombre: 'Kilian',
    dinero: 200000,
    afiliado: false,
}

var eldani = {
    nombre: 'Daniel',
    dinero: 1000000,
    afiliado: true,
}

var elabraham = {
    nombre: 'Abraham',
    dinero: 100000,
    afiliado: true,
}

const dineroNecesario = 100001
const esAfiliado = true

const dineroSuficiente = ({ dinero }) => dinero >= dineroNecesario
const siAfiliado = ({ afiliado }) => afiliado === esAfiliado

const banco = (persona) => {
    if (dineroSuficiente(persona) && siAfiliado(persona)){
        console.log(`${persona.nombre} puede depositar ${persona.dinero} pesos en Elektra`)
    }else 
        if(dineroSuficiente(persona) && !siAfiliado(persona)){
        console.log(`${persona.nombre} necesitas afiliarte a elektra para depositar tu dinero`)
    }else
        if(!dineroSuficiente(persona) && siAfiliado(persona)){
            console.log(`${persona.nombre} hay que ahorrarle compa Fierro`)
        }
    else{
        console.log(`${persona.nombre} que haces aqui?`)
    }
}

banco(elabraham)
banco(elkilian)
banco(eldani)