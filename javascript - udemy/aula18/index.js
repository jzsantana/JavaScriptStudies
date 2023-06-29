// objetos 

const nome1 = 'Luiz'
const sobrenome1 = 'Miranda'
const idade1 = 25

const nome2 = 'Maria'
const sobrenome2 = 'Silva'
const idade2 = 22

const pessoaX = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25
}

console.log(pessoa1.nome)

const pessoaY = {
    nome: 'Maria',
    sobrenome: 'Martins',
    idade: 25
}

function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 26)
const pessoa2 = criaPessoa('Marcos', 'Aurelio', 30)
const pessoa3 = criaPessoa('Byanka', 'Monteiro', 19)
const pessoa4 = criaPessoa('Ketilin', 'Machado', 17)
