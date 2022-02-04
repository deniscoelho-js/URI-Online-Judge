import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

const num = +readline('Digite a quantidade de números: ')

let i
let n
let t1 = 0
let t1_string
let t2 = 1
let prox_t

for(i=0; i<num;i++){
  console.log(t1)
  prox_t = t1 + t2
  t1 = t2
  t2 = prox_t
}
