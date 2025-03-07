console.log("teste")

// criação da lista/array de pessoas onde cada pessoa está sendo cadastrada e adicionda com o método push (append do python). Usei o trim para cortar qualquer espaço extra que for escrito no prompt, o replace para trocar vírgula por ponto, caso o usuário escreva com vírgula, e o touppercase pra deixar strings em maiúsculo.

const pessoas = [];

for (let i = 0; i < 15; i++) {
  alert(`Pessoa ${i + 1}`);
  const nome = prompt("Digite o seu nome:").trim().toUpperCase();
  const altura = parseFloat(prompt("Digite a sua altura em metros (ex: 1.80):").trim().replace(",", "."));
  const genero = prompt("Digite o seu gênero (apenas M ou F):").trim().toUpperCase();
  pessoas.push({ nome, altura, genero });
}

// busca da maior altura com a criação da variáve maiorAltura onde já é colocada a altura da primeira pessoa da lista e em seguida, com um loop for com o método length (que define o tamanho da lista), é buscada outra altura que seja maior. Caso uma altura maior seja econtrada, esta será adicionada na variável, substituindo a anterior.

let maiorAltura = pessoas[0].altura;
for (let i = 1; i < pessoas.length; i++) {
  if (pessoas[i].altura > maiorAltura) {
    maiorAltura = pessoas[i].altura;
  }
}
alert(`\nA maior altura na lista é ${maiorAltura.toFixed(2).replace(".", ",")} metros!`);

// busca da menor altura, com a mesma lógica da busca da maior altura acima

let menorAltura = pessoas[0].altura;
for (let i = 1; i < pessoas.length; i++) {
  if (pessoas[i].altura < menorAltura) {
    menorAltura = pessoas[i].altura;
  }
}
alert(`\nA menor altura na lista é ${menorAltura.toFixed(2).replace(".", ",")} metros!`);

// Soma e média das alturas apenas dos homens usando um for após a criação das duas variáveis somaAlturaHomens e quantidadeHomens, onde SE a pessoa na lista for homem, o valor dela é adicionado à soma para depois dividir pelo contador, se a contagem tiver dado maior que 0. Usei o toFixed, semelhante ao fstring :.2f do python para ter apenas duas casas decimais e mais uma vez substituir ponto por vírgula.

let somaAlturaHomens = 0;
let quantidadeHomens = 0;
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].genero === "M") {
    somaAlturaHomens += pessoas[i].altura;
    quantidadeHomens++;
  }
}

if (quantidadeHomens > 0) {
  const mediaAlturaHomens = somaAlturaHomens / quantidadeHomens;
  alert(`\nA média das alturas dos homens na lista é: ${mediaAlturaHomens.toFixed(2).replace(".", ",")} metros!`);
} else {
  alert("\nNão há homens na lista para calcular a média de altura.");
}

// Soma da quantidade de mulheres usando um for para verificar se a pessoa na lista é F e adicionar à contagem

let mulheres = 0;
for (let i = 0; i < pessoas.length; i++) {
  if (pessoas[i].genero === "F") {
    mulheres++;
  }
}
alert(`\nO número de mulheres na lista é: ${mulheres}!`);

// Exibir a lista completa de pessoas e seus valores.

let listaFinal = "Lista de pessoas cadastradas:\n\n";
for (let i = 0; i < pessoas.length; i++) {
  listaFinal += `Pessoa ${i + 1} - Nome: ${pessoas[i].nome}, Altura: ${pessoas[i].altura.toFixed(2).replace(".", ",")} metros, Gênero: ${pessoas[i].genero}\n`;
}
alert(listaFinal);