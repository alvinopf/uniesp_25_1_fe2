// Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos pelo usuário. Utilize obrigatoriamente a função prompt() para coletar os valores necessários.
// Use a fórmula: M = C * (1+i) 
// Onde: 
// ▪ C = Capital inicial investido 
// ▪ i = Taxa de juros, em percentual 
// ▪ t = Tempo do investimento, em meses 
// Exiba o resultado com duas casas decimais.

console.log(`teste`);

function calcularMontante() {

    let C = parseFloat(prompt("Digite o capital inicial (em reais, acima de 0):"));
    let i = parseFloat(prompt("Digite a taxa de juros mensal (em %, acima de 0):"));
    let t = parseInt(prompt("Digite o tempo em meses (acima de 0):"));

    i = i / 100;

    let montante = C * ((1 + i) ** t);

    console.log(`Montante após ${t} meses: R$ ${montante.toFixed(2)}`);
    alert(`Montante após ${t} meses: R$ ${montante.toFixed(2)}`);
}

calcularMontante();