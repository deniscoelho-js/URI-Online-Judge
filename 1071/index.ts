import prompt from 'prompt-sync'
import {verificaPrimo} from './funcoes'

const readline = prompt()



console.clear()
const num1 = +readline('Digite o numero 1: ')
const num2 = +readline('Digite o numero 2: ')


const num1_ = verificaPrimo(num1)
const num2_ = verificaPrimo(num2)

if((num1_ === 0) && (num2_ === 0)){
    console.log(`${num1} ${num2}`)
} else if((num1_ === 1) && (num2_ === 0)){
    console.log(`${num2} num1`)
}  else if((num2_ === 1) && (num1_ === 0)){
    console.log(`${num1} num2`)
}