import prompt from 'prompt-sync'

const readline = prompt()

const meses: string[] = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]


console.clear()


const mes = +readline('Digite o número mês entre 1 e 12: ')


console.log('O mês digitado foi: ', meses[mes - 1])