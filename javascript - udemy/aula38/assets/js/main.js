const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

const bodyStyle = getComputedStyle(document.body) // pega todos os estilos usados no body
const backgroundColorBody = bodyStyle.backgroundColor
console.log(backgroundColorBody)

for (let p of ps){
    // aqui eu consigo acessar o estilo com o style e definir o que eu mudar, usa-se o padrao camelCase
    p.style.backgroundColor = backgroundColorBody
    p.style.color = "#fff"
    console.log(p)
}
