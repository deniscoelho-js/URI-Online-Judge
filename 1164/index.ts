import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let numero = +readline('Digite o número: ')

let aux = 0

for(let i = 1; i < numero; i++){
  if(numero % i === 0){
    aux+=i
  }
}

if(aux === numero){
  console.log(`${numero} é perfeito`)
} else{
  console.log('não é perfeito')
}