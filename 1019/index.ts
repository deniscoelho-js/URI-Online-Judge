// https://www.beecrowd.com.br/judge/en/problems/view/1019

import prompt from 'prompt-sync'

const readline = prompt()

const segundos = +readline('Digite os seguntos: ')

const h = parseInt(segundos / 3600 + '')
const m = parseInt((segundos % 3600) / 60 + '')
const s = parseInt((segundos % 3600) % 60 + '')

console.log(`${h}h:${m}m:${s}s`)