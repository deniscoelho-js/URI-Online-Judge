import prompt from 'prompt-sync'

console.clear()

const readeline = prompt()

const num = +readeline('Digite o número: ')

let fibon_1 = 0
let fibon_2 = 1
let fib_atual


for(let i = 0; i<=num; i++){
  console.log(fibon_1)

  fib_atual = fibon_1 + fibon_2
  fibon_1 = fibon_2
  fibon_2 = fib_atual

  
}

