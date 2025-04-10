// Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido. Utilize obrigatoriamente a função prompt() para coletar o RAIO.

console.log(`teste`);

function calcularCirculo() {
    let raio = parseFloat(prompt("Digite o raio do círculo (em unidades, maior que zero):"));

    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log(`Área do círculo: ${area.toFixed(2)} unidades²`);
    console.log(`Perímetro do círculo: ${perimetro.toFixed(2)} unidades`);
    alert(`Área do círculo: ${area.toFixed(2)} unidades²\nPerímetro do círculo: ${perimetro.toFixed(2)} unidades`);
}

calcularCirculo();