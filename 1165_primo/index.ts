import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let numero = +readline('Digite o número: ')

let cont = 0

for(let i = 2; i<= numero;i++){
  if(numero % i === 0){
    cont++
  }
}

if(cont === 1){
  console.log(`o numero ${numero} é primo`)
} else{
  console.log(`o numero ${numero} não é primo`)
}