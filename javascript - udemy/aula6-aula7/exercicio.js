const nome = 'Júlia'
const sobrenome = 'Santana'
const idade = 19
const peso = 50.5
const alturaEmMetro =  1.65
let anoNascimento
let imc
const anoAtual = 2023

const nomeCompleto = nome + ' ' + sobrenome
anoNascimento =  2023 - idade
imc = peso / alturaEmMetro**2

console.log(nomeCompleto, 'Tem', idade, 'anos, pesa', peso, 'kg, tem', alturaEmMetro, 'de altura e seu imc é de', imc + '.')
console.log(nomeCompleto ,'nasceu em', anoNascimento + '.')

// usando a crase
console.log(`${nomeCompleto} Tem  ${idade} anos pesa ${peso} kg tem ${alturaEmMetro} de altura e seu imc é de ${imc}.`)
