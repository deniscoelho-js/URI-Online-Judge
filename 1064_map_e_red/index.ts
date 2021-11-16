import prompt from 'prompt-sync'
import {media, reduzir} from './funcoes'

const readline = prompt()

let vetor: number[] = []
let vetor2: number[] = []


console.clear()

for(let i = 1; i <= 6; i++){
    vetor.push(+readline(`Digite o ${i} numero: `))
}

let contador = 0

vetor.map((index) => {
    if(index > 0){
        contador++
        vetor2.push(index)
    }
})

const reduzir_ = reduzir(vetor2)
const media_ = media(reduzir_, contador)

console.log(`${contador} valores positivos`)
console.log(`${media_} foi a media`)