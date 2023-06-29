const numero = Number(prompt('Digite um número: ').replace(',', '.'))

// transforma o elemento html em uma variavel em js
const numeroTitulo = document.getElementById('numero-titulo')
const texto = document.getElementById('texto')

numeroTitulo.innerHTML = numero

texto.innerHTML = ' '
texto.innerHTML += `<p>A raiz quadrada do número é: ${numero ** (1/2)}<p>`
texto.innerHTML += `<p> ${numero} é inteiro? ${Number.isInteger(numero)}<p>`
texto.innerHTML += `<p> Esse número é NaN? ${Number.isNaN(numero)}<p>`
texto.innerHTML += `<p> Esse número arredondado para baixo fica: ${Math.floor(numero)}<p>`
texto.innerHTML += `<p> Esse número arredondado para cima fica: ${Math.ceil(numero)}<p>`
texto.innerHTML += `<p> Esse número com duas casas decimais fica: ${numero.toFixed(2)}<p>`
