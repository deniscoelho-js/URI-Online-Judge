import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let numero = +readline('Digite o numero: ')
let vetor = []

for(let i = 0; i < 4; i++){
 vetor[i] = numero
 numero*=2
}


console.log('\n vetor')
for(let i = 0; i < 4; i++){
  console.log(vetor[i])
 }