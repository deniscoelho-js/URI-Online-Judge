import prompt from 'prompt-sync'

console.clear()

const readline = prompt()

// const num = +readline('Digite a quantidade de números: ')
// let t1 = 0
// let t2 = 1
// let prox_t

// for(let i=0; i<num;i++){
//   console.log(t1)
//   prox_t = t1 + t2
//   t1 = t2
//   t2 = prox_t
// }


const fibRecursivo = (n: number): number => {
  if(n === 1) return 1
  if(n === 2) return 2
  return fibRecursivo(n - 1) + fibRecursivo(n - 2)
}

console.log(fibRecursivo(6))