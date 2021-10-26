// https://www.beecrowd.com.br/judge/en/problems/view/1018

import prompt from 'prompt-sync'

const readline = prompt()

const valor: number = +readline('Digite um valor: ')

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1.0, 0.5, 0.25, 0.1, 0.05, 0.01];

let n = valor

console.log('\nNOTAS:');

notas.forEach(nota => {
  console.log(`${parseInt(n/nota + '')} nota(s) de R$ ${nota}`);
  n %= nota;
});

console.log('\nMOEDAS:');
moedas.forEach(moeda => {
    console.log(`${parseInt(n/moeda + '')} moeda(s) de R$ ${moeda.toFixed(2)}`);
    n %= moeda;
});