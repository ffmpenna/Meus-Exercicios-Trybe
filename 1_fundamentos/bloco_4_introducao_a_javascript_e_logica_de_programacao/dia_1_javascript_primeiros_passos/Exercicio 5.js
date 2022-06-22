const alfa = -10;
const beta = 30;
const teta = 120;

let somaDosAngulos = alfa+beta+teta;
let anguloNegativo = alfa < 0 || beta < 0 || teta < 0;

if (anguloNegativo == true){
    console.log('ERRO: Ângulo inválido')
}
else{
    if(somaDosAngulos == 180){
        console.log('true')
    }
    else{
        console.log('false')
    }
}
