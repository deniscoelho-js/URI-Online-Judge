import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

const numero = +readline('Digite o número: ')

for(let i = 1; i <= numero; i++){
  if(numero % i === 0){
    console.log(i)
  }
}