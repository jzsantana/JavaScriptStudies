// objeto Math
let num1 = 9.453
let num5 = 9
console.log(num1)

let num2 = Math.floor(num1) // arredonda o número para baixo
let num3 = Math.ceil(num1)  // arredonda o número para cima
let num4 = Math.round(num1) // arredonda o número dependendo do valor

console.log(num2)
console.log(num3)
console.log(num4)
console.log(Math.max(1, 2, 3, 4, 1010, 9, 6, -10, 1515)) // mostra o maior número dessa sequencia
console.log(Math.min(1, 2, 3, 4, 1010, 9, 6, -10, 1515)) // mostra o menor numero dessa sequencia

const aleatorio = Math.round(Math.random() * (10, 5) + 5) 
console.log(aleatorio)

console.log(Math.pow(2, 10))
console.log(num5 ** (1/2)) // busca a raiz quadrada
console.log(num5 ** 0.5)   // busca a raiz quadrada

console.log(100 / 0) //gera o tipo infinity
