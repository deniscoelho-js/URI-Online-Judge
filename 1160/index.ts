import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

let populacao_a = +readline('Digite a populacao de a: ')
let taxa_a = +readline('Digite a taxa de crescimento da populacao a: ')

console.log('\n')

let populacao_b = +readline('Digite a populacao de b: ')
let taxa_b = +readline('Digite a taxa de crescimento da populacao b: ')

let contador = 0

while(populacao_b > populacao_a){
  populacao_a+=(taxa_a * populacao_a / 100)

  populacao_b+=(taxa_b * populacao_b / 100)

  contador++
}

if(contador <= 100){
console.log(`${contador} anos`)
} else{
  console.log('Mais de 1 século')
}
