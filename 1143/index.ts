import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let [a,b,c] = [1,1,1]

const linha = +readline('Digite a quantidade de linhas: ')

for(let i = 0; i < linha; i++ ){
    console.log(`${a} ${b} ${c}`)
    a+=1
    b = a * a
    c = b * a
}

