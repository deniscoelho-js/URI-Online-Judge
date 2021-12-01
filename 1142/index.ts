import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

const linhas = +readline('Digite a quantidade de linhas: ')

let contador = 0

let [a,b,c] = [1,2,3]

let pum = 'PUM'

for(let i=1;i<=linhas*4;i+=4){
    console.log(`${a} ${b} ${c} Pum`)
    a+=4
    b+=4
    c+=4
   }
  