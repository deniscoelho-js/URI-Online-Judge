import prompt from 'prompt-sync'

const readline = prompt()

console.clear()

let [alcool, gasolina, diesel, fim] = [0, 0, 0, 0]

while(fim !== 4){
    fim = +readline('1. Álcool 2. Gasolina 3. Diesel 4. Fim: ')
    switch(fim){
        case 1:
            alcool++
            break;
        case 2:
            gasolina++
            break;
        case 3:
            diesel++
            break;
        default:
            break;
    }
}

console.log(`gasolina: ${gasolina}`)
console.log(`alcool: ${alcool}`)
console.log(`diesel: ${diesel}`)