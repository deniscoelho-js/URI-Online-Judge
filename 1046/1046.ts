import prompt from 'prompt-sync'

const readline = prompt()

const calculaHora = (h_i: number, h_f: number) => {
    return(
        24 - h_i + h_f
    )
  }

const hora_inicial = +readline('Digite a hora inicial: ')
const hora_final = +readline('Digite a hora final: ')

const h: number = calculaHora(hora_inicial, hora_final)

console.log(`O jogo durou: ${h}h`)