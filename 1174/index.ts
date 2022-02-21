import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let numero = []

console.log('numeros digitados: ')
for(let i = 0; i < 4; i++){
   numero[i] = +readline(`Digite o numero ${i + 1}: `)
}

console.log('\n')
for(let i = 0; i < 4; i++){
  if(numero[i] <= 10){
    console.log(`A[${i + 1}] = ${numero[i]}`)
  }
}