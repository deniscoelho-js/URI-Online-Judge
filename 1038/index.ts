import prompt from 'prompt-sync'
import { Lanche } from './type'

const readline = prompt()
console.table(Lanche)

const codigo = +readline('Digite o código do produto: ')
const quant = +readline('Quantas unidades do produto? ')

const pagar = () => {
  let preco = Lanche[codigo - 1].preço * quant
  console.log(`total a pagar: R$ ${preco.toFixed(2)}`)
}

pagar()