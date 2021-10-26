// https://www.beecrowd.com.br/judge/en/problems/view/1010

import prompt from 'prompt-sync'
import { Produtos, Item } from './Produtos'

const readline = prompt()



const codig1: string = readline('Digite o codigo do produto: ')
const unid1: number = +readline(`Quantas unidades do(a) ${codig1}? `)
const prec1: number = +readline('Qual o preco? ')

const item1 = new Item(codig1, unid1, prec1)



const codig2: string = readline('Digite o codigo do produto: ')
const unid2: number = +readline(`Quantas unidades do(a) ${codig2}? `)
const prec2: number = +readline('Qual o preco? ')

const item2 = new Item(codig2, unid2, prec2)

const total = item1.Pagar(unid1, prec1) + item2.Pagar(unid2, prec2)

console.log(`Valor total a pagar: ${total}`)