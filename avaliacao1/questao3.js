// Faça um programa que, dado um conjunto de N números, determine o menor valor, o maior valor e a soma dos valores.

console.log(`teste`);

function analisarNumeros() {
    let n = parseInt(prompt("Vamos verificar o maior e menor números de uma lista, bem como sua soma? Quantos números maiores que zero você quer informar na lista?"));

    let primeiro = parseInt(prompt("Digite o 1º número:"));
    let menor = primeiro;
    let maior = primeiro;
    let soma = primeiro;
    
    for (let i = 2; i <= n; i++) {
        let numero = parseInt(prompt(`Digite o ${i}º número:`));
        
        if (numero < menor) {
            menor = numero;
        }
        
        if (numero > maior) {
            maior = numero;
        }
        
        soma += numero;
    }
    
    console.log(`Menor valor: ${menor}`);
    console.log(`Maior valor: ${maior}`);
    console.log(`Soma dos valores da lista: ${soma}`);
    
    alert(`Menor valor: ${menor}\nMaior valor: ${maior}\nSoma dos valores na lista: ${soma}`);
}

analisarNumeros();