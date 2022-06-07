import prompt from "prompt-sync";

console.clear();

const readline = prompt();
let par: number[];
let impar: number[];
let numeros: number[];

numeros = [];

let [i, j] = [0, 0];
let max = 3;

for (i; i < max; i++) {
  numeros[i] = +readline(`Digite o ${i + 1} numero: `);

  if (numeros[i] % 2 === 0) {
    par[i] = numeros[i];
  } else {
    impar[i] = numeros[i];
  }
}

for (j; j < max; j++) {
  console.log(`${numeros[j]}`);
}
