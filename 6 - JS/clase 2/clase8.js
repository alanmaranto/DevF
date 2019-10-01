var miguel ={
    nombre: 'Mike',
    hobbie: 'Codear',
    edad: 30,
}

var alan = {
    nombre: 'Alan',
    hobbie: 'musica',
    edad:24,
}

//Parametros como referencia o como valor

function parametroComoReferencia(persona){
    persona.edad = persona.edad +1
    console.log(persona.edad)
}

parametroComoReferencia(alan)

//En este casp, el parametro 'persona' recibe el nombre de un objeto, dentro de la funcion el atributo 'edad' que pertenece a cierto objeto sera alterado
//dentro de la funcion como fuera de la funcion, es decir, tambien se alterara el objeto.

//Parametro como valor
function parametroComoValor(edad){
    edad = edad +1
    console.log(edad)
}

// parametroComoValor(alan)

//En este caso, el parametro 'edad' va a recibirt el valor del atributo de un objeto por lo que a pesar de que se altere el valor, no se alterara el objeto

// Caso Especial  Spread Operators (...)
/* Si queremos crear un nuevo objeto y que tenga los mismos atributos que el original pero alterando ciertos valores, lo que se hace es retornar ('return') dentro
de la funcion el desglosamiento del objeto
Ekemplo:
return {
    ...persona     ----> Esto desglosa el objeto persona
    edad: persona.edad +1      ----> Aqui estamos alterandp el valor del atributo 'edad'
} */ 

//OJO: El Spread Operator crea un nuevo objeto a partir del objeto original y tambien se le puede añadir nuevos atributos
// Ejemplo:
/* return{
    ...persona,
    edad: persona.edad +1,
    sexo: 'Masculino'   -----> Agregamos el atributo 'sexo'
}
    */

function cumple(persona){
    return {
        ...persona,
        edad: persona.edad +1,
        sexo: 'Masculino'
    }
}

var alanCumple = cumple(alan)