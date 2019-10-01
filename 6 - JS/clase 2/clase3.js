// Precio Cerveza
var precioMinerva = 142.48

//Hacemos fiesta y necesitamos comprar 3 six
// var totalMinerva = precioMinerva *3

// Redondeamos los centavos
var totalMinerva = Math.round(precioMinerva*3)

// retrona el valor como cadena de texto y no como un numero 
var minervaFixed = precioMinerva.toFixed(2)

//Si queremos que vuelva a ser un numero y que mantenga los decimales
var minervaFloat = parseFloat(minervaFixed)

