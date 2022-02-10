import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let numero = +readline('Digite o número x: ')
let aux = 0
let contador = 0

while(numero !== 0){
  if(numero % 2 === 0){
    contador = numero
    for(let i = 0; i <4; i++){
      numero+=2
      contador+=numero
      // console.log(contador)
    }
    // console.log(contador)
  } else{
    numero+=1
    contador=numero
    for(let i = 0; i <4; i++){
      numero+=2
      contador+=numero
      // console.log(contador)
    }
  }
  console.log(contador)
  contador = 0
  numero = +readline('Digite o número x: ')
}