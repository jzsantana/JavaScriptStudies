const nome = 'Júlia'
let  i = 0

while(i < nome.length){
    console.log(nome[i])
    i++
}

console.log('Segue a vida...')

function random (min, max){
    const r = Math.random() * (max- min) + min
    return Math.floor(r)
}

let rand = random(min, 50)
console.log(rand)

while (rand != 10){
    let rand = rand(min, max)
}

