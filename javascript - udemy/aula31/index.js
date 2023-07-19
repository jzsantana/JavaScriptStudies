const verdadeira = true

// let tem escopo de bloco {...}
//  var só tem escopo de função

let nome = 'Julia'
var nome2 = 'Julia'

if (verdadeira){
    let nome = 'Otávio'
    console.log(nome, nome2)
}
