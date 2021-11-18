import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let numeros: number[] = []

let num = 0
let posicao = 0

for(let i = 0; i <= 5; i++){
    numeros.push(+readline(`Digite o ${i + 1} numero: `))

    if(numeros[i] > num){
        num = numeros[i]
        posicao = i
    }
}
console.log('\n')
console.log(`numero: ${num} posicao: ${posicao + 1}`)
console.log(numeros)