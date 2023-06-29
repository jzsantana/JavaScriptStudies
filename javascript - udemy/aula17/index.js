// funções

function saudacao(nome){
    return `Bom dia, ${nome}!`
}

const luizSaudacao = saudacao('Luiz') // o argumento do parametro
console.log(luizSaudacao) // retorna undefined

function soma(x = 1, y = 2){
    const resultado = x + y
    return resultado
}

const resultado = soma() // pega os dois valores para atribuir nas variaveis
console.log(resultado)

const raiz = function (n) { // é necessario que quando a função for anonima ela seja finalizada com ;
    return n ** 0.5
};

console.log(raiz(49))

// arrow function 
const raizQuadrada = (n) => n ** 0.5;
console.log(raizQuadrada(81))


