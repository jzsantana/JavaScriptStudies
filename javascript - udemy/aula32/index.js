// aula 32 - Desestruturação de arrays

const numeros = [100, 2000, 300, 444, 554, 600, 700, 855, 99]

// o ... vai pegar todos os valores restantes e coloca-los dentro de um outro array
// rest operator ou spread operator (ele tem 2 nomes dependendo do contexto)
// neste caso o primeiro array servira como uma atribuição
const [primeiroNumero, segundoNumero, ...resto ] = numeros

const listaNumeros = [[1, 2, 3], [10, 20, 30], [11, 22, 33]]

const primeiroPrimeiro = listaNumeros[0][0]

console.log(primeiroPrimeiro)
