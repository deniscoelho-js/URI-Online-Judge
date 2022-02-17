import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let numero = []

for(let i = 0; i<4; i++){
  numero[i] = +readline(`Digite o numero ${i}: `)
}

console.log('\nNumeros no vetor')
for(let i = 0; i < 4; i++){
  if(numero[i] <= 0){
    numero[i] = 1
  }
  console.log(numero[i])
}