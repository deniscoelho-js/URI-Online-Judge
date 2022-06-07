import prompt from "prompt-sync";

console.clear();

const readline = prompt();
let numeros: number[] = [];
let numeros2: number[] = [];

let reverseVetor = (vetor: number[]): number[] => {
  return vetor.reverse();
};

for (let i = 0; i < 3; i++) {
  numeros[i] = +readline(`Digite o ${i + 1} numero: `);
}

numeros2 = reverseVetor(numeros);

console.log(numeros2);
