import prompt from 'prompt-sync'

console.clear()

const readeline = prompt()


// let numero = 4
// let cont = 1
// for(let i = numero; i > 1; i--){
//   cont = cont * i
//   console.log(cont)
// }

// const fatorial = (n: number) => {
//   let result = 1;
//   for(let i = n; i > 1; i--) {
//   result = result * i;
//   }
//   return result;
//   }
//   console.log(fatorial(4))


const fatorialRecursivo = (n: number): number => {
  if(n === 0) return 1
  if(n === 1) return 1
  return n * fatorialRecursivo(n - 1)
}

console.log(fatorialRecursivo(7))