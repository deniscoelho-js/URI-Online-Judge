import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let a = +readline('Digite o valor de a: ')
let b = +readline('Digite o valor de b: ')
let aux = 0

if(a > b){aux = a; a = b; b = aux }

let cont = 0


for(let i = a; i <= b; i++){
    cont += a
    a++
}



console.log(cont)