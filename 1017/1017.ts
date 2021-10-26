import prompt from 'prompt-sync'
import { Consumo } from './Consumo'

const readline = prompt()

const velocidade = +readline('Digite a velocidade em Km/h: ')
const tempo = +readline('Digite o tempo gasto em horas: ')

const consumo = Consumo(velocidade, tempo)

console.log(`O consumo médio foi de ${consumo}`)