import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let num = +readline('Digite a quantidade de números: ')

let contador =  num
let aux = 0.0

const media = (_cont: number, _num: number, _aux: number) => {
  return console.log(((contador + Math.abs(num))/(aux)).toFixed(2))
}

while(num>0){
  num = +readline('Digite a quantidade de números: ')
  contador += num
  aux++
}

media(contador, num, aux)

// let _media = (contador + Math.abs(num))/(aux)

