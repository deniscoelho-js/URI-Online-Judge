import prompt from 'prompt-sync'

const readline = prompt()

let dia = 0, hora = 0, minuto = 0, segundos = 0

console.clear()

const dia_inicio = +readline('Digite o dia de inicio: ')
const hora_inicio = +readline('Digite a hora inicial: ')
const minuto_inicio = +readline('Digite o minuto inicial: ')
const segundo_inicio = +readline('Digite os segundos inicial: ')
const dia_fim = +readline('Digite o dia de término: ')
const hora_fim = +readline('Digite a hora final: ')
const minuto_fim = +readline('Digite o minuto final: ')
const segundo_fim = +readline('Digite os segundos final: ')

dia = dia_fim - dia_inicio
hora = hora_fim - hora_inicio
minuto = minuto_fim - minuto_inicio
segundos = segundo_fim - segundo_inicio

if(segundos < 0){
    segundos += 60
    minuto--
}

if(minuto < 0){
    minuto += 60
    hora--
}

if(hora < 0){
    hora += 24
    dia--
}

console.log(`${dia} dias`)
console.log(`${hora} dias`)
console.log(`${minuto} dias`)
console.log(`${segundos} dias`)