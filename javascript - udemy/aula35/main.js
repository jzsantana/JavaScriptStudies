const elementos = [
    {tag: 'p', texto: 'Olá'},
    {tag: 'div', texto: 'Querido!'},
    {tag: 'section', texto: 'Tudo'},
    {tag: 'footer', texto: 'Bem?'}
]

const container = document.querySelector('.container')
const div = document.createElement('div')

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag)
    let textoCriado = document.createTextNode(texto)

    tagCriada.appendChild(textoCriado)
    div.appendChild(tagCriada)    

    console.log(tag)
}

container.appendChild(div)
