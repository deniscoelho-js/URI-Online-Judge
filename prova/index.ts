import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let numero

while(numero !== 0){
  numero = +readline('Digite o numero: ')
}