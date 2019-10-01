// Alcance de  una funcion

var nombre = 'Daniel'

// 
function Imprimir_Nombre_Mayusculas(){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

/* En este caso, como a la funcion 'Imprimir_Nombre_Masyuculas no se definio ningun parametro, 
entonces, la variable 'nombre' es de tipo variable de alcance global por lo que el valor de esta variable se modificará
dentro de la función. A esto se le llama 'Side Effect' (efecto de lado o daño colateral) */


// 2do caso

function imprimirNombreMayusculas (nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

/* En este caso, a la funcion 'imprimirNombreMayuculas' se le definió un parametro 'nombre' (que no importa 
    si se llama igual a la variable que declaramos arriba). El valor de la variable global 'nombre' no se cambiará
    dentro de la funcion ya que se le añadió un parametro a la misma funcion para redundar */

//3er caso Variable Local
// Las variables locales son las que han sido creadas dentro de una funcion o funcion anidada(una funcion dentro de otra)
function saludo() {
    var texto = 'Hola mundo'
    console.log(texto)
}


//Variable local con funciones anidadas
function saludo(){
    var texto = 'Hola mundo';

    function mensaje(){
        var texto = 'texto modificado'
        console.log(texto)
    }
    mensaje()
}
saludo()