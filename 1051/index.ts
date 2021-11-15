import prompt from 'prompt-sync'

const readline = prompt()

let imposto: number = 0
let diferenca: number = 0

console.clear()
const salario = +readline('Digite o salario: ')

if(salario > 4500.00){
    imposto = 1000 * 0.08 + 1500 * 0.18
    diferenca = salario - 4500
    imposto += diferenca * 0.28
} else if(salario > 3000.00){
    imposto = 1000 * 0.08
    diferenca = salario - 3000
    imposto += diferenca * 0.18
} else if( salario > 2000.00){
    diferenca = salario - 2000
    imposto = diferenca * 0.08
}

if(imposto > 0){
    console.log('R$', imposto)
} else {
    console.log('Isento')
}