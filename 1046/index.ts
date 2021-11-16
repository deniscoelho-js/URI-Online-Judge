import prompt from 'prompt-sync'

const readline = prompt()

let hora = 0

const hora_inicial = +readline('Digite a hora inicial: ')
const hora_final = +readline('Digite a hora final: ')

if(hora_inicial > hora_final){
    hora = 24 - hora_inicial - hora_final
    console.log(`O jogo durou: ${hora}h`)
} else if(hora_final > hora_inicial){
    hora = hora_final - hora_inicial
    console.log(`O jogo durou: ${hora}h`)
} else{
  console.log('O jogo durou 24hs')
}