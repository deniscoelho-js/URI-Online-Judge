import prompt from 'prompt-sync'

console.clear()
console.log('+++++++++++++++++++++')


const readline = prompt()

let controle = 0

let gremio: number[] = []
let internacional: number[] = []

let contaGrem = 0
let contaInter = 0
let empate = 0

while(controle !== 2){
    controle = +readline('novo grenal 1-sim 2-não: ')
    switch(controle){
        case 1:
            gremio.push(+readline('Digite quantos gols o gremio fez: '))
            internacional.push(+readline('Digite quantos gols o inter fez: '))
            break;
        case 2:
            break;
    }
}

for(let i = 0; i < gremio.length; i++){
    if(gremio[i] > internacional[i]){
        contaGrem++
    } else if(gremio[i] === internacional[i]){
        empate++
    } else{
        contaInter++
    }
}


console.log(`Inter: ${contaInter}`)
console.log(`Gremio: ${contaGrem}`)
console.log(`Empate: ${empate}`)