//  Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que: 
// a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00; 
// b. Em 1996 recebeu aumento de 0,15% sobre seu salário inicial; 
// c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao dobro do percentual do ano anterior. Faça um programa que determine o salário atual desse funcionário. 
// d. Após concluir isto, faça uma segunda versão do seu código que permita ao usuário informar o salário inicial do funcionário. Utilize obrigatoriamentea função prompt() para coletar o salário inicial.

console.log(`teste`);

function calcularSalarioAtual() {
    let salario = 1000.00;
    let anoInicial = 1995;
    let anoAtual = 2025;
    let percentual = 0.0015;

    salario = salario * (1 + percentual);

    for (let ano = 1997; ano <= anoAtual; ano++) {
        percentual *= 2;
        salario = salario * (1 + percentual);
    }
    
    console.log(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
    alert(`Salário atual em ${anoAtual}: R$ ${salario.toFixed(2)}`);
}

calcularSalarioAtual();