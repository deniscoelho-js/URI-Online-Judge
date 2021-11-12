//  compilar ts-node 1050_foreach

import prompt from 'prompt-sync'

const readline = prompt()

const ddd = [61, 71, 11, 21, 32, 19, 27, 31]

const destino = ['brasilia', 'salvador', 'sao paulo', 'rio de janeiro', 'juiz de fora', 'campinas', 'vitória', 'belo horizonte']

console.clear()
console.log('Digite um DDD: 61, 71, 11, 21, 32, 19, 27, 31')
const numero = +readline('Digite o DDD: ')

let aux: boolean = false;

ddd.forEach((d, indice ) => {
    if(numero === d){
        aux = true;
        console.log('a cidade é: ', destino[indice])
    }
})

if(aux === false){
    console.log('DDD não encontrado!')
}