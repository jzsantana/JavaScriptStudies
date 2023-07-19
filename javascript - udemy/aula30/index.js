// const h1 = document.querySelector('.container')

// h1.innerHTML = 'Só pra voce ver'

// const data = new Date()

// h1.innerHTML = data.toString()

// function getDiaDaSemana(diaSemana){
//     let diaDasemana 

//     switch (diaSemana) {
//         case 0:
//             diaDaSemana = 'Domingo'
//             return diaDaSemana

//         case 1:
//             diaDaSemana = 'Segunda-feira'
//             return diaDaSemana
        
//         case 2:
//             diaDaSemana = 'Terça-feira'
//             return diaDaSemana
    
//         case 3:
//             diaDaSemana = 'Quarta-feira'
//             return diaDaSemana    

//         case 4:
//             diaDaSemana = 'Quinta-feira'
//             return diaDaSemana

//         case 5:
//             diaDaSemana = 'Sexta-feira'
//             return diaDaSemana

//         case 6:
//             diaDaSemana = 'Sábado'
//             return diaDaSemana

        
//         default:
//             diaDasemana = 'Dia da semana não encontrado'
//             return diaDaSemana
//     }

// }

// function getMesNome(mesNome){
//     let nomeMes 

//     switch (mesNome) {
//         case 0:
//             nomeMes = 'Janeiro'
//             return nomeMes

//         case 1:
//             nomeMes = 'Fevereiro'
//             return nomeMes
        
//         case 2:
//             nomeMes = 'Março'
//             return nomeMes
    
//         case 3:
//             nomeMes = 'Abril'
//             return nomeMes    

//         case 4:
//             nomeMes = 'Maio'
//             return nomeMes

//         case 5:
//             nomeMes = 'Junho'
//             return nomeMes

//         case 6:
//             nomeMes = 'Julho'
//             return nomeMes

//         case 7:
//             nomeMes = 'Agosto'
//             return nomeMes

//         case 8:
//             nomeMes = 'Setembro'
//             return nomeMes
        
//         case 9:
//             nomeMes = 'Outubro'
//             return nomeMes
    
//         case 10:
//             nomeMes = 'Novembro'
//             return nomeMes    

//         case 11:
//             nomeMes = 'Dezembro'
//             return nomeMes

//         default:
//             diaDasemana = 'Dia da semana não encontrado'
//             return diaDaSemana
//     }
// }

// function zeroAEsquerda(num){
//     return num >= 10 ? num : `0${num}`
// }

// function createData(data){
//     const diaSemana = data.getDay()
//     const nomeMes = data.getMonth()

//     const nomeDia = getDiaDaSemana(diaSemana)
//     const nomeDoMes = getMesNome(nomeMes)

//     console.log(nomeDia, nomeDoMes)

//     return (`${nomeDia}, ${data.getDate()} de ${nomeDoMes} de ${data.getFullYear()}.` + `
//     ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}.`)
// }

// h1.innerHTML = createData(data)


const h1 = document.querySelector('.container')
const data = new Date()
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
}

h1.innerHTML = data.toLocaleString('pt-BR', opcoes)
