// https://www.urionlinejudge.com.br/judge/en/problems/view/1008
import prompt from "prompt-sync";
import {Funcionario, salario} from './Funcionario'

let readline = prompt()

const num: number = +readline('digite um  numero: ')
const ht: number = +readline('Digite as horas trabalhadas: ')
const vh: number = +readline('Digite valor das horas: ')


console.log('\nNumero do funcionario: ', num)
console.log('O salario é de: R$',salario(ht, vh))