import prompt from "prompt-sync";

console.clear();

const readline = prompt();
let numero: number;

let i = 0;

numero = +readline("Digite o 1 numero: ");

while (i < 10) {
  console.log(`n[${[i]}] = ${numero}`);
  numero /= 2;
  i++;
}
