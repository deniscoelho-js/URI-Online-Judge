import prompt from 'prompt-sync'
import { novoSalario } from './Salario'

const readline = prompt()

const salario: number = +readline('Digite o salario: ')

novoSalario(salario)


