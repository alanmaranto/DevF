 // Ejemplo de objetos

 var persona = {
     nombre: 'Marisol',
     apellido: 'Mar'
 };

 // Accedemos a mas de un atributp de un objeto

 function nombreEnMayusculas({ nombre, apellido }){
     console.log(nombre.toUpperCase());
     console.log(apellido.toLowerCase());
 }

 nombreEnMayusculas(persona)


 // Destructuración de Objetos

var miguel ={
    nombre: 'Mike',
    hobbie: 'Codear',
}

var alan = {
    nombre: 'Alan',
    hobbie: 'musica',
}
function imprimirNombre(persona){
    var nombre = persona.nombre
    console.log(apellido.toLowerCase())
    console.log(nombre.toUpperCase())
}

/* Antes podiamos declarar dentro de la funcion que tenia como parametro a 'persona', una variable cuyo nombre era igual a uno
de los atributos del objeto*/

//    var nombre = persona.nombre
// nombre de variable = Nombre del atributo del objeto

/* Pero ahora en ECMA6, si la variable que se va a declarar tiene el mismo nombre que el nombre del atributo
 que queremos extraer de cierto objeto,
entonces lo podemos expresar asi*/

function imprimirNombre(persona) {
    var {nombre} = persona
    // var nombre = persona.nombre   -> Esto es lo mismo que lo de la linea 45
    //Esto quiere decir que quiero declarar una variable 'nombre' que cuyo valor quiero que me extraiga el atributo 'nombre' del objeto 'persona'
    console.log(nombre.toUpperCase())
}

//Invocamos la funcion desde la consola
imprimirNombre(alan)
imprimirNombre(miguel)

//Cambiamos el atributo nombre desde la consola por cualquier otr nombre
imprimirNombre({ nombre: 'CualquierOtroNombre'})