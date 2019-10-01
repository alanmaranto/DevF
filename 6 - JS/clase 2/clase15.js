// Do while

var contador = 0;

const marrana = () => Math.random() < 0.25;

do{
    contador++
}while(!marrana())

if(contador ===1){
    console.log(`Fui a ver si ya puso ${contador} vez al mes`)
}else{
    console.log(`puso ${contador} veces en el mes`);
}

