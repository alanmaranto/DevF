// console.log('Hello World')

// print('hello world')

// 

var nombre = 'Alan', apellido = 'Maranto'  // Declarar las variables que utilizamos para los metodos

// // console.log('Hola ' + nombre)

// // ejemplo 2

// var edad = 24

// edad = '24 años'

//  console.log('Hola ' + nombre + '' + apellido)
//  console.log('Tengo ' + edad )

// ejemplo 3

// edad += 1 

// var estatura = 163

// estatura = estatura - 2

var nombreEnMayusculas = nombre.toUpperCase() // cambio el string a mayusculas

var apellidoEnMinusculas = apellido.toLowerCase() // cambio el apellido a minusculas

var primeraLetraNombre = nombre.charAt(0); //separo la letra en la posicion cero del string 

var cantidadLetrasNombre = nombre.length //cuenta la cantidad de caracteres del string

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}` //concatena las variables

var str = nombre.substr(1,2) // substrae los caracteres en la posicion uno y dos del string

var decimal = 100.45

var totalDecimal = decimal *10

var totalRedondeado = Math.round(decimal) // redondea el numero quitando los decimales

var totalFixed = totalDecimal.toFixed(2) // Agrega los dos decimales al resultado pero como un string

var totalParse = parseFloat(totalFixed) // Transforma de un string a un decimal