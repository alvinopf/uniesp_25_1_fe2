// TED 04

console.log("teste")

// Crie uma função chamada calcularTotal que receba:
// • O preço unitário de um produto.
// • A quantidade comprada.

function calcularTotal(preco,quantidadeComprada) {
    return preco*quantidadeComprada;
}

// Calcule o valor total da compra.
// OBS: Use prompt() para ler os dados do usuário (preço e quantidade).

preco = parseFloat(prompt('Digite o preço do produto:'))
quantidadeComprada = parseInt(prompt('Digite a quantidade que quer comprar:'))
valorTotal = calcularTotal(preco,quantidadeComprada);
console.log(valorTotal);

// Crie outra função chamada aplicarDesconto que receba o valor total e retorne o valor com desconto, conforme a regra:
// • Compras acima de R$ 100,00 → 10% de desconto
// • Compras até R$ 100,00 → sem desconto

function aplicarDesconto(valorTotal) {
    return valorTotal - (valorTotal * 0.1);
}

let valorComDesconto = 0; 
if (valorTotal > 100) {
    valorComDesconto = aplicarDesconto(valorTotal);
    console.log("Você recebeu 10% de desconto, logo, pagará: " + valorComDesconto);
} else {
    console.log("Você não tem direito à descontos, logo, pagará: " + valorTotal);
}

// Adicione uma função exibirResumo() que formate e exiba um resumo final da compra.
// • Valor total antes do desconto.
// • Valor final com o desconto aplicado.

function exibirResumo() {
    console.log(
        "Resumo da compra:\n" +
        "Você comprou " + quantidadeComprada + " unidades do produto, que custam R$" + preco + " reais cada.\n" + " • Valor total antes do desconto: " + valorTotal + "\n • Valor final com o desconto aplicado: " + valorComDesconto);
}

exibirResumo();