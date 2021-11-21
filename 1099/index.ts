import prompt from 'prompt-sync'

const readline = prompt()

const n  = +readline('Digite a quantidade de numeros: ')

let x = 0
let y = 0

for(let i = 0; i <= n; i++ ){
    x = +readline(`Digite o ${i} X numero: `)
    y = +readline(`Digite o ${i} Y numero: `)
}