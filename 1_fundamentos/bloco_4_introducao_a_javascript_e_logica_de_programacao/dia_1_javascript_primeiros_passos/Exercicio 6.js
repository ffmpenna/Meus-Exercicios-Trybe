let entradaPeca = 'Peão'

let peca = entradaPeca.toLowerCase();

if (peca == 'cavalo'){
    console.log('Se movimenta em L.')
}

else if (peca == 'bispo'){
    console.log('Se movimenta na diagonal.')
}

else if(peca=='torre'){
    console.log('Se movimenta em linha reta.')

}
else if(peca=='rei'){
    console.log('Se movimenta em todas as direções (uma casa)')
   
}
else if(peca=='rainha'){
    console.log('Se movimenta em todas as direções')
  
}
else if(peca=='peão'){
    console.log('Se movimenta apenas uma casa a sua frente')

}
else{
    console.log('ERRO: Nome de peça inválida')
}