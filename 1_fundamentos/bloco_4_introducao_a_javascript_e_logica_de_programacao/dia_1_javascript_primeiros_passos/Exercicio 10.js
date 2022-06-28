const custo = 10;
const valorVenda = 22;

const imposto = custo * 0.2;

const custoTotal = custo + imposto;

const lucro = valorVenda - custoTotal;

const testeNegativo = custo < 0 || valorVenda < 0;

if(testeNegativo == false){
    console.log(lucro)
}
else{
    console.log('ERRO: Valor inválido')
}