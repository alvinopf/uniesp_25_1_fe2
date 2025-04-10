// Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa anual de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a população do país B, mantidas as taxas de crescimento.

console.log(`teste`);

function calcularAnos() {
    let populacaoA = 80000;
    let populacaoB = 200000;
    let taxaA = 0.03; // 3%
    let taxaB = 0.015; // 1.5%
    let anos = 0;

    while (populacaoA <= populacaoB) {
        populacaoA = populacaoA * (1 + taxaA);
        populacaoB = populacaoB * (1 + taxaB);
        anos = anos + 1;
    }

    console.log(`Serão necessários ${anos} anos`);
    console.log(`População A: ${Math.round(populacaoA)}`);
    console.log(`População B: ${Math.round(populacaoB)}`);
}

calcularAnos();