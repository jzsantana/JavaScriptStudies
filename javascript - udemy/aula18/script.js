const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        // console.log('Olá, Mundo!')
        console.log(`${this.nome} ${this.sobrenome} está falndo oi...`)
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++; // incrementa a idade
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()