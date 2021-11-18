import prompt from 'prompt-sync'

const readline = prompt()

console.clear()

const numero = +readline('Digite um numero: ')



for(let i = 0; i <= 10; i++){
    console.log(`${i} x ${numero} = ${i * numero}`)
}