var alan = {
    nombre: 'Alan',
    apellido: 'Maranto',
    edad:18,
    ingeniero: false,
    musico: true,
    alpinista: false,
    vegano: false,
    lalala: false,
}
/* (if) (else) Si la condicion en un 'if' se cumple (true), entonces se ejecuta el codigo que esta entre llaves del condicional 'if'*,
    caso contrario, entra en accion la condicion 'else' (sino o de lo contrario) y se ejecuta el codigo dentro de las llaves del 'else' 

    */

    function imprimirSkills(persona){
        console.log(`${persona.nombre} es: `)
        if (persona.ingeniero){
            console.log("Es ingeniero")
        }else {
            console.log("No es ingeniero")
        }

        if (persona.musico){
            console.log("Es musico")
        } else{
            console.log("No es musico")
        }

        if (persona.alpinista){
            console.log("es alpinista")
        } else {
            console.log("No es alpinista")
        }

        if (persona.vegano){
            console.log("es vegana")
        } else{
            console.log("no es vegano")
        }

        if (persona.lalala){
            console.log("es lalala fan")
        } else{
            console.log("no es fan de lalala")
        }
    }

    imprimirSkills(alan)

    // Funciones que retornan valores

    const MayorDeEdad = 17 // Es una variable de tipo constante que dice que su valor no se puede alterar

    // function esMayorDeEdad(persona){
    //     return (
    //         persona.edad >= MayorDeEdad
    //     )
    // }

    // function imprimirSiEsMayorDeEdad(persona){
    //     if(esMayorDeEdad(persona)){
    //         console.log(`${persona.nombre} es mayor de edad.`)
    //     }else {
    //         console.log(`${persona.nombre} es menor de edad.`)
    //     }
    // }

    // Misma funcion utilizando Arrow Function

    /** Para reducir el uso de caracteres de una funcion se puede utilizar arrow function. Solo intercambiamos la palabra function y ponemos
     *'=>' despues de los parametros. Por jemplo:

     const esMayorDeEdad = (persona) => {
        return (
            persona.edad >= MayorDeEdad
        )
     }

     Se puede reducir un poco mas quitando el return

     const esMayorDeEdad = persona => persona.edad >= MayorDeEdad
     */

    /**  
     * Si declaramos como nombre de parametro a un objeto y que ese nombre sea el mismo que el del atributo. Entonces. Ejemplo:
    */

    const esMayorDeEdad = ({ edad }) => edad >= MayorDeEdad

    function imprimirSiEsMayorDeEdad(persona){
        if(esMayorDeEdad(persona)){
            console.log(`${persona.nombre} es mayor de edad`)
        }else{
            console.log(`${persona.nombre} es menor de edad`)
        }
    }


    // Ejemplo continuacion de Arrow Functions
    const profesion = ({ ingeniero }) => ingeniero === true

    const acceso = (persona) => {
        if(esMayorDeEdad(persona) && profesion(persona)){
            console.log(`${persona.nombre} Acceso Permitido `)
        }else{
            if(!esMayorDeEdad(persona)){
                console.log('El acceso se deniega por la edad')
            }if(!profesion(persona)){
                console.log('El acceso se deniega porque no es ingeniero')
            }
        }
    }



