// Aula 33 - Desestruturação de objetos (video 51)

const pessoa = {
    nome: 'Júlia',
    sobrenome: 'Santana',
    idade: 36,
    endereco: {
        rua: 'Av. Luiz Otávio Miranha',
        numero: 321
    }
}

const { nome, sobrenome, endereco: {rua, numero}, endereco } = pessoa
console.log(rua, numero, endereco)
