// Arrays 

const alunos = ['Luiz', 'Maria', 'João']

console.log(alunos)

alunos[0] = 'Julia'
alunos[3] = 'Fabiana'
alunos[alunos.length] = 'Ana'

alunos.push('janaina') // adiciona no final do array
alunos.unshift('Luiza') // adiciona no inicio do array

const removidoPop = alunos.pop() // remove do final, com ela podemos salvar o elemento que retiramos do array em uma variavel
const removidoShift = alunos.shift() // remove do inicio do array
delete alunos [1] // remove um elemento do array e remove seu indice também, seu valor se torna undefined 
console.log(alunos)
console.log(removidoPop)
console.log(removidoShift)

// podemos tambem acessar um indice de um elemento que não existe, retorna undefined
console.log(alunos[50])
console.log(alunos.slice(0, 3)) // ele fateia o array, ou seja, consigo pegar de um indice até o outro
console.log(typeof alunos) // retorna um objeto, pois, array em js é um objeto
console.log(alunos instanceof Array)
