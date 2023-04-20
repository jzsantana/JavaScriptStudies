function hello(){
    alert("Oi júlia!");
}

function soma(){
    var n1 = parseInt(prompt("Digite um número: "))
    var n2 = parseInt(prompt("Digite outro número: "))
    alert(n1+n2)
}

function subtracao(){
    var n1 = parseInt(prompt("Digite um número: "))
    var n2 = parseInt(prompt("Digite outro número: "))
    alert(n1-n2)
}

function parImpar(){
    var numero = parseInt(prompt("Digite um número: "))
    var container = document.getElementById("caixa")

    if(numero % 2 == 0){
        container.innerText = "Par"
    }else{
        container.innerText = "Ímpar"
    }
}
