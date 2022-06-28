let salarioBruto = 5000;

const inss1 = salarioBruto * 0.08;
const inss2 = salarioBruto * 0.09;
const inss3 = salarioBruto * 0.11;
const inss4 = salarioBruto - 570.88;

let salarioPosInss

if (salarioBruto <= 1556.94){
    salarioPosInss = salarioBruto - inss1; 
    
    console.log('Salário após o INSS:', salarioPosInss)
}

else if (salarioBruto <= 2594.92){
    salarioPosInss = salarioBruto - inss2; 
    
    console.log('Salário após o INSS:', salarioPosInss)
}
else if (salarioBruto <= 5189.82){
    salarioPosInss = salarioBruto - inss3; 
    
    console.log('Salário após o INSS:', salarioPosInss)
}
else {
    salarioPosInss = inss4; console.log('Salário após o INSS:', salarioPosInss)
}

const Ir1 = 0;
const Ir2 = (0.075 * salarioPosInss) - 142.8;
const Ir3 = (0.15 * salarioPosInss) - 354.8;
const Ir4 = (0.225 * salarioPosInss) - 636.13;
const Ir5 = (0.275 * salarioPosInss) - 869.36;

let salarioPosIr

if(salarioPosInss <= 1903.98){
    salarioPosIr = salarioPosInss - Ir1; console.log('Salário após o Imposto de renda:', salarioPosIr)
}

else if (salarioPosInss <= 2826.55) {
    salarioPosIr = salarioPosInss - Ir2; console.log('Salário após o Imposto de renda:', salarioPosIr)
}

else if (salarioPosInss <= 3751.05) {
    salarioPosIr = salarioPosInss - Ir3; console.log('Salário após o Imposto de renda:', salarioPosIr)
}

else if (salarioPosInss <= 4664.68) {
    salarioPosIr = salarioPosInss - Ir4; console.log('Salário após o Imposto de renda:', salarioPosIr)
}

else{
    salarioPosIr = salarioPosInss - Ir5; console.log('Salário após o Imposto de renda:', salarioPosIr)
}

