// js usa o padrão IEEE 754-2008 para números decimais

let num1 = 1.658965
let num2 = 2.5555

console.log(num1.toString() + num2) // o valor sera concatenado
console.log(typeof num1) // ele será modificado apenas no console anterior

num1 = num1.toString() // transforma a variavel em string de maniera definitiva e não só no console
console.log(typeof num1)

// função para arredondar, o número dentro do parenteses serve como 
// parametro para quando casas decimais eu necessito após a vírgula
console.log(num2.toFixed(2)) // APENAS COM NÚMEROS

// retorna true ou false, apenas para saber se o número é ou não inteiro
console.log(Number.isInteger(num1))

let temp = num1 * 'Ola'
console.log(temp) // retorna NaN
console.log(Number.isNaN(temp)) // retorna true ou false, se for NaN retorna true

