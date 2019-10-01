// RESUMEN DE LA CLASE: 'PROTOTIPOS DE CLASES'
// - Lo que se quiere en esta clase es que se defina un prototipo 'Persona' y lo
//   que queremos que haga es que salude y diga su nombre y apellido.
//
// - OJO: Para definir un prototipo se debe definir, primero , una funcion.
//
// - Ya que tenemos al prototipo 'Persona' . La funcion va a recibir dos parametros
//   que va a requerir o inicializar una nueva persona como prototipo de una clase
//
// - Lo que se va a ejecutar dentro de la funcion o prototipo 'Persona' es tambien
//   llamado 'Constructor' ,lo que nos ayudara a definir mas adelante los atributos
//   del objeto a crear.
//
// - Ahora para crear nuevos objetos se utiliza el termino 'new'. Su estructura
//   es la siguiente:
//      ----> var Nombre_Objeto = new Nombre_Funcion_o_Prototipo(Parametros)
//
// - Ahora el termino 'this' hace referencia o es reemplazado por el nuevo objeto
//   que queremos crear . Por ejemplo, si queremos crear un objeto 'fernando' y
//   tenemos un prototipo que contiene el atributo 'nombre'. Entonces,
//   'this.nombre' seria igual a 'fernando.nombre'.

function Persona(nombre,apellido) {
  this.nombre = nombre
  this.apellido = apellido
}

// - Si queremos que el prototipo 'Persona' tenga una funcion para saludar
//   podemos escribir la siguiente estructura.
//   ----> Nombre_del_Prototipo.prototype.Nombre_de_Funcion = function (){
//         }
//
//   Con esto queremos decir que va a existir un atributo (dentro del prototipo
//   que tiene cierto nombre ) que tiene el mismo nombre que la funcion a ejecutar
//
Persona.prototype.saludar = function () { // 'saludar' es ahora un atributo del
                                          // prototipo 'persona'                                           
  console.log(`Hola me llamo ${this.nombre}${this.apellido}`)
}

var fernando = new Persona('Fernando','Huaman')
var erika = new Persona ('Erika','Luna')
var arturo = new Persona ('Arturo','Martinez')

fernando.saludar()
erika.saludar()
arturo.saludar()
