import prompt from 'prompt-sync'
console.clear()

let i, j, entrada, temp, a, b, x = 0

const readline = prompt()

entrada = +readline('Digite a quantidade de números: ')

for(i = 0; i< entrada; i++){
    a = +readline(`Digite o valor do ${i + 1}º X: `)
    b = +readline(`Digite o valor do ${i + 1}º Y: `)
    
    if(a > b){temp = a; a = b; b = temp}

    if(a % 2 === 0){ a--}

    a += 2

    for(j = a; j < b; j+=2){
        x += j
    }

    console.log(x)
    x = 0
}