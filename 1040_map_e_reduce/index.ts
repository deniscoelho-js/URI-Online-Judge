// https://www.beecrowd.com.br/judge/en/problems/view/1040
//  compilar ts-node1040_map_e_reduce

import prompt from "prompt-sync";
import { media, reduzir, resultado } from "./helpers";

const readline = prompt()

const peso = [2, 3, 4, 1]

const notas = peso.map((nota, indice) => {
    return(
        nota = +readline('Digite a nota: ') * peso[indice]
    )
})


const peso_ = reduzir(peso)                     // reduz o vetor peso em um número
const notas_ = reduzir(notas)                   // reduz o vetor notas em um número
const media_ = media(notas_, peso_)             // calcula a media das notas
const resultado_ = resultado(media_)            // funcao responsavel pela lógica do codigo
