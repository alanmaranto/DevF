let signo = prompt("Ingresa tu signo")

switch (signo){
    case'aries':
        console.log('te vas a gastar mas dinero de lo que piensas en tu boda')
    break

    case'escorpion':
    case'escorpión':
        console.log('Te vas a comprar una mac en estos dias')
    break

    case'libra':
        console.log('Vas a recibir un chingo de dinero para entrar a cinta roja')
    break
    
    case'tauro':
        console.log('Te van a contratar en nowports')
    break

    case'piscis':
        console.log('Vas a conseguir un trabajo pronto')
    break
    default:
        console.log('el texto que ingresaste no es valido')
    break
}