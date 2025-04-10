//  Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares. Utilize obrigatoriamente a função prompt() para coletar os números.

console.log(`teste`);

function contarParesImpares() {
    let pares = 0;
    let impares = 0;
    
    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt(`Vamos verificar a quantidade de números pares e ímpares em uma lista de 10 números? Digite o ${i}º número inteiro:`));
        
        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    
    console.log(`Quantidade de números pares: ${pares}`);
    console.log(`Quantidade de números ímpares: ${impares}`);
    
    alert(`Quantidade de números pares: ${pares}\nQuantidade de números ímpares: ${impares}`);
}

contarParesImpares();