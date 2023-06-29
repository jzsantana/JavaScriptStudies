// 33 - valores primitivos e valores por referencia 

/*
Primitivos (imutáveis) - string, number, boolean, undefined, 
null (bigint, symbol) - Valores copiados

Referência (mutável) - array, object, function - Passados por referência
*/

let nome = 'Luiz'
nome[0] = 'R' // a string por ser imutavel não terá a letra L trocada por R, ao contrario de um array, por exemplo
console.log(nome[0])

let a = 'A'
let b = a // copia o valor dea para a variavel b, elas não dependem uma da outra

console.log(a, b)
