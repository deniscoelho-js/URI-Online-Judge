import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let c = 0
let r = 0
let s = 0
let animal = ''
let quantidade = 0
let total = 0

for(let i = 0; i <= 5; i++){
    animal = readline('Digite a letra do animal: ')
    quantidade = +readline('Digite a quantidade: ')

    total += quantidade

    switch (animal) {
        case 'c':
            c += quantidade
            break;
        case 'r':
            r += quantidade
            break;
        case 's':
            s += quantidade
    }

}

console.clear()
console.log(`Total de coelhos: ${c}`)
console.log(`Total de ratos: ${r}`)
console.log(`Total de sapos: ${s}`)
console.log(`Total de animais: ${total}`)
console.log(`Porcentagem de coelhos: ${((c/total) * 100).toFixed(2)}%`)
console.log(`Porcentagem de ratos: ${((r/total) * 100).toFixed(2)}%`)
console.log(`Porcentagem de sapos: ${((s/total) * 100).toFixed(2)}%`)
