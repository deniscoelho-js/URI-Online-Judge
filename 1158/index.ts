import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let x = +readline('Digite o número x: ')
let y = +readline('Digite o número y: ')

let aux = 0
let contador = 0

if(x%2 !== 0){
  while(aux < y){
    if(x % 2 !== 0){
       contador+=x
       y++
    }
    x++
    aux++
  }
  console.log(contador)
}
else if(y%2 !== 0){
  while(aux <= x ){
    if(y % 2 !== 0){
       contador+=y
      x++
    }
    y++
    aux++
  }
  console.log(`${contador}`)
}

