// TED 03

console.log("teste")

// Crie um array com 5 nomes e exiba o terceiro nome no console.

let pessoas = ["Mike", "Smelly", "Hefe", "Timmy", "Bob"]
console.log(pessoas[2])

// Adicione um nome ao final e um no início do array.

pessoas[5] = "Meyers" // aqui também poderia ter usado o método push
pessoas.unshift("Lori")
console.log(pessoas)

// Remova o último nome e exiba o array atualizado.

pessoas.pop()
console.log(pessoas)

// Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].

let numeros = [2,4,6,8]
console.log(numeros)
let novosNumeros = numeros.map(elemento => elemento*2)
console.log(novosNumeros)

// Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]

let numbers = [1,3,5,7,9]
let newNumbers = numbers.filter(num => num > 5);
console.log(newNumbers)