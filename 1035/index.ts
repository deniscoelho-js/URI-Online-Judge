import prompt from 'prompt-sync'

const readline = prompt()

const Valores = (a:number, b:number, c:number, d:number) => {
    if(((b > c) && (d > a)) && ((c + d) > (a + b)) && (c > 0) && (d > 0) && (a % 2 === 0)){
        console.log('Valores aceitos!')
    } else {
        console.log('Valores não aceitos')
    }
}

const a = +readline('Digite o valor de a: ')
const b = +readline('Digite o valor de b: ')
const c = +readline('Digite o valor de c: ')
const d = +readline('Digite o valor de d: ')



Valores(a,b,c,d)