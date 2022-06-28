let numeros = [];
let divisao2 = [];

for (let index = 1; index < 26; index++) {
    numeros.push(index);
}


for (let index = 0; index < numeros.length; index++) {
    divisao2.push(numeros[index]/2);
    
}

console.log(divisao2);