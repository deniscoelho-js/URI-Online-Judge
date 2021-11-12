// https://www.beecrowd.com.br/judge/en/problems/view/1018
// compilar ts-node 1018_foreach
import prompt from 'prompt-sync'

const readline = prompt()

const valor: number = +readline('Digite um valor: ')

const notas = [100, 50, 20, 10, 5, 2];

let n = valor

console.log('NOTAS:');

notas.forEach(nota => {
  console.log(`${parseInt(n/nota + '')} nota(s) de R$ ${nota}`);
  n %= nota;
});