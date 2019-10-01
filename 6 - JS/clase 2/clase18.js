// RESUMEN DE LA CLASE : 'REDUCIR UN ARRAY A UN VALOR'
// - Tomaremos como referencia el codigo anterior de la clase. Pero esta vez se
//   agrego el atributo 'cantidadDeLibros' que tiene como valor cierto numero.
var fernando = {
  nombre:'Fernando',
  apellido:'Huaman',
  altura:1.68,
  cantidadDeLibros: 58
}

var gabriel = {
  nombre:'Gabriel',
  apellido:'Gonzalez',
  altura:1.81,
  cantidadDeLibros: 87
}

var homero = {
  nombre:'Homero',
  apellido:'Simpsoms',
  altura:1.5,
  cantidadDeLibros: 157
}

var italo = {
  nombre:'Italo',
  apellido:'Rodriguez',
  altura:1.9,
  cantidadDeLibros: 113
}

var personas = [fernando,gabriel,homero,italo]

// - Lo que se quiere en esta clase es sumar los valores de el atributo 'cantidadDeLibros'
//   de cada uno de los objetos.
// - Se puede hacer de dos formas:
//
// -----> PRIMERA FORMA
//        - Podemos declarar una variable 'acumulador' cuyo valor sea cero (0).
//        - Luego, a traves de un ciclo for recorrer los objetos que estan
//          contenidos en el array 'personas' y que en la variable 'acumulador'
//          se vaya sumando los valores del atributo 'cantidadDeLibros'. Ejemplo:
//
//             var acumulador = 0
//
//             for (var i=0 ; i<personas.length ; i++){
//                 acumulador += personas[i].cantidadDeLibros
//            }
//
// -----> SEGUNDA FORMA
//        - Para este caso nos apoyaremos de la funcion " reduce() ", que reduce
//          el array a un solo valor. Lo que queremos que haga en este caso seria
//          que reduzca el array personas (que esta compuesta por objetos) a
//          solamente los valores de el atributo 'cantidadDeLibros'.
//        - Luego queremos que recorra el nuevo array 'persona' y vaya sumando
//          los valores.
//        - Estructura de la funcion reduce()
//
//    ---> var Nombre_Variable = Nombre_Array.reduce(Funcion , Primer_Parametro)
//
//         Ejemplo:
//
          const reducer = (acumulador,{cantidadDeLibros}) => acumulador + cantidadDeLibros
//                         acumulador = 0
//
          var totalDeLibros = personas.reduce(reducer , 0)
//                                               |      |
//                                               |      |
//                                               |      |
//                                               V      V
//                                           Funcion  Primer Parametro de la funcion
//
          console.log(`En total todos tiene ${totalDeLibros} libros`)