// defino variable llamda nombre
var nombre = 'Alan'

//defino funcion que retorna el nombre en mayusculas
function imprimirNombreMayusculas(nombre){
    nombre= nombre.toUpperCase()
    console.log(nombre.toUpperCase())
}

//Una variable no puede llamarse del mismo modo pero sus atributos si
var nombreAlan = 'Alan'
var nombreCesar = 'Cesar'

//Si queremos poner mas atributos a una variable, utilizamos un objeto y este se definee como
// variable pero con llaves y separados por coma
//Objeto Alan
var Alan = {
    nombre: 'Alan',        //nombre es un atributo del objeto Alan
    apellido: 'Maranto',    //apellido es un atributo del objeto Alan
    edad: 24    //edad es un atributo del objeto "Alan"
}

//Objeto Cesar
var Cesar = {
    nombre: 'Cesar',        //nombre es un atributo del objeto Cesar
    apellido: 'Esquivel',    //apellido es un atributo del objeto Cesar
    edad: 31
}

//Ahora vamos a hacer que aparezca en la consola el atributo 'nombre de cada objeto

// Caso 1
function imprimirNombreMayusculas(nombre){
    nombre = nombre.toUpperCase()
        console.log(nombre)
}

//Si queremos llamar a un atributo escribimos "nombreDelObjeto.nombreDelAtributo"
//imprimirNombreMayusculas(Alan.nombre)
//imprimirNombreMayusculas(Cesar.apellido)

// Caso 2

function imprimirNombreM(nombre){
    console.log(nombre.toUpperCase())
}

//imprimirNombreM(Alan.nombre)

// caso 3

function imprimirNombreMayus(persona){
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreMayus(Alan)

// caso 4

function imprimirNombreEnMayus(nom){
    console.log(nom.nombre.toUpperCase())
}

imprimirNombreEnMayus(Cesar)

// 

/* Tambien podemos poner como parametro de una funcion a un atributo de un objeto, pero hay que tener en cuenta que el atributo
existe y cuando se invoque a la funcion debemos poner el nombre del objeto */

function imprimirNombreEM({ nombre }){
    console.log(nombre.toUpperCase())
}

imprimirNombreEM(Cesar)

// Defino un atributo que tiene comop valor 'Daniel'
imprimirNombreEM({ nombre: 'Daniel'})