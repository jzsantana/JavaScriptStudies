//               0123456789
let umaString = 'Um "texto"'

console.log(umaString[-1])
console.log(umaString.charAt(4)) // procura o index fornecido na função
console.log(umaString.concat('em ingles.'))    // serve pra concatenar
console.log(`${umaString} em ingles.`)
console.log(umaString.indexOf('texto'))
console.log(umaString.lastIndexOf('x'))
console.log(umaString.match(/[a-z]/g))
console.log(umaString.search(/x/))
console.log(umaString.replace('Um', 'one'))
