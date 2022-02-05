import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

// const num = +readline('Digite a quantidade de números: ')

let text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'

let separa_texto = text.split(" ")
console.log(separa_texto)
console.log(separa_texto[separa_texto.length-1])


// let separa_alfabeto = text.split("")
// console.log(separa_alfabeto)