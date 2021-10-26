//  https://www.beecrowd.com.br/judge/en/problems/view/1009

import prompt  from 'prompt-sync'
import { Salario } from './Salario'

const readline = prompt()

const nome: string = readline('Digite o nome do funcionario: ')
const salario_fx: number = +readline('Digite o salario: ')
const vendas: number = +readline('Digite o valor das vendas: ')


console.log('Total: R$',Salario(salario_fx, vendas))