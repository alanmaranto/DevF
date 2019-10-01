// ARRays

/** Los arrays nos permiten agrupar o coleccionar ciertos tipos de datos, ya sea numeros, texto, objetos, funciones 
 * o una combinacion de estos y que posteriormente podemos escoger estos datos que estan ubicados en cierto orden.
 * Para representar un array:
 * var NombreDeVariable = []

 */

 var cesar = {
     nombre: 'Cesar',
     apellido: 'Esquivel',
     altura: 1.74,
 }

 var paco = {
    nombre: 'Paco',
    apellido: 'Martinez',
    altura: 1.80,
}

var fer = {
    nombre: 'Fer',
    apellido: 'Fernandez',
    altura: 1.70,
}

var personas = [ //Creamos la variable persona que contiene un array que contiene objetos
    cesar,
    paco,
    fer,
] 

for (i = 0; i < personas.length; i++ ){
    var persona = personas[i]
    console.log(`${persona.nombre} mide ${persona.altura} mts`)
}