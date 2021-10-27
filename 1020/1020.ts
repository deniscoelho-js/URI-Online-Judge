import prompt from 'prompt-sync'

const readline = prompt()

const idade = +readline('Digite o número de dias: ')

const anos = parseInt(idade / 365 + '')
const meses = parseInt((idade % 365) / 30 + '')
const dias = parseInt((idade % 365) % 30 + '')

console.log(`${anos} ano(s) ${meses} mes(s) ${dias} dia(s)`)